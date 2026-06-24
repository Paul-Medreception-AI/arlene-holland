import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anger Management Issues Treatment in Holland | Arlene Holland',
  description: 'Expert anger management treatment in Holland. Evidence-based therapy for chronic anger, rage, and emotional regulation. Telehealth available. Contact us today.',
  keywords: 'anger management Holland, anger issues treatment, rage therapy, emotional regulation, anger counseling Holland',
  openGraph: {
    title: 'Anger Management Issues Treatment in Holland | Arlene Holland',
    description: 'Expert anger management treatment in Holland. Evidence-based therapy for chronic anger, rage, and emotional regulation.',
    url: 'https://arleneholland.net/conditions/anger-management-issues',
    type: 'website',
  },
}

export default function AngerManagementIssuesPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Anger Management Issues</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
            Anger Management Issues Treatment in Holland
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed opacity-95">
            Uncontrolled anger can damage relationships, careers, and your physical health. Our evidence-based anger management treatment helps you understand the root causes of your anger and develop healthy coping strategies for lasting change.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Anger Management Issues
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Anger management issues affect millions of Americans, with studies suggesting that approximately 7-8% of the population experiences problematic anger that interferes with daily functioning. While anger itself is a normal human emotion, chronic or intense anger that leads to aggressive behavior, damaged relationships, or legal consequences indicates a need for professional intervention. People with anger management problems often describe feeling overwhelmed by rage, experiencing explosive outbursts over minor frustrations, or harboring persistent resentment that colors all their interactions. This condition doesn't discriminate—it affects people across all demographics, professions, and backgrounds, though men are statistically more likely to seek treatment for anger-related concerns.
            </p>
            <p>
              The causes of anger management issues are multifaceted and rarely stem from a single source. Childhood trauma, witnessing or experiencing violence, learned behavior patterns from family of origin, underlying mental health conditions like depression or anxiety, chronic stress, substance abuse, and neurological factors can all contribute to problematic anger responses. Some individuals have never learned healthy emotional regulation skills, while others may have developed maladaptive coping mechanisms in response to feeling powerless or threatened. Certain medical conditions, hormonal imbalances, and even sleep deprivation can lower the threshold for anger activation. Understanding that anger often masks other emotions—such as fear, hurt, shame, or vulnerability—is crucial to effective treatment, as addressing the underlying emotional wounds is essential for lasting change.
            </p>
            <p>
              Professional treatment for anger management issues is not just beneficial—it's often essential for preventing serious consequences. Untreated anger problems lead to broken relationships, job loss, legal troubles including domestic violence charges, physical health problems like hypertension and heart disease, and profound social isolation. Many people who struggle with anger feel tremendous shame about their behavior but don't know how to change patterns that feel automatic and overwhelming. Evidence-based treatment provides practical skills for recognizing anger triggers, interrupting the escalation process, communicating needs effectively without aggression, and addressing the root psychological issues that fuel chronic anger. With proper treatment, individuals can transform their relationship with anger, learning to experience and express it in healthy ways that strengthen rather than destroy their connections with others.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Signs & Symptoms of Anger Management Issues
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            
            {/* Emotional Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Emotional Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Frequent Irritability</strong>
                    <p className="text-[var(--color-muted)]">Constant state of annoyance where minor inconveniences trigger disproportionate frustration and hostility.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Overwhelming Rage</strong>
                    <p className="text-[var(--color-muted)]">Intense feelings of fury that feel uncontrollable and may lead to fear of what you might do when angry.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Persistent Resentment</strong>
                    <p className="text-[var(--color-muted)]">Holding grudges for extended periods and difficulty forgiving perceived slights or injustices.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Impatience & Restlessness</strong>
                    <p className="text-[var(--color-muted)]">Inability to tolerate waiting, delays, or situations not proceeding exactly as expected.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Feeling Misunderstood</strong>
                    <p className="text-[var(--color-muted)]">Chronic sense that others don't listen or respect you, leading to defensive or aggressive responses.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Emotional Volatility</strong>
                    <p className="text-[var(--color-muted)]">Rapid mood swings from calm to furious with little warning or apparent trigger.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Guilt & Shame After Outbursts</strong>
                    <p className="text-[var(--color-muted)]">Deep regret following angry episodes, yet feeling unable to prevent future occurrences.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical & Behavioral Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Verbal Aggression</strong>
                    <p className="text-[var(--color-muted)]">Yelling, screaming, name-calling, threatening language, or cruel comments during conflicts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Physical Aggression</strong>
                    <p className="text-[var(--color-muted)]">Hitting, throwing objects, punching walls, slamming doors, or other destructive physical acts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Racing Heart & Tension</strong>
                    <p className="text-[var(--color-muted)]">Rapid heartbeat, muscle tension, clenched jaw or fists, and feeling physically "heated" when angry.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Passive-Aggressive Behavior</strong>
                    <p className="text-[var(--color-muted)]">Expressing anger indirectly through sulking, silent treatment, procrastination, or subtle sabotage.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Road Rage or Public Outbursts</strong>
                    <p className="text-[var(--color-muted)]">Aggressive driving behaviors or confrontations with strangers in public settings.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Substance Use to Calm Down</strong>
                    <p className="text-[var(--color-muted)]">Relying on alcohol, drugs, or other substances to manage angry feelings or decompress.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Relationship Damage</strong>
                    <p className="text-[var(--color-muted)]">Pattern of broken relationships, family estrangement, or social isolation due to anger episodes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Work or Legal Problems</strong>
                    <p className="text-[var(--color-muted)]">Job loss, disciplinary actions, arrests, or legal consequences stemming from anger-related incidents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent serious consequences to your relationships, career, and quality of life.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-16 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            How We Treat Anger Management Issues
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation to understand your anger patterns, triggers, and the underlying factors contributing to your anger issues. This includes exploring your personal history, identifying co-occurring mental health conditions, and assessing the impact anger has had on your life. We create a safe, non-judgmental space where you can honestly discuss your experiences and concerns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your unique situation, we develop a tailored treatment approach that addresses your specific needs and goals. Your plan typically includes evidence-based therapy techniques, practical anger management skills, and if appropriate, discussion of complementary approaches. We collaborate with you to set realistic goals and establish measurable progress markers that matter to you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Anger management is a journey, not a destination. We provide continuous support through regular therapy sessions, progress monitoring, and treatment adjustments as needed. You'll learn to recognize early warning signs, implement de-escalation techniques in real-time, and build lasting emotional regulation skills. We celebrate your successes and work through setbacks together with compassion and practical guidance.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our treatment approach draws primarily from <strong>Cognitive Behavioral Therapy (CBT)</strong>, which helps you identify and change thought patterns that trigger anger, and <strong>Dialectical Behavior Therapy (DBT)</strong>, which teaches specific skills for emotion regulation, distress tolerance, and interpersonal effectiveness. We also incorporate techniques from <strong>mindfulness-based therapies</strong> to help you develop awareness of your anger triggers and create space between impulse and action. For some individuals, we may explore whether underlying conditions such as depression, anxiety, ADHD, or trauma are contributing to anger problems. While medication is not typically the primary treatment for anger management, it may be considered if there's a co-occurring condition that would benefit from pharmacological support. Our goal is to help you develop a healthier relationship with anger—recognizing it as valuable information about your needs and boundaries while expressing it in constructive rather than destructive ways.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Choose Arlene Holland for Anger Management Issues Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our providers have specialized training and extensive experience treating anger management issues and related mental health conditions. We stay current with the latest evidence-based practices and bring clinical expertise combined with genuine compassion to every patient interaction.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized, Non-Judgmental Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We understand that seeking help for anger issues takes courage. We provide a safe, stigma-free environment where you can be honest about your struggles without fear of judgment. Every treatment plan is customized to your unique circumstances, goals, and learning style.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Telehealth Options</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Access quality anger management treatment from the comfort and privacy of your own home. Our secure telehealth platform makes it easier to maintain consistent treatment, even with a busy schedule. Same professional care, greater convenience.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Proven Results with This Condition</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We have successfully helped numerous individuals transform their relationship with anger and rebuild damaged relationships. Our patients report improved emotional control, better communication skills, reduced conflict, and enhanced quality of life across all domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Your Treatment Journey
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl font-light text-[var(--color-primary)]" style={{ fontFamily: 'Cormorant, serif' }}>01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial appointment, we'll conduct a comprehensive assessment of your anger patterns, triggers, personal history, and treatment goals. This is a collaborative conversation where we gather the information needed to create an effective treatment plan. You'll leave with a clear understanding of the path forward and practical techniques you can start using immediately.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl font-light text-[var(--color-primary)]" style={{ fontFamily: 'Cormorant, serif' }}>02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  In the early weeks, we focus on psychoeducation about anger, identifying your personal triggers and warning signs, and teaching foundational skills like the anger escalation cycle, time-out techniques, and basic relaxation strategies. Many patients notice some improvement in their ability to recognize anger building and create small moments of choice about how to respond.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl font-light text-[var(--color-primary)]" style={{ fontFamily: 'Cormorant, serif' }}>03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As you continue therapy, we deepen the work by exploring underlying issues, practicing advanced communication techniques, addressing cognitive distortions, and building distress tolerance skills. You'll likely experience both progress and setbacks during this phase—this is normal and expected. We use setbacks as learning opportunities to refine your skills and strengthen your ability to manage anger effectively.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl font-light text-[var(--color-primary)]" style={{ fontFamily: 'Cormorant, serif' }}>04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most patients benefit from 3-6 months of regular therapy, though the exact timeline varies based on individual needs and circumstances. As your skills solidify and anger episodes decrease in frequency and intensity, we transition to less frequent maintenance sessions. The goal is for you to internalize these skills so they become automatic, with the option for periodic check-ins or booster sessions as needed to maintain progress.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg border border-[var(--color-border)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Setting Realistic Expectations:</strong> Changing deeply ingrained anger patterns takes time and consistent effort. Most people don't achieve perfect anger control immediately, and that's okay. Progress often looks like gradually increasing the time between trigger and reaction, reducing the intensity of angry episodes, making amends more quickly after outbursts, and developing greater self-awareness. Celebrate small victories along the way—they add up to significant life changes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions About Anger Management Issues
          </h2>
          
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                How long does anger management treatment typically take?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most people benefit from 12-24 sessions (approximately 3-6 months) of structured anger management therapy, though the exact duration depends on the severity of the anger issues, underlying causes, and individual progress. Some individuals see meaningful improvement within the first month, while others with complex trauma or co-occurring conditions may need longer-term treatment. The key is consistent engagement with the process and practicing skills between sessions.
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Is medication required for anger management issues?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Medication is not typically the primary treatment for anger management issues. However, if your anger is related to an underlying condition such as depression, anxiety, ADHD, bipolar disorder, or PTSD, medication may be an important part of a comprehensive treatment plan. Some individuals benefit from medications that help with mood stabilization or impulse control. We'll discuss whether medication might be helpful during your evaluation, but the cornerstone of anger management treatment is always learning skills and changing thought patterns through therapy.
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Does insurance cover anger management treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Many insurance plans do cover mental health treatment for anger issues, particularly when there's a diagnosable condition such as Intermittent Explosive Disorder or when anger is a symptom of another mental health condition like depression or PTSD. Coverage varies by plan, and some insurance companies may require prior authorization or have session limits. We recommend contacting your insurance provider directly to understand your specific benefits. We also offer self-pay options for those who prefer not to use insurance or whose plans don't provide adequate coverage.
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                What if I've tried therapy before and it didn't work?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Previous unsuccessful therapy doesn't mean anger management treatment won't work for you—it may mean the approach wasn't the right fit. Anger management requires specific, evidence-based techniques like CBT and DBT, and not all therapists specialize in these methods. Additionally, readiness for change plays a crucial role; sometimes people are more prepared to do this work at different points in their lives. We'll work with you to understand what didn't work before and create a different approach that addresses those gaps. Many people who struggled with previous therapy find success with a more structured, skills-based approach.
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Can telehealth be effective for anger management treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, research shows that telehealth can be highly effective for anger management therapy. The skills-based nature of this treatment—learning to identify triggers, challenge thoughts, practice relaxation techniques, and improve communication—translates well to video sessions. Many patients actually prefer telehealth because it allows them to practice skills in their real-life environment and eliminates barriers like commute time. The therapeutic relationship and quality of care remain the same whether we meet in person or virtually.
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Will my family or partner need to be involved in treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Individual therapy is typically the primary treatment approach, as the focus is on your own triggers, thoughts, and behavior patterns. However, involving family members or partners can be beneficial in some cases, particularly if relationship dynamics contribute to anger episodes or if loved ones need guidance on how to support your treatment. We can discuss couples therapy or family sessions if appropriate for your situation. The decision is always collaborative and based on what will be most helpful for your specific circumstances.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/anxiety" className="block bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Anxiety Disorders</h4>
              <p className="text-[var(--color-muted)] mb-3">Anxiety and anger often coexist, with chronic stress and worry sometimes manifesting as irritability and angry outbursts.</p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">Learn More →</span>
            </a>

            <a href="/conditions/depression" className="block bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Depression</h4>
              <p className="text-[var(--color-muted)] mb-3">Depression can manifest as irritability and anger, particularly in men, and treating underlying depression often reduces anger issues.</p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">Learn More →</span>
            </a>

            <a href="/conditions/trauma-ptsd" className="block bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Trauma & PTSD</h4>
              <p className="text-[var(--color-muted)] mb-3">Unresolved trauma frequently contributes to anger problems as the nervous system remains in a heightened state of threat response.</p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">Learn More →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Help for Anger Management Issues Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face anger management issues alone. Our team is ready to help you develop healthier ways to express and manage your emotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}