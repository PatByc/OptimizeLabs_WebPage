import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const t = useTranslation();
  const { language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-sand-50 pt-32 pb-32 md:pt-40 md:pb-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 mb-8 bg-white border border-gray-200 rounded-full">
            <span className="text-sm font-medium text-gray-700">
              {t.hero.badge}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-10 leading-tight tracking-tight">
            {t.hero.headline.split('. ')[0]}.<br />{t.hero.headline.split('. ')[1]}.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
            {t.hero.subheadline.split('. ')[0]}. {t.hero.subheadline.split('. ')[1]}.<br />
            {t.hero.subheadline.split('. ')[2]}.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to={language === 'pl' ? '/umow' : '/book'}
              className="btn-primary w-full sm:w-auto text-lg"
            >
              {t.hero.ctaPrimary}
            </Link>
            <button
              className="btn-secondary w-full sm:w-auto text-lg"
              onClick={() => scrollToSection('how-it-works')}
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
