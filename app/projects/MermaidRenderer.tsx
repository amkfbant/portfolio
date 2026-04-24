"use client";

import { useEffect } from "react";

function safeId(prefix: string, index: number): string {
  return `${prefix}-${index}-${Math.random().toString(36).slice(2)}`;
}

export default function MermaidRenderer() {
  useEffect(() => {
    const blocks = Array.from(
      document.querySelectorAll<HTMLPreElement>(".article-content .mermaid-source"),
    );

    if (blocks.length === 0) {
      return;
    }

    let cancelled = false;

    const renderMermaid = async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "loose",
        theme: "dark",
        themeVariables: {
          background: "#101722",
          primaryColor: "#2a3346",
          primaryTextColor: "#f1f5ff",
          primaryBorderColor: "#41506a",
          secondaryColor: "#2f3c56",
          secondaryTextColor: "#f1f5ff",
          tertiaryColor: "#1e2636",
          tertiaryTextColor: "#f1f5ff",
          lineColor: "#89d9db",
          textColor: "#f1f5ff",
          labelTextColor: "#f1f5ff",
          labelBoxBorderColor: "#89d9db",
          actorTextColor: "#f1f5ff",
          actorBorder: "#89d9db",
          actorBkg: "#2a3346",
          actorLineColor: "#89d9db",
          signalColor: "#f1f5ff",
          signalTextColor: "#f1f5ff",
          noteBkgColor: "#2f3c56",
          noteTextColor: "#f1f5ff",
          noteBorderColor: "#89d9db",
          loopTextColor: "#f1f5ff",
          altBackground: "#1e2636",
          sequenceNumberColor: "#101722",
        },
      });

      for (let i = 0; i < blocks.length; i++) {
        if (cancelled) {
          return;
        }

        const block = blocks[i];
        const source = block.textContent?.trim() ?? "";

        if (!source) {
          block.className = "mermaid-source mermaid-error";
          block.textContent = "(empty mermaid block)";
          continue;
        }

        try {
          const rendered = await mermaid.render(safeId("mermaid", i), source);
          const svg = typeof rendered === "string" ? rendered : rendered.svg;
          const wrapper = document.createElement("figure");
          wrapper.className = "mermaid-figure";
          wrapper.innerHTML = svg;
          block.replaceWith(wrapper);
        } catch {
          block.className = "mermaid-source mermaid-error";
        }
      }
    };

    void renderMermaid();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
