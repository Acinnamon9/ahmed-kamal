import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Minimize2,
  Sparkles,
  Phone,
  Mic,
  MicOff,
  PhoneOff,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Room, RoomEvent, RemoteTrack } from "livekit-client";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

type CallStatus = "idle" | "connecting" | "connected" | "error";

/**
 * ChatBot Component
 *
 * A floating AI assistant widget that provides lead capture and information.
 * Features specialized branding, auto-scrolling, and integration with an external API.
 * Now includes Real-time Voice Calling via LiveKit.
 */
const ChatBot: React.FC = () => {
  // isOpen: toggles the visibility of the expanded chat window
  const [isOpen, setIsOpen] = useState(false);

  // messages: store of the current conversation history
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm AtomicX's Agent. How can I help you with premium properties today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasStartedChat, setHasStartedChat] = useState(false);

  // CALLING STATE
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [micStatus, setMicStatus] = useState<"granted" | "denied" | "missing">(
    "granted",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [callId, setCallId] = useState<string | null>(null);
  const [callSessionId, setCallSessionId] = useState<string | null>(null);
  const roomRef = useRef<Room | null>(null);

  // AUDIO VISUALIZER STATE
  const [audioLevels, setAudioLevels] = useState<number[]>(
    new Array(8).fill(1),
  );
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Helper to keep the chat scrolled to the most recent message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isCalling]);

  /**
   * API Integration: handleStartChat
   * Specifically triggers a "chat start" event on snowie.ai's backend
   * when the user opens the widget for the first time.
   */
  const handleStartChat = async () => {
    try {
      const response = await fetch("https://app.snowie.ai/api/start-thunder/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_code: "2fe4ea8d-827a-4b74-9f0e-30c64d703404",
          schema_name: "09483b13-47ac-47b2-95cf-4ca89b3debfa",
        }),
      });
      const data = await response.json();
      console.log("Chat started:", data);
      setHasStartedChat(true);
    } catch (error) {
      console.error("Error starting chat:", error);
    }
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-chatbot", handleOpen);
    return () => window.removeEventListener("open-chatbot", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen && !hasStartedChat) {
      handleStartChat();
    }
  }, [isOpen, hasStartedChat]);

  /**
   * VOICE CALL LOGIC
   */
  const startCall = async () => {
    setIsCalling(true);
    setCallStatus("connecting");
    setErrorMessage("");
    setMicStatus("granted");

    try {
      // 1. Get Token from Backend
      const response = await fetch("https://app.snowie.ai/api/create-room/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agent_code: "2fe4ea8d-827a-4b74-9f0e-30c64d703404",
          provider: "thunderemotionlite",
          schema_name: "6af30ad4-a50c-4acc-8996-d5f562b6987f",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `API Error (${response.status}): ${errorData.error || errorData.message || response.statusText}`,
        );
      }

      const apiResponse = await response.json();
      const data = { ...apiResponse, ...(apiResponse.response || {}) };
      const {
        token,
        url,
        serverUrl,
        callId: cid,
        call_session_id: csid,
      } = data;
      const wsUrl = url || serverUrl;

      if (!token || !wsUrl) {
        throw new Error("Invalid server response (missing token/url)");
      }

      if (cid) setCallId(cid);
      if (csid) setCallSessionId(csid);

      // 2. Initialize Room
      const room = new Room({
        adaptiveStream: true,
        dynacast: true,
      });
      roomRef.current = room;

      // 3. Setup Token & Connection
      await room.connect(wsUrl, token);
      console.log("Connected to room", room.name);

      // 4. Handle Remote Tracks (The AI's voice)
      room.on(RoomEvent.TrackSubscribed, (track: RemoteTrack) => {
        if (track.kind === "audio") {
          // Play audio
          const element = track.attach();
          document.body.appendChild(element);

          // Setup Waveform Analysis
          setupAudioAnalysis(track);
        }
      });

      // 5. Enable Microphone - Non-blocking
      try {
        await room.localParticipant.setMicrophoneEnabled(true);
        setMicStatus("granted");
      } catch (micErr: any) {
        console.warn("Microphone activation failed:", micErr);
        if (
          micErr.name === "NotAllowedError" ||
          micErr.message?.includes("Permission")
        )
          setMicStatus("denied");
        else if (
          micErr.name === "NotFoundError" ||
          micErr.message?.includes("NotFound")
        )
          setMicStatus("missing");
      }

      setCallStatus("connected");
    } catch (error: any) {
      console.error("Call failed:", error);
      setCallStatus("error");

      if (error.message?.includes("API Error")) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          error.message || "Connection failed. Please try again.",
        );
      }
    }
  };

  const setupAudioAnalysis = (track: RemoteTrack) => {
    // Cleanup previous analysis
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    if (audioCtxRef.current) audioCtxRef.current.close();

    const audioCtx = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    // Create source from the track's stream
    // Note: track.mediaStream is available on RemoteTrack
    const stream = new MediaStream([track.mediaStreamTrack]);
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);

    audioCtxRef.current = audioCtx;
    analyserRef.current = analyser;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const updateLevels = () => {
      if (!analyserRef.current) return;

      analyserRef.current.getByteFrequencyData(dataArray);

      // Extract 8 levels for the UI bars
      const newLevels = [];
      const step = Math.floor(bufferLength / 8);

      for (let i = 0; i < 8; i++) {
        const val = dataArray[i * step];
        // Scale to 0-1 and add a floor for visibility
        newLevels.push(Math.max(0.1, val / 255));
      }

      setAudioLevels(newLevels);
      animationFrameRef.current = requestAnimationFrame(updateLevels);
    };

    updateLevels();
  };

  const retryMic = async () => {
    if (roomRef.current?.localParticipant) {
      try {
        await roomRef.current.localParticipant.setMicrophoneEnabled(true);
        setMicStatus("granted");
      } catch (err: any) {
        console.error("Mic retry failed:", err);
        if (
          err.name === "NotAllowedError" ||
          err.message?.includes("Permission")
        )
          setMicStatus("denied");
      }
    }
  };

  const endCall = async () => {
    if (roomRef.current) {
      await roomRef.current.disconnect();
      roomRef.current = null;
    }

    // Stop Audio Analysis
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setAudioLevels(new Array(8).fill(1));

    if (callSessionId && callId) {
      try {
        await fetch("https://app.snowie.ai/api/end-call-session-thunder/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            call_session_id: callSessionId,
            call_id: callId,
            schema_name: "6af30ad4-a50c-4acc-8996-d5f562b6987f",
          }),
        });
      } catch (e) {
        console.warn("Failed to report call end to backend", e);
      }
    }

    setIsCalling(false);
    setCallStatus("idle");
    setErrorMessage("");
    setIsMuted(false);
    setMicStatus("granted");
    setCallId(null);
    setCallSessionId(null);
  };

  const toggleMute = async () => {
    if (roomRef.current?.localParticipant) {
      const newState = !isMuted;
      await roomRef.current.localParticipant.setMicrophoneEnabled(!newState);
      setIsMuted(newState);
    }
  };

  /**
   * handleSendMessage:
   * Adds user message to the UI, clears input, and simulates a bot response delay.
   */
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // MOCKED AI RESPONSE LOGIC:
    // This simulates the AI 'thinking' and typing back to the user.
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm analyzing your request. Our specialized systems are processing the information to provide you with the most relevant response. Feel free to click an the call icon and talk to me directly.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* 
        Floating Toggle Button:
        Fixed to the bottom-right. Changes icon and color when active.
      */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-100 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 overflow-hidden group",
          isOpen
            ? "bg-brand-error text-white rotate-90"
            : "bg-brand-primary text-white",
        )}
      >
        <div className="absolute inset-0 bg-linear-to-tr from-brand-primary/20 to-brand-cerulean/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <MessageCircle className="w-8 h-8" />
          )}
        </div>

        {/* Pulsing notification ring when the chat is closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-brand-primary animate-ping opacity-20" />
        )}
      </motion.button>

      {/* 
        Expanded Chat Window:
        Uses AnimatePresence for smooth slide-up / fade-out animations.
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-100 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] flex flex-col bg-(--card)/90 backdrop-blur-xl overflow-hidden rounded-[2.5rem] border border-(--border)/50 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            {/* Header: Displays bot status (Online/Offline) */}
            <div className="p-6 bg-linear-to-r from-brand-primary/10 to-brand-cerulean/10 border-b border-(--border)/40 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center relative">
                  <Bot className="w-6 h-6 text-brand-primary" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-brand-success rounded-full border-2 border-(--card)" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-(--foreground) leading-tight">
                    AtomicX Agent
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
                    <span className="text-xs text-brand-success font-medium uppercase tracking-wider">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* CALL BUTTON */}
                <button
                  onClick={startCall}
                  className="w-10 h-10 rounded-full bg-brand-primary/10 hover:bg-brand-primary/20 flex items-center justify-center text-brand-primary transition-colors"
                  title="Start Voice Call"
                >
                  <Phone className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-(--muted-foreground) hover:text-(--foreground) transition-colors p-2 hover:bg-(--foreground)/5 rounded-full"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* CALL OVERLAY */}
            <AnimatePresence>
              {isCalling && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-(--card)/95 backdrop-blur-xl flex flex-col items-center justify-center p-8"
                >
                  <div className="relative mb-12">
                    {callStatus === "connecting" && (
                      <div className="absolute inset-0 animate-ping rounded-full bg-brand-primary/20" />
                    )}
                    {callStatus === "connected" && (
                      <div className="absolute -inset-8 animate-[pulse-bg_3s_ease-in-out_infinite] rounded-full bg-brand-success/10" />
                    )}

                    <div className="w-32 h-32 rounded-full bg-linear-to-br from-brand-primary/20 to-brand-cerulean/20 flex items-center justify-center relative border border-brand-primary/30 z-10 shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.2)]">
                      <Bot className="w-12 h-12 text-brand-primary" />

                      {/* LIVE Audio Visualizer Waves */}
                      {callStatus === "connected" && (
                        <div className="absolute inset-0 flex items-center justify-center gap-1 px-6">
                          {audioLevels.map((lvl, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                height: `${10 + lvl * 60}px`,
                                opacity: 0.3 + lvl * 0.7,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                              className="w-1.5 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(var(--brand-primary-rgb),0.3)]"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-(--foreground) mb-2 text-center">
                    {callStatus === "connecting" && "Connecting..."}
                    {callStatus === "connected" &&
                      (micStatus === "granted"
                        ? "Voice Active"
                        : "Listen Only")}
                    {callStatus === "error" && "Connection Failed"}
                  </h3>

                  <p className="text-(--muted-foreground) text-sm mb-4 text-center max-w-[200px] px-4">
                    {callStatus === "connecting" &&
                      "Establishing secure voice channel..."}
                    {callStatus === "connected" &&
                      (micStatus === "granted"
                        ? "Listening to your request..."
                        : micStatus === "denied"
                          ? "Mic access denied. AI can't hear you."
                          : "No microphone detected.")}
                    {callStatus === "error" &&
                      (errorMessage || "Please try again later.")}
                  </p>

                  {callStatus === "connected" && micStatus !== "granted" && (
                    <button
                      onClick={retryMic}
                      className="mb-8 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold border border-brand-primary/20 hover:bg-brand-primary/20 transition-colors flex items-center gap-2"
                    >
                      <Mic className="w-3 h-3" />
                      Retry Microphone
                    </button>
                  )}

                  <div
                    className={cn(
                      "flex items-center gap-6",
                      callStatus === "connected" && micStatus !== "granted"
                        ? "mt-4"
                        : "mt-8",
                    )}
                  >
                    <button
                      onClick={toggleMute}
                      className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300",
                        isMuted
                          ? "bg-(--foreground)/10 text-(--muted-foreground)"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/10",
                      )}
                    >
                      {isMuted ? (
                        <MicOff className="w-6 h-6" />
                      ) : (
                        <Mic className="w-6 h-6" />
                      )}
                    </button>

                    <button
                      onClick={endCall}
                      className="w-16 h-16 rounded-full bg-brand-error text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors hover:scale-105 active:scale-95"
                    >
                      <PhoneOff className="w-8 h-8" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scrollable Message Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-90">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[85%] animate-fade-in-up",
                    msg.sender === "user"
                      ? "ml-auto items-end"
                      : "mr-auto items-start",
                  )}
                >
                  <div className="flex items-center gap-2 mb-1.5 px-2">
                    <span className="text-[10px] uppercase tracking-widest text-(--muted-foreground) font-bold">
                      {msg.sender === "bot" ? "System Agent" : "You"}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "px-5 py-3.5 rounded-3xl text-sm leading-relaxed shadow-sm",
                      msg.sender === "user"
                        ? "bg-brand-primary text-white rounded-tr-none"
                        : "bg-(--foreground)/5 text-(--foreground) backdrop-blur-md border border-(--border)/30 rounded-tl-none",
                    )}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-(--muted-foreground)/60 mt-1.5 px-2 font-medium">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}

              {/* Bot Loading Indicator: Floating dots */}
              {isLoading && (
                <div className="flex flex-col items-start mr-auto max-w-[85%]">
                  <div className="px-5 py-3.5 rounded-3xl bg-white/5 border border-white/5 rounded-tl-none">
                    <div className="flex gap-1.5">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: 0,
                        }}
                        className="w-2 h-2 rounded-full bg-brand-primary"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: 0.2,
                        }}
                        className="w-2 h-2 rounded-full bg-brand-primary"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: 0.4,
                        }}
                        className="w-2 h-2 rounded-full bg-brand-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* User Input Field */}
            <form
              onSubmit={handleSendMessage}
              className="p-6 bg-(--foreground)/5 border-t border-(--border)/40 relative"
            >
              <div className="relative group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-(--background)/50 border border-(--border)/40 rounded-2xl py-4 pl-5 pr-14 text-sm text-(--foreground) focus:outline-none focus:border-brand-primary/50 transition-all placeholder:text-(--muted-foreground)/40"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl transition-all duration-300",
                    inputValue.trim() && !isLoading
                      ? "bg-brand-primary text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "bg-white/5 text-white/20",
                  )}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <Sparkles className="w-3 h-3 text-brand-primary/60" />
                <span className="text-[10px] text-(--muted-foreground) uppercase tracking-[0.2em] font-bold">
                  Powered by AtomicX AI
                </span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
