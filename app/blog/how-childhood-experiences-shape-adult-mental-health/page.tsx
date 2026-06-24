import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Childhood Experiences Shape Adult Mental Health | Arlene Holland',
  description: 'Understanding the lasting impact of early life experiences on mental health. Learn how childhood shapes who we become and what you can do to heal.',
  keywords: 'childhood trauma, adult mental health, ACEs, adverse childhood experiences, childhood development, mental health therapy, emotional wellbeing',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-8 text-white/80 text-center">
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
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            How Childhood Experiences Shape Adult Mental Health
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
          {/* Opening Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Have you ever wondered why certain situations trigger unexplained anxiety? Or why forming close relationships feels so challenging? The answers often lie not in our present circumstances, but in the foundations laid during our earliest years. Our childhood experiences—both positive and negative—create lasting imprints on our brain development, emotional regulation, and relationship patterns that continue influencing us well into adulthood.
            </p>
            <p className="mb-6">
              Understanding this connection isn't about placing blame or dwelling on the past. Rather, it's about recognizing patterns, healing old wounds, and reclaiming agency over our mental health. The science is clear: while childhood shapes us, it doesn't have to define us.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Science Behind Early Development
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              During childhood, our brains are remarkably plastic—constantly forming new neural connections based on our experiences and environment. The relationships we form with caregivers, the safety (or lack thereof) we feel, and the emotional support we receive all directly influence brain architecture, particularly in areas responsible for stress response, emotional regulation, and social connection.
            </p>
            <p className="mb-6">
              Research on Adverse Childhood Experiences (ACEs) has revealed compelling evidence about this developmental impact. ACEs include experiences like abuse, neglect, household dysfunction, or witnessing violence. Studies show that individuals with higher ACE scores face increased risks for depression, anxiety, substance use disorders, and even chronic physical health conditions in adulthood.
            </p>
            <p className="mb-6">
              But it's not just major trauma that matters. Ongoing patterns of emotional unavailability, inconsistent caregiving, or growing up in environments where emotions weren't validated can also leave lasting marks on how we perceive ourselves and navigate relationships.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-['Cormorant_Garamond',serif]">
            "Childhood experiences don't determine your destiny—they simply influence the starting point of your healing journey."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Ways Childhood Shapes Adult Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The impact of early experiences manifests in various ways across adulthood. Understanding these patterns can help you recognize connections between your past and present struggles:
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Attachment Patterns:</strong> Early relationships with caregivers establish templates for how we connect with others. Insecure attachment can lead to difficulty trusting others, fear of abandonment, or avoiding intimacy altogether.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Emotional Regulation:</strong> Children who grow up in chaotic or invalidating environments often struggle to identify, understand, and manage their emotions as adults, leading to mood disorders or emotional overwhelm.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Self-Worth and Identity:</strong> Messages received in childhood about our value, capabilities, and lovability become internalized beliefs that shape self-esteem and confidence throughout life.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Stress Response:</strong> Chronic childhood stress can result in a sensitized nervous system, making adults more reactive to perceived threats and more prone to anxiety disorders.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Coping Mechanisms:</strong> Adults often unconsciously replicate coping strategies learned in childhood, which may have been adaptive then but create problems now—like people-pleasing, perfectionism, or emotional withdrawal.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Signs in Your Own Life
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many adults live with the effects of challenging childhoods without making the connection. You might notice patterns like repeatedly choosing unavailable partners, experiencing intense fear of rejection, struggling with chronic guilt or shame, or feeling like you're always "waiting for the other shoe to drop."
            </p>
            <p className="mb-6">
              Perhaps you find yourself overreacting to minor conflicts, have difficulty setting boundaries, or experience a persistent sense that something is "wrong" with you. These aren't character flaws—they're often adaptive responses that once helped you survive difficult circumstances but now interfere with your wellbeing.
            </p>
            <p className="mb-6">
              Physical symptoms can also emerge, including chronic pain, digestive issues, or frequent illness, as the body holds onto unprocessed stress and trauma from earlier years. The mind-body connection in childhood trauma is profound and well-documented.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Hopeful Truth: Our Brains Can Heal
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Here's the encouraging news that often gets lost in discussions about childhood trauma: neuroplasticity—the brain's ability to form new neural pathways—continues throughout our lives. This means that with the right support and interventions, we can literally rewire patterns established in childhood.
            </p>
            <p className="mb-6">
              Therapy approaches like trauma-focused cognitive behavioral therapy (TF-CBT), Eye Movement Desensitization and Reprocessing (EMDR), Internal Family Systems (IFS), and attachment-based therapies have shown remarkable success in helping adults process childhood experiences and develop healthier patterns.
            </p>
            <p className="mb-6">
              The healing process isn't about erasing the past or pretending difficult experiences didn't happen. Instead, it involves making meaning of those experiences, processing emotions that were suppressed or overwhelming at the time, and consciously choosing new ways of thinking, feeling, and relating.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Steps Toward Healing
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While professional support is often essential for processing childhood trauma, there are meaningful steps you can take on your healing journey:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Develop Self-Awareness:</strong> Begin noticing patterns in your thoughts, emotions, and behaviors. Journaling can be a powerful tool for identifying connections between past experiences and current struggles.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Practice Self-Compassion:</strong> Treat yourself with the kindness you would offer a good friend. Remember that your responses made sense given your circumstances—you were doing your best with the resources you had.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Build Safe Relationships:</strong> Healing often happens in the context of secure, supportive relationships. Seek out people who respect your boundaries and validate your experiences.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Learn Regulation Skills:</strong> Practices like mindfulness, deep breathing, progressive muscle relaxation, and grounding techniques can help you develop better emotional regulation.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong>Seek Professional Support:</strong> A trauma-informed therapist can provide a safe space to process difficult experiences and develop healthier coping strategies tailored to your specific needs.
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward with Hope
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding how childhood experiences shape adult mental health isn't about dwelling on the past or absolving ourselves of responsibility for growth. Rather, it's about recognizing that our struggles have roots, that our pain makes sense, and most importantly, that change is possible.
            </p>
            <p className="mb-6">
              You didn't choose the circumstances of your childhood, but you can choose how you move forward. Healing is not linear—there will be setbacks and difficult moments—but with support, self-compassion, and commitment, you can develop new patterns that serve you better.
            </p>
            <p className="mb-6">
              If you're recognizing yourself in these patterns and feel ready to begin or continue your healing journey, reaching out for professional support can be a profound act of self-care. You deserve to feel at peace in your own mind and body. You deserve relationships that feel safe and fulfilling. And you deserve to live a life not defined by your past, but informed by the wisdom and resilience you've gained along the way.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Arlene Holland Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to providing evidence-based care and patient education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-32 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-['Cormorant_Garamond',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Depression: Signs, Symptoms, and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about clinical depression, its manifestations, and evidence-based approaches to treatment and recovery.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-32 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Relationships
                </div>
                <h4 className="font-['Cormorant_Garamond',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Building Healthy Relationships After Trauma
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Practical guidance on forming secure attachments and nurturing meaningful connections after experiencing trauma.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-32 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Self-Care
                </div>
                <h4 className="font-['Cormorant_Garamond',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Practical Mindfulness Techniques for Daily Life
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Simple, science-backed mindfulness practices you can incorporate into your routine to reduce stress and improve wellbeing.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you on your healing journey.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}