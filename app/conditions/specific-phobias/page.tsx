import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Specific Phobias Treatment in Holland | Arlene Holland',
  description: 'Expert treatment for specific phobias in Holland. Board-certified care using evidence-based therapies including exposure therapy and CBT. Telehealth available.',
  keywords: 'specific phobias treatment Holland, phobia therapy Holland, fear treatment, exposure therapy, anxiety treatment Holland',
  openGraph: {
    title: 'Specific Phobias Treatment in Holland | Arlene Holland',
    description: 'Expert treatment for specific phobias in Holland. Board-certified care using evidence-based therapies including exposure therapy and CBT.',
    url: 'https://arleneholland.net/conditions/specific-phobias',
    type: 'website',
  }
}

export default function SpecificPhobiasPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Specific Phobias</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight" style={{fontFamily: 'Cormorant'}}>
            Specific Phobias Treatment in Holland
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Specific phobias can dramatically limit your daily life, creating intense fear and avoidance of common situations or objects. Our evidence-based treatment approaches help you reclaim your freedom through proven therapies tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8" style={{fontFamily: 'Cormorant'}}>
            Understanding Specific Phobias
          </h2>
          
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6">
            <p className="leading-relaxed">
              Specific phobias are among the most common mental health conditions, affecting approximately 12.5% of adults in the United States at some point in their lives. A specific phobia is characterized by an intense, irrational fear of a particular object, situation, or activity that poses little or no actual danger. This fear goes far beyond simple dislike or discomfort—it triggers immediate anxiety responses and leads to persistent avoidance behaviors that can significantly interfere with work, relationships, and quality of life. Common specific phobias include fears of animals (such as dogs, spiders, or snakes), natural environments (heights, storms, water), blood-injection-injury, situational phobias (flying, elevators, enclosed spaces), and other triggers like choking or loud sounds. While someone with a specific phobia typically recognizes that their fear is excessive, they feel powerless to control their intense reaction when confronted with or even thinking about the feared object or situation.
            </p>
            
            <p className="leading-relaxed">
              The development of specific phobias involves a complex interplay of biological, psychological, and environmental factors. Many phobias emerge during childhood or adolescence, often following a traumatic experience with the feared object or situation, though some people develop phobias without any clear triggering event. Genetic predisposition plays a role, as anxiety disorders and phobias tend to run in families, suggesting both inherited temperament and learned behaviors from family members. Observational learning—watching someone else have a fearful reaction—can also contribute to phobia development, as can information transfer, such as hearing repeated warnings about dangers. Brain structure and function, particularly in areas involved in fear processing like the amygdala, influence how intensely we respond to perceived threats. Certain risk factors increase vulnerability to developing specific phobias, including having other anxiety disorders, experiencing high stress levels, having a negative or inhibited temperament, and experiencing trauma or difficult life events during formative years.
            </p>
            
            <p className="leading-relaxed">
              Professional treatment for specific phobias is essential because, unlike some fears that diminish naturally over time, phobias rarely resolve without intervention and often worsen, leading to increasingly restricted lifestyles and the development of additional mental health concerns. The avoidance behaviors that provide short-term relief actually reinforce the phobia, creating a cycle that becomes harder to break over time. Untreated specific phobias can lead to missed opportunities—avoiding career advancement that requires flying, declining social invitations that involve the feared situation, or experiencing chronic stress that impacts physical health. The good news is that specific phobias are among the most treatable mental health conditions, with evidence-based therapies showing success rates of 80-90% when properly applied. Early, professional treatment not only addresses the immediate fear but also teaches skills that prevent the development of additional phobias and builds resilience against anxiety more broadly. Seeking help is not a sign of weakness but rather a proactive step toward reclaiming the freedom to live fully without being controlled by fear.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center" style={{fontFamily: 'Cormorant'}}>
            Signs & Symptoms of Specific Phobias
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Emotional & Cognitive Symptoms</h3>
              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Intense, Overwhelming Fear</p>
                    <p className="text-[var(--color-muted)] text-sm">Immediate and excessive fear response when encountering or even thinking about the phobic stimulus, recognizing the fear is disproportionate but feeling unable to control it.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Anticipatory Anxiety</p>
                    <p className="text-[var(--color-muted)] text-sm">Persistent worry and anxiety about potentially encountering the feared object or situation, sometimes beginning days or weeks in advance of possible exposure.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Catastrophic Thinking</p>
                    <p className="text-[var(--color-muted)] text-sm">Automatic thoughts predicting worst-case scenarios, such as believing you will die, lose control, or suffer unbearable harm if exposed to the feared stimulus.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Feeling Powerless</p>
                    <p className="text-[var(--color-muted)] text-sm">Sense of helplessness and inability to rationalize away the fear despite understanding intellectually that the danger is minimal or nonexistent.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Fear of Losing Control</p>
                    <p className="text-[var(--color-muted)] text-sm">Overwhelming concern that you might panic, faint, embarrass yourself, or act irrationally when confronted with the phobic trigger.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Hypervigilance</p>
                    <p className="text-[var(--color-muted)] text-sm">Constant scanning of your environment for the feared object or situation, remaining on high alert to avoid any possible encounter.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Distress About the Phobia</p>
                    <p className="text-[var(--color-muted)] text-sm">Significant embarrassment, frustration, or shame about having the phobia, particularly when it interferes with important activities or relationships.</p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Panic Response</p>
                    <p className="text-[var(--color-muted)] text-sm">Rapid heartbeat, chest tightness, shortness of breath, trembling, sweating, dizziness, nausea, or feeling faint when exposed to or anticipating the phobic stimulus.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Active Avoidance</p>
                    <p className="text-[var(--color-muted)] text-sm">Going to great lengths to avoid the feared object or situation, including altering routines, declining opportunities, or making significant life decisions based on the phobia.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Escape Behaviors</p>
                    <p className="text-[var(--color-muted)] text-sm">Immediately fleeing situations where the feared object might be present or leaving when unexpectedly encountering the phobic stimulus.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Safety Behaviors</p>
                    <p className="text-[var(--color-muted)] text-sm">Developing rituals or requiring certain conditions (having someone accompany you, carrying "safety objects," taking specific routes) to endure situations where exposure might occur.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blood Pressure Changes</p>
                    <p className="text-[var(--color-muted)] text-sm">Particularly in blood-injection-injury phobias, experiencing a unique two-phase response that can include initial increase followed by sudden drop in blood pressure and heart rate, sometimes leading to fainting.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Functional Impairment</p>
                    <p className="text-[var(--color-muted)] text-sm">Experiencing limitations in work, education, social activities, or personal relationships due to avoiding situations that might involve exposure to the feared stimulus.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Freezing Response</p>
                    <p className="text-[var(--color-muted)] text-sm">Being unable to move or speak when unexpectedly confronted with the phobic stimulus, experiencing temporary paralysis from overwhelming fear.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Crying or Clinging</p>
                    <p className="text-[var(--color-muted)] text-sm">In children or in particularly distressing situations, displaying intense emotional reactions including crying, tantrums, or clinging to caregivers when faced with the feared stimulus.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent the phobia from becoming more entrenched and limiting.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-16 text-center" style={{fontFamily: 'Cormorant'}}>
            How We Treat Specific Phobias
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your treatment begins with a thorough evaluation to understand the specific nature of your phobia, its origins, severity, and impact on your daily functioning. We explore triggering situations, avoidance patterns, physical symptoms, and any co-occurring anxiety or mood conditions. This detailed assessment allows us to create a personalized treatment plan targeting your unique presentation and circumstances.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Evidence-Based Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We develop a structured treatment approach utilizing proven therapeutic modalities designed specifically for phobias. The plan progresses at a pace that feels manageable while maintaining momentum toward your goals. You receive clear explanations of each treatment component, realistic timelines, and specific strategies you can practice between sessions to accelerate progress and build lasting confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Support & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Throughout treatment, we continuously monitor your progress using objective measures and your subjective experience. We adjust therapeutic strategies as needed, celebrate successes, and problem-solve obstacles collaboratively. As you make progress, we shift focus to relapse prevention, helping you maintain gains and confidently manage situations independently. Our goal is not just symptom reduction but lasting freedom from phobic limitations.
              </p>
            </div>

          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-[var(--color-ink)]">
            <p className="leading-relaxed">
              Our treatment approach for specific phobias centers on <strong>exposure therapy</strong>, considered the gold-standard treatment with the strongest evidence base for phobic disorders. Exposure therapy involves gradually and systematically confronting feared situations in a controlled, therapeutic manner, allowing your nervous system to learn that the feared stimulus is not actually dangerous. We utilize several exposure approaches depending on your specific needs: <em>systematic desensitization</em> (pairing relaxation techniques with gradual exposure), <em>graded exposure</em> (creating a fear hierarchy and working through progressively more challenging situations), and when appropriate, <em>virtual reality exposure therapy</em> for phobias where real-world exposure is difficult to arrange. We combine exposure work with <strong>Cognitive Behavioral Therapy (CBT)</strong> techniques to address the thought patterns that maintain your phobia, teaching you to identify and challenge catastrophic predictions and develop more realistic assessments of risk. For certain presentations, we may incorporate <strong>applied tension</strong> techniques (particularly effective for blood-injection-injury phobias), mindfulness strategies to manage anxiety during exposure, and <strong>interoceptive exposure</strong> to reduce fear of physical sensations themselves. While medication is typically not a first-line treatment for specific phobias given the effectiveness of psychotherapy, in some cases short-term anti-anxiety medication may be considered as an adjunct to help you engage in exposure exercises, particularly for situations like flying or medical procedures. Our comprehensive approach equips you with both immediate coping tools and long-term skills to maintain your progress and prevent relapse.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center" style={{fontFamily: 'Cormorant'}}>
            Why Choose Arlene Holland for Specific Phobias Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Specialized training and certification in anxiety disorders with extensive experience treating all types of specific phobias using evidence-based approaches proven to work.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment</h3>
              <p className="text-[var(--color-muted)]">
                No two phobias are identical. We tailor exposure hierarchies, pacing, and therapeutic techniques to your specific fears, comfort level, and life circumstances for optimal outcomes.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Access expert phobia treatment from the comfort and safety of your home through secure telehealth sessions, eliminating barriers to getting the help you need.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Proven Track Record</h3>
              <p className="text-[var(--color-muted)]">
                Extensive experience helping individuals overcome diverse phobias—from common fears like heights and flying to less common phobias—achieving lasting freedom and confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-center" style={{fontFamily: 'Cormorant'}}>
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-serif text-6xl text-[var(--color-primary)] font-light" style={{fontFamily: 'Cormorant'}}>01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial comprehensive assessment, we conduct a detailed exploration of your specific phobia, including when it started, triggering situations, severity of anxiety responses, avoidance patterns, and impact on your life. We discuss previous treatment attempts, develop a fear hierarchy ranking situations from least to most anxiety-producing, and establish clear, meaningful treatment goals. You'll leave this session with education about phobias, an understanding of how exposure therapy works, and a preliminary treatment plan tailored to your needs.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-serif text-6xl text-[var(--color-primary)] font-light" style={{fontFamily: 'Cormorant'}}>02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-8)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We begin active treatment with psychoeducation and cognitive restructuring to address thought patterns maintaining your fear. Exposure work starts with lower-anxiety items on your hierarchy, using imaginal exposure, photos, videos, or real-world situations as appropriate. You'll learn anxiety management techniques including controlled breathing and relaxation skills. Sessions are structured but flexible, progressing at a pace that challenges you while remaining manageable. Between sessions, you complete homework assignments practicing exposure and cognitive techniques to accelerate progress.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-serif text-6xl text-[var(--color-primary)] font-light" style={{fontFamily: 'Cormorant'}}>03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As treatment progresses, we advance through your fear hierarchy to more challenging exposures while building on previous successes. Most individuals notice significant reduction in anxiety intensity and duration when facing feared situations. We assess your progress using standardized measures and your subjective experience, adjusting strategies as needed. You develop increasing confidence in your ability to manage anxiety and face previously avoided situations. We begin planning for real-world application of skills and discuss relapse prevention strategies.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-serif text-6xl text-[var(--color-primary)] font-light" style={{fontFamily: 'Cormorant'}}>04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Management (Month 3+)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most specific phobias respond well to focused exposure therapy, with many individuals achieving significant improvement within 8-16 sessions. As you near treatment completion, we consolidate gains, ensure you've mastered all levels of your fear hierarchy, and develop a comprehensive relapse prevention plan. You learn to recognize early warning signs of avoidance creeping back and strategies for maintaining exposure rather than reverting to old patterns. We may schedule periodic follow-up sessions to monitor maintenance of progress and address any new challenges. The goal is lasting freedom from phobic limitations and confidence in your ability to face fears independently.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center" style={{fontFamily: 'Cormorant'}}>
            Frequently Asked Questions About Specific Phobias
          </h2>
          
          <div className="space-y-4">
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                How long does treatment for a specific phobia typically take?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Specific phobias often respond relatively quickly to treatment compared to other anxiety disorders. Most individuals experience significant improvement within 8-16 sessions of focused exposure therapy, though the exact timeline varies based on phobia severity, your comfort with exposure exercises, consistency with homework practice, and whether multiple phobias are being addressed. Some people notice meaningful progress even sooner, while others with more severe or longstanding phobias may benefit from additional sessions. Treatment is considered complete when you can comfortably face previously feared situations without significant distress or avoidance, and you have confidence in maintaining these gains independently. We work collaboratively to ensure treatment progresses at a pace that feels both challenging and manageable.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Is medication necessary to treat a specific phobia?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Medication is typically not necessary for treating specific phobias, as exposure therapy and CBT techniques are highly effective on their own and produce lasting results without pharmacological intervention. However, in certain situations, medication may be considered as a short-term adjunct to therapy. For example, if you need to face a feared situation before therapy has progressed sufficiently (such as an upcoming flight), a short-acting anti-anxiety medication might help you manage the situation while continuing therapeutic work. Some individuals with co-occurring conditions like generalized anxiety disorder or depression may benefit from medication for those conditions, which can indirectly support phobia treatment. If medication is appropriate for your situation, we can coordinate with prescribing providers to ensure comprehensive care. Our primary focus remains on helping you develop skills and confidence to face fears without relying on medication long-term.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Will I be forced to confront my worst fear immediately?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Absolutely not. Effective exposure therapy is gradual and systematic, not traumatic. We work collaboratively to create a fear hierarchy that breaks down your phobia into manageable steps, starting with situations that provoke mild to moderate anxiety and progressively working toward more challenging exposures only after you've mastered earlier steps. You maintain control throughout treatment, and we never force you into situations before you're ready. The goal is to create experiences of successful anxiety management that build confidence progressively. Most people find that what initially seemed like their "worst fear" becomes much more manageable after systematically working through the hierarchy. We might use imaginal exposure (visualization), photos, videos, or virtual reality before progressing to real-world encounters. The pacing is adjusted to your comfort level while maintaining therapeutic momentum. You're an active partner in treatment decisions, not a passive recipient.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Does insurance cover treatment for specific phobias?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Most insurance plans do cover treatment for specific phobias, as they are recognized mental health conditions with diagnostic codes that meet medical necessity criteria. Coverage typically includes both evaluation and ongoing psychotherapy sessions. However, specifics vary by insurance plan, including factors like copayment amounts, deductibles, whether prior authorization is required, session limits, and whether your provider is in-network versus out-of-network. We recommend contacting your insurance company before beginning treatment to verify your mental health benefits, understand your financial responsibility per session, and confirm any requirements. Our practice can provide you with necessary documentation for insurance claims. If insurance coverage is limited or unavailable, we can discuss alternative payment arrangements and focus on time-limited, efficient treatment approaches that respect your financial considerations while providing effective care.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                What if exposure therapy isn't working for me?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  If you're not experiencing progress with exposure therapy, we would first carefully assess what might be interfering with treatment effectiveness. Common obstacles include exposures that aren't challenging enough to produce learning, progressing too quickly before mastering earlier steps, subtle avoidance behaviors or "safety behaviors" during exposures that prevent full emotional processing, co-occurring conditions like depression that need concurrent treatment, or factors outside of therapy that are maintaining the phobia. We would collaboratively adjust the treatment approach—perhaps modifying the pace, changing exposure methods, addressing cognitive patterns more intensively, or incorporating additional therapeutic techniques. Sometimes what appears to be lack of progress is actually a plateau before a breakthrough. If standard exposure therapy genuinely isn't effective after appropriate adjustments, we would consider alternative evidence-based approaches or refer you to specialists with expertise in treatment-resistant phobias. Your honest feedback about what is and isn't working is essential for optimizing your treatment.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Can telehealth therapy effectively treat my specific phobia?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                <p className="leading-relaxed">
                  Yes, telehealth can be highly effective for treating specific phobias, and research supports virtual therapy outcomes comparable to in-person treatment for many phobic presentations. Telehealth offers several advantages: immediate access to specialized treatment without geographic barriers, the comfort of receiving therapy in your own environment, reduced scheduling challenges, and the ability to practice exposure exercises in your natural settings with therapist guidance via phone or video. Many exposure exercises can be conducted virtually—working with images, videos, imaginal exposure, and guiding you through real-world exposures in your environment. For certain phobias where in-person exposure in a clinical setting would be beneficial (such as blood-injection-injury phobias requiring practice in medical settings), we can create hybrid approaches or provide guidance for exposures you complete independently between sessions. Telehealth eliminates common barriers to accessing phobia treatment and allows consistent, convenient care that fits your schedule and comfort level.
                </p>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl mb-8 text-center" style={{fontFamily: 'Cormorant'}}>
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <Link href="/conditions/social-anxiety-disorder" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Social Anxiety Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Intense fear of social situations and being judged by others, leading to avoidance of social interactions.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>

            <Link href="/conditions/panic-disorder" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Panic Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Recurrent unexpected panic attacks and persistent worry about future attacks or their consequences.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>

            <Link href="/conditions/generalized-anxiety-disorder" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Generalized Anxiety Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Persistent, excessive worry about various aspects of life that is difficult to control and causes significant distress.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Get Help for Specific Phobias Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face specific phobias alone. Our team is ready to help you reclaim your freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}