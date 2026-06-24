import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Arlene Holland" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark)]/85 to-[var(--color-primary)]/75" />
        <div className="relative max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight leading-tight" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Expert Mental Health Treatment Tailored to Your Unique Journey
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Dr. Arlene Holland provides evidence-based psychiatric care with a focus on understanding your whole story. Experience compassionate treatment that addresses not just symptoms, but the root causes of mental health challenges.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Schedule Your Consultation
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Board-Certified Psychiatrist</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">15+ Years Clinical Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Evidence-Based Treatment Approaches</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Holistic Mental Health Philosophy</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center text-[var(--color-ink)] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Comprehensive mental health services designed to address your unique needs with compassion and expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive diagnostic assessments that explore your mental health history, current symptoms, and life circumstances. We create personalized treatment plans based on a thorough understanding of your unique needs.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Careful prescription and monitoring of psychiatric medications with attention to effectiveness and side effects. We prioritize finding the right medication at the right dose for optimal symptom relief.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Psychotherapy
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Evidence-based talk therapy including cognitive behavioral therapy, interpersonal therapy, and supportive counseling. Therapy sessions focus on developing coping skills and addressing underlying patterns.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Mental Health Care Rooted in Compassion and Evidence
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Dr. Arlene Holland founded her practice with a simple but powerful belief: every person deserves mental health care that sees them as a whole human being, not just a diagnosis. With over 15 years of experience in psychiatry, Dr. Holland has witnessed how transformative truly personalized care can be. She takes the time to understand not just your symptoms, but your life story, your strengths, your challenges, and your goals for treatment.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Our practice combines the best of evidence-based medicine with a humanistic approach to care. We stay current with the latest research in psychopharmacology and psychotherapy while never losing sight of the therapeutic relationship at the heart of healing. Whether you're struggling with depression, anxiety, ADHD, or other mental health challenges, we create treatment plans that are tailored to your specific needs and preferences. We believe in collaborative decision-making, where you are an active partner in your care.
              </p>
              <Link href="/team" className="text-[var(--color-primary)] font-semibold hover:underline">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-20 h-20 stroke-[var(--color-primary)] opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="text-7xl text-[var(--color-primary)] leading-none mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                "
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed mb-6">
                Dr. Holland changed my life. After years of feeling misunderstood by other providers, she finally took the time to really listen and understand what I was going through. Her approach to treating my depression and anxiety has been thoughtful, evidence-based, and incredibly effective. I finally feel like myself again.
              </p>
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="font-bold text-[var(--color-ink)]">Jennifer</p>
                <p className="text-sm text-[var(--color-muted)]">Depression & Anxiety Patient</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="text-7xl text-[var(--color-primary)] leading-none mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                "
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed mb-6">
                Getting diagnosed with ADHD as an adult was overwhelming, but Dr. Holland made the process so much easier. She explained everything clearly, answered all my questions, and helped me find a treatment plan that actually works for my lifestyle. My productivity and focus have improved dramatically, and I feel more in control of my life.
              </p>
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="font-bold text-[var(--color-ink)]">Michael</p>
                <p className="text-sm text-[var(--color-muted)]">ADHD Treatment Patient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                01
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Schedule Your Initial Consultation
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Contact our office by phone or through our secure online form to schedule your first appointment. We'll gather basic information and answer any questions you have about the process, insurance, or what to expect during your visit.
              </p>
            </div>
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                02
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Complete Your Comprehensive Evaluation
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                During your first appointment, Dr. Holland will conduct a thorough assessment of your mental health history, current symptoms, and treatment goals. This collaborative session typically lasts 60-90 minutes and forms the foundation of your personalized treatment plan.
              </p>
            </div>
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                03
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Begin Your Personalized Treatment
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Based on your evaluation, we'll develop a treatment plan that may include medication, therapy, lifestyle modifications, or a combination approach. You'll have ongoing support with regular follow-up appointments to monitor progress and adjust your treatment as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Compassionate Mental Health Care That Transforms Lives
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Take the first step toward better mental health. Schedule your consultation today.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}