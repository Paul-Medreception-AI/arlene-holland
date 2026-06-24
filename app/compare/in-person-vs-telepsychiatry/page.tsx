import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In-Person vs Telepsychiatry: Which Appointment Type Is Right for You? | Arlene Holland',
  description: 'Compare in-person psychiatric appointments with telepsychiatry services. Learn about effectiveness, convenience, cost, and which option best fits your mental health needs.',
  keywords: 'in-person psychiatry, telepsychiatry, online psychiatry, virtual mental health, psychiatric appointment types, telehealth vs in-person',
  openGraph: {
    title: 'In-Person vs Telepsychiatry Comparison | Arlene Holland',
    description: 'Expert comparison to help you choose between in-person and virtual psychiatric care.',
    type: 'article',
  },
}

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all duration-300">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all duration-300">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light leading-tight mb-6">
            In-Person vs Telepsychiatry: Which Appointment Type Is Right for You?
          </h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
            An evidence-based comparison to help you make an informed decision about your mental health care
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-center mb-12 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">In-Person Care</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">Telepsychiatry</div>
            </div>
            
            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors duration-300">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Clinical Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">Highly effective; gold standard with full physical assessment capabilities</div>
              <div className="p-6 border-l border-[var(--color-border)]">Equally effective for most conditions; research shows comparable outcomes</div>
            </div>
            
            {/* Convenience */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)] hover:bg-white transition-colors duration-300">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Convenience</div>
              <div className="p-6 border-l border-[var(--color-border)]">Requires travel time, parking, waiting room time</div>
              <div className="p-6 border-l border-[var(--color-border)]">Join from anywhere with internet; no travel or wait time</div>
            </div>
            
            {/* Privacy */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors duration-300">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Privacy Setting</div>
              <div className="p-6 border-l border-[var(--color-border)]">Private clinical office; may encounter others in waiting area</div>
              <div className="p-6 border-l border-[var(--color-border)]">Complete privacy in your chosen location; HIPAA-compliant platform</div>
            </div>
            
            {/* Cost */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)] hover:bg-white transition-colors duration-300">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Cost Factors</div>
              <div className="p-6 border-l border-[var(--color-border)]">Session fee plus travel costs (gas, parking, time off work)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Session fee only; saves on travel and time expenses</div>
            </div>
            
            {/* Time Commitment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors duration-300">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Time Commitment</div>
              <div className="p-6 border-l border-[var(--color-border)]">2-3 hours total (travel, waiting, session)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Session time only (typically 30-60 minutes)</div>
            </div>
            
            {/* Availability */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)] hover:bg-white transition-colors duration-300">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Scheduling Flexibility</div>
              <div className="p-6 border-l border-[var(--color-border)]">Limited to office hours and location</div>
              <div className="p-6 border-l border-[var(--color-border)]">More flexible scheduling options; easier to fit into busy schedules</div>
            </div>
            
            {/* Best For */}
            <div className="grid grid-cols-3 hover:bg-[var(--color-cream)] transition-colors duration-300">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Best Suited For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Initial evaluations, complex cases requiring physical exam, patients preferring face-to-face</div>
              <div className="p-6 border-l border-[var(--color-border)]">Follow-ups, stable patients, those with mobility/travel challenges, busy professionals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] mb-4">
                  In-Person Psychiatric Care: The Traditional Approach
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-[var(--color-ink)] leading-relaxed ml-12">
              <p>
                In-person psychiatric appointments remain the gold standard for comprehensive mental health evaluation and treatment. During these sessions, you meet face-to-face with your psychiatrist in a clinical setting, allowing for complete physical assessment, observation of non-verbal cues, and the establishment of a traditional therapeutic relationship.
              </p>
              <p>
                This format excels for initial psychiatric evaluations, where a thorough assessment including vital signs, physical examination, and detailed observation informs diagnosis and treatment planning. Many patients value the ritual of attending appointments, finding that the dedicated time away from home helps them focus entirely on their mental health needs without the distractions of their daily environment.
              </p>
              <p>
                In-person care is particularly beneficial for complex cases involving multiple conditions, patients who benefit from physical reassurance, those with severe symptoms requiring close monitoring, or individuals who simply prefer traditional face-to-face interaction. The physical presence allows for immediate intervention if needed and facilitates certain types of therapeutic techniques that rely on shared physical space.
              </p>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] mb-4">
                  Telepsychiatry: Modern, Evidence-Based Care
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-[var(--color-ink)] leading-relaxed ml-12">
              <p>
                Telepsychiatry delivers the same quality psychiatric care through secure video conferencing technology. Extensive research over the past decade has consistently demonstrated that telepsychiatry achieves clinical outcomes equivalent to in-person treatment for the vast majority of mental health conditions, including depression, anxiety disorders, ADHD, and medication management.
              </p>
              <p>
                The convenience factor cannot be overstated: patients can attend appointments from home, work, or any private location with reliable internet, eliminating travel time, parking hassles, and waiting room anxiety. This accessibility has proven particularly valuable for patients with mobility limitations, those living in rural areas, busy professionals, parents managing childcare, and individuals for whom leaving home presents a significant barrier to care.
              </p>
              <p>
                Telepsychiatry appointments often feel more natural and less intimidating than traditional office visits. Many patients report feeling more comfortable and open when in their own environment. The technology has matured significantly, with HIPAA-compliant platforms ensuring complete privacy and security. While certain situations—such as complex initial evaluations or acute crises—may still warrant in-person assessment, the majority of psychiatric care, including ongoing medication management and supportive therapy, translates seamlessly to the virtual format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide: A Decision Framework
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  Choose In-Person If...
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">This is your first psychiatric evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have complex medical conditions requiring physical examination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You prefer traditional face-to-face interaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You lack reliable internet access or private space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You find the ritual of going to appointments therapeutic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You're uncomfortable with video technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your symptoms require close physical monitoring</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Choose Telepsychiatry If...
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You're scheduling a follow-up or medication management visit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have a busy schedule with limited flexibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Travel to the office is difficult or time-consuming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You prefer the convenience and privacy of home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have mobility challenges or transportation limitations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You're comfortable with video technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You want to save time and reduce the overall commitment</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-xl border-2 border-[var(--color-primary)]">
              <p className="text-[var(--color-ink)] text-center leading-relaxed">
                <strong className="text-[var(--color-primary)]">Remember:</strong> You're not locked into one format. Many patients use a hybrid approach—starting with an in-person evaluation and then switching to telepsychiatry for ongoing care, or mixing both based on their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-center mb-12 text-[var(--color-ink)]">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors duration-300 list-none flex items-center justify-between">
                <span>Is telepsychiatry as effective as in-person treatment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform duration-300" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                Yes. Multiple peer-reviewed studies have demonstrated that telepsychiatry produces clinical outcomes equivalent to in-person care for most mental health conditions. Research published in journals like JAMA Psychiatry and The Lancet shows comparable patient satisfaction, symptom improvement, and medication adherence rates. The American Psychiatric Association formally recognizes telepsychiatry as a legitimate, effective treatment modality.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors duration-300 list-none flex items-center justify-between">
                <span>Will my insurance cover telepsychiatry appointments?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform duration-300" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                Most insurance plans now cover telepsychiatry at the same rate as in-person visits, especially following policy changes during the COVID-19 pandemic. Coverage varies by plan and state, so it's important to verify your specific benefits. Our office can help you understand your coverage and will work with your insurance provider to ensure you receive the benefits you're entitled to.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors duration-300 list-none flex items-center justify-between">
                <span>What technology do I need for a telepsychiatry appointment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform duration-300" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                You need surprisingly little: a smartphone, tablet, or computer with a camera and microphone, plus a reliable internet connection. No special software downloads are typically required—most platforms work through your web browser. We use HIPAA-compliant, encrypted platforms that prioritize your privacy and security. A private, quiet space where you can speak confidentially is also important.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors duration-300 list-none flex items-center justify-between">
                <span>Can I switch between in-person and telepsychiatry appointments?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform duration-300" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                Absolutely. Many patients use a flexible, hybrid approach based on their current needs and circumstances. You might prefer in-person for your initial evaluation but switch to telepsychiatry for follow-ups, or attend virtually during busy periods and in-person when your schedule allows. We encourage this flexibility and will work with you to schedule the format that best suits each appointment.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors duration-300 list-none flex items-center justify-between">
                <span>Are there any conditions that shouldn't be treated via telepsychiatry?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform duration-300" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                Most psychiatric conditions can be effectively managed through telepsychiatry. However, acute crises requiring immediate intervention, initial evaluations of complex medical-psychiatric interactions, or situations where a physical examination is clinically necessary may be better suited for in-person care. During your consultation, we'll assess whether telepsychiatry is appropriate for your specific situation and recommend the best approach for your needs.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-6">
            Still Deciding? Let's Discuss Your Options
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Schedule a brief consultation to discuss which appointment format best fits your needs, lifestyle, and treatment goals.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Discuss Your Options
          </a>
          <p className="mt-6 text-sm opacity-90">
            No obligation · Flexible scheduling · Insurance accepted
          </p>
        </div>
      </section>
    </main>
  )
}