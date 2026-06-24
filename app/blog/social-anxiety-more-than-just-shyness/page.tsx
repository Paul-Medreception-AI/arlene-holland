import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Anxiety: More Than Just Shyness | Arlene Holland',
  description: 'Understanding social anxiety disorder, its impact on daily life, and evidence-based approaches to treatment. Learn how professional support can help you overcome social anxiety.',
  keywords: 'social anxiety, social anxiety disorder, shyness, mental health, anxiety treatment, therapy, arlene holland',
}

export default function SocialAnxietyArticle() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/80 text-sm mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Social Anxiety: More Than Just Shyness
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>February 2025</span>
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
              <span>Arlene Holland Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8 animate-fade-up">
            <p className="mb-6">
              Your heart races. Your palms sweat. That simple task of ordering coffee or speaking up in a meeting feels like standing on the edge of a cliff. If this sounds familiar, you're not alone. Social anxiety affects millions of people, yet it's often misunderstood as mere shyness or introversion. The truth is far more complex—and understanding the difference can be the first step toward getting the help you need.
            </p>
          </div>

          {/* What Is Social Anxiety? */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What Is Social Anxiety Disorder?
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-4">
                Social Anxiety Disorder (SAD), also known as social phobia, is a mental health condition characterized by an intense, persistent fear of social situations where one might be judged, embarrassed, or scrutinized by others. Unlike ordinary nervousness or shyness, social anxiety is persistent, overwhelming, and can significantly interfere with daily life.
              </p>
              <p className="mb-4">
                People with social anxiety don't just feel butterflies before a presentation—they may avoid social situations entirely, miss out on career opportunities, struggle to form relationships, or experience severe physical symptoms like nausea, trembling, or panic attacks when faced with social interactions.
              </p>
              <p className="mb-4">
                According to the Anxiety and Depression Association of America, approximately 15 million American adults have social anxiety disorder, with typical onset occurring around age 13. It's one of the most common mental health conditions, yet many people suffer in silence, believing they simply need to "get over it" or that their feelings aren't valid enough to seek help.
              </p>
            </div>
          </section>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Social anxiety isn't about being shy or introverted—it's about fear that disrupts your life. Recognition and treatment can transform your relationship with the world around you."
          </div>

          {/* Shyness vs Social Anxiety */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Difference Between Shyness and Social Anxiety
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-4">
                While shyness and social anxiety may seem similar on the surface, they're fundamentally different experiences:
              </p>
              <p className="mb-4">
                <strong>Shyness</strong> is a personality trait. Shy people may feel uncomfortable in new social situations but can warm up over time. They might prefer smaller gatherings but can still function in larger groups when needed. Shyness doesn't typically interfere with major life goals or daily functioning.
              </p>
              <p className="mb-4">
                <strong>Social Anxiety Disorder</strong> is a clinical condition that causes persistent, excessive fear that's disproportionate to the actual situation. It leads to avoidance behaviors that impact work, school, relationships, and quality of life. The fear doesn't diminish with familiarity and often requires professional treatment to manage effectively.
              </p>
              <p className="mb-4">
                Think of it this way: a shy person might feel nervous at a party but still attend and eventually enjoy themselves. Someone with social anxiety might cancel at the last minute due to overwhelming dread, experience panic symptoms throughout the event, or ruminate for days afterward about perceived mistakes or embarrassments.
              </p>
            </div>
          </section>

          {/* Common Signs and Symptoms */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Recognizing the Signs
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Social anxiety manifests in physical, emotional, and behavioral ways. Understanding these signs can help you identify when it's time to seek support:
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Physical symptoms:</strong> Rapid heartbeat, sweating, trembling, nausea, muscle tension, dizziness, or feeling like your mind has gone blank</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Emotional symptoms:</strong> Intense fear of judgment, worry about embarrassing yourself, excessive self-consciousness, fear of showing anxiety symptoms</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Behavioral symptoms:</strong> Avoiding social situations, needing a companion to go places, analyzing your performance after social interactions, difficulty making eye contact</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Cognitive symptoms:</strong> Catastrophic thinking, expecting the worst outcomes, negative self-talk, ruminating about past social encounters</span>
                </div>
              </div>

              <p className="mb-4">
                These symptoms typically appear in situations like public speaking, meeting new people, eating or drinking in public, being the center of attention, making phone calls, or even routine interactions like asking for help in a store.
              </p>
            </div>
          </section>

          {/* The Impact on Daily Life */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              How Social Anxiety Affects Your Life
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-4">
                Left untreated, social anxiety doesn't just cause discomfort—it can fundamentally limit your life in ways that compound over time:
              </p>
              <p className="mb-4">
                <strong>Career impact:</strong> You might avoid job interviews, turn down promotions that require presentations, or struggle to network—limiting your professional growth and earning potential.
              </p>
              <p className="mb-4">
                <strong>Relationship challenges:</strong> Forming and maintaining friendships becomes difficult. Dating may feel impossible. Even family gatherings can become sources of dread rather than connection.
              </p>
              <p className="mb-4">
                <strong>Educational barriers:</strong> Students with social anxiety may avoid participating in class discussions, group projects, or presentations, which can impact grades and learning opportunities.
              </p>
              <p className="mb-4">
                <strong>Mental health complications:</strong> Social anxiety often coexists with depression, substance use disorders, or other anxiety conditions. The isolation it creates can worsen overall mental health.
              </p>
              <p className="mb-4">
                The good news? Social anxiety is highly treatable. With the right support, you can develop skills to manage anxiety, gradually face feared situations, and reclaim the life you want to live.
              </p>
            </div>
          </section>

          {/* Evidence-Based Treatment */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Evidence-Based Treatment Approaches
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-4">
                Research consistently shows that social anxiety responds well to treatment. The most effective approaches include:
              </p>
              <p className="mb-4">
                <strong>Cognitive Behavioral Therapy (CBT):</strong> This gold-standard treatment helps you identify and challenge negative thought patterns, develop coping strategies, and gradually face feared situations through controlled exposure. Studies show CBT produces significant improvement in 50-75% of people with social anxiety.
              </p>
              <p className="mb-4">
                <strong>Exposure therapy:</strong> A component of CBT, exposure therapy involves gradually and systematically confronting feared social situations in a safe, controlled way, helping you build confidence and reduce avoidance.
              </p>
              <p className="mb-4">
                <strong>Medication:</strong> For some individuals, medications like SSRIs or SNRIs can reduce anxiety symptoms, making it easier to engage in therapy and daily life. These are often most effective when combined with therapy.
              </p>
              <p className="mb-4">
                <strong>Group therapy:</strong> Connecting with others who understand your experience can reduce isolation and provide a supportive environment to practice social skills.
              </p>
              <p className="mb-4">
                The key is finding an approach—or combination of approaches—that works for your unique situation. A qualified mental health professional can help you develop a personalized treatment plan.
              </p>
            </div>
          </section>

          {/* Practical Steps */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Taking the First Step
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                If you recognize yourself in this article, know that seeking help is a sign of strength, not weakness. Here are some practical steps you can take today:
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Acknowledge your experience without judgment—what you're feeling is real and valid</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Reach out to a mental health professional who specializes in anxiety disorders</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Practice self-compassion—recovery is a journey, not a destination</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Start small—even tiny steps toward facing your fears are meaningful progress</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Build a support network of understanding friends, family, or support groups</span>
                </div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="animate-fade-up mt-12">
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-4">
                Social anxiety may feel overwhelming, but it doesn't have to define your life. With proper understanding, professional support, and evidence-based treatment, you can develop the skills to manage anxiety and fully participate in the social world. You deserve to live without constant fear of judgment, to pursue your goals, and to form meaningful connections.
              </p>
              <p className="mb-4">
                If you're ready to take the next step, our team is here to help. We specialize in anxiety disorders and provide compassionate, personalized care in a supportive environment where you can feel safe exploring your concerns and building strategies for lasting change.
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Mental Health, committed to delivering evidence-based, compassionate care to help you achieve lasting wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Anxiety Disorders</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn about different types of anxiety disorders, their symptoms, and evidence-based treatment options.</p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Self-Care</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Building Confidence in Social Situations</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Practical strategies to gradually increase your comfort and confidence in social interactions.</p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Treatment</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">What to Expect in Therapy</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">A guide to your first therapy session and how cognitive behavioral therapy can help with anxiety.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you overcome social anxiety and live the life you deserve.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}