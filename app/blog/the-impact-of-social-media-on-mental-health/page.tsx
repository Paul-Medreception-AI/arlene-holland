import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Impact of Social Media on Mental Health | Arlene Holland',
  description: 'Explore how social media affects mental health, including anxiety, depression, and self-esteem. Learn evidence-based strategies to maintain healthy digital habits and protect your wellbeing.',
  keywords: 'social media mental health, digital wellbeing, anxiety depression, screen time mental health, social media addiction, healthy technology use',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
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

          {/* Page Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Impact of Social Media on Mental Health
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You pick up your phone to check one notification. Thirty minutes later, you're still scrolling, comparing your life to carefully curated highlight reels, feeling somehow both connected and profoundly alone. If this sounds familiar, you're not alone. Social media has fundamentally transformed how we connect, communicate, and perceive ourselves—and the mental health implications are both significant and complex.
            </p>
            <p className="mb-6">
              While social platforms promise connection and community, research increasingly shows they can also contribute to anxiety, depression, loneliness, and diminished self-worth. Understanding this relationship is the first step toward developing a healthier, more intentional relationship with technology.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Double-Edged Sword of Connectivity
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Social media isn't inherently good or bad—it's a tool whose impact depends largely on how we use it. On one hand, these platforms can foster genuine connection, provide support networks for marginalized communities, raise awareness about mental health, and help people feel less isolated in their struggles.
            </p>
            <p className="mb-6">
              On the other hand, excessive use has been linked to increased rates of anxiety, depression, sleep disturbances, and poor body image. The constant stream of curated content creates unrealistic standards, while the dopamine-driven design of these apps can create compulsive usage patterns that interfere with real-world relationships and activities.
            </p>
            <p className="mb-6">
              The key difference often lies not just in how much time we spend, but in how we engage. Passive scrolling—mindlessly consuming content without meaningful interaction—tends to correlate with worse mental health outcomes than active engagement like meaningful conversations and community building.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Comparison Trap and Self-Esteem
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most insidious effects of social media is the constant invitation to compare ourselves to others. We see vacation photos, career achievements, perfect relationships, and flawless appearances—rarely the struggles, setbacks, or ordinary moments that make up most of life.
            </p>
            <p className="mb-6">
              This phenomenon, sometimes called "compare and despair," can be particularly damaging to self-esteem. Studies show that frequent social media use is associated with increased body dissatisfaction, especially among adolescents and young adults. The use of filters and editing tools further distorts our perception of what's "normal," creating impossible standards that even the people in the photos don't actually meet.
            </p>
            <p className="mb-6">
              Research from the American Psychological Association has found that young people who spend more than three hours per day on social media face double the risk of experiencing mental health problems, including symptoms of depression and anxiety.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Social media isn't reality—it's a highlight reel. Learning to recognize this distinction is essential for protecting your mental health in the digital age."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Science Behind Social Media and Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding the neurological impact of social media helps explain why it can be so difficult to put our phones down. These platforms are designed to trigger dopamine release—the same neurotransmitter associated with reward and pleasure. Each like, comment, or notification provides a small hit of satisfaction, encouraging us to keep checking.
            </p>
            <p className="mb-6">
              This reward system can create patterns similar to behavioral addiction. The unpredictable nature of social feedback (sometimes you get lots of engagement, sometimes little) actually strengthens this response through what psychologists call "variable ratio reinforcement"—the same principle that makes slot machines so addictive.
            </p>
            <p className="mb-6">
              Additionally, excessive screen time, particularly before bed, disrupts sleep patterns by suppressing melatonin production. Poor sleep, in turn, significantly increases vulnerability to anxiety and depression, creating a cyclical pattern that can be difficult to break.
            </p>
            <p className="mb-6">
              Research has also shown that social media can activate the brain's threat-detection system. Fear of missing out (FOMO), social rejection (through lack of engagement), or exposure to distressing news can keep our stress response chronically activated, contributing to anxiety and burnout.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is Most Vulnerable?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While social media can affect anyone's mental health, certain populations appear to be particularly vulnerable:
            </p>
            <div className="ml-6 mb-6 space-y-3">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Adolescents and young adults</strong> whose identities and self-esteem are still developing are especially susceptible to the negative effects of social comparison and cyberbullying.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>People with pre-existing mental health conditions</strong> may find their symptoms exacerbated by social media use, particularly if they're prone to anxiety or depression.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Individuals with perfectionist tendencies</strong> may be more affected by the curated nature of social media and the pressure to present an ideal image.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Those experiencing social isolation</strong> may turn to social media as a substitute for real-world connection, which can paradoxically increase feelings of loneliness.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing Problematic Use
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              How do you know if your social media use has crossed from healthy to harmful? Consider these warning signs:
            </p>
            <div className="ml-6 mb-6 space-y-3">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>You feel anxious, depressed, or inadequate after using social media</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>You're spending more time online than with friends and family in person</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>You find it difficult to concentrate on tasks without checking your phone</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Your sleep is suffering due to late-night scrolling</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>You constantly compare yourself to others online</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>You feel compelled to document and share experiences rather than simply enjoying them</p>
              </div>
            </div>
            <p className="mb-6">
              If several of these resonate with you, it may be time to reassess your relationship with social media.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Strategies for Healthier Social Media Use
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The goal isn't necessarily to eliminate social media entirely, but to cultivate a more intentional, balanced relationship with it. Here are evidence-based strategies that can help:
            </p>
            <div className="ml-6 mb-6 space-y-3">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Set time limits.</strong> Use built-in screen time tools to cap your daily social media use. Many experts recommend no more than 30 minutes per day on social platforms.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Curate your feed intentionally.</strong> Unfollow accounts that make you feel inadequate or anxious. Follow accounts that inspire, educate, or genuinely uplift you.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Turn off notifications.</strong> Constant alerts create a sense of urgency and interrupt focus. Check social media on your schedule, not at its demand.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Establish phone-free zones.</strong> Keep devices out of the bedroom, away from meal times, and out of reach during important conversations.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Practice mindful consumption.</strong> Before opening an app, ask yourself why. Are you bored? Lonely? Anxious? Sometimes the urge signals an underlying need better met in other ways.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Engage actively, not passively.</strong> When you do use social media, focus on meaningful interactions rather than endless scrolling.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Take regular breaks.</strong> Consider periodic "digital detoxes"—even just a weekend without social media can provide valuable perspective.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Cultivate offline connections.</strong> Prioritize face-to-face interactions and activities that don't involve screens.</p>
              </div>
            </div>
          </div>

          {/* Closing Section */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While implementing these strategies can help many people develop a healthier relationship with social media, sometimes professional support is needed. Consider reaching out to a mental health professional if:
            </p>
            <div className="ml-6 mb-6 space-y-2">
              <p>• You're experiencing persistent feelings of depression, anxiety, or worthlessness</p>
              <p>• Social media use is significantly interfering with work, school, or relationships</p>
              <p>• You're unable to reduce your usage despite negative consequences</p>
              <p>• You're experiencing cyberbullying or harassment</p>
              <p>• You're having thoughts of self-harm</p>
            </div>
            <p className="mb-6">
              A therapist can help you develop coping strategies, address underlying issues that may be driving problematic use, and work through the impact social media has had on your mental health and self-esteem.
            </p>
            <p className="mb-6">
              Remember, seeking help isn't a sign of weakness—it's a proactive step toward better mental health and a more balanced life. You don't have to navigate these challenges alone.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health. Our team is dedicated to providing evidence-based information and compassionate care to support your mental wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Anxiety: Symptoms and Treatment Options</h4>
                <p className="text-[var(--color-muted)] text-sm line-clamp-2">Learn about the different types of anxiety disorders and evidence-based approaches to managing symptoms.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Self-Care</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Building Resilience: Daily Practices for Mental Wellbeing</h4>
                <p className="text-[var(--color-muted)] text-sm line-clamp-2">Discover practical strategies to strengthen your mental health and cope with life's challenges.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Relationships</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Importance of Connection in Mental Health</h4>
                <p className="text-[var(--color-muted)] text-sm line-clamp-2">Explore how meaningful relationships and social support contribute to psychological wellbeing.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help you develop healthier patterns and support your mental wellbeing.</p>
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