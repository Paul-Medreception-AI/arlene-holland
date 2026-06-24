import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mental Health Near Grand Rapids, MI | Arlene Holland',
  description: 'Serving patients from Grand Rapids and surrounding MI communities. Expert psychiatric care with convenient telehealth options available.',
  openGraph: {
    title: 'Mental Health Near Grand Rapids, MI | Arlene Holland',
    description: 'Serving patients from Grand Rapids and surrounding MI communities. Expert psychiatric care with convenient telehealth options available.',
  },
}

export default function GrandRapidsMIPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>Grand Rapids, MI</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
            Mental Health Near Grand Rapids, MI
          </h1>
          <p className="text-xl mb-8 max-w-3xl leading-relaxed opacity-95">
            Serving patients from Grand Rapids and surrounding MI communities. Expert psychiatric care is closer than you think.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300"
          >
            Schedule in Grand Rapids
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Serving the Grand Rapids Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Located conveniently for Grand Rapids residents, our practice provides comprehensive mental health services to patients throughout West Michigan. Whether you're in downtown Grand Rapids, East Grand Rapids, Kentwood, or surrounding communities, quality psychiatric care is within easy reach. Many of our Grand Rapids patients appreciate the straightforward commute and accessible location.
            </p>
            <p>
              Grand Rapids families choose Arlene Holland for personalized, evidence-based mental health care that respects your time and unique needs. We understand the local community and offer flexible appointment scheduling including telehealth options—perfect for busy professionals, parents, and anyone preferring the convenience of care from home. Our approach combines clinical expertise with genuine understanding of the challenges facing Grand Rapids residents today.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border-2 border-[var(--color-border)] animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving Grand Rapids, MI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Services Available to Grand Rapids Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive diagnostic assessments to understand your mental health needs and develop personalized treatment plans for Grand Rapids patients.
              </p>
              <a href="/services/psychiatric-evaluation" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert medication management with ongoing monitoring and adjustments to ensure optimal mental health outcomes for our Grand Rapids community.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Secure virtual appointments that bring quality mental health care directly to your home in Grand Rapids—no commute necessary.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6 text-center">
            For Grand Rapids residents who prefer the convenience of virtual care, we offer comprehensive telehealth services that deliver the same high-quality psychiatric care from the comfort of your home. Whether you're managing a busy schedule, prefer minimal travel, or simply value the flexibility of remote appointments, our secure telehealth platform makes expert mental health care accessible.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed text-center">
            Most insurance plans cover telehealth visits at the same rate as in-person appointments. Grand Rapids patients can schedule virtual consultations, medication management sessions, and follow-up care—all through our HIPAA-compliant platform designed for your privacy and convenience.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                How far is your practice from Grand Rapids?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our office is conveniently accessible for Grand Rapids residents, with a straightforward commute via major highways. Many patients from downtown Grand Rapids, East Grand Rapids, Kentwood, and surrounding areas find us easy to reach. For those who prefer not to drive, we offer full-service telehealth appointments that eliminate travel time entirely.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                What are the best directions from Grand Rapids?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Patients from Grand Rapids typically find the most direct route via US-131 or I-196, depending on your specific location within the metro area. Detailed directions and GPS coordinates are provided when you schedule your appointment. Our location offers easy access and ample parking for a stress-free arrival.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Do you offer telehealth for Grand Rapids residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services to all Grand Rapids patients. Virtual appointments provide the same expert care as in-person visits through our secure, HIPAA-compliant platform. Telehealth is perfect for busy schedules, follow-up appointments, or anyone who values the convenience of receiving care from home. Most insurance plans cover telehealth at the same rate as office visits.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Is parking available for Grand Rapids patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide ample free parking directly adjacent to our office. The facility is fully accessible, with convenient entrance access and accommodations for patients with mobility needs. We want your visit to be as comfortable and stress-free as possible from the moment you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Expert Care from Grand Rapids
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Take the first step toward better mental health. Schedule your consultation today and experience compassionate, evidence-based psychiatric care designed for Grand Rapids residents.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}