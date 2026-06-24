import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Hormones Affect Mental Health Throughout Life | Arlene Holland',
  description: 'Understand the powerful connection between hormones and mental health across different life stages. Expert insights on hormonal changes, mood, and emotional wellbeing.',
  keywords: 'hormones and mental health, hormonal changes, mood disorders, reproductive health, menopause mental health, postpartum depression, thyroid and mood',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            How Hormones Affect Mental Health Throughout Life
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Holland Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Have you ever noticed how your mood seems to shift with your cycle? Or felt unexpectedly anxious during a time of hormonal change? You're not imagining it. The intricate relationship between hormones and mental health is one of the most profound—and often overlooked—aspects of our emotional wellbeing. From adolescence through menopause and beyond, hormonal fluctuations can significantly impact how we think, feel, and experience the world around us.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Understanding this connection isn't just about explaining away mood swings—it's about recognizing legitimate physiological processes that deserve attention, validation, and appropriate care. Let's explore how hormones shape our mental health journey throughout life.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Hormone-Brain Connection
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Hormones are chemical messengers that travel through your bloodstream, regulating everything from metabolism to mood. Several key hormones have direct effects on brain function and emotional regulation:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Estrogen and progesterone</strong> influence serotonin, dopamine, and other neurotransmitters that regulate mood, sleep, and anxiety. When these reproductive hormones fluctuate—whether during menstrual cycles, pregnancy, or menopause—they can trigger significant emotional changes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Cortisol</strong>, our primary stress hormone, affects memory, concentration, and emotional resilience. Chronic elevation can contribute to anxiety and depression.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <strong>Thyroid hormones</strong> regulate metabolism and energy levels, with both hyperthyroidism and hypothyroidism capable of mimicking or exacerbating mental health conditions.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Hormones Across the Lifespan
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Adolescence and Young Adulthood</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Puberty brings dramatic hormonal surges that can intensify emotions and contribute to the onset of mental health conditions. Studies show that depression rates increase significantly during adolescence, particularly in young women, coinciding with the establishment of menstrual cycles. This isn't weakness—it's biology meeting developmental psychology during a vulnerable period.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Reproductive Years</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Many women experience premenstrual syndrome (PMS) or its more severe form, premenstrual dysphoric disorder (PMDD), characterized by mood swings, irritability, anxiety, and depression in the days before menstruation. These aren't character flaws—they're responses to the rapid drop in estrogen and progesterone.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Pregnancy and the postpartum period represent some of the most dramatic hormonal shifts humans experience. While "baby blues" affect up to 80% of new mothers, postpartum depression and anxiety are serious conditions affecting 15-20% of birthing parents, requiring professional support.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Perimenopause and Menopause</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            The transition to menopause, typically occurring in the 40s and 50s, involves fluctuating and ultimately declining estrogen levels. Many women experience increased anxiety, irritability, difficulty concentrating, and depressive symptoms during this time. Sleep disruption from hot flashes can further compound mental health challenges.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Understanding the hormonal basis of mood changes doesn't diminish your experience—it validates it and opens pathways to effective treatment."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When Hormones and Mental Health Intersect
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            It's important to recognize that hormonal influences don't exist in isolation. They interact with:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Genetic predisposition</strong> to mood disorders</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Life stressors</strong> and environmental factors</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Past trauma</strong> or adverse experiences</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Sleep quality</strong> and lifestyle factors</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Social support</strong> and relationship quality</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Hormones may be one piece of the puzzle, but addressing them can significantly improve overall mental health outcomes.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Signs Your Hormones May Be Affecting Your Mental Health
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Consider hormone-related factors if you notice:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mood changes that follow a <strong>cyclical pattern</strong> (tied to menstrual cycle, seasons, etc.)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Symptoms that began during <strong>major hormonal transitions</strong> (puberty, pregnancy, perimenopause)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Physical symptoms</strong> accompanying mood changes (hot flashes, irregular periods, fatigue)</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mood symptoms that <strong>don't fully respond</strong> to traditional mental health treatment alone</span>
            </li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Treatment and Support Options
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            The good news is that hormone-related mental health concerns are highly treatable. Effective approaches include:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Comprehensive evaluation:</strong> Working with providers who understand both mental health and hormonal health can ensure accurate diagnosis. This may include hormone level testing, tracking symptoms across menstrual cycles, and assessing thyroid function.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Medication management:</strong> Depending on your situation, treatment might include antidepressants (particularly SSRIs, which can be effective for PMDD), hormone therapy, thyroid medication, or birth control pills to stabilize hormonal fluctuations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT) and other evidence-based approaches help you develop coping strategies and address thought patterns regardless of their hormonal triggers.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Lifestyle modifications:</strong> Regular exercise, stress management, adequate sleep, and nutrition can support both hormonal balance and mental health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <strong>Integrated care:</strong> The most effective treatment often involves coordination between mental health providers, primary care physicians, and sometimes endocrinologists or gynecologists.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Moving Forward with Understanding
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Recognizing the role hormones play in mental health is empowering. It means your struggles have a physiological basis, effective treatments exist, and you deserve comprehensive care that addresses all aspects of your wellbeing.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            You don't have to navigate these challenges alone or dismiss your experiences as "just hormones." Hormonal influences on mental health are real, significant, and worthy of professional attention.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you've noticed patterns between your hormonal cycles and mental health, or if you're going through a major hormonal transition and struggling emotionally, reaching out for support is a sign of strength and self-awareness. With the right evaluation and treatment plan, you can find relief and regain your sense of balance.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">Written by the Arlene Holland Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">Board-certified providers specializing in Mental Health, committed to providing compassionate, evidence-based care and patient education.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Understanding Anxiety: When Worry Becomes Overwhelming</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn to recognize the signs of anxiety disorders and discover evidence-based treatment approaches.</p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Self-Care Strategies for Better Mental Health</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Practical, sustainable approaches to supporting your emotional wellbeing in daily life.</p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>When to Seek Help: Recognizing the Signs</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Understanding when professional support can make a difference in your mental health journey.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you navigate your mental health journey with compassion and expertise.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}