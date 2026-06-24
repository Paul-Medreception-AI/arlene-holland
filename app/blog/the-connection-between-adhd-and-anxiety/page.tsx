import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Connection Between ADHD and Anxiety | Arlene Holland',
  description: 'Understanding how ADHD and anxiety often occur together, why they share common symptoms, and evidence-based strategies for managing both conditions effectively.',
  openGraph: {
    title: 'The Connection Between ADHD and Anxiety | Arlene Holland',
    description: 'Understanding how ADHD and anxiety often occur together, why they share common symptoms, and evidence-based strategies for managing both conditions effectively.',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
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
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Connection Between ADHD and Anxiety
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Holland Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've been diagnosed with ADHD and find yourself constantly worrying, restless, or overwhelmed by racing thoughts, you're not alone. The relationship between ADHD and anxiety is far more common than many people realize, affecting millions of individuals who struggle daily with the challenges of both conditions.
            </p>
            <p className="mb-6">
              Understanding how these two conditions interact is crucial—not just for accurate diagnosis, but for developing effective treatment strategies that address your unique needs. While ADHD and anxiety are distinct conditions, they share overlapping symptoms and can significantly amplify each other's effects, making everyday tasks feel insurmountable.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the Overlap
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research shows that approximately 50% of adults with ADHD also experience an anxiety disorder at some point in their lives. This high rate of comorbidity isn't coincidental—the two conditions share neurological pathways and can create a cyclical pattern where one exacerbates the other.
            </p>
            <p className="mb-6">
              ADHD affects executive functions like focus, organization, and impulse control. When these challenges interfere with daily responsibilities, it's natural to develop anxiety about meeting deadlines, forgetting important tasks, or managing relationships. Conversely, anxiety can worsen ADHD symptoms by making it even harder to concentrate, increasing restlessness, and overwhelming already taxed cognitive resources.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why ADHD Can Lead to Anxiety
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Living with untreated or unrecognized ADHD creates numerous situations that naturally breed anxiety. Chronic lateness, forgotten commitments, impulsive decisions, and difficulty completing projects can lead to shame, frustration, and fear of failure. Over time, these experiences compound, creating anticipatory anxiety about future situations.
            </p>
            <p className="mb-6">
              Many individuals with ADHD develop what's called "rejection sensitive dysphoria"—an extreme emotional sensitivity to perceived criticism or rejection. This heightened emotional response can trigger significant anxiety in social and professional settings, leading to avoidance behaviors that further limit opportunities and reinforce negative thought patterns.
            </p>
            <p className="mb-6">
              Additionally, the constant mental effort required to compensate for ADHD symptoms—attempting to focus, remember details, and stay organized—is mentally exhausting. This cognitive fatigue leaves less capacity for managing stress, making anxiety symptoms more pronounced and harder to regulate.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-serif">
              "Understanding that your anxiety might be related to ADHD is the first step toward finding treatment strategies that actually work for your unique brain."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Distinguishing Between ADHD and Anxiety Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the biggest challenges in treating co-occurring ADHD and anxiety is that they share several symptoms, making accurate diagnosis complex. Difficulty concentrating, restlessness, sleep problems, and irritability can stem from either condition—or both simultaneously.
            </p>
            <p className="mb-6">
              However, there are key differences. ADHD-related difficulty focusing tends to be constant and present across all situations, while anxiety-driven concentration problems are typically tied to specific worries or stressors. ADHD restlessness is more physical and constant, whereas anxiety-related restlessness often comes in waves tied to anxious thoughts.
            </p>
            <p className="mb-6">
              A comprehensive evaluation by a mental health professional experienced in both conditions is essential. They can tease apart which symptoms are primary ADHD features, which are anxiety-driven, and which result from the interaction between both conditions. This clarity is crucial for developing an effective treatment plan.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that both ADHD and anxiety are highly treatable conditions, and addressing one often improves the other. Treatment typically involves a combination of approaches tailored to your specific symptom profile and needs.
            </p>
            <p className="mb-6">
              Medication can be highly effective, though it requires careful management when both conditions are present. Stimulant medications for ADHD sometimes worsen anxiety symptoms initially, though this often improves with dosage adjustments or combination with anxiety management strategies. Non-stimulant ADHD medications may be preferred for those with significant anxiety. Some individuals benefit from medications that address both conditions simultaneously.
            </p>
            <p className="mb-6">
              Cognitive Behavioral Therapy (CBT) has strong evidence supporting its effectiveness for both ADHD and anxiety. CBT helps you identify and change unhelpful thought patterns, develop practical coping strategies, and build skills for managing symptoms. When both conditions are present, therapy can address the cyclical relationship between them, breaking patterns where one condition triggers the other.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Strategies for Daily Management
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond formal treatment, several evidence-based lifestyle strategies can help manage both ADHD and anxiety symptoms:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Establish consistent routines:</strong>
                  <span className="text-[var(--color-ink)]"> Predictable daily structures reduce both ADHD-related forgetfulness and anxiety about what comes next.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Use external organization systems:</strong>
                  <span className="text-[var(--color-ink)]"> Calendars, reminders, lists, and apps can compensate for ADHD-related working memory challenges, reducing anxiety about forgetting things.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Prioritize regular exercise:</strong>
                  <span className="text-[var(--color-ink)]"> Physical activity improves focus, reduces hyperactivity, and is one of the most effective natural anxiety reducers.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Practice mindfulness techniques:</strong>
                  <span className="text-[var(--color-ink)]"> Even brief mindfulness practices can improve attention regulation and reduce anxious rumination.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Break tasks into smaller steps:</strong>
                  <span className="text-[var(--color-ink)]"> This makes projects less overwhelming for ADHD brains and reduces anxiety about large, intimidating tasks.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Prioritize sleep hygiene:</strong>
                  <span className="text-[var(--color-ink)]"> Both conditions worsen with poor sleep, creating a negative cycle that proper sleep habits can help break.</span>
                </div>
              </div>
            </div>

            <p className="mb-6 mt-6">
              Remember that implementing these strategies takes time, and what works varies from person to person. Be patient with yourself as you discover which combinations are most effective for your unique situation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're experiencing symptoms of both ADHD and anxiety, professional evaluation and treatment can be life-changing. Many people struggle for years, unaware that their difficulties stem from treatable conditions or that more effective treatment approaches exist.
            </p>
            <p className="mb-6">
              Seek help if you're experiencing persistent difficulty concentrating, chronic procrastination, frequent feelings of being overwhelmed, ongoing worry that interferes with daily life, or if you've tried managing symptoms on your own without lasting improvement. A mental health professional can provide accurate diagnosis, evidence-based treatment, and ongoing support as you develop strategies that work for your life.
            </p>
            <p className="mb-6">
              You don't have to navigate this alone. With proper support and treatment, it's entirely possible to manage both ADHD and anxiety effectively, allowing you to thrive rather than simply survive. The connection between these conditions is complex, but understanding it is the first step toward reclaiming control over your mental health and your life.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Arlene Holland Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, committed to providing evidence-based education and compassionate care to our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Generalized Anxiety Disorder
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about the symptoms, causes, and effective treatment options for GAD.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Adult ADHD: Signs You Might Have Missed
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Many adults live with undiagnosed ADHD. Discover the common signs and when to seek evaluation.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Cognitive Behavioral Therapy: What to Expect
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  An overview of CBT and how this evidence-based approach can help with anxiety and ADHD.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you navigate the challenges of ADHD and anxiety with compassionate, evidence-based care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}