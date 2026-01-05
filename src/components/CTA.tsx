import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

export default function CTA() {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <section id="cta" className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {t.cta.subtitle}
          </p>
          <p className="text-gray-400 mb-12">
            {t.cta.note}
          </p>

          <Link
            to={language === 'pl' ? '/umow' : '/book'}
            className="inline-block px-10 py-5 bg-brand-600 text-white rounded-lg font-semibold text-lg hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {t.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
