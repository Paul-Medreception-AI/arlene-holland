export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Resources & Patient Education
          </h1>
          <p className="text-xl text-white/90">
            Evidence-based information to support your mental health journey
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">
              Featured Article
            </div>
            <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              Understanding the Mind-Body Connection in Mental Health Treatment
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                The relationship between physical health and mental wellbeing is more profound than many people realize. Recent research continues to demonstrate that our mental state directly influences physical health outcomes, while physical conditions can significantly impact our emotional and psychological wellbeing. This bidirectional relationship forms the foundation of holistic mental health treatment.
              </p>
              <p>
                When treating conditions like depression and anxiety, addressing only the psychological symptoms often provides incomplete relief. Sleep patterns, nutrition, exercise, chronic pain, hormonal imbalances, and inflammatory conditions all play critical roles in mental health. A comprehensive psychiatric evaluation examines these interconnected factors to develop treatment plans that address the whole person, not just isolated symptoms.
              </p>
              <p>
                Integrating this understanding into treatment means considering how medication choices affect physical health, how lifestyle modifications support psychiatric interventions, and how managing physical conditions can improve mental health outcomes. This approach recognizes that sustainable mental wellness requires attention to the complex interplay between mind and body, leading to more effective and lasting improvements in quality of life.
              </p>
            </div>
            <div className="mt-8">
              <a href="/blog/mind-body-connection" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Article 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                ADHD
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Understanding ADHD in Adults: Signs You May Have Missed
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Many adults live with undiagnosed ADHD, attributing their struggles to personal failings rather than a treatable condition. Learn the common signs of adult ADHD and how proper diagnosis can transform daily functioning and quality of life.
              </p>
              <a href="/blog/adhd-in-adults" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Mental Health
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                5 Signs You May Need to See a Psychiatrist
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Knowing when to seek professional mental health care can be challenging. Explore five key indicators that psychiatric evaluation and treatment could significantly improve your wellbeing and help you regain control of your life.
              </p>
              <a href="/blog/when-to-see-psychiatrist" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Anxiety
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                The Difference Between Normal Worry and Anxiety Disorders
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Everyone experiences worry and stress, but when does it cross the line into a clinical anxiety disorder? Understanding this distinction is crucial for recognizing when professional treatment can provide relief and restore normalcy.
              </p>
              <a href="/blog/worry-vs-anxiety" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Depression
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Depression Is Not Just Sadness: Recognizing the Full Spectrum
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Depression manifests in many ways beyond persistent sadness. Physical symptoms, cognitive changes, and behavioral patterns all signal depressive disorders. Learn to recognize the full range of depression symptoms and available treatments.
              </p>
              <a href="/blog/depression-symptoms" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Treatment
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                What to Expect During Your First Psychiatric Appointment
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                First appointments with a psychiatrist can feel intimidating. This guide walks you through the entire process, from preparation to follow-up, helping you feel confident and prepared for your initial consultation.
              </p>
              <a href="/blog/first-appointment" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Medication
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Psychiatric Medications: Debunking Common Myths and Concerns
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Misconceptions about psychiatric medications prevent many people from accessing effective treatment. Explore the facts about how these medications work, potential side effects, and why they're a valuable tool in mental health care.
              </p>
              <a href="/blog/medication-myths" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Article 7 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Therapy
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Cognitive Behavioral Therapy: How Changing Thoughts Changes Lives
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                CBT is one of the most researched and effective forms of psychotherapy for anxiety, depression, and many other conditions. Discover how this evidence-based approach helps identify and modify unhelpful thought patterns.
              </p>
              <a href="/blog/cognitive-behavioral-therapy" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Article 8 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Wellness
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                The Role of Sleep in Mental Health: Why Rest Matters
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Sleep disturbances both contribute to and result from mental health conditions. Understanding the complex relationship between sleep and psychiatric symptoms is essential for comprehensive treatment and lasting recovery.
              </p>
              <a href="/blog/sleep-mental-health" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Article 9 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Recovery
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Building Resilience: Strategies for Long-Term Mental Wellness
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Mental health treatment extends beyond symptom management to building lasting resilience. Learn practical strategies for developing coping skills, maintaining wellness, and preventing relapse through challenging times.
              </p>
              <a href="/blog/building-resilience" className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all">
                Read More
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Begin Your Journey to Better Mental Health?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule your consultation with Dr. Holland and start your path to wellness today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}