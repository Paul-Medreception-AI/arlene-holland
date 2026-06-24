import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Burnout: When Stress Becomes a Mental Health Crisis | Arlene Holland',
  description: 'Understanding burnout symptoms, causes, and when chronic stress becomes a serious mental health concern. Expert guidance on recovery and prevention strategies.',
  keywords: 'burnout, chronic stress, mental health crisis, emotional exhaustion, burnout recovery, stress management, mental health care',
  openGraph: {
    title: 'Burnout: When Stress Becomes a Mental Health Crisis',
    description: 'Understanding burnout symptoms, causes, and when chronic stress becomes a serious mental health concern.',
    type: 'article',
    url: 'https://arleneholland.net/blog/burnout-when-stress-becomes-a-mental-health-crisis',
  }
}

export default function BurnoutArticlePage() {
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Burnout: When Stress Becomes a Mental Health Crisis
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
              You wake up exhausted despite sleeping eight hours. The thought of checking your email fills you with dread. You feel disconnected from work that once excited you, and simple tasks feel insurmountable. If this sounds familiar, you're not alone—and what you're experiencing may be more than just stress. It could be burnout, a serious condition that the World Health Organization now recognizes as an occupational phenomenon requiring medical attention.
            </p>
            <p className="mb-6">
              Burnout has reached epidemic proportions, affecting an estimated 77% of professionals at some point in their careers. But burnout isn't simply about working too hard or needing a vacation. It's a state of chronic stress that hasn't been successfully managed, and left unaddressed, it can evolve into a full-blown mental health crisis with lasting consequences for your wellbeing, relationships, and physical health.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Burnout?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Burnout is characterized by three primary dimensions: overwhelming exhaustion, feelings of cynicism and detachment from your work, and a sense of ineffectiveness and lack of accomplishment. Unlike regular stress, which typically involves too much—too many pressures, demands, and urgencies—burnout is about not enough. Not enough energy, motivation, or care.
            </p>
            <p className="mb-6">
              The condition develops gradually, often so slowly that people don't recognize it until they're in crisis. What starts as manageable stress compounds over weeks and months, slowly draining your emotional reserves until you're running on empty. Many people dismiss early warning signs, attributing their exhaustion to a "busy season" or temporary circumstances, not realizing they're sliding toward a more serious mental health issue.
            </p>
            <p className="mb-6">
              It's important to understand that burnout is not a character flaw or weakness. It's a response to chronic workplace and life stressors that have exceeded your capacity to cope. The cultural glorification of overwork and "hustle culture" has normalized the conditions that lead to burnout, making it harder for people to recognize when they need help.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Warning Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Burnout manifests differently in different people, but there are common patterns to watch for. Physical symptoms often include chronic fatigue, frequent illness, headaches, muscle tension, and changes in appetite or sleep patterns. You might find yourself getting sick more often as your immune system weakens under chronic stress.
            </p>
            <p className="mb-6">
              Emotional and psychological symptoms are equally telling. These include feelings of helplessness, defeat, and detachment; loss of motivation; increasingly cynical and negative outlook; decreased satisfaction and sense of accomplishment; and feeling alone in the world. Many people with burnout describe feeling like they're going through the motions, disconnected from themselves and others.
            </p>
            <p className="mb-6">
              Behavioral changes are also common: withdrawing from responsibilities, isolating from others, procrastinating or taking longer to complete tasks, using food, drugs, or alcohol to cope, and taking out frustrations on others. If you notice these patterns in yourself or a loved one, it's time to take action.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Burnout is not simply the result of working long hours. It's the chronic state of being out of alignment with what matters to you—your values, your needs, and your capacity."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When Burnout Becomes a Mental Health Crisis
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The line between burnout and clinical mental health conditions can blur quickly. Research shows strong connections between burnout and depression, anxiety disorders, and other mental health challenges. A 2020 study published in the Journal of Affective Disorders found that individuals with burnout had significantly higher rates of major depressive disorder and generalized anxiety disorder.
            </p>
            <p className="mb-6">
              Untreated burnout can trigger or worsen existing mental health conditions. The chronic stress associated with burnout affects brain chemistry, particularly levels of cortisol and other stress hormones. Over time, this can alter how your brain processes emotions, makes decisions, and regulates mood—changes that mirror those seen in clinical depression and anxiety.
            </p>
            <p className="mb-6">
              Physical health consequences are equally serious. Chronic burnout increases your risk of cardiovascular disease, type 2 diabetes, weakened immune function, and gastrointestinal problems. The mind-body connection means that psychological distress manifests in physical symptoms, creating a cycle that becomes increasingly difficult to break without intervention.
            </p>
            <p className="mb-6">
              Perhaps most concerning, burnout can lead to suicidal ideation in severe cases. When people feel trapped in unbearable circumstances with no way out, the crisis deepens. If you're experiencing thoughts of self-harm, this is a mental health emergency requiring immediate professional help.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Path to Recovery
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recovery from burnout isn't about pushing through or simply taking a few days off. It requires fundamental changes to how you work, live, and care for yourself. The first step is acknowledging the problem and giving yourself permission to address it without guilt or shame.
            </p>
            <p className="mb-6">
              Professional support is often essential, especially if burnout has progressed to depression or anxiety. A mental health professional can help you:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Process the emotions and experiences that led to burnout</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Develop healthier coping strategies and stress management techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Identify and address underlying mental health conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Rebuild your sense of purpose and connection to meaningful work</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Set boundaries and make necessary changes to prevent recurrence</span>
              </li>
            </ul>
            <p className="mb-6">
              Therapy approaches like Cognitive Behavioral Therapy (CBT), mindfulness-based interventions, and stress management training have proven particularly effective for burnout recovery. In cases where depression or anxiety have developed, medication may also be appropriate and should be discussed with a qualified provider.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Practical Steps You Can Take Today
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While professional help is important, there are also self-care strategies that support recovery:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize rest and recovery.</strong> This means adequate sleep, regular breaks during the day, and true time off where you disconnect from work completely.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reconnect with activities that bring joy.</strong> Burnout strips away pleasure from life. Deliberately engage in hobbies, creative pursuits, or activities you once enjoyed.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Move your body.</strong> Exercise is one of the most effective stress-reduction tools available. Even gentle movement like walking can help regulate stress hormones.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Nurture relationships.</strong> Social connection is protective against burnout. Make time for people who energize rather than drain you.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice saying no.</strong> Boundaries are essential. You cannot recover from burnout while continuing to overextend yourself.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Address workplace factors.</strong> If your work environment is toxic or unsustainable, consider what changes might be possible—whether adjusting your role, having conversations with management, or exploring other opportunities.</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            You Don't Have to Navigate This Alone
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Burnout thrives in isolation. Many people suffer silently, believing they should be able to handle it themselves or that seeking help is a sign of weakness. Nothing could be further from the truth. Recognizing when you need support and reaching out for it is an act of strength and self-awareness.
            </p>
            <p className="mb-6">
              If you're experiencing symptoms of burnout, especially if they're affecting your mental health, daily functioning, or quality of life, professional support can make a significant difference. A mental health provider can help you understand what you're experiencing, develop a personalized recovery plan, and provide the tools and support you need to heal.
            </p>
            <p className="mb-6">
              Remember, burnout is not a destination—it's a signal that something needs to change. With the right support and strategies, recovery is possible. You can rediscover energy, purpose, and joy in your work and life. But the first step is acknowledging the problem and giving yourself permission to ask for help.
            </p>
            <p className="mb-6">
              Your wellbeing matters. You deserve to feel engaged, energized, and fulfilled in your life and work. If burnout has taken that from you, it's time to take action to get it back.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in mental health care, anxiety, depression, and stress management. Our team is dedicated to providing evidence-based, compassionate care to support your mental health journey.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Understanding Anxiety: More Than Just Worry</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn about anxiety disorders, symptoms, and effective treatment approaches.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Self-Care</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Building Resilience: Strategies for Mental Wellness</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Practical tools to strengthen your mental health and cope with life's challenges.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Getting Started</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>What to Expect in Your First Therapy Session</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">A guide to help you feel prepared and comfortable beginning therapy.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">Our team is here to help you recover from burnout and restore your mental wellness.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </a>
          <p className="mt-6 text-white/70 text-sm">You don't have to navigate this alone. We're here to support you.</p>
        </div>
      </section>
    </main>
  )
}