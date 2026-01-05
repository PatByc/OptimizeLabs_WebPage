import { useTranslation } from '../hooks/useTranslation';

export default function HowItWorks() {
  const t = useTranslation();

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
