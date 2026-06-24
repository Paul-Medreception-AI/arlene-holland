import Link from 'next/link'

export const metadata = {
  title: 'Mental Health Near Zeeland, MI | Arlene Holland',
  description: 'Serving patients from Zeeland and surrounding MI communities. Expert psychiatric care is closer than you think. Telehealth available.',
}

export default function ZeelandMIPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span>›</span>
            <span>Zeeland, MI</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 animate-fade-up" style={{fontFamily: 'Cormorant, serif'}}>
            Mental Health Near Zeeland, MI
          </h1>
          <p className="text-xl mb-8 opacity-95 max-w-3xl animate-fade-up">
            Serving patients from Zeeland and surrounding MI communities. Expert psychiatric care is closer than you think.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all animate-fade-up"
          >
            Schedule in Zeeland
          </Link>
        </div>
      </section>

      {/* Serving Zeeland Area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-8 text-[var(--color-ink)] animate-fade-up" style={{fontFamily: 'Cormorant, serif'}}>
            Serving the Zeeland Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12 animate-fade-up">
            <p>
              Our practice is conveniently located just a short drive from Zeeland, MI, making quality mental health care accessible to residents throughout Ottawa County. Whether you're coming from downtown Zeeland, near Zeeland East High School, or from surrounding communities like Holland, Hudsonville, or Jamestown, our office is easily reachable via I-196 and US-31. Most Zeeland patients find the commute takes less than 20 minutes, making it simple to fit appointments into your schedule.
            </p>
            <p>
              Many Zeeland residents choose our practice because we offer specialized psychiatric services that may not be readily available locally, including comprehensive diagnostic evaluations, medication management, and evidence-based treatment for complex conditions. We also understand that busy schedules and travel constraints can be challenging, which is why we offer secure telehealth appointments for patients throughout Michigan—allowing you to receive expert care from the comfort of your Zeeland home.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Conveniently Located Near Zeeland, MI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available to Zeeland Patients */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{fontFamily: 'Cormorant, serif'}}>
            Services Available to Zeeland Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Comprehensive diagnostic assessments to identify mental health conditions and develop personalized treatment plans for Zeeland patients.
              </p>
              <Link href="/services/evaluation" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Expert prescribing and monitoring of psychiatric medications with ongoing support to optimize treatment outcomes.
              </p>
              <Link href="/services/medication-management" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Secure video appointments that bring quality psychiatric care directly to your home in Zeeland—no travel required.
              </p>
              <Link href="/services/telehealth" className="text-[var(--color-primary)] font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth for Zeeland */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-serif text-3xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              For Zeeland residents with busy schedules, mobility challenges, or who simply prefer the convenience of home appointments, we offer comprehensive telehealth services. Our secure, HIPAA-compliant video platform allows you to meet with our psychiatric providers from anywhere in Michigan—whether you're at home, at work during lunch, or even traveling.
            </p>
            <p>
              Telehealth appointments provide the same quality care as in-person visits, including psychiatric evaluations, medication management, and follow-up consultations. Most major insurance plans cover telehealth services at the same rate as office visits, and many patients find virtual appointments easier to fit into their daily routines. All you need is a smartphone, tablet, or computer with internet access.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-12 text-[var(--color-ink)] text-center animate-fade-up" style={{fontFamily: 'Cormorant, serif'}}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-l-4 border-[var(--color-primary)] pl-6 animate-fade-up">
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                How far is your office from Zeeland?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located within a 15-20 minute drive from most areas of Zeeland, MI. We're easily accessible via I-196 and US-31, with straightforward routes from downtown Zeeland, the north side near Riley Street, and surrounding communities.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-l-4 border-[var(--color-primary)] pl-6 animate-fade-up">
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                What are the best directions from Zeeland?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Zeeland, take I-196 or US-31 following signs toward our location. Detailed directions and GPS coordinates are provided when you schedule your appointment. We recommend allowing a few extra minutes for your first visit to find parking and check in.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-l-4 border-[var(--color-primary)] pl-6 animate-fade-up">
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                Do I have to come to the office, or can I use telehealth?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer both in-person and telehealth appointments to Zeeland patients. While some initial evaluations may benefit from in-person visits, many follow-up appointments and medication management sessions can be conducted via secure video. We'll work with you to determine the best format for your care.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-l-4 border-[var(--color-primary)] pl-6 animate-fade-up">
              <h3 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
                Is parking available, and is your office accessible?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide ample free parking for all patients, including accessible spaces near the entrance. Our office is fully ADA-compliant with wheelchair accessibility, accessible restrooms, and accommodations for patients with mobility needs. If you have specific accessibility questions, please call us before your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-serif text-4xl font-light mb-6" style={{fontFamily: 'Cormorant, serif'}}>
            Get Expert Care from Zeeland
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Quality mental health care is closer than you think. Schedule your appointment today.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}