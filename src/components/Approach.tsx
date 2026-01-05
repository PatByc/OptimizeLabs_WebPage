import { useTranslation } from '../hooks/useTranslation';

export default function Approach() {
  const t = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.approach.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.approach.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.approach.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-300">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
              <ul className="space-y-2">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
