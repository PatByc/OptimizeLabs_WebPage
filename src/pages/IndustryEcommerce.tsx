import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function IndustryEcommerce() {
  const { language } = useLanguage();

  return (
    <>
      <section className="bg-sand-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/industries"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
            >
              {language === 'pl' ? '← Powrót do branż' : '← Back to industries'}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {language === 'pl' ? 'Automatyzacja i AI dla e-commerce' : 'Automation and AI for E-commerce'}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {language === 'pl'
                ? 'Szczegółowe informacje o branży wkrótce.'
                : 'Detailed industry information coming soon.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
