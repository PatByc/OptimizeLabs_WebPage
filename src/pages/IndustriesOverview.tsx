import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

export default function IndustriesOverview() {
  const t = useTranslation();
  const { language } = useLanguage();

  const industries = [
    {
      id: 'restaurants',
      icon: '🍽️'
    },
    {
      id: 'medical-clinics',
      icon: '⚕️'
    },
    {
      id: 'hospitality',
      icon: '🏨'
    },
    {
      id: 'ecommerce',
      icon: '🛒'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {t.industries.overview.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t.industries.overview.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.id} className="group">
                <div className="bg-sand-50 rounded-xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
                  <div className="text-5xl mb-6">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.industries.overview.items[index].name}</h3>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{t.industries.overview.items[index].description}</p>
                  <Link
                    to={`/industries/${industry.id}`}
                    className="inline-flex items-center text-brand-700 font-medium hover:text-brand-800 transition-colors"
                  >
                    {t.industries.overview.viewSolutions}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t.industries.overview.ctaTitle}
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              {t.industries.overview.ctaSubtitle}
            </p>
            <Link
              to={language === 'pl' ? '/umow' : '/book'}
              className="inline-block px-10 py-5 bg-brand-600 text-white rounded-lg font-semibold text-lg hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t.industries.overview.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
