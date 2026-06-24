import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mental Health Near Grand Haven, MI | Arlene Holland',
  description: 'Serving patients from Grand Haven and surrounding MI communities. Expert psychiatric care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Mental Health Near Grand Haven, MI | Arlene Holland',
    description: 'Serving patients from Grand Haven and surrounding MI communities. Expert psychiatric care is closer than you think.',
    url: 'https://arleneholland.net/locations/grand-haven-mi',
    siteName: 'Arlene Holland',
    locale: 'en_US',
    type: 'website',
  },
}

export default function GrandHavenPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Grand Haven, MI</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl font-light mb-6 leading-tight animate-fade-up">
            Mental Health Near Grand Haven, MI
          </h1>
          <p className="text-xl mb-8 max-w-3xl leading-relaxed opacity-95 animate-fade-up">
            Serving patients from Grand Haven and surrounding MI communities. Expert psychiatric care is closer than you think.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 animate-fade-up"
          >
            Schedule in Grand Haven
          </Link>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Serving the Grand Haven Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12 animate-fade-up">
            <p>
              Located within easy driving distance of Grand Haven, our practice welcomes patients from throughout West Michigan. Whether you're coming from downtown Grand Haven, the waterfront district, or surrounding communities like Spring Lake, Ferrysburg, or Norton Shores, quality mental health care is accessible and convenient. Most Grand Haven residents find the commute straightforward via US-31, making regular appointments manageable even with busy schedules.
            </p>
            <p>
              Many Grand Haven patients choose our practice because of our specialized expertise, comprehensive approach to mental health, and the personal attention that can be difficult to find locally. We also understand that travel isn't always convenient, which is why we offer secure telehealth services for Grand Haven residents—giving you access to expert psychiatric care from the comfort of your own home while maintaining the same high standard of treatment.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-3 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving Grand Haven, MI and Surrounding Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Services Available to Grand Haven Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3">Psychiatric Evaluation</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Comprehensive diagnostic assessments to understand your mental health needs and develop personalized treatment plans for Grand Haven patients.
              </p>
              <Link href="/services/psychiatric-evaluation" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3">Medication Management</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Expert medication oversight and adjustment to optimize treatment outcomes while minimizing side effects for our Grand Haven clients.
              </p>
              <Link href="/services/medication-management" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3">Telehealth Services</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Secure virtual appointments that bring quality psychiatric care directly to Grand Haven residents, with flexible scheduling options.
              </p>
              <Link href="/services/telehealth" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="max-w-7xl mx-auto px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mb-6">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
            <p>
              For Grand Haven residents who prefer the convenience of virtual care or have difficulty traveling, our telehealth services provide the same expert psychiatric treatment from the comfort of your home. Through secure, HIPAA-compliant video sessions, you'll receive personalized attention and comprehensive mental health care without the commute.
            </p>
            <p>
              Most major insurance plans cover telehealth appointments at the same rate as in-person visits, making it an accessible option for Grand Haven patients. Whether you're managing a busy schedule, have transportation challenges, or simply prefer virtual care, telehealth ensures you receive consistent, high-quality mental health support.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="inline-block mt-6 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-dark)] transition-all duration-300"
          >
            Ask About Telehealth
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3">
                How far is your practice from Grand Haven?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our office is conveniently accessible from Grand Haven via US-31, typically a comfortable drive of 30-45 minutes depending on your exact location and traffic conditions. Many of our Grand Haven patients find the trip manageable for both regular appointments and initial consultations. We also offer telehealth as an alternative for those who prefer virtual visits.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3">
                What are the best directions from Grand Haven?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From downtown Grand Haven, take US-31 South. The route is straightforward and well-maintained year-round. Detailed directions with landmarks and turn-by-turn guidance will be provided when you schedule your appointment. We recommend allowing extra time for your first visit to account for parking and check-in.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Grand Haven residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure telehealth appointments for all Grand Haven patients. Virtual visits provide the same quality care as in-person appointments and are covered by most insurance plans. Telehealth is ideal for follow-up appointments, medication management sessions, and ongoing treatment—all from the comfort of your Grand Haven home.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="pb-8 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3">
                Is parking available for Grand Haven patients visiting your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide ample free parking directly adjacent to our office building with accessible spaces available near the entrance. Our facility is fully accessible and designed to ensure a comfortable, welcoming experience for all patients traveling from Grand Haven and surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-6 animate-fade-up">
            Get Expert Care from Grand Haven
          </h2>
          <p className="text-xl mb-8 opacity-95 animate-fade-up">
            Quality mental health treatment is within reach. Schedule your appointment today.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 animate-fade-up"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}