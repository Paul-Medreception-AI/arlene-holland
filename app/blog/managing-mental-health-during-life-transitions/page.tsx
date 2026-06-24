import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Mental Health During Life Transitions | Arlene Holland',
  description: 'Learn evidence-based strategies for maintaining mental wellness during major life changes. Expert guidance on navigating transitions with resilience and self-compassion.',
  keywords: 'life transitions, mental health, change management, stress management, coping strategies, life changes, mental wellness, emotional health',
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Managing Mental Health During Life Transitions
          </h1>

          {/* Meta Info */}
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
          {/* Opening Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Life is a series of transitions—some we choose, like starting a new career or getting married, and others that happen to us, like loss, illness, or unexpected change. While these moments can bring growth and opportunity, they also challenge our sense of stability and identity. During these pivotal times, our mental health often needs extra attention and care.
            </p>
            <p className="mb-6">
              Whether you're navigating retirement, becoming a parent, moving to a new city, or processing grief, understanding how transitions affect our psychological well-being—and knowing how to support ourselves through them—can make the difference between merely surviving change and truly thriving through it.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Life Transitions Challenge Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Transitions disrupt our established routines, relationships, and sense of self. Even positive changes—a promotion, a wedding, a new home—require us to let go of the familiar and adapt to the unknown. This process naturally triggers stress responses in our bodies and minds.
            </p>
            <p className="mb-6">
              Research in psychology shows that major life changes, whether positive or negative, rank among the highest stressors humans experience. The Holmes-Rahe Stress Inventory, a widely-used clinical tool, identifies events like divorce, job loss, retirement, and even marriage as significant stress triggers that can impact both physical and mental health.
            </p>
            <p className="mb-6">
              During transitions, we often experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased anxiety about the future and fear of the unknown</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Grief for what we're leaving behind, even when the change is positive</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Identity confusion as we question who we are in this new context</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Decision fatigue from the many choices transitions often require</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Social isolation if the transition involves leaving support networks</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Life Transitions That Impact Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding that your feelings during change are both normal and shared by many can provide comfort. Some of the most common transitions that affect mental wellness include:
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Career Changes:</strong> Starting a new job, retirement, or unexpected unemployment can shake our sense of purpose and financial security. Work often provides structure, social connection, and identity—when it changes, these elements need rebuilding.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Relationship Transitions:</strong> Marriage, divorce, the death of a loved one, or becoming a caregiver fundamentally alter our daily lives and emotional landscape. These changes often involve processing loss alongside adaptation.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Life Stage Shifts:</strong> Becoming a parent, children leaving home (empty nest), aging parents requiring care, or entering retirement each represent profound identity shifts that require psychological adjustment.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Health Changes:</strong> A new diagnosis, recovery from illness, or changes in physical ability demand not just practical adaptation but emotional processing and identity integration.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Geographic Moves:</strong> Relocating to a new city, state, or country disrupts established support networks and requires building new social connections from scratch.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Transitions are not just about external change—they're about the internal work of letting go of one chapter while courageously opening to the next."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Strategies for Mental Wellness During Change
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research in resilience and adaptation psychology has identified several effective approaches for maintaining mental health during transitions:
            </p>
            
            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">1. Acknowledge and Validate Your Feelings</strong>
            </p>
            <p className="mb-6">
              Trying to "stay positive" or suppress difficult emotions often backfires. Studies show that emotional acceptance—allowing yourself to feel sadness, anxiety, or confusion without judgment—actually promotes faster adjustment. Give yourself permission to grieve what you're leaving behind, even if the change is ultimately positive.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">2. Maintain Anchors of Routine</strong>
            </p>
            <p className="mb-6">
              When much is changing, keeping some elements consistent provides psychological stability. This might mean maintaining your morning coffee ritual, continuing regular exercise, or staying connected with certain friends. These anchors signal safety to your nervous system amid uncertainty.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">3. Practice Self-Compassion</strong>
            </p>
            <p className="mb-6">
              Research by Dr. Kristin Neff demonstrates that self-compassion—treating yourself with the same kindness you'd offer a good friend—is one of the strongest predictors of resilience during difficult times. When you make mistakes or feel overwhelmed during a transition, respond with understanding rather than self-criticism.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">4. Build or Maintain Social Connections</strong>
            </p>
            <p className="mb-6">
              Social support is perhaps the most consistent predictor of positive mental health outcomes during stress. Even if your transition involves geographic moves or changed relationships, prioritize connecting with others—whether through rekindling old friendships, joining new communities, or seeking professional support.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">5. Focus on What You Can Control</strong>
            </p>
            <p className="mb-6">
              Transitions often involve much that's beyond our control. Cognitive-behavioral research shows that focusing energy on the aspects you can influence—your daily routines, your responses, your self-care—reduces anxiety and increases feelings of agency.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Daily Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond these broader approaches, specific daily practices can support your mental health during transitions:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize sleep:</strong> Transitions are cognitively demanding. Adequate rest supports emotional regulation and decision-making.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Move your body:</strong> Physical activity reduces stress hormones and improves mood through multiple biological pathways.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit major decisions:</strong> When possible, avoid making additional big changes during a transition period. Your cognitive resources are already taxed.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Journal or talk it out:</strong> Processing your experience through writing or conversation helps integrate change and identify patterns in your feelings.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Set small, achievable goals:</strong> Accomplishing even minor tasks builds confidence and provides a sense of progress during uncertain times.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice mindfulness:</strong> Grounding techniques and present-moment awareness reduce anxiety about the future and rumination about the past.</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While many people navigate transitions successfully with personal resources and social support, professional help can be invaluable—and is sometimes necessary. Consider reaching out to a mental health provider if you experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent sadness, hopelessness, or anxiety that interferes with daily functioning</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty sleeping, eating, or maintaining basic self-care for more than two weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Withdrawal from relationships and activities you previously enjoyed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased use of alcohol or other substances to cope with stress</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Thoughts of self-harm or feeling that life isn't worth living</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Feeling overwhelmed and unable to make necessary decisions or take needed actions</span>
              </li>
            </ul>
            <p className="mb-6">
              Therapy during transitions isn't just for crisis situations. Many people find that working with a professional provides valuable perspective, helps develop coping strategies, and offers a supportive space to process change—even when they're functioning well overall.
            </p>
          </div>

          {/* Closing Section */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward with Compassion
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Life transitions, whether chosen or unexpected, are opportunities for growth—but they require patience, self-compassion, and often support. There's no "right" timeline for adjustment, and the path isn't always linear. Some days will feel easier than others, and that's completely normal.
            </p>
            <p className="mb-6">
              Remember that seeking help isn't a sign of weakness; it's an act of wisdom and self-care. If you're struggling with a life transition or notice warning signs in yourself or someone you care about, reaching out to a mental health professional can provide the support and tools needed to navigate change more effectively.
            </p>
            <p className="mb-6">
              At Arlene Holland, we understand that transitions are among life's most challenging experiences. Our team specializes in helping individuals develop resilience, process change, and emerge from transitions with renewed strength and clarity. You don't have to navigate this alone.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Arlene Holland Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, committed to evidence-based care and compassionate support for individuals navigating life's challenges.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Anxiety: Signs, Symptoms & Support
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Learn to recognize anxiety and discover evidence-based approaches for finding relief and building resilience.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Self-Care</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Building Emotional Resilience in Uncertain Times
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Practical strategies for developing the mental flexibility and strength to navigate life's challenges with grace.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Therapy</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  What to Expect in Your First Therapy Session
                </h4>
                <p className="text-[var(--color-muted)] text-sm">A welcoming guide to beginning therapy, from what questions to ask to how to prepare for your visit.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you navigate life's transitions with compassion and expertise.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}