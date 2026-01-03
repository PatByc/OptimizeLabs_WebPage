import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <img
                src="/optimzelabs_-_watermark_v3.svg"
                alt="OptimizeLabs"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.missionTitle}</h4>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.missionText}
            </p>
          </div>

          {/* Contact placeholder */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h4>
            <p className="text-gray-400 mb-3">
              {t.footer.contactText}
            </p>
            <Link
              to={language === 'pl' ? '/umow' : '/book'}
              className="inline-block text-gray-400 hover:text-white transition-colors font-medium"
            >
              {t.footer.contactButton}
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
