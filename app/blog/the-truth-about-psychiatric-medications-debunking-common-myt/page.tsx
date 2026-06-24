import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Truth About Psychiatric Medications: Debunking Common Myths | Arlene Holland',
  description: 'Separating fact from fiction about psychiatric medications. Evidence-based information to help you make informed decisions about your mental health treatment.',
  keywords: 'psychiatric medications, mental health medications, antidepressants myths, medication facts, psychiatric treatment, mental health care',
  openGraph: {
    title: 'The Truth About Psychiatric Medications: Debunking Common Myths',
    description: 'Evidence-based information about psychiatric medications and common misconceptions.',
    url: 'https://arleneholland.net/blog/the-truth-about-psychiatric-medications-debunking-common-myths',
    type: 'article',
    publishedTime: '2025-02-15T09:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/80 mb-8 justify-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span>›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-white/70">Mental Health Education</span>
          </div>

          {/* Title */}
          <h1 className="font-['Cormorant',serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Truth About Psychiatric Medications: Debunking Common Myths
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>February 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Arlene Holland Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        {/* Opening Hook */}
        <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
          <p className="mb-6">
            When your healthcare provider recommends psychiatric medication, you might find yourself flooded with conflicting information from friends, family, and the internet. Some people swear by their medications, while others warn against them with alarming stories. It's no wonder that so many people feel confused and anxious about starting treatment.
          </p>
          <p className="mb-6">
            The truth is that psychiatric medications have helped millions of people reclaim their lives from debilitating mental health conditions. Yet myths and misconceptions continue to prevent many from seeking the help they need. Let's separate fact from fiction and explore what the science really says about psychiatric medications.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Myth #1: "Psychiatric Medications Will Change Your Personality"
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            This is one of the most common fears people express when considering medication, and it's understandable. Your personality is what makes you uniquely you—why would you want to lose that?
          </p>
          <p className="mb-6">
            <strong>The Reality:</strong> Properly prescribed psychiatric medications don't change your core personality. Instead, they help restore your brain's chemical balance so you can feel more like yourself again. Depression, anxiety, and other mental health conditions can actually mask your true personality by clouding your thoughts, dampening your emotions, or filling you with excessive worry.
          </p>
          <p className="mb-6">
            Many patients report that medication helped them reconnect with parts of themselves they thought they'd lost. You might find yourself laughing at jokes again, engaging in hobbies you abandoned, or feeling emotions in a more balanced way. That's not a personality change—that's recovery.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-['Cormorant',serif]">
          "Psychiatric medications don't change who you are—they help clear away what's preventing you from being yourself."
        </blockquote>

        {/* Section 2 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Myth #2: "You'll Become Dependent and Never Be Able to Stop"
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            The fear of becoming "addicted" to psychiatric medications keeps many people from starting treatment. This concern often stems from confusion about the difference between dependence and addiction.
          </p>
          <p className="mb-6">
            <strong>The Reality:</strong> Most psychiatric medications are not addictive. Antidepressants, mood stabilizers, and antipsychotics do not create the compulsive drug-seeking behavior that characterizes addiction. Your brain won't crave these medications in the way it might crave substances of abuse.
          </p>
          <p className="mb-6">
            Some medications do require careful tapering when discontinuing to avoid withdrawal symptoms, but this is not the same as addiction. It simply means your body has adjusted to the medication, similar to how your body adjusts to blood pressure medication or insulin. With proper medical guidance, most people can successfully discontinue psychiatric medications when appropriate.
          </p>
          <p className="mb-6">
            The decision about how long to stay on medication should be made collaboratively with your healthcare provider, based on your individual symptoms, history, and treatment goals. Some people benefit from short-term treatment, while others manage chronic conditions that require longer-term medication, just as someone with diabetes might need ongoing insulin therapy.
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Myth #3: "Natural Alternatives Are Always Safer"
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            The appeal of "natural" remedies is understandable. If something comes from nature, it must be safer than a synthetic pharmaceutical, right?
          </p>
          <p className="mb-6">
            <strong>The Reality:</strong> Natural doesn't automatically mean safe or effective. Many potent toxins are completely natural, and many life-saving medications are synthetic. The key question isn't whether something is natural—it's whether it's safe, effective, and appropriate for your specific condition.
          </p>
          <p className="mb-6">
            Psychiatric medications undergo rigorous testing through clinical trials before receiving FDA approval. We have extensive data on their effectiveness, side effects, and interactions. Many herbal supplements and "natural" remedies lack this level of scientific scrutiny and aren't regulated with the same rigor.
          </p>
          <p className="mb-6">
            This doesn't mean all natural approaches are without merit. Some supplements like omega-3 fatty acids or vitamin D may support mental health when used appropriately. However, for moderate to severe mental health conditions, they typically aren't sufficient on their own. The most effective approach often combines evidence-based medication with therapy, lifestyle changes, and complementary strategies.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Myth #4: "Medication Is the Easy Way Out"
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            There's a persistent stigma suggesting that taking medication for mental health shows weakness or that people should simply "try harder" to overcome their symptoms through willpower alone.
          </p>
          <p className="mb-6">
            <strong>The Reality:</strong> Taking medication for mental health requires courage, not weakness. Mental health conditions involve real biological changes in brain chemistry and function. Telling someone with clinical depression to "just think positive" is like telling someone with diabetes to "just make more insulin."
          </p>
          <p className="mb-6">
            Furthermore, starting medication isn't an easy path. It often involves:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Overcoming stigma and making the brave decision to seek help</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Waiting several weeks for medications to take effect while managing symptoms</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Potentially adjusting dosages or trying different medications to find what works</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Managing side effects while your body adjusts</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Committing to regular follow-up appointments and honest communication with your provider</span>
            </li>
          </ul>
          <p className="mb-6">
            Medication is one tool in a comprehensive treatment approach that may also include therapy, lifestyle modifications, stress management, and building support systems. Using all available tools isn't taking the easy way out—it's being smart about recovery.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Myth #5: "Side Effects Are Worse Than the Condition"
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            Concerns about side effects are valid and should be discussed openly with your healthcare provider. However, sensationalized stories and worst-case scenarios can create disproportionate fear.
          </p>
          <p className="mb-6">
            <strong>The Reality:</strong> While all medications can have side effects, most people tolerate psychiatric medications well. Common side effects are often mild and temporary, decreasing as your body adjusts to the medication. When side effects do occur, they can usually be managed through:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Dosage adjustments</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Timing of when you take the medication</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Switching to a different medication in the same class</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Adding supportive medications or supplements</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifestyle modifications</span>
            </li>
          </ul>
          <p className="mb-6">
            It's also important to weigh potential side effects against the very real effects of untreated mental illness—damaged relationships, lost opportunities, impaired work performance, physical health problems, and in severe cases, self-harm or suicide. For many people, the benefits of treatment far outweigh the risks of side effects.
          </p>
          <p className="mb-6">
            Your healthcare provider should discuss potential side effects with you before starting any medication and work with you to find the treatment that offers the best balance of effectiveness and tolerability for your unique situation.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Making an Informed Decision
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            The decision to start psychiatric medication is deeply personal and should be made in partnership with a qualified healthcare provider who knows your full history and current situation. Here are key factors to consider:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Severity of symptoms:</strong> How much are your symptoms impacting your daily functioning, relationships, work, and quality of life?</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Previous treatment response:</strong> Have you tried therapy, lifestyle changes, or other interventions? What were the results?</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Evidence base:</strong> What does research show about medication effectiveness for your specific condition?</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Your values and preferences:</strong> What matters most to you in your treatment approach?</span>
            </li>
            <li className="flex gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Support systems:</strong> What resources do you have to support your treatment and recovery?</span>
            </li>
          </ul>
          <p className="mb-6">
            Remember that starting medication doesn't mean you've failed at managing your mental health, and it doesn't have to be a permanent decision. Treatment can be adjusted as your needs change. The goal is to find what works best for you to live your fullest, healthiest life.
          </p>
        </div>

        {/* Closing */}
        <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="mb-6">
            Psychiatric medications have limitations, and they're not right for everyone. But for many people struggling with mental health conditions, they can be life-changing tools that make recovery possible. Don't let myths and misconceptions prevent you from exploring all your treatment options.
          </p>
          <p className="mb-6 font-medium">
            If you're considering psychiatric medication or have questions about your current treatment, we're here to help. Our team provides compassionate, evidence-based care tailored to your unique needs and circumstances. Contact us today to schedule a consultation and take the first step toward feeling better.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start border border-[var(--color-border)]">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Mental Health. Our team is dedicated to providing evidence-based, compassionate care and education to support your mental wellness journey.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-['Cormorant',serif] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Understanding Depression: Signs, Symptoms, and Treatment Options</h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">Learn about the different types of depression and evidence-based approaches to treatment and recovery.</p>
                <span className="text-[var(--color-primary)] text-sm font-medium inline-flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-['Cormorant',serif] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Therapy and Medication: Why Combined Treatment Often Works Best</h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">Discover how therapy and medication complement each other for more effective mental health treatment.</p>
                <span className="text-[var(--color-primary)] text-sm font-medium inline-flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-['Cormorant',serif] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">What to Expect During Your First Mental Health Appointment</h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">Taking the first step can feel daunting. Here's what you can expect during your initial consultation.</p>
                <span className="text-[var(--color-primary)] text-sm font-medium inline-flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help you explore your treatment options and find the right path forward.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}