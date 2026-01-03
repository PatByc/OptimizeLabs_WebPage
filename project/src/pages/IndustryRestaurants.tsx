import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

export default function IndustryRestaurants() {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/industries"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
            >
              {t.industries.restaurants.backLink}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.industries.restaurants.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t.industries.restaurants.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              {t.industries.restaurants.problemsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.industries.restaurants.problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-sand-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full"></div>
                  <p className="text-gray-700 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-32 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              {t.industries.restaurants.approachTitle}
            </h2>

            <div className="space-y-8">
              {t.industries.restaurants.approachSteps.map((step, index) => (
                <div key={index} className="p-8 bg-white rounded-xl">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              {t.industries.restaurants.solutionsTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              {t.industries.restaurants.solutionsSubtitle}
            </p>

            <div className="space-y-6">
              {t.industries.restaurants.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-6 bg-sand-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-32 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
              {t.industries.restaurants.useCasesTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl text-left">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.industries.restaurants.useCases[0].title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t.industries.restaurants.useCases[0].description}
                </p>
                <p className="text-sm text-gray-500">{t.industries.restaurants.useCases[0].status}</p>
              </div>

              <div className="p-8 bg-white rounded-xl text-left">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.industries.restaurants.useCases[1].title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t.industries.restaurants.useCases[1].description}
                </p>
                <p className="text-sm text-gray-500">{t.industries.restaurants.useCases[1].status}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t.industries.restaurants.ctaTitle}
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              {t.industries.restaurants.ctaSubtitle}
            </p>
            <p className="text-gray-400 mb-12">
              {t.industries.restaurants.ctaNote}
            </p>
            <Link
              to={language === 'pl' ? '/umow' : '/book'}
              className="inline-block px-10 py-5 bg-brand-600 text-white rounded-lg font-semibold text-lg hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t.industries.restaurants.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
