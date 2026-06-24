import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anxiety Treatment | Arlene Holland Mental Health',
  description: 'Comprehensive anxiety treatment services helping you manage worry, fear, and panic. Evidence-based therapy and personalized care for lasting relief.',
}

export default function AnxietyTreatmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>›</span>
            <span className="text-white">Anxiety Treatment</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 animate-fade-up" style={{fontFamily: 'var(--font-cormorant)'}}>
            Anxiety Treatment in arleneholland
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Expert anxiety treatment helping you break free from overwhelming worry, fear, and physical symptoms that interfere with daily life. Our evidence-based approach combines proven therapeutic techniques with compassionate support to help you regain control and build lasting resilience.
          </p>
        </div>
      </section>

      {/* What Is Anxiety Treatment */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            What is Anxiety Treatment?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed mb-6">
              Anxiety treatment is a comprehensive therapeutic approach designed to help individuals manage and overcome excessive worry, fear, and the physical symptoms associated with anxiety disorders. While everyone experiences occasional anxiety in response to stressful situations, clinical anxiety is persistent, overwhelming, and often disproportionate to actual threats. Professional anxiety treatment addresses the root causes of anxious thinking patterns while providing practical tools to manage symptoms and restore quality of life.
            </p>

            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed mb-6">
              Effective anxiety treatment draws from multiple evidence-based modalities, most notably Cognitive Behavioral Therapy (CBT), which has been extensively researched and proven effective for various anxiety disorders including Generalized Anxiety Disorder (GAD), Social Anxiety Disorder, Panic Disorder, and specific phobias. CBT helps individuals identify and challenge distorted thought patterns that fuel anxiety, replacing them with more balanced and realistic perspectives. Additional therapeutic approaches may include mindfulness-based techniques, exposure therapy for specific fears, relaxation training, and when appropriate, medication management to address neurochemical imbalances.
            </p>

            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed mb-8">
              Anxiety treatment is particularly beneficial for individuals experiencing persistent worry that interferes with work, relationships, or daily functioning. Many people live with anxiety for years before seeking help, often believing their symptoms are just part of their personality or something they should manage on their own. The truth is that anxiety disorders are highly treatable mental health conditions with strong success rates when proper intervention is provided. Treatment not only reduces symptoms but also equips individuals with lifelong coping strategies and a deeper understanding of their mental health patterns.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              Common Signs You May Benefit from Anxiety Treatment
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Persistent, excessive worry about everyday situations that feels difficult to control</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Physical symptoms including racing heart, shortness of breath, muscle tension, or gastrointestinal issues</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Panic attacks with sudden, intense fear and overwhelming physical sensations</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Avoidance behaviors that limit your activities, social interactions, or professional opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Sleep disturbances including difficulty falling asleep due to racing thoughts or worry</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Restlessness, fatigue, difficulty concentrating, or feeling on edge much of the time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Obsessive thoughts or compulsive behaviors used to manage anxiety</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Social anxiety that makes interactions, public speaking, or performance situations intensely distressing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Treat It */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 text-center text-[var(--color-ink)] animate-fade-up" style={{fontFamily: 'var(--font-cormorant)'}}>
            Our Approach to Anxiety Treatment
          </h2>
          <p className="text-center text-lg text-[var(--color-muted)] mb-16 max-w-3xl mx-auto">
            A structured, evidence-based pathway designed to help you understand and overcome anxiety
          </p>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Initial Assessment
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We begin with a comprehensive evaluation to understand your anxiety symptoms, triggers, history, and how anxiety impacts your daily life. This includes screening for specific anxiety disorders and any co-occurring conditions. We'll discuss your goals and what success looks like for you.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Based on your assessment, we develop a customized treatment plan that may include Cognitive Behavioral Therapy, exposure techniques, mindfulness practices, and relaxation training. If appropriate, we'll discuss medication options and coordinate care with prescribers to address neurochemical factors.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Support & Skill Building
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Through regular sessions, we work together to implement anxiety management strategies, challenge anxious thoughts, and gradually face feared situations in a safe, controlled manner. You'll build a toolkit of coping skills and gain confidence in managing anxiety long-term.
              </p>
            </div>
          </div>

          {/* Treatment Modalities */}
          <div className="bg-gradient-to-br from-[var(--color-cream)] to-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h3 className="font-serif text-3xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              Evidence-Based Treatment Modalities
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-3">Cognitive Behavioral Therapy (CBT)</h4>
                <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                  The gold standard for anxiety treatment, CBT helps you identify and challenge distorted thought patterns that fuel anxiety. You'll learn to recognize cognitive distortions like catastrophizing and all-or-nothing thinking, and replace them with more balanced, realistic perspectives. CBT also includes behavioral experiments and gradual exposure to help you face fears rather than avoid them.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-3">Exposure Therapy</h4>
                <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                  For specific phobias, panic disorder, and social anxiety, gradual, controlled exposure to feared situations or sensations helps reduce avoidance behaviors and proves that feared outcomes are unlikely. We create a hierarchy of fears and work through them systematically at your pace, building confidence and resilience with each step.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-3">Mindfulness-Based Approaches</h4>
                <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                  Mindfulness practices teach you to observe anxious thoughts and physical sensations without judgment or reactivity. Through meditation, breathing exercises, and present-moment awareness, you develop the ability to stay grounded during anxiety rather than being swept away by it. These skills are particularly helpful for managing worry and rumination.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-3">Medication Management Coordination</h4>
                <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                  When appropriate, medication can be an effective component of anxiety treatment. While I provide therapy, I work closely with psychiatrists and primary care providers who can prescribe anti-anxiety medications (such as SSRIs or SNRIs) or short-term interventions. Combined treatment often produces the best outcomes for moderate to severe anxiety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-serif text-4xl font-light mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
              What to Expect: Your Treatment Timeline
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-2">First Visit (Week 1)</h4>
                  <p className="text-[var(--color-ink)]/70 leading-relaxed">
                    Your initial session focuses on understanding your anxiety history, current symptoms, triggers, and treatment goals. We'll complete diagnostic assessments and discuss what approach will work best for you. You'll leave with initial coping strategies and a clear understanding of our treatment plan. Many clients report feeling relief simply from being heard and validated.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Early Treatment (Weeks 2-4)</h4>
                  <p className="text-[var(--color-ink)]/70 leading-relaxed">
                    During the first month, we focus on psychoeducation about anxiety, teaching you how your brain and body respond to perceived threats. You'll begin learning cognitive techniques to identify and challenge anxious thoughts, plus relaxation and grounding exercises. Weekly sessions help establish momentum. Some clients notice reduced anxiety intensity within the first few weeks as they gain understanding and tools.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Active Treatment (Months 1-3)</h4>
                  <p className="text-[var(--color-ink)]/70 leading-relaxed">
                    This phase involves deeper work applying CBT techniques, beginning gradual exposure exercises if appropriate, and refining your coping strategies based on real-world practice. You'll track progress, celebrate wins, and troubleshoot challenges. Most clients experience significant symptom reduction during this period, with increased confidence in managing anxiety independently. Sessions may continue weekly or move to biweekly.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Maintenance & Long-term Success (Month 3+)</h4>
                  <p className="text-[var(--color-ink)]/70 leading-relaxed">
                    As your anxiety becomes more manageable, sessions typically space out to biweekly or monthly for maintenance and relapse prevention. We focus on sustaining gains, preparing for potential setbacks, and ensuring you have a robust anxiety management toolkit. Many clients complete formal treatment after 3-6 months but return as needed for tune-ups or when facing new stressors. The skills you learn are lifelong.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-l-4 border-[var(--color-primary)]">
              <p className="text-[var(--color-ink)]/80 leading-relaxed">
                <strong>Important:</strong> Treatment timelines vary based on anxiety severity, type of anxiety disorder, co-occurring conditions, and individual factors. Some clients experience relief quickly while others need longer-term support. The key is consistent engagement with treatment and practice of skills between sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Common Questions About Anxiety Treatment
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>How do I know if my anxiety requires professional treatment?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                <p>Consider seeking professional help if your anxiety is persistent (lasting weeks or months), interferes with daily activities like work or relationships, causes significant distress, leads to avoidance of important situations, or is accompanied by physical symptoms like panic attacks. If you're questioning whether you need help, that itself is often a sign that speaking with a professional could be beneficial. A consultation can help determine the severity of your anxiety and whether treatment would be helpful.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Will I need medication for my anxiety?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                <p>Not everyone needs medication for anxiety. Many people experience significant improvement through therapy alone, particularly with Cognitive Behavioral Therapy which has strong research support. However, medication can be very helpful for moderate to severe anxiety, especially when symptoms are so intense they interfere with engaging in therapy. The decision about medication is personal and should be made collaboratively with your treatment team. I work with psychiatrists and medical providers who can evaluate whether medication might be beneficial as part of your comprehensive treatment plan.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>How long does anxiety treatment take?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                <p>Treatment duration varies widely depending on the type and severity of anxiety, how long you've been experiencing symptoms, and your individual circumstances. Research suggests that CBT for anxiety typically involves 12-16 sessions, with many people noticing improvement within 4-8 weeks. Some individuals benefit from short-term focused treatment (3-4 months), while others with more complex or longstanding anxiety may engage in longer-term therapy. We'll regularly assess your progress and adjust the treatment plan as needed. The goal is always to help you become your own best therapist.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>What if talking about my anxiety makes it worse?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                <p>This is a common concern, and it's true that initially discussing anxiety can temporarily heighten awareness of symptoms. However, this is actually part of the therapeutic process. Avoidance keeps anxiety alive—facing it in a safe, structured environment with professional guidance is how healing occurs. We always work at your pace and use grounding techniques to ensure you feel safe. Most people find that naming and understanding their anxiety reduces its power over time. You're in control of what we discuss, and we'll build coping skills before delving into more challenging material.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Can anxiety be cured, or will I always struggle with it?</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                <p>While anxiety is a natural human emotion that everyone experiences, anxiety disorders are highly treatable conditions. Many people achieve full remission, meaning their symptoms no longer meet criteria for a disorder and don't interfere with daily life. Others learn to manage anxiety so effectively that it becomes a minor presence rather than a controlling force. Some people may have a biological predisposition to anxiety and may experience periods where symptoms increase during times of stress, but with proper treatment and coping skills, these episodes become shorter and less intense. The goal isn't necessarily to never feel anxious—it's to change your relationship with anxiety so it no longer controls your life.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/depression-treatment" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h4 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                Depression Treatment
              </h4>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-4">
                Evidence-based therapy for depression, helping you overcome persistent sadness, loss of interest, and low energy that interfere with daily life.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/services/trauma-therapy" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h4 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                Trauma Therapy
              </h4>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-4">
                Compassionate, trauma-informed care to help you heal from past experiences and reclaim a sense of safety, control, and hope for the future.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/services/stress-management" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h4 className="font-serif text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                Stress Management
              </h4>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-4">
                Practical strategies and skills to manage life's demands, prevent burnout, and build resilience in the face of ongoing stressors.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Get Help with Anxiety Treatment?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Take the first step toward managing your anxiety and reclaiming your life. Schedule a consultation to discuss how we can work together.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}