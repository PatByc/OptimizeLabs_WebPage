import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

declare global {
  interface Window {
    vapiSDK?: {
      run: (config: any) => void;
    };
  }
}

export default function ServiceVoiceAI() {
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const assistant = "005f4909-983b-48a6-88f4-e068efd5456c";
    const apiKey = "219cd46a-b792-4a22-a7aa-28a731e3428f";

    const buttonConfig = {
      position: "bottom-right",
      offset: "40px",
      width: "50px",
      height: "50px",
      idle: {
        color: `rgb(249, 115, 22)`,
        type: "pill",
        title: "Have a question?",
        subtitle: "Talk to our AI assistant",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
      },
      loading: {
        color: `rgb(249, 115, 22)`,
        type: "pill",
        title: "Connecting...",
        subtitle: "Please wait",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
      },
      active: {
        color: `rgb(239, 68, 68)`,
        type: "pill",
        title: "Call in progress...",
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
        const vapiContainer = document.getElementById('vapi-widget-container');
        if (vapiContainer) {
          window.vapiSDK.run({
            apiKey: apiKey,
            assistant: assistant,
            config: buttonConfig,
          });

          setTimeout(() => {
            const vapiButton = document.querySelector('div[style*="position: fixed"]') as HTMLElement;
            if (vapiButton && vapiContainer) {
              vapiButton.style.position = 'absolute';
              vapiButton.style.bottom = '50%';
              vapiButton.style.right = '50%';
              vapiButton.style.transform = 'translate(50%, 50%)';
              vapiButton.style.zIndex = '10';
              vapiContainer.appendChild(vapiButton);
            }
          }, 500);
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const benefits = [
    {
      title: "Never miss a call",
      description: "24/7 availability for every customer inquiry"
    },
    {
      title: "Takes orders & bookings",
      description: "Handles transactions without human intervention"
    },
    {
      title: "Answers customer questions",
      description: "Instant responses to common inquiries"
    },
    {
      title: "Hands off to a human when needed",
      description: "Seamlessly transfers complex issues to staff"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-12 transition-colors"
        >
          ← {language === 'pl' ? 'Powrót do strony głównej' : 'Back to home'}
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {language === 'pl' ? 'Voice AI do obsługi klientów' : 'Voice AI for Customer Operations'}
            </h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {language === 'pl'
                ? 'Agent głosowy, który odbiera połączenia, przyjmuje zamówienia/rezerwacje i odpowiada na częste pytania — bez utraty potencjalnych klientów.'
                : 'A voice agent that answers calls, takes orders/bookings, and handles common questions — without missed leads.'}
            </p>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-sand-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-brand-600 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                {/* Phone Screen */}
                <div className="relative w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content */}
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {language === 'pl' ? 'Wypróbuj naszą Voice AI' : 'Try Our Voice AI'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {language === 'pl' ? 'Kliknij poniżej, aby rozpocząć rozmowę' : 'Click below to start a conversation'}
                      </p>
                    </div>

                    {/* Vapi Widget Container */}
                    <div id="vapi-widget-container" className="relative w-full flex items-center justify-center min-h-[60px]"></div>
                  </div>
                </div>

                {/* Phone Buttons */}
                <div className="absolute right-0 top-32 w-1 h-16 bg-gray-800 rounded-l"></div>
                <div className="absolute right-0 top-52 w-1 h-12 bg-gray-800 rounded-l"></div>
                <div className="absolute left-0 top-40 w-1 h-8 bg-gray-800 rounded-r"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
