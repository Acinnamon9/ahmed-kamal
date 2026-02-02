import ReactDOM from "react-dom/client";
import App from "./App";
import { WidgetProvider } from "./contexts/WidgetContext.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { FORCED_ASSETS } from "./assets-manifest";
import "./index.css";
import { BASE_URL } from "./constants/links";

// Force Vite/Vercel to recognize these assets as used
// console.log("Assets forced:", FORCED_ASSETS.length);
if (typeof window !== "undefined" && (window as any)._force_assets) {
  console.log(FORCED_ASSETS);
}

class ReactWidget extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const container = document.createElement("div");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${BASE_URL}/style.css`;

    // Append the stylesheet and container to the Shadow DOM
    this.shadowRoot?.appendChild(link);
    this.shadowRoot?.appendChild(container);

    const agent_id = this.getAttribute("agent_id") || "";
    const schema = this.getAttribute("schema") || "";
    const type = this.getAttribute("type") || "";

    this.root = ReactDOM.createRoot(container);
    this.root.render(
      <WidgetProvider
        agent_id={agent_id}
        schema={schema}
        type={type}
        shadowRoot={this.shadowRoot}
      >
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </WidgetProvider>,
    );
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

customElements.define("react-widget-uv", ReactWidget);
