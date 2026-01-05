import { useTranslation } from '../hooks/useTranslation';

export default function About() {
  const t = useTranslation();

  return (
    <div className="pt-20">
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            {t.about.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {t.about.intro}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-16">
              {t.about.description}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.about.foundersTitle}
            </h2>

            <div className="space-y-8">
              {t.about.founders.map((founder, index) => (
                <div key={index} className="bg-sand-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-16 mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.about.valuesTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.about.values.map((value, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
