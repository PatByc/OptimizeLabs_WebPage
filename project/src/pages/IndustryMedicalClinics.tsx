import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function IndustryMedicalClinics() {
  const { language } = useLanguage();
  const problems = [
    "Patient calls for appointments and prescription refills consume staff time",
    "Manual appointment scheduling with double bookings and no-shows",
    "Patient intake forms still done by hand",
    "No automated reminders leading to missed appointments",
    "Prescription refill requests requiring manual follow-up",
    "Post-visit follow-ups and care instructions not systematically tracked"
  ];

  const solutions = [
    {
      title: "Voice AI for appointment scheduling and inquiries",
      description: "AI handles appointment booking, rescheduling, and common patient questions 24/7."
    },
    {
      title: "Automated appointment reminders",
      description: "SMS and email reminders sent automatically to reduce no-shows and last-minute cancellations."
    },
    {
      title: "Digital intake forms and patient history",
      description: "Patients complete forms online before arrival, saving staff time and improving accuracy."
    },
    {
      title: "Prescription refill automation",
      description: "Automated coordination between patients, pharmacy, and providers for refill requests."
    },
    {
      title: "Post-visit follow-up workflows",
      description: "Automatic check-ins, care instruction delivery, and feedback collection."
    }
  ];

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
              ← Back to industries
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automation for medical clinics and practices
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Patient calls, scheduling, and follow-ups are eating up staff time. Automation lets your team focus on what matters — patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Common challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
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
              Our approach for medical practices
            </h2>

            <div className="space-y-8">
              <div className="p-8 bg-white rounded-xl">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Understand your practice workflow</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We learn your patient flow, appointment types, common inquiries, and operational constraints. We also respect HIPAA compliance and data privacy from day one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-xl">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Design HIPAA-compliant solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We design automation that respects patient privacy and regulatory requirements. This isn't generic — it's built specifically for healthcare operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-xl">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Implement safely and securely</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We test thoroughly, train your staff, and scale gradually. Your practice continues running smoothly while we optimize operations in the background.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Available solutions for medical clinics
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Designed specifically for healthcare practices. Every solution is tailored to your specialization, patient volume, and workflow.
            </p>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
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
              Projects & use cases
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl text-left">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appointment automation system</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Dental practice reducing no-shows with automated reminders and digital patient intake.
                </p>
                <p className="text-sm text-gray-500">Case study coming soon</p>
              </div>

              <div className="p-8 bg-white rounded-xl text-left">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Patient inquiry AI assistant</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Primary care clinic using AI to handle common patient questions and triage routine requests.
                </p>
                <p className="text-sm text-gray-500">Project in progress</p>
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
              Let's talk about your practice
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Whether it's a small clinic or a larger practice, automation can free up your staff to focus on patient care.
            </p>
            <p className="text-gray-400 mb-12">
              Free consultation. No obligation.
            </p>
            <Link
              to={language === 'pl' ? '/umow' : '/book'}
              className="inline-block px-10 py-5 bg-brand-600 text-white rounded-lg font-semibold text-lg hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
