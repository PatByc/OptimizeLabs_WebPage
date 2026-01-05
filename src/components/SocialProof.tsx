import { useTranslation } from '../hooks/useTranslation';

export default function SocialProof() {
  const t = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            {t.socialProof.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            {t.socialProof.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {t.socialProof.stats.map((stat, index) => (
              <div key={index} className="p-8 bg-white rounded-xl">
                <p className="text-gray-500 font-medium mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-gray-600 mt-2">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl border-2 border-sand-200">
            <p className="text-gray-600 italic leading-relaxed">
              "{t.socialProof.quote}"
            </p>
            <p className="text-gray-500 mt-4 font-medium">— {t.socialProof.quoteAuthor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
