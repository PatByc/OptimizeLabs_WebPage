import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function IndustryHospitality() {
  const { language } = useLanguage();
  const problems = [
    "Guest inquiries about rooms and amenities require 24/7 staff attention",
    "Booking inquiries and modifications handled manually across multiple channels",
    "Check-in and check-out processes create bottlenecks and delays",
    "Housekeeping and maintenance coordination is manual and error-prone",
    "No automated upselling of available services and room upgrades",
    "Guest feedback and service issues not systematically tracked"
  ];

  const solutions = [
    {
      title: "Voice AI for 24/7 guest inquiries and booking",
      description: "AI handles guest questions, booking inquiries, and modifications around the clock."
    },
    {
      title: "AI chatbot for common guest questions",
      description: "Instant answers about amenities, dining options, local attractions, and hotel policies."
    },
    {
      title: "Automated check-in and check-out workflows",
      description: "Streamline arrival and departure processes, reducing wait times and freeing up front desk staff."
    },
    {
      title: "Housekeeping and maintenance coordination",
      description: "Automated task assignment, progress tracking, and completion notifications."
    },
    {
      title: "Smart upselling and ancillary revenue",
      description: "Automated recommendations for room upgrades, spa services, and other amenities."
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
              AI and automation for hospitality
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Guest expectations are high. Automation lets you deliver personalized, responsive service at scale — without expanding back-office headcount.
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
              Our approach for hospitality
            </h2>

            <div className="space-y-8">
              <div className="p-8 bg-white rounded-xl">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Map the guest journey</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We understand your property type, guest segments, peak seasons, and operational constraints. This allows us to design automation that enhances the guest experience.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Build guest-first automation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From pre-arrival to post-checkout — Voice AI handles inquiries, chatbots provide instant answers, and workflows keep your team coordinated.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Measure and optimize continuously</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We track response times, guest satisfaction, revenue from upselling, and staff efficiency. Then we refine and improve over time.
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
              Available solutions for hospitality
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Customized to your property type, size, and operational style — from boutique hotels to larger chains.
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
                <div className="text-5xl mb-4">🗣️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Voice AI concierge</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Boutique hotel handling guest inquiries and booking changes outside front desk hours with AI.
                </p>
                <p className="text-sm text-gray-500">Project in progress</p>
              </div>

              <div className="p-8 bg-white rounded-xl text-left">
                <div className="text-5xl mb-4">🛎️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guest service automation</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Hotel automating service requests and housekeeping coordination to improve response times.
                </p>
                <p className="text-sm text-gray-500">Case study coming soon</p>
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
              Let's talk about your property
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Whether it's a boutique hotel, resort, or larger chain, we can design automation that delights guests and frees up your team.
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
