import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Academy() {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <img
              src="/optimzelabs_academy_-_watermark_v2.svg"
              className="h-20 md:h-24 w-auto mx-auto mb-8"
            />
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.academy.hero.subtitle}
            </p>
          </div>

          <div className="mb-20">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t.academy.intro}
            </p>
          </div>

          <div className="space-y-16">
            <div className="border-t-4 border-green-600 pt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-green-700 mb-4">
                    {t.academy.forBusinesses.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {t.academy.forBusinesses.description}
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {t.academy.forBusinesses.items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t-4 border-green-600 pt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-green-700 mb-4">
                    {t.academy.forIndividuals.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {t.academy.forIndividuals.description}
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {t.academy.forIndividuals.items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t-4 border-green-600 pt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-green-700 mb-4">
                    {t.academy.freeResources.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {t.academy.freeResources.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://youtube.com/@optimizelabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors"
                    >
                      {t.academy.freeResources.youtubeCta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://www.skool.com/optimizelabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-700 text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors"
                    >
                      {t.academy.freeResources.skoolCta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-lg mb-6">
              {t.academy.cta.text}
            </p>
            <Link
              to={language === 'pl' ? '/umow' : '/book'}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-lg"
            >
              {t.academy.cta.button}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
