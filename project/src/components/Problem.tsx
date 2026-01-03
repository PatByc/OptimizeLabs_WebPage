import { useTranslation } from '../hooks/useTranslation';

export default function Problem() {
  const t = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            {t.problem.title}
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
            {t.problem.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {t.problem.problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-sand-50 rounded-lg">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
