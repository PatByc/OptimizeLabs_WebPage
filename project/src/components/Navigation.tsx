import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

export default function Navigation() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const isActive = (path: string) => {
    if (path === '/industries') {
      return location.pathname === path || location.pathname.startsWith('/industries/');
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-sand-50 border-b border-sand-200 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center py-3 hover:opacity-90 transition-opacity"
          >
            <img
              src="/optimzelabs_-_watermark_v2.svg"
              alt="OptimizeLabs"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/industries"
              className={`font-medium transition-colors ${
                isActive('/industries')
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-brand-700'
              }`}
            >
              {t.nav.industries}
            </Link>

            <Link
              to={language === 'pl' ? '/akademia' : '/academy'}
              className={`font-medium transition-colors ${
                isActive('/academy') || isActive('/akademia')
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-brand-700'
              }`}
            >
              {t.nav.academy}
            </Link>

            <Link
              to={language === 'pl' ? '/zasoby' : '/resources'}
              className={`font-medium transition-colors ${
                isActive('/resources') || isActive('/zasoby')
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-brand-700'
              }`}
            >
              {t.nav.resources}
            </Link>

            <Link
              to={language === 'pl' ? '/o-nas' : '/about'}
              className={`font-medium transition-colors ${
                isActive('/about') || isActive('/o-nas')
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-brand-700'
              }`}
            >
              {t.nav.about}
            </Link>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en' ? 'text-gray-900' : 'hover:text-gray-800'
                }`}
              >
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage('pl')}
                className={`transition-colors ${
                  language === 'pl' ? 'text-gray-900' : 'hover:text-gray-800'
                }`}
              >
                PL
              </button>
            </div>

            <Link
              to={language === 'pl' ? '/umow' : '/book'}
              className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
            >
              {t.nav.getStarted}
            </Link>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en' ? 'text-gray-900' : 'hover:text-gray-800'
                }`}
              >
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage('pl')}
                className={`transition-colors ${
                  language === 'pl' ? 'text-gray-900' : 'hover:text-gray-800'
                }`}
              >
                PL
              </button>
            </div>

            <Link
              to="/industries"
              className="text-gray-600 hover:text-brand-700 text-sm font-medium transition-colors"
            >
              {t.nav.industries}
            </Link>

            <Link
              to={language === 'pl' ? '/akademia' : '/academy'}
              className="text-gray-600 hover:text-brand-700 text-sm font-medium transition-colors"
            >
              {t.nav.academy}
            </Link>

            <Link
              to={language === 'pl' ? '/zasoby' : '/resources'}
              className="text-gray-600 hover:text-brand-700 text-sm font-medium transition-colors"
            >
              {t.nav.resources}
            </Link>

            <Link
              to={language === 'pl' ? '/o-nas' : '/about'}
              className="text-gray-600 hover:text-brand-700 text-sm font-medium transition-colors"
            >
              {t.nav.about}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
