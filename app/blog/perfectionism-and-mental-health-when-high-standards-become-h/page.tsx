import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfectionism and Mental Health: When High Standards Become Harmful | Arlene Holland',
  description: 'Learn how perfectionism impacts mental health, recognize warning signs, and discover evidence-based strategies to break free from harmful perfectionist patterns.',
  openGraph: {
    title: 'Perfectionism and Mental Health: When High Standards Become Harmful',
    description: 'Learn how perfectionism impacts mental health, recognize warning signs, and discover evidence-based strategies to break free from harmful perfectionist patterns.',
    url: 'https://arleneholland.net/blog/perfectionism-and-mental-health-when-high-standards-become-h',
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Arlene Holland Mental Health' }],
  },
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Perfectionism and Mental Health: When High Standards Become Harmful
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Holland Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-lg leading-loose text-[var(--color-ink)] mb-8 animate-fade-up">
            <p className="mb-6">
              "If I can't do it perfectly, why bother doing it at all?" This thought pattern might sound familiar if you've ever struggled with perfectionism. While striving for excellence can be a positive trait that drives success, perfectionism often crosses into harmful territory—creating anxiety, burnout, and a persistent sense of never being "good enough." Understanding when high standards become destructive is the first step toward reclaiming your mental health and finding a healthier relationship with achievement.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Understanding Perfectionism: More Than Just High Standards
            </h2>
            <p className="text-[var(--color-ink)] leading-loose mb-4">
              Perfectionism isn't simply about wanting to do well or having ambitious goals. Clinical perfectionism involves setting unrealistically high standards for yourself, being overly critical of mistakes, and defining your self-worth almost entirely by your achievements and productivity. Research distinguishes between adaptive perfectionism—which involves healthy striving and high standards paired with flexibility—and maladaptive perfectionism, which is rigid, fear-based, and deeply connected to self-esteem.
            </p>
            <p className="text-[var(--color-ink)] leading-loose mb-4">
              Psychologists have identified three primary types of perfectionism: self-oriented (imposing impossible standards on yourself), other-oriented (expecting perfection from others), and socially prescribed (believing others expect perfection from you). Each type can significantly impact mental health, relationships, and overall quality of life.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Mental Health Toll of Perfectionism
            </h2>
            <p className="text-[var(--color-ink)] leading-loose mb-4">
              Research consistently shows strong links between perfectionism and various mental health conditions. Studies indicate that perfectionism is associated with increased risk of depression, anxiety disorders, eating disorders, and obsessive-compulsive disorder (OCD). One meta-analysis found that perfectionism was a significant risk factor for developing depression, particularly when individuals experienced failure or perceived criticism.
            </p>
            <p className="text-[var(--color-ink)] leading-loose mb-4">
              The constant pressure to be perfect creates chronic stress that affects both mental and physical health. Perfectionists often experience persistent anxiety about making mistakes, procrastination due to fear of not meeting their own standards, difficulty completing tasks because nothing ever feels "good enough," and burnout from the relentless self-criticism and overwork. This pattern can become a vicious cycle: the more anxious you feel, the more you try to control outcomes through perfectionism, which in turn creates more anxiety.
            </p>
          </section>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Perfectionism is not the same thing as striving to be your best. Perfectionism is the belief that if we live perfect, look perfect, and act perfect, we can minimize or avoid the pain of blame, judgment, and shame."
          </blockquote>

          {/* Section 3 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Warning Signs That Perfectionism Has Become Problematic
            </h2>
            <p className="text-[var(--color-ink)] leading-loose mb-6">
              How do you know when healthy ambition has crossed into harmful perfectionism? Here are key warning signs to watch for:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>All-or-nothing thinking:</strong> You view outcomes as either complete success or total failure with no middle ground</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Procrastination paralysis:</strong> You delay starting or finishing projects because you're afraid they won't meet your standards</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Constant self-criticism:</strong> Your internal dialogue is harsh and unforgiving, focusing primarily on what you did wrong</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Difficulty celebrating achievements:</strong> You immediately move to the next goal without acknowledging accomplishments</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Defensive about criticism:</strong> Even constructive feedback feels like a personal attack or confirmation that you're not good enough</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sacrificing well-being:</strong> You consistently neglect sleep, relationships, or self-care in pursuit of perfect performance</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Roots of Perfectionism
            </h2>
            <p className="text-[var(--color-ink)] leading-loose mb-4">
              Understanding where perfectionism comes from can help in addressing it. Perfectionist tendencies often develop in childhood and adolescence, influenced by various factors including parenting styles that emphasized achievement over effort, early experiences of conditional love or approval, traumatic experiences where control felt necessary for safety, cultural or societal pressures around success and achievement, and social media's curated presentations of seemingly perfect lives.
            </p>
            <p className="text-[var(--color-ink)] leading-loose mb-4">
              Many perfectionists learned early on that their worth was tied to their accomplishments. Perhaps praise came only when they excelled, or criticism was harsh when they made mistakes. These patterns become deeply ingrained, shaping how we view ourselves and measure our value well into adulthood.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Breaking Free: Strategies for Healthy Achievement
            </h2>
            <p className="text-[var(--color-ink)] leading-loose mb-6">
              The good news is that perfectionism can be addressed with conscious effort and often with professional support. Here are evidence-based strategies that can help:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice self-compassion:</strong> Treat yourself with the same kindness you'd offer a good friend facing challenges. Research by Dr. Kristin Neff shows self-compassion is more motivating than self-criticism.</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Set realistic standards:</strong> Ask yourself: "What would 'good enough' look like here?" Not every task requires 100% effort—learn to match your effort to the task's importance.</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Challenge all-or-nothing thinking:</strong> Cognitive behavioral therapy (CBT) techniques can help you recognize and reframe rigid thought patterns into more flexible, balanced perspectives.</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Embrace mistakes as learning:</strong> Reframe errors as valuable information rather than evidence of failure. Growth happens through experimentation and sometimes getting things wrong.</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice intentional imperfection:</strong> Purposely do some tasks at 80% or submit work without endless revision. Notice that outcomes are often just as good—and the sky doesn't fall.</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Separate self-worth from achievement:</strong> Work on building your identity beyond accomplishments. Who are you outside of what you do or produce?</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              When to Seek Professional Help
            </h2>
            <p className="text-[var(--color-ink)] leading-loose mb-4">
              If perfectionism is significantly interfering with your daily life, relationships, or mental health, professional support can make a tremendous difference. Therapy approaches that have shown effectiveness for perfectionism include Cognitive Behavioral Therapy (CBT), which addresses the thought patterns underlying perfectionism, Acceptance and Commitment Therapy (ACT), which helps you clarify values and increase psychological flexibility, and psychodynamic therapy, which explores the origins of perfectionist patterns.
            </p>
            <p className="text-[var(--color-ink)] leading-loose mb-4">
              Consider reaching out to a mental health professional if you're experiencing persistent anxiety or depression related to performance, if perfectionism is causing problems in relationships or work, if you're engaging in harmful behaviors like excessive work hours or disordered eating, or if you feel unable to change these patterns on your own despite wanting to.
            </p>
          </section>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose mt-12 pt-8 border-t border-[var(--color-border)] animate-fade-up">
            <p className="mb-6">
              Learning to move from destructive perfectionism to healthy striving is a journey, not a destination. It requires patience, practice, and often support from others who understand the struggle. The goal isn't to abandon your standards or stop caring about quality—it's to pursue excellence from a place of self-compassion rather than fear, to value progress over perfection, and to remember that your worth as a person is inherent, not earned through flawless performance.
            </p>
            <p className="mb-6">
              If you recognize yourself in these patterns and feel ready to explore a healthier relationship with achievement, our team is here to support you. We specialize in helping individuals break free from perfectionism's grip and develop more balanced, fulfilling approaches to work and life.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Mental Health with extensive experience helping clients overcome perfectionism and develop healthier approaches to achievement and self-worth.</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg p-6 mb-4 flex items-center justify-center aspect-video">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
              <h4 className="text-xl font-medium text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Anxiety: Symptoms and Treatment Options</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn about different types of anxiety disorders and evidence-based approaches to finding relief.</p>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg p-6 mb-4 flex items-center justify-center aspect-video">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Self-Care</div>
              <h4 className="text-xl font-medium text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Building Resilience: Practical Strategies for Mental Wellness</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover evidence-based techniques to strengthen your mental health and navigate life's challenges.</p>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg p-6 mb-4 flex items-center justify-center aspect-video">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Therapy Guide</div>
              <h4 className="text-xl font-medium text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">What to Expect in Your First Therapy Session</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Starting therapy can feel overwhelming. Here's what you need to know to feel prepared and confident.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help you move beyond perfectionism and develop a healthier relationship with achievement.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 animate-fade-up"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}