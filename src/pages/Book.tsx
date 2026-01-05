import { useState, type FormEvent } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { supabase } from "../lib/supabase"; // Supabase API link

export default function Book() {
  const t = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    industry: "",
    improvement_area: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 1) zapis leada do Supabase (nawet jeśli nie zarezerwuje terminu)
      const { error: submitError } = await supabase
        .from("ConsultationRequests")
        .insert([formData]);

      if (submitError) throw submitError;

      // 2) otwarcie Cal.com w nowej karcie
      const name = encodeURIComponent(formData.name.trim());
      const email = encodeURIComponent(formData.email.trim());
      const notes = encodeURIComponent(
        `Firma: ${formData.company_name}\nBranża: ${formData.industry}\nCo chcesz poprawić: ${formData.improvement_area}`
      );

      const calLink = import.meta.env.VITE_CAL_COM_URL;

      const calUrl =
         calLink + `?name=${name}&email=${email}&notes=${notes}`;

      window.open(calUrl, "_blank", "noopener,noreferrer");

      // 3) UX: success + czyszczenie
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company_name: "",
        industry: "",
        improvement_area: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSuccess) {
    return (
      <section className="min-h-screen bg-sand-50 py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
            <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-brand-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dzięki! Otworzyłem kalendarz w nowej karcie.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Jeśli karta się nie otworzyła, sprawdź czy przeglądarka nie blokuje
              wyskakujących okien dla tej strony.
            </p>

            <a
              href="/"
              className="inline-block px-8 py-4 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
            >
              Wróć na stronę główną
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-sand-50 py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.book.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t.book.subtitle}
          </p>
        </div>

        {/* 1 kolumna, bez prawej ramki */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {t.book.formTitle}
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.book.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.book.namePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.book.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.book.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="company_name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.book.companyLabel}
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  required
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder={t.book.companyPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.book.industryLabel}
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                >
                  <option value="">{t.book.industryPlaceholder}</option>
                  <option value="restaurants">
                    {t.book.industryOptions.restaurants}
                  </option>
                  <option value="medical_clinics">
                    {t.book.industryOptions.medical}
                  </option>
                  <option value="hospitality">
                    {t.book.industryOptions.hospitality}
                  </option>
                  <option value="other">{t.book.industryOptions.other}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="improvement_area"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.book.improvementLabel}
                </label>
                <textarea
                  id="improvement_area"
                  name="improvement_area"
                  required
                  rows={4}
                  value={formData.improvement_area}
                  onChange={handleChange}
                  placeholder={t.book.improvementPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Otwieram kalendarz..." : "Przejdź do wyboru terminu"}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-2">{t.book.preferEmail}</p>
              <a
                href="mailto:hello@optimizelabs.com"
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                {t.book.emailContact} hello@optimizelabs.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
