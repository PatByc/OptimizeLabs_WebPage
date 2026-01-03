import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServiceProcessAutomation() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          ← {language === 'pl' ? 'Powrót do strony głównej' : 'Back to home'}
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {language === 'pl' ? 'Automatyzacja procesów przy użyciu agentów AI' : 'Process Automation using AI Agents'}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {language === 'pl'
              ? 'Szczegółowe informacje o usłudze wkrótce.'
              : 'Detailed service information coming soon.'}
          </p>
        </div>
      </div>
    </div>
  );
}
