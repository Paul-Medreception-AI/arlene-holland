import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Impact of Substance Use on Mental Health Treatment | Arlene Holland',
  description: 'Understanding the complex relationship between substance use and mental health treatment. Learn how co-occurring disorders affect recovery and what evidence-based approaches can help.',
  keywords: 'substance use, mental health treatment, dual diagnosis, co-occurring disorders, addiction, mental health recovery, integrated treatment',
  openGraph: {
    title: 'The Impact of Substance Use on Mental Health Treatment',
    description: 'Understanding the complex relationship between substance use and mental health treatment.',
    url: 'https://arleneholland.net/blog/the-impact-of-substance-use-on-mental-health-treatment',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
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

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'var(--font-cormorant)'}}>
            The Impact of Substance Use on Mental Health Treatment
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
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              When Sarah finally decided to seek help for her anxiety and depression, she didn't mention her weekend drinking. It seemed separate, manageable, not really part of the problem. But six months into treatment, her therapist gently raised the question: could her alcohol use be affecting her progress? This conversation marked a turning point in Sarah's journey—one that millions of people face when substance use and mental health challenges intersect.
            </p>
            <p>
              The relationship between substance use and mental health is complex, bidirectional, and often misunderstood. Understanding this connection is crucial for anyone seeking mental health treatment, as it can significantly impact recovery outcomes, treatment effectiveness, and long-term wellness.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Co-Occurring Disorders
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              When someone experiences both a mental health disorder and a substance use disorder simultaneously, clinicians refer to this as co-occurring disorders or dual diagnosis. This phenomenon is remarkably common: according to the Substance Abuse and Mental Health Services Administration (SAMHSA), approximately 9.5 million adults in the United States experience both mental illness and substance use disorder in any given year.
            </p>
            <p className="mb-4">
              The connection works both ways. People with mental health conditions may turn to substances to self-medicate uncomfortable symptoms—using alcohol to calm anxiety, stimulants to combat depression's lethargy, or cannabis to quiet racing thoughts. Conversely, chronic substance use can trigger or worsen mental health symptoms, altering brain chemistry and creating a cycle that becomes increasingly difficult to break.
            </p>
            <p>
              What makes this particularly challenging is that each condition can mask or mimic the other. Depression symptoms might actually be withdrawal effects. Anxiety could be substance-induced. Without addressing both issues simultaneously, treatment for either condition alone often proves less effective.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            How Substances Interfere with Mental Health Treatment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Substance use can undermine mental health treatment in several critical ways. First, many substances interact negatively with psychiatric medications. Alcohol, for instance, can reduce the effectiveness of antidepressants and mood stabilizers while increasing side effects. Stimulants can interfere with ADHD medications or anxiety treatments. These interactions don't just reduce treatment effectiveness—they can be dangerous.
            </p>
            <p className="mb-4">
              Second, substances alter brain chemistry in ways that directly counteract therapeutic progress. Alcohol is a central nervous system depressant that disrupts neurotransmitter balance, potentially worsening depression and anxiety. Cannabis, despite its perceived calming effects, can increase anxiety and paranoia in some individuals, particularly with regular use. Stimulants create artificial dopamine surges that can destabilize mood regulation.
            </p>
            <p className="mb-4">
              Third, substance use often interferes with the behavioral and cognitive changes that therapy requires. Therapy works by helping people develop new patterns of thinking and behaving. Substances can impair memory consolidation, reduce motivation, and create cognitive fog—all of which make it harder to engage fully in treatment and apply therapeutic strategies in daily life.
            </p>
            <p>
              Finally, the lifestyle patterns associated with substance use—disrupted sleep, poor nutrition, social isolation, or chaotic routines—create additional barriers to mental health recovery. Recovery requires stability, and substance use often introduces unpredictability.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{fontFamily: 'var(--font-cormorant)'}}>
            "Addressing substance use isn't about judgment—it's about removing barriers to the healing you deserve. Integrated treatment acknowledges your whole experience and creates a path forward that honors both challenges."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            The Science Behind the Connection
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Research has revealed several neurobiological mechanisms that explain why substance use and mental health disorders so frequently occur together. Both conditions involve similar brain regions and neurotransmitter systems—particularly those related to reward, stress response, and emotional regulation.
            </p>
            <p className="mb-4">
              The brain's reward circuitry, centered in areas like the ventral tegmental area and nucleus accumbens, plays a crucial role in both addiction and mood disorders. Chronic substance use fundamentally alters how this system functions, creating changes that can persist long after someone stops using. These neurobiological changes can make people more vulnerable to depression, anxiety, and other mental health challenges.
            </p>
            <p className="mb-4">
              Genetic factors also contribute to the overlap. Studies of twins and families show that vulnerability to both substance use disorders and mental health conditions can be inherited. Certain genetic variations affect how the brain processes dopamine, serotonin, and other neurotransmitters—influencing risk for both types of disorders.
            </p>
            <p>
              Environmental factors compound these biological vulnerabilities. Trauma, chronic stress, adverse childhood experiences, and social determinants of health increase risk for both substance use and mental health disorders. Understanding these shared risk factors helps explain why integrated treatment approaches are so important.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Recognizing the Signs in Your Own Life
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-6">
              Many people don't realize that their substance use is affecting their mental health treatment. The connection isn't always obvious, especially when use feels recreational or occasional. Here are some signs that substance use might be impacting your mental health recovery:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your symptoms improve temporarily but return or worsen cyclically</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your medications don't seem to work as well as your provider expected</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You use substances specifically to cope with mental health symptoms</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You've increased your substance use since starting mental health treatment</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You've noticed mood changes, memory problems, or increased anxiety related to use</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You've minimized or hidden your substance use from your treatment providers</span>
              </li>
            </ul>
            <p>
              Being honest with yourself and your treatment team about substance use isn't about shame or judgment—it's about ensuring you receive the most effective care possible. Your providers are there to help, not to criticize.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Integrated Treatment: A More Effective Approach
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              When both substance use and mental health disorders are present, integrated treatment—addressing both conditions simultaneously—consistently shows better outcomes than treating either condition alone. This approach recognizes that the two conditions are intertwined and require coordinated care.
            </p>
            <p className="mb-4">
              Integrated treatment typically includes several components. Comprehensive assessment evaluates both conditions thoroughly, understanding how they interact in your specific situation. Coordinated care ensures that all treatment providers—therapists, psychiatrists, addiction specialists—communicate and work together. Modified therapeutic approaches address both conditions within the same treatment framework, rather than requiring separate "mental health therapy" and "addiction counseling."
            </p>
            <p className="mb-4">
              Evidence-based therapies for co-occurring disorders include Cognitive Behavioral Therapy (CBT), which helps identify and change thought patterns related to both substance use and mental health symptoms; Dialectical Behavior Therapy (DBT), particularly effective for emotional regulation challenges; and motivational approaches that help people resolve ambivalence about change.
            </p>
            <p className="mb-4">
              Medication management becomes particularly important in integrated treatment. Your psychiatric provider can select medications less likely to interact with substances, monitor for complications, and adjust treatment as substance use changes. In some cases, medications that specifically address substance use disorders—like naltrexone for alcohol or buprenorphine for opioids—can be integrated with mental health medications.
            </p>
            <p>
              Support systems also play a crucial role. This might include peer support groups, family therapy, or community resources that address both recovery from substance use and mental health symptom management.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'var(--font-cormorant)'}}>
            Taking the Next Steps
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-6">
              If you're currently in mental health treatment and concerned about how substance use might be affecting your progress, here are some practical steps you can take:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Have an honest conversation with your provider.</strong> Share the full picture of your substance use, including frequency, amount, and how it relates to your mental health symptoms. This information is essential for effective treatment planning.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Request comprehensive assessment.</strong> Ask about screening for co-occurring disorders if this hasn't been done. A thorough evaluation helps identify all factors affecting your mental health.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Explore integrated treatment options.</strong> Inquire about programs or providers who specialize in treating co-occurring disorders and can address both issues simultaneously.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Build a support network.</strong> Connect with others who understand the challenges of co-occurring disorders, whether through support groups, peer specialists, or community resources.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be patient with the process.</strong> Recovery from co-occurring disorders often takes time, and progress may not be linear. Celebrate small victories and stay committed to your treatment plan.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Address underlying factors.</strong> Work with your treatment team to understand and address root causes like trauma, stress, or life circumstances that may contribute to both conditions.</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-4">
              The intersection of substance use and mental health treatment is complex, but understanding this relationship is empowering. Recognizing how substances might be affecting your mental health recovery isn't a setback—it's an opportunity to adjust your approach and access more effective care.
            </p>
            <p className="mb-4">
              Recovery is possible, even when facing co-occurring disorders. With integrated treatment, professional support, and commitment to the process, people successfully address both substance use and mental health challenges every day. You don't have to navigate this alone.
            </p>
            <p>
              If you're concerned about how substance use might be impacting your mental health treatment, reaching out for professional help is a courageous and important step. The right support can make all the difference in your journey toward lasting wellness.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-medium text-lg mb-1">
                Written by the Arlene Holland Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in mental health treatment and co-occurring disorders
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Mental Health
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Understanding Anxiety: When to Seek Professional Help
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn to recognize the signs that anxiety has moved beyond normal stress and when professional treatment can help.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Treatment
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  What to Expect in Your First Therapy Session
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  A comprehensive guide to preparing for and navigating your initial mental health appointment.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Recovery
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Building Resilience: Practical Strategies for Mental Wellness
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Evidence-based techniques to strengthen your mental health and develop lasting coping skills.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help you navigate co-occurring disorders with compassionate, evidence-based care.
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