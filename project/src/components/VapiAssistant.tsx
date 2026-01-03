import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    vapiSDK?: {
      run: (config: any) => void;
    };
  }
}

export default function VapiAssistant() {
  const vapiInstanceRef = useRef<any>(null);

  useEffect(() => {
    const assistant = {
      name: "Lisa",
      voice: {
        voiceId: "sarah",
        provider: "11labs",
        stability: 0.5,
        similarityBoost: 0.75,
      },
      model: {
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "Lisa is a sophisticated AI web assistant, designed by Jannis Moore. Crafted with the persona of an experienced customer support professional in her early 30s, Lisa combines in-depth knowledge of the website's offerings with a keen sense of emotional intelligence. Her voice is clear, warm, and inviting, featuring a neutral accent to ensure accessibility for a broad user base. Lisa's primary role is to provide immediate, accurate answers to user inquiries about the Website Company, enhancing user experience and engagement.\n\nLisa's advanced programming enables her to handle a wide range of website-related questions, from basic navigation assistance to detailed explanations of services. She guides users through the website's content, offering instant feedback and support to improve their understanding and ease their journey through the site. Lisa ensures every user is met with patience, empathy, and professionalism, embodying the highest standards of customer care.\n\n**Major Mode of Interaction:** Lisa interacts primarily through text, adeptly processing written queries and responding promptly. This capability makes her an excellent resource for users seeking quick information or needing guidance on the website. Additionally, Lisa can utilize custom functions like \"WriteText\" and \"ChangeColor\" to interact with website elements directly, enhancing user interaction and providing a dynamic browsing experience.\n\n**Interaction Instructions:**\n\n-   Lisa encourages users to explore the website, acknowledging each query with confirmation of her engagement, e.g., \"Yes, I'm here. How can I assist you today?\"\n-   She emphasizes the importance of clear, empathetic communication, tailored to the context of each interaction.\n-   Lisa demonstrates how to clarify complex or vague user inquiries by asking concise questions for clarification, ensuring a smooth and efficient communication flow.\n-   She teaches users about website features and functionalities, ensuring they feel supported and informed at every step.\n-   Lisa can adapt the website's appearance through her interactive commands, improving accessibility and user satisfaction according to individual preferences.\n\nLisa's overarching mission is to enhance the user experience on the website, ensuring that every visitor can navigate and interact with the site effectively and pleasantly. She's not just an information provider but a dynamic interface designed to foster a deeper connection between the website and its users.",
          },
        ],
        provider: "openai",
        functions: [
          {
            name: "ChangeColor",
            async: false,
            parameters: {
              type: "object",
              properties: {
                ColorCode: {
                  type: "string",
                  description: "The HEX color code including the #",
                },
              },
            },
            description: "Changes the color of a HTML element",
          },
          {
            name: "WriteText",
            async: false,
            parameters: {
              type: "object",
              properties: {
                Text: {
                  type: "string",
                  description: "The text to write",
                },
              },
            },
            description: "Writes text on a website on user request",
          },
        ],
        maxTokens: 250,
        temperature: 0.7,
        emotionRecognitionEnabled: true,
      },
      recordingEnabled: true,
      firstMessage: "Hello, this is Jannis. How may I assist you today?",
      voicemailMessage:
        "You've reached our voicemail. Please leave a message after the beep, and we'll get back to you as soon as possible.",
      endCallFunctionEnabled: false,
      endCallMessage: "Thank you for contacting us. Have a great day!",
      transcriber: {
        model: "nova-2",
        keywords: [],
        language: "en",
        provider: "deepgram",
      },
      clientMessages: [
        "transcript",
        "hang",
        "function-call",
        "speech-update",
        "metadata",
        "conversation-update",
      ],
      serverMessages: [
        "end-of-call-report",
        "status-update",
        "hang",
        "function-call",
      ],
      dialKeypadFunctionEnabled: false,
      endCallPhrases: ["goodbye"],
      hipaaEnabled: false,
      voicemailDetectionEnabled: false,
    };

    const apiKey = "219cd46a-b792-4a22-a7aa-28a731e3428f";

    const buttonConfig = {
      position: "bottom-right",
      offset: "40px",
      width: "50px",
      height: "50px",
      idle: {
        color: `rgb(255, 20, 147)`,
        type: "pill",
        title: "Have a quick question?",
        subtitle: "Talk with our AI assistant",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
      },
      loading: {
        color: `rgb(93, 124, 202)`,
        type: "pill",
        title: "Connecting...",
        subtitle: "Please wait",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
      },
      active: {
        color: `rgb(255, 0, 0)`,
        type: "pill",
        title: "Call is in progress...",
        subtitle: "End the call.",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
      },
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
    script.defer = true;
    script.async = true;

    script.onload = () => {
      if (window.vapiSDK) {
        vapiInstanceRef.current = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: buttonConfig,
        });

        vapiInstanceRef.current.on("speech-start", () => {
          console.log("Speech has started");
        });

        vapiInstanceRef.current.on("speech-end", () => {
          console.log("Speech has ended");
        });

        vapiInstanceRef.current.on("call-start", () => {
          console.log("Call has started");
        });

        vapiInstanceRef.current.on("call-end", () => {
          console.log("Call has stopped");
        });

        vapiInstanceRef.current.on("volume-level", (volume: number) => {
          console.log(`Assistant volume level: ${volume}`);
        });

        vapiInstanceRef.current.on("message", (message: any) => {
          console.log(message);
        });

        vapiInstanceRef.current.on("error", (e: Error) => {
          console.error(e);
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
