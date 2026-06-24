import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mental Health Near Holland, MI | Arlene Holland',
  description: 'Serving patients from Holland and surrounding MI communities. Expert psychiatric care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Mental Health Near Holland, MI | Arlene Holland',
    description: 'Serving patients from Holland and surrounding MI communities. Expert psychiatric care is closer than you think.',
  },
}

export default function HollandMIPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>Holland, MI</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Mental Health Near Holland, MI
          </h1>
          <p className="text-xl mb-8 leading-relaxed opacity-95 animate-fade-up">
            Serving patients from Holland and surrounding MI communities. Expert psychiatric care is closer than you think.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors animate-fade-up"
          >
            Schedule in Holland
          </a>
        </div>
      </section>

      {/* Serving Holland Area */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] mb-8 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Serving the Holland Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed">
            <p className="animate-fade-up">
              Located conveniently for Holland residents, our practice offers accessible mental health care without the long commute to larger metro areas. Whether you're coming from downtown Holland, the lakeshore communities, or surrounding areas like Zeeland, Hamilton, or Saugatuck, quality psychiatric care is within easy reach. Many of our Holland patients appreciate the personalized attention and shorter wait times compared to larger urban facilities.
            </p>
            <p className="animate-fade-up">
              We understand that traveling for mental health care can be challenging, which is why we also offer comprehensive telehealth services for Holland residents. This means you can receive the same expert care from the comfort of your own home, making consistent treatment more accessible regardless of your schedule, transportation availability, or personal preferences.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center mt-12 animate-fade-up">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] mb-12 text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Services Available to Holland Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Comprehensive mental health assessments for Holland residents, including diagnosis, treatment planning, and medication management when appropriate.
              </p>
              <a href="/services/evaluation" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Ongoing psychiatric medication management and monitoring, ensuring optimal treatment outcomes with regular follow-ups available in-person or via telehealth.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Anxiety & Depression Treatment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Specialized care for anxiety disorders, depression, and mood disorders with evidence-based treatment approaches tailored to each Holland patient's needs.
              </p>
              <a href="/services/anxiety-depression" className="text-[var(--color-primary)] font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-serif text-3xl font-light text-[var(--color-ink)] mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
            For Holland residents with busy schedules, transportation challenges, or who simply prefer the convenience of home-based care, we offer comprehensive telehealth services. Our secure video platform allows you to receive the same quality psychiatric care without the commute.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            Telehealth appointments are covered by most insurance plans and offer the same clinical quality as in-person visits. Many Holland patients find that virtual appointments help them maintain more consistent care and fit mental health treatment into their daily routines more easily.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] mb-12 text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Holland Location Questions
          </h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                How far is your practice from Holland, MI?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently accessible from Holland, with most patients experiencing a comfortable commute time. We serve patients throughout the Holland area, including Zeeland, Hamilton, Saugatuck, and surrounding Ottawa County communities. Exact travel time will vary depending on your specific location within Holland.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                What are the directions from Holland?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Detailed directions will be provided when you schedule your appointment. Our office is easily accessible from major Holland-area roadways. We recommend allowing extra time for your first visit to locate parking and complete any necessary intake paperwork.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Do you offer telehealth for Holland residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for all Holland-area patients. Telehealth appointments provide the same quality care as in-person visits and are ideal for follow-up appointments, medication management, and ongoing treatment. Most insurance plans cover telehealth services at the same rate as in-person visits.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="pb-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Is parking available? Is your office accessible?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, convenient parking is available for all patients. Our facility is fully accessible and designed to ensure comfortable access for all Holland-area patients. If you have specific accessibility needs or questions, please contact our office when scheduling your appointment so we can ensure your visit is as comfortable as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="font-serif text-4xl font-light mb-6 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Expert Care from Holland
          </h2>
          <p className="text-xl mb-8 opacity-95 animate-fade-up">
            Quality mental health care is closer than you think. Schedule your appointment today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors animate-fade-up"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}