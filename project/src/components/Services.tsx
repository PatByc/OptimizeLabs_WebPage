import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.services.items.map((service, index) => (
            <Link
              key={index}
              to={language === 'pl' ? `/uslugi/${service.slug}` : `/services/${service.slug}`}
              className="block p-8 bg-sand-50 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{t.services.businessImpact}</p>
                {service.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
