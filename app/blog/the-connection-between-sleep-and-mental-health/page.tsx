import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Connection Between Sleep and Mental Health | Arlene Holland',
  description: 'Discover how sleep quality impacts mental health and learn evidence-based strategies to improve both your sleep and emotional well-being.',
  keywords: 'sleep and mental health, insomnia, sleep disorders, anxiety, depression, sleep hygiene, mental wellness',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Connection Between Sleep and Mental Health
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Have you ever noticed how a poor night's sleep can leave you feeling irritable, anxious, or unable to focus the next day? Or perhaps you've experienced restless nights during times of stress or emotional distress? You're not alone. The relationship between sleep and mental health is profound, complex, and bidirectional—each influences the other in ways that can create either a cycle of wellness or a spiral of difficulty.
            </p>
            <p className="mb-6">
              Understanding this connection is crucial for anyone looking to improve their mental well-being. Quality sleep isn't just about feeling rested; it's a fundamental pillar of emotional resilience, cognitive function, and overall mental health.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How Sleep Affects Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              During sleep, your brain performs essential maintenance functions that directly impact your emotional and psychological well-being. Sleep helps consolidate memories, process emotions, and clear metabolic waste products from the brain. When sleep is disrupted or insufficient, these critical processes are compromised.
            </p>
            <p className="mb-6">
              Research consistently shows that inadequate sleep can lead to increased emotional reactivity, difficulty regulating emotions, and heightened stress responses. The prefrontal cortex—the brain region responsible for rational thinking and emotional control—becomes less effective when we're sleep-deprived, while the amygdala, our brain's alarm system, becomes hyperactive.
            </p>
            <p className="mb-6">
              Chronic sleep deprivation has been linked to an increased risk of developing mental health conditions including depression, anxiety disorders, and even more serious conditions like bipolar disorder and psychosis. In fact, sleep problems often precede the onset of mental health issues, serving as an early warning sign that shouldn't be ignored.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How Mental Health Affects Sleep
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The relationship works both ways. Mental health conditions frequently disrupt sleep patterns, creating a challenging cycle that can be difficult to break without intervention.
            </p>
            <p className="mb-6">
              Depression often causes early morning awakening or excessive sleeping (hypersomnia). Anxiety can make it difficult to fall asleep as worries race through your mind, or cause you to wake frequently throughout the night. Post-traumatic stress disorder (PTSD) is commonly associated with nightmares and hypervigilance that interfere with restorative sleep. Bipolar disorder can dramatically alter sleep needs during different mood episodes.
            </p>
            <p className="mb-6">
              Even everyday stress and worry can activate your body's fight-or-flight response, elevating cortisol levels and making it physiologically harder to achieve the relaxed state necessary for sleep. This creates a frustrating feedback loop: poor mental health disrupts sleep, and poor sleep worsens mental health.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "Quality sleep isn't a luxury—it's a biological necessity that directly influences our emotional resilience and mental clarity."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Science Behind Sleep and Emotional Regulation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Scientific research has revealed fascinating insights into how sleep affects our emotional brain. During REM (rapid eye movement) sleep, our brains process emotional experiences from the day, essentially "filing away" memories and reducing their emotional charge. This is why things often feel more manageable after a good night's sleep—your brain has literally processed and organized your emotional experiences.
            </p>
            <p className="mb-6">
              Studies using brain imaging have shown that sleep-deprived individuals exhibit up to 60% more activity in the amygdala when viewing emotionally negative images compared to well-rested individuals. This heightened emotional reactivity explains why we might overreact to minor frustrations when we're tired.
            </p>
            <p className="mb-6">
              Additionally, sleep plays a crucial role in maintaining the balance of neurotransmitters like serotonin, dopamine, and norepinephrine—chemicals that regulate mood, motivation, and stress response. Disrupted sleep can throw these delicate systems out of balance, contributing to symptoms of depression and anxiety.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Strategies to Improve Both Sleep and Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that improving your sleep can have significant positive effects on your mental health, and vice versa. Here are evidence-based strategies that address both:
            </p>
            
            <div className="space-y-3 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Establish a consistent sleep schedule:</strong> Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Create a calming bedtime routine:</strong> Engage in relaxing activities 30-60 minutes before bed, such as reading, gentle stretching, or meditation.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Optimize your sleep environment:</strong> Keep your bedroom cool, dark, and quiet. Consider blackout curtains, white noise machines, or earplugs if needed.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit screen time before bed:</strong> Blue light from devices suppresses melatonin production. Try to avoid screens for at least an hour before sleep.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be mindful of caffeine and alcohol:</strong> Avoid caffeine after early afternoon and limit alcohol, which can disrupt sleep quality even if it initially makes you drowsy.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Exercise regularly:</strong> Physical activity improves both sleep quality and mental health, but avoid vigorous exercise close to bedtime.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice stress management:</strong> Incorporate relaxation techniques like deep breathing, progressive muscle relaxation, or mindfulness meditation into your daily routine.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Get morning sunlight exposure:</strong> Natural light helps regulate your circadian rhythm and can improve both sleep and mood.</span>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While self-care strategies can be helpful, persistent sleep problems or mental health concerns warrant professional evaluation. Consider seeking help if:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You've tried improving sleep hygiene for several weeks without improvement</li>
              <li>Sleep problems are significantly impacting your daily functioning</li>
              <li>You experience excessive daytime sleepiness or fall asleep at inappropriate times</li>
              <li>You have loud snoring, gasping, or breathing pauses during sleep (possible sleep apnea)</li>
              <li>You're experiencing symptoms of depression, anxiety, or other mental health concerns</li>
              <li>You're using alcohol or medications to help you sleep</li>
            </ul>
            <p className="mb-6">
              A mental health professional can help identify underlying issues, provide evidence-based treatments like Cognitive Behavioral Therapy for Insomnia (CBT-I), and work with you to develop a comprehensive treatment plan that addresses both sleep and mental health concerns.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The connection between sleep and mental health is undeniable and deeply intertwined. By understanding this relationship and taking steps to improve both, you're investing in your overall well-being and resilience. Remember that change takes time, and progress isn't always linear. Be patient with yourself as you work toward better sleep and mental health.
            </p>
            <p className="mb-6">
              If you're struggling with sleep issues or mental health concerns, you don't have to face them alone. Professional support can make a significant difference in breaking the cycle and helping you achieve the restful sleep and emotional well-being you deserve.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to providing compassionate, evidence-based care and educational resources to support your well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Anxiety: Symptoms and Coping Strategies</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn to recognize anxiety symptoms and discover effective techniques for managing stress and worry.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Wellness</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Building Resilience: Practical Steps for Emotional Well-Being</h4>
                <p className="text-[var(--color-muted)] text-sm">Develop the skills and habits that support lasting emotional health and resilience.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">What to Expect in Your First Therapy Session</h4>
                <p className="text-[var(--color-muted)] text-sm">Prepare for your first appointment with helpful information about the therapy process.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}