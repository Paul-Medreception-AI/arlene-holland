import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Illness Anxiety Disorder Treatment in Holland | Arlene Holland',
  description: 'Expert treatment for Illness Anxiety Disorder in Holland. Board-certified care with evidence-based therapy, medication management, and telehealth options. Get help today.',
  keywords: 'illness anxiety disorder treatment Holland, health anxiety therapy, hypochondria treatment, anxiety disorder specialist Holland',
}

export default function IllnessAnxietyDisorderPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Illness Anxiety Disorder</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight" style={{fontFamily: 'Cormorant'}}>
            Illness Anxiety Disorder Treatment in Holland
          </h1>
          <p className="text-xl leading-relaxed opacity-95 max-w-3xl">
            Illness Anxiety Disorder can dominate your thoughts and disrupt your daily life with persistent fears about having a serious medical condition. At Arlene Holland, we provide compassionate, evidence-based treatment to help you break free from the cycle of health-related anxiety and reclaim your peace of mind.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
            Understanding Illness Anxiety Disorder
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Illness Anxiety Disorder (IAD), formerly known as hypochondriasis, is a mental health condition characterized by excessive worry about having or developing a serious illness despite having little or no medical evidence to support these concerns. People with IAD may misinterpret normal bodily sensations as signs of severe disease, leading to significant distress and impairment in daily functioning. Research indicates that approximately 4-6% of the population experiences Illness Anxiety Disorder at some point in their lives, with symptoms often beginning in early to middle adulthood. The condition can severely impact quality of life, strain relationships, interfere with work productivity, and lead to excessive medical visits and unnecessary procedures. Individuals with IAD often engage in repeated body checking, frequent internet searches about symptoms, and constant reassurance-seeking from medical professionals or loved ones, creating a cycle that reinforces rather than alleviates their anxiety.
            </p>
            <p>
              The development of Illness Anxiety Disorder stems from a complex interplay of biological, psychological, and environmental factors. Genetic predisposition to anxiety disorders, a family history of serious illness, childhood experiences with disease or medical trauma, and personality traits such as heightened sensitivity to physical sensations all contribute to vulnerability. Cognitive patterns play a crucial role—people with IAD tend to catastrophize bodily sensations, maintain rigid beliefs about health and illness, and struggle with uncertainty tolerance. Previous experiences with misdiagnosis, observing a loved one's serious illness, or exposure to health-related media can trigger or exacerbate symptoms. Additionally, the condition often co-occurs with other mental health disorders including generalized anxiety disorder, obsessive-compulsive disorder, panic disorder, and depression, creating a more complex clinical picture that requires comprehensive assessment and treatment.
            </p>
            <p>
              Professional treatment is essential for Illness Anxiety Disorder because the condition rarely resolves on its own and typically worsens without intervention. Left untreated, IAD can lead to chronic distress, deteriorating mental and physical health, social isolation, occupational impairment, and substantial healthcare costs from unnecessary medical consultations and tests. Evidence-based treatment approaches have demonstrated significant effectiveness in reducing health anxiety symptoms, improving quality of life, and helping individuals develop healthier relationships with their bodies and healthcare. Early intervention prevents the entrenchment of maladaptive coping behaviors and provides individuals with practical tools to manage anxiety, challenge distorted health beliefs, and respond to bodily sensations in more balanced ways. With proper treatment, most people with Illness Anxiety Disorder experience substantial improvement and are able to resume normal activities without being controlled by health-related fears.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Signs & Symptoms of Illness Anxiety Disorder
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Emotional & Cognitive Symptoms */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Emotional & Cognitive Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Persistent health anxiety:</strong>
                  <span className="text-[var(--color-muted)]"> Constant worry about having or developing a serious disease that lasts six months or longer despite medical reassurance.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Catastrophic thinking:</strong>
                  <span className="text-[var(--color-muted)]"> Immediately jumping to worst-case scenarios when noticing bodily sensations or symptoms, assuming they indicate life-threatening illness.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Excessive preoccupation:</strong>
                  <span className="text-[var(--color-muted)]"> Spending hours each day thinking about health, analyzing symptoms, or researching medical conditions online.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Fear despite reassurance:</strong>
                  <span className="text-[var(--color-muted)]"> Continuing to worry about illness even after medical tests come back normal and doctors provide reassurance.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Heightened body awareness:</strong>
                  <span className="text-[var(--color-muted)]"> Hypervigilance to normal bodily sensations, interpreting them as signs of serious disease rather than routine functions.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Distress and impairment:</strong>
                  <span className="text-[var(--color-muted)]"> Significant emotional suffering and disruption to work, relationships, or daily activities due to health-related worries.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Difficulty concentrating:</strong>
                  <span className="text-[var(--color-muted)]"> Trouble focusing on tasks or conversations because thoughts keep returning to health concerns and potential symptoms.</span>
                </div>
              </div>
            </div>

            {/* Physical & Behavioral Symptoms */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Physical & Behavioral Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Excessive body checking:</strong>
                  <span className="text-[var(--color-muted)]"> Repeatedly examining your body for signs of illness, taking vital signs, or checking for lumps, changes, or abnormalities.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Frequent doctor visits:</strong>
                  <span className="text-[var(--color-muted)]"> Making numerous medical appointments, seeking second or third opinions, or visiting emergency rooms for symptoms that prove benign.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Compulsive research:</strong>
                  <span className="text-[var(--color-muted)]"> Spending extensive time searching symptoms online, reading medical literature, or watching health-related content that increases anxiety.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Reassurance seeking:</strong>
                  <span className="text-[var(--color-muted)]"> Constantly asking family, friends, or medical professionals for reassurance about your health, which provides only temporary relief.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Medical avoidance:</strong>
                  <span className="text-[var(--color-muted)]"> Paradoxically avoiding doctors, hospitals, or medical information out of fear that it will confirm worst fears or trigger more anxiety.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Activity restriction:</strong>
                  <span className="text-[var(--color-muted)]"> Limiting physical activities, social engagements, or travel due to fears of triggering symptoms or being far from medical care.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Physical tension symptoms:</strong>
                  <span className="text-[var(--color-muted)]"> Experiencing genuine physical symptoms like muscle tension, headaches, or digestive issues caused by chronic anxiety and stress.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Relationship strain:</strong>
                  <span className="text-[var(--color-muted)]"> Experiencing tension with family or friends who become frustrated with constant health discussions or reassurance requests.</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent the condition from becoming more entrenched in your daily life.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            How We Treat Illness Anxiety Disorder
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your treatment begins with a thorough evaluation to understand your specific health anxiety patterns, medical history, and how symptoms impact your life. We assess co-occurring conditions, identify triggers, and distinguish between appropriate health vigilance and excessive anxiety. This detailed assessment informs a personalized treatment plan tailored to your unique needs and circumstances.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all delay-100">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop an individualized treatment approach that may include cognitive-behavioral therapy, exposure and response prevention techniques, and when appropriate, medication management. We establish clear goals, identify specific anxiety-triggering situations, and create practical strategies you can implement immediately. Treatment plans are flexible and adjust as you progress and your needs evolve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all delay-200">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Treatment for Illness Anxiety Disorder is a process that requires consistent support and adjustment over time. We provide regular sessions to monitor your progress, refine therapeutic techniques, and address new challenges as they arise. You'll learn skills to manage anxiety long-term, develop healthier responses to bodily sensations, and build confidence in your ability to cope without constant medical reassurance.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              Our treatment approach is grounded in evidence-based practices that have demonstrated significant effectiveness for Illness Anxiety Disorder. Cognitive-behavioral therapy (CBT) is the gold standard treatment, helping you identify and challenge catastrophic health beliefs, reduce body checking and reassurance-seeking behaviors, and develop more balanced interpretations of bodily sensations. Exposure and response prevention (ERP) techniques gradually help you tolerate health-related anxiety without engaging in compulsive behaviors. Mindfulness and acceptance strategies teach you to observe physical sensations without judgment or immediate reaction. For some individuals, medication such as selective serotonin reuptake inhibitors (SSRIs) can be helpful in reducing overall anxiety levels and making therapy more effective. We collaborate with you to determine the most appropriate combination of treatments and coordinate with your primary care physician to ensure comprehensive, integrated care.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Why Choose Arlene Holland for Illness Anxiety Disorder Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Specialized training and board certification in treating anxiety disorders with a deep understanding of health anxiety's unique challenges.
              </p>
            </div>

            <div className="text-center animate-fade-up transition-all delay-100">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                Treatment tailored to your specific anxiety patterns, medical history, and personal goals—not a one-size-fits-all protocol.
              </p>
            </div>

            <div className="text-center animate-fade-up transition-all delay-200">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Convenient virtual appointments that fit your schedule, making it easier to maintain consistent treatment without travel concerns.
              </p>
            </div>

            <div className="text-center animate-fade-up transition-all delay-300">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Proven Experience</h3>
              <p className="text-[var(--color-muted)]">
                Extensive experience helping individuals overcome health anxiety and develop healthier relationships with their bodies and medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="font-serif text-6xl text-[var(--color-primary)] font-light flex-shrink-0" style={{fontFamily: 'Cormorant'}}>1</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                  Your journey begins with a comprehensive initial evaluation where we'll discuss your health anxiety symptoms, medical history, patterns of worry, and how the condition affects your daily life. We'll establish baseline measurements of anxiety severity and identify specific treatment goals. You'll leave this session with a clear understanding of Illness Anxiety Disorder and an initial plan for moving forward. This appointment typically lasts 60-90 minutes and provides the foundation for your personalized treatment.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-6xl text-[var(--color-primary)] font-light flex-shrink-0" style={{fontFamily: 'Cormorant'}}>2</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                  Active treatment starts with weekly sessions focused on psychoeducation, cognitive restructuring, and beginning to challenge health anxiety patterns. You'll learn about the anxiety cycle, start identifying catastrophic thinking patterns, and practice new ways of responding to bodily sensations. If medication is part of your treatment plan, we'll initiate it during this phase and monitor your response. This early period establishes therapeutic momentum and helps you develop foundational skills, though you may still experience significant anxiety as you learn new approaches.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-6xl text-[var(--color-primary)] font-light flex-shrink-0" style={{fontFamily: 'Cormorant'}}>3</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                  As treatment progresses, we'll implement more intensive exposure exercises and work on reducing reassurance-seeking and body-checking behaviors. You should begin noticing improvements in anxiety levels, ability to tolerate uncertainty, and reduced preoccupation with health concerns. We'll review your progress, adjust treatment approaches as needed, and address any emerging challenges. Sessions may begin to space out to every other week as you gain confidence in managing anxiety independently. This is often when patients report meaningful changes in quality of life and daily functioning.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-6xl text-[var(--color-primary)] font-light flex-shrink-0" style={{fontFamily: 'Cormorant'}}>4</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                  Once you've achieved significant improvement, we transition to maintenance care focused on relapse prevention, reinforcing skills, and managing occasional setbacks. Sessions may occur monthly or as needed, providing ongoing support as you apply your skills to new situations. We'll develop a plan for managing potential triggers like illness in loved ones or your own medical appointments. While complete elimination of health anxiety may not be realistic, most individuals achieve substantial reduction in symptoms and regain the ability to live fully without being dominated by health fears. Ongoing periodic check-ins help maintain progress over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Frequently Asked Questions About Illness Anxiety Disorder
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does treatment for Illness Anxiety Disorder typically take?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] text-lg leading-relaxed">
                Treatment duration varies significantly based on symptom severity, co-occurring conditions, and individual response to therapy. Most people with Illness Anxiety Disorder begin experiencing noticeable improvement within 8-12 weeks of consistent treatment. A typical course of cognitive-behavioral therapy involves 12-20 sessions over 3-6 months for significant symptom reduction. However, some individuals benefit from longer-term treatment, especially if anxiety has been present for many years or if there are complex underlying factors. After initial intensive treatment, many people continue with periodic maintenance sessions to prevent relapse and reinforce skills. The goal isn't necessarily to eliminate all health awareness, but to reduce anxiety to manageable levels that don't interfere with your quality of life.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication required to treat Illness Anxiety Disorder?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] text-lg leading-relaxed">
                Medication is not always required, but it can be a valuable component of treatment for many individuals with Illness Anxiety Disorder. Psychotherapy, particularly cognitive-behavioral therapy, is considered the first-line treatment and can be highly effective on its own. However, medication such as SSRIs (selective serotonin reuptake inhibitors) or SNRIs (serotonin-norepinephrine reuptake inhibitors) may be recommended if anxiety is severe, if you have co-occurring depression or other anxiety disorders, or if therapy alone hasn't provided sufficient relief. Medication can help reduce overall anxiety levels and make it easier to engage in therapeutic techniques. The decision about medication is always individualized, taking into account your symptoms, medical history, preferences, and treatment goals. Some people use medication temporarily during initial treatment phases, while others find longer-term medication management beneficial.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover treatment for Illness Anxiety Disorder?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] text-lg leading-relaxed">
                Most insurance plans, including Medicare, provide coverage for mental health treatment including Illness Anxiety Disorder, which is a recognized diagnosis in the DSM-5. Coverage typically includes both psychiatric evaluation and psychotherapy sessions, though specific benefits vary by plan. Many insurance plans also cover psychiatric medication management when medically appropriate. It's important to verify your specific benefits, including copays, deductibles, and any requirements for pre-authorization or in-network providers. We can provide documentation and work with you to maximize your insurance benefits. For those without insurance coverage or with high deductibles, we also discuss self-pay options and payment plans. Investing in mental health treatment often reduces overall healthcare costs by decreasing unnecessary medical visits, tests, and emergency room use associated with health anxiety.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                How is Illness Anxiety Disorder different from being appropriately concerned about health?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] text-lg leading-relaxed">
                The distinction lies in the intensity, duration, and impact of health concerns. Appropriate health awareness involves paying reasonable attention to symptoms, seeking medical care when warranted, and feeling reassured by normal test results and professional medical opinions. In contrast, Illness Anxiety Disorder is characterized by excessive and persistent worry that continues despite medical reassurance, preoccupation with health that consumes significant time and mental energy, and anxiety that causes substantial distress or impairment in daily functioning. People with IAD typically recognize their worry is excessive but feel unable to control it. The condition persists for at least six months and isn't better explained by actual medical problems. Treatment helps you calibrate your health vigilance to appropriate levels—maintaining reasonable health awareness without being consumed by irrational fears or engaging in compulsive behaviors that reinforce anxiety.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                What if therapy isn't working for my health anxiety?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] text-lg leading-relaxed">
                If you're not experiencing improvement after several weeks of consistent treatment, this should be openly discussed with your provider. Sometimes adjustments to the treatment approach can make a significant difference—this might include increasing session frequency, incorporating different therapeutic techniques, adding or adjusting medication, or addressing underlying issues that weren't initially apparent. Resistance to improvement sometimes occurs when there are unrecognized co-occurring conditions, when exposure exercises are being avoided rather than practiced, or when well-meaning family members are inadvertently reinforcing anxiety through excessive reassurance. Treatment effectiveness also depends on consistent application of techniques between sessions, not just during appointments. If treatment truly isn't helping despite good engagement and appropriate adjustments, we can explore referrals to specialists in anxiety disorders or programs with more intensive treatment options. The vast majority of people with Illness Anxiety Disorder do improve with appropriate treatment, but finding the right approach sometimes requires patience and persistence.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth appointments work effectively for treating Illness Anxiety Disorder?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] text-lg leading-relaxed">
                Yes, telehealth has proven highly effective for treating Illness Anxiety Disorder and offers several unique advantages. Research demonstrates that cognitive-behavioral therapy delivered via telehealth produces outcomes comparable to in-person treatment for anxiety disorders. Virtual appointments eliminate travel time and associated stress, provide greater scheduling flexibility, and allow you to receive care from the comfort of your own home. For individuals with health anxiety, telehealth can actually reduce some barriers to consistent care—you don't have to worry about exposure to germs in waiting rooms or the physical act of traveling to appointments triggering anxiety. The therapeutic techniques used to treat IAD, including cognitive restructuring, exposure exercises, and behavioral experiments, translate well to the virtual format. Many patients find that telehealth makes it easier to maintain consistent weekly appointments, which is crucial for treatment success. We use secure, HIPAA-compliant platforms to ensure your privacy and provide the same quality of care you would receive in person.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/generalized-anxiety-disorder" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Generalized Anxiety Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Chronic, excessive worry about various aspects of daily life that's difficult to control and causes significant distress.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>

            <Link href="/conditions/panic-disorder" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Panic Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Recurrent unexpected panic attacks with intense physical symptoms and persistent worry about future attacks.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>

            <Link href="/conditions/obsessive-compulsive-disorder" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Obsessive-Compulsive Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Intrusive thoughts and repetitive behaviors that cause significant distress and interfere with daily functioning.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Get Help for Illness Anxiety Disorder Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face Illness Anxiety Disorder alone. Our team is ready to help you break free from health anxiety and reclaim your peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}