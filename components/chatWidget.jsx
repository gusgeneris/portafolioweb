"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

      createChat({
        webhookUrl:
          "https://n8ninnerspace.shop/webhook/ca447bfe-1731-4ded-9ad3-f4fc436b03e7/chat",
        webhookConfig: {
          method: "POST",
          headers: {},
        },
        target: "#n8n-chat",
        // mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: "en",
        initialMessages: [
          "Soy un asistente virtual, estoy aqui para informarte sobre el porfolio de Gustavo!",
        ],
        i18n: {
          en: {
            title: "Hola! 👋",
            subtitle: "Puedes hablar con migo las 24hs del dia 😎",
            footer: "",
            getStarted: "New Conversation",
            inputPlaceholder: "Escribe tu consulta..",
          },
        },
      });
    `;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="n8n-chat" className="fixed bottom-4 right-4 z-50" />;
}