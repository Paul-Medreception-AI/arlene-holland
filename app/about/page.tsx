import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </div>
          <h1 className="text-6xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Mental Health Care Rooted in Compassion and Evidence
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl">
            Personalized psychiatric treatment that honors your unique story and supports lasting transformation
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 pr-0 lg:pr-12">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                Dr. Arlene Holland founded her practice with a simple but powerful belief: every person deserves mental health care that sees them as a whole human being, not just a diagnosis. With over 15 years of experience in psychiatry, Dr. Holland has witnessed how transformative truly personalized care can be. She takes the time to understand not just your symptoms, but your life story, your strengths, your challenges, and your goals for treatment.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                Our practice combines the best of evidence-based medicine with a humanistic approach to care. We stay current with the latest research in psychopharmacology and psychotherapy while never losing sight of the therapeutic relationship at the heart of healing. Whether you're struggling with depression, anxiety, ADHD, or other mental health challenges, we create treatment plans that are tailored to your specific needs and preferences. We believe in collaborative decision-making, where you are an active partner in your care.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                What sets our practice apart is our commitment to accessibility and continuity of care. We offer flexible appointment scheduling, including telehealth options, to ensure that mental health treatment fits into your life. Dr. Holland personally oversees every aspect of your care and is available to her patients when they need support. We accept most major insurance plans and work with you to make treatment affordable. Our goal is simple: to help you not just manage symptoms, but thrive in all areas of your life.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] sticky top-8">
                <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Credentials & Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Board-Certified Psychiatrist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">15+ Years Clinical Experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Medical Degree from Accredited Institution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Completed Psychiatry Residency Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Active Medical License</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Member, American Psychiatric Association</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Continuing Medical Education Certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Evidence-Based Treatment Specialist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Evidence-Based Foundation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We ground every treatment decision in the latest psychiatric research and proven therapeutic methods. Our commitment to continuing education ensures you receive care backed by science and clinical excellence.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Whole-Person Understanding
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Mental health is influenced by your biology, psychology, relationships, and life experiences. We take time to understand your complete story, treating you as a unique individual rather than a set of symptoms.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Collaborative Partnership
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                You are the expert on your own experience, and we believe in shared decision-making. Together we develop treatment plans that align with your values, preferences, and goals for a meaningful life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step toward compassionate, personalized mental health care that addresses your unique needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}