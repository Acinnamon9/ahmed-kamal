import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Minimize2, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

/**
 * ChatBot Component
 *
 * A floating AI assistant widget that provides lead capture and information.
 * Features specialized branding, auto-scrolling, and integration with an external API.
 */
const ChatBot: React.FC = () => {
  // isOpen: toggles the visibility of the expanded chat window
  const [isOpen, setIsOpen] = useState(false);

  // messages: store of the current conversation history
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Helper to keep the chat scrolled to the most recent message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

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
          agent_code: "b7b375a2-faf4-4bdd-b160-feb97562c61a",
          schema_name: "09483b13-47ac-47b2-95cf-4ca89b3debfa",
        }),
      });
      const data = await response.json();
      console.log("Chat started:", data);
    } catch (error) {
      console.error("Error starting chat:", error);
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 1) {
      handleStartChat();
    }
  }, [isOpen]);

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
        text: "I'm analyzing your request. Our specialized systems are processing the information to provide you with the most relevant response.",
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
            className="fixed bottom-24 right-6 z-100 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] flex flex-col glass-navbar-frosted overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            {/* Header: Displays bot status (Online/Offline) */}
            <div className="p-6 bg-linear-to-r from-brand-primary/10 to-brand-cerulean/10 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center relative">
                  <Bot className="w-6 h-6 text-brand-primary" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-brand-success rounded-full border-2 border-brand-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white leading-tight">
                    AI Assistant
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
                    <span className="text-xs text-brand-success font-medium uppercase tracking-wider">
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

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
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                      {msg.sender === "bot" ? "System Agent" : "You"}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "px-5 py-3.5 rounded-3xl text-sm leading-relaxed shadow-lg",
                      msg.sender === "user"
                        ? "bg-brand-primary text-white rounded-tr-none"
                        : "bg-white/10 text-white backdrop-blur-md border border-white/5 rounded-tl-none",
                    )}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-white/20 mt-1.5 px-2 font-medium">
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
              className="p-6 bg-white/5 border-t border-white/10 relative"
            >
              <div className="relative group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-all placeholder:text-white/20"
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
                <Sparkles className="w-3 h-3 text-brand-primary/40" />
                <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
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
