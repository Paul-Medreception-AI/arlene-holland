import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Anxiety Disorder Treatment in Holland | Arlene Holland',
  description: 'Expert social anxiety disorder treatment in Holland. Board-certified psychiatric care with evidence-based therapy and personalized treatment plans. Telehealth available.',
  keywords: 'social anxiety disorder treatment Holland, social phobia Holland, anxiety therapist Holland, social anxiety help Holland',
}

export default function SocialAnxietyDisorderPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-white/80 text-sm mb-6 font-light">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:text-white transition-colors">Conditions</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Social Anxiety Disorder</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-white" style={{ fontFamily: 'Cormorant, serif' }}>
            Social Anxiety Disorder Treatment in Holland
          </h1>
          <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl">
            Social anxiety disorder affects millions of people, making everyday interactions feel overwhelming and isolating. At Arlene Holland's practice, we provide compassionate, evidence-based treatment that helps you reclaim confidence and build meaningful connections in your personal and professional life.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Social Anxiety Disorder
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Social anxiety disorder, also known as social phobia, is a chronic mental health condition characterized by intense, persistent fear of social situations where one might be judged, embarrassed, or scrutinized by others. Unlike occasional nervousness before public speaking or meeting new people, social anxiety disorder involves overwhelming anxiety that significantly interferes with daily activities, relationships, work performance, and overall quality of life. According to the Anxiety and Depression Association of America, approximately 15 million American adults—about 7% of the population—experience social anxiety disorder, with symptoms typically beginning around age 13. The condition manifests in various social contexts, from intimate conversations to large gatherings, and can prevent individuals from pursuing educational opportunities, advancing in their careers, forming romantic relationships, or even handling routine tasks like shopping or eating in public. Left untreated, social anxiety disorder often leads to secondary complications including depression, substance abuse, academic or professional underachievement, and profound social isolation.
            </p>
            <p>
              The development of social anxiety disorder stems from a complex interplay of biological, psychological, and environmental factors. Genetics play a significant role—individuals with first-degree relatives who have anxiety disorders are two to six times more likely to develop social anxiety themselves. Neurobiologically, research indicates that an overactive amygdala (the brain's fear center) and imbalances in neurotransmitters like serotonin contribute to heightened fear responses in social situations. Temperamental factors, particularly behavioral inhibition in childhood—a tendency toward shyness and withdrawal from unfamiliar people or situations—strongly predict later development of social anxiety. Environmental influences include negative social experiences such as bullying, public humiliation, childhood abuse or neglect, overprotective or highly critical parenting styles, and traumatic social events. Cultural factors can also influence symptom expression, with some cultures placing greater emphasis on social harmony and collective evaluation. Additionally, certain life transitions like starting a new job, entering college, or going through a divorce can trigger or exacerbate symptoms in vulnerable individuals.
            </p>
            <p>
              Professional treatment for social anxiety disorder is essential because the condition rarely improves without intervention and typically worsens over time if left unaddressed. While avoidance provides temporary relief from anxiety-provoking situations, it reinforces fear and progressively narrows one's world, creating a self-perpetuating cycle of anxiety and isolation. Evidence-based treatments—particularly cognitive-behavioral therapy (CBT) and medication when appropriate—have demonstrated remarkable efficacy in helping individuals challenge distorted thinking patterns, develop practical coping skills, and gradually face feared situations in a controlled, supportive environment. Research shows that with proper treatment, most people with social anxiety disorder experience significant symptom reduction and substantial improvement in functioning. Early intervention is particularly crucial, as untreated social anxiety during formative years can derail educational attainment, career development, and the acquisition of essential social skills. Professional guidance provides not only symptom relief but also prevents the devastating secondary consequences that can accumulate over years of untreated anxiety—including major depression, substance dependence, diminished self-esteem, and missed life opportunities that may be difficult or impossible to reclaim later.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Signs & Symptoms of Social Anxiety Disorder
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Emotional/Cognitive Symptoms */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Emotional & Cognitive Symptoms
              </h3>
              <div className="space-y-6">
                {[
                  {
                    label: 'Intense Fear of Judgment',
                    description: 'Overwhelming worry about being negatively evaluated, criticized, or embarrassed by others in social situations.'
                  },
                  {
                    label: 'Anticipatory Anxiety',
                    description: 'Experiencing severe anxiety for days or weeks before an upcoming social event or performance.'
                  },
                  {
                    label: 'Fear of Showing Anxiety Symptoms',
                    description: 'Intense worry that others will notice your blushing, sweating, trembling, or nervous voice.'
                  },
                  {
                    label: 'Excessive Self-Consciousness',
                    description: 'Constant, painful awareness of being observed and evaluated during interactions with others.'
                  },
                  {
                    label: 'Catastrophic Thinking',
                    description: 'Assuming the worst possible outcome in social situations and overestimating potential humiliation.'
                  },
                  {
                    label: 'Rumination After Social Events',
                    description: 'Obsessively analyzing your performance and dwelling on perceived mistakes or awkward moments for days.'
                  },
                  {
                    label: 'Fear of Authority Figures',
                    description: 'Extreme discomfort speaking with supervisors, teachers, doctors, or anyone perceived as having higher status.'
                  },
                  {
                    label: 'Perfectionism in Social Performance',
                    description: 'Setting unrealistically high standards for how you should appear or behave in social contexts.'
                  }
                ].map((symptom, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-ink)]">{symptom.label}:</span>
                      <span className="text-[var(--color-muted)] ml-2">{symptom.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Physical/Behavioral Symptoms */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Physical & Behavioral Symptoms
              </h3>
              <div className="space-y-6">
                {[
                  {
                    label: 'Physical Panic Symptoms',
                    description: 'Rapid heartbeat, sweating, trembling, nausea, dizziness, or feeling faint in social situations.'
                  },
                  {
                    label: 'Blushing or Facial Flushing',
                    description: 'Noticeable redness of the face or neck that intensifies anxiety due to fear of it being observed.'
                  },
                  {
                    label: 'Avoidance of Social Situations',
                    description: 'Declining invitations, skipping work or school events, or missing important opportunities to avoid anxiety.'
                  },
                  {
                    label: 'Difficulty Speaking',
                    description: 'Voice trembling, mind going blank, or struggling to articulate thoughts when interacting with others.'
                  },
                  {
                    label: 'Rigid or Tense Body Language',
                    description: 'Appearing stiff, avoiding eye contact, or displaying closed-off postures due to extreme discomfort.'
                  },
                  {
                    label: 'Safety Behaviors',
                    description: 'Relying on alcohol, constantly checking appearance, over-preparing for conversations, or always bringing a companion.'
                  },
                  {
                    label: 'Difficulty Eating or Drinking Publicly',
                    description: 'Fear of trembling hands, choking, or being watched while consuming food or beverages around others.'
                  },
                  {
                    label: 'Muscle Tension and Fatigue',
                    description: 'Chronic physical tension from constant vigilance in social settings, leading to exhaustion and body aches.'
                  }
                ].map((symptom, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-ink)]">{symptom.label}:</span>
                      <span className="text-[var(--color-muted)] ml-2">{symptom.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-lg text-center text-[var(--color-ink)] max-w-3xl mx-auto border-t border-[var(--color-border)] pt-8">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent years of unnecessary suffering and missed opportunities. Social anxiety disorder is highly treatable with the right professional support.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            How We Treat Social Anxiety Disorder
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Comprehensive Assessment',
                description: 'Your treatment begins with a thorough evaluation to understand the specific situations that trigger your anxiety, the severity of your symptoms, and how social anxiety impacts your daily functioning. We explore your personal history, identify co-occurring conditions like depression or substance use, and discuss your treatment goals and preferences. This collaborative assessment creates the foundation for a personalized treatment plan tailored to your unique needs and circumstances.'
              },
              {
                title: 'Customized Treatment Plan',
                description: 'Based on your assessment, we develop an evidence-based treatment strategy that may include cognitive-behavioral therapy (CBT), medication management, or a combination of approaches. Your plan is designed around your specific fears, lifestyle constraints, and treatment preferences. We set realistic, measurable goals and establish a timeline for progress, ensuring you understand what to expect at each stage. Your treatment plan remains flexible and evolves as you make progress and your needs change.'
              },
              {
                title: 'Ongoing Support & Monitoring',
                description: 'Treatment for social anxiety disorder is a collaborative process with regular check-ins to monitor your progress, adjust interventions as needed, and address emerging challenges. We celebrate your successes, troubleshoot setbacks, and continuously refine your coping strategies. As you build confidence and skills, we work together to ensure gains are maintained long-term and prepare you for managing anxiety independently while knowing professional support remains available whenever needed.'
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {phase.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              Evidence-Based Treatment Modalities
            </h3>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              Our treatment approach is grounded in research-proven methods that have demonstrated consistent effectiveness for social anxiety disorder. <strong>Cognitive-Behavioral Therapy (CBT)</strong> serves as the cornerstone of treatment, helping you identify and challenge distorted thought patterns such as mind-reading, catastrophizing, and excessive self-focus. Through CBT, you learn to develop more balanced, realistic perspectives about social situations and your performance in them. <strong>Exposure therapy</strong>, a critical component of CBT for social anxiety, involves gradually and systematically confronting feared social situations in a controlled, supportive manner. This process—which can be conducted through real-life exposures or initially through imaginal exercises—helps desensitize you to anxiety triggers and proves that feared outcomes rarely occur.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              When appropriate, <strong>medication management</strong> can provide significant relief and enhance the effectiveness of therapy. Selective serotonin reuptake inhibitors (SSRIs) such as sertraline, paroxetine, and escitalopram are FDA-approved for social anxiety disorder and help regulate the neurotransmitter imbalances that contribute to excessive fear responses. For some patients, serotonin-norepinephrine reuptake inhibitors (SNRIs) like venlafaxine may be prescribed. Beta-blockers can be useful for managing performance anxiety in specific situations, while benzodiazepines may be considered on a limited basis for severe cases, always with careful monitoring due to dependency concerns. We also integrate <strong>mindfulness-based techniques</strong> and <strong>acceptance strategies</strong> to help you develop a healthier relationship with anxiety, reducing the secondary anxiety about experiencing anxiety itself. Treatment is never one-size-fits-all; we continuously evaluate your response and adjust our approach to ensure you receive the most effective, personalized care possible.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Choose Arlene Holland for Social Anxiety Disorder Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Board-Certified Expertise',
                description: 'Specialized psychiatric training and certification ensure you receive care based on the latest research and best practices in anxiety disorder treatment.'
              },
              {
                title: 'Personalized Approach',
                description: 'We recognize that social anxiety manifests differently for everyone and tailor treatment to your specific fears, triggers, lifestyle, and goals.'
              },
              {
                title: 'Telehealth Available',
                description: 'Access expert care from the comfort of home—particularly beneficial for those whose anxiety makes office visits challenging initially.'
              },
              {
                title: 'Proven Experience',
                description: 'Extensive experience treating social anxiety disorder across diverse populations, from adolescents to adults, with consistently positive outcomes.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow duration-300 animate-fade-up">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            {[
              {
                phase: '01',
                title: 'First Evaluation',
                timeframe: 'Week 1',
                description: 'During your initial appointment, we conduct a comprehensive psychiatric evaluation lasting 60-90 minutes. We discuss your symptoms in detail, explore how social anxiety affects different areas of your life, review your medical and mental health history, and identify your treatment goals. This is a collaborative conversation where your concerns and preferences guide the development of your personalized treatment plan. You\'ll leave with a clear understanding of your diagnosis, recommended treatment approaches, and next steps.'
              },
              {
                phase: '02',
                title: 'Treatment Begins',
                timeframe: 'Weeks 2-4',
                description: 'Treatment actively commences based on your customized plan. If therapy is part of your treatment, you\'ll begin learning and practicing cognitive-behavioral techniques, identifying thought patterns that fuel anxiety, and possibly starting gentle exposure exercises. If medication is recommended, we start at an appropriate dose and monitor for effectiveness and side effects. During this phase, we typically meet weekly or biweekly to ensure you\'re supported, comfortable with the process, and beginning to experience relief. Many patients notice initial improvements in anxiety intensity and daily functioning within the first month.'
              },
              {
                phase: '03',
                title: 'Progress Review',
                timeframe: 'Months 2-3',
                description: 'As treatment progresses, we systematically evaluate your response and adjust our approach as needed. You\'ll be developing stronger coping skills, confronting previously avoided situations, and building confidence in your ability to manage anxiety. We assess symptom reduction using standardized measures, discuss what\'s working well and what remains challenging, and refine your treatment plan accordingly. If medication was started, we may adjust dosage or try different options to optimize benefits. This phase focuses on consolidating gains and extending progress to additional situations.'
              },
              {
                phase: '04',
                title: 'Long-Term Management',
                timeframe: 'Ongoing',
                description: 'Once you\'ve achieved significant symptom reduction and functional improvement, we transition to long-term management and relapse prevention. Appointments become less frequent as you apply skills independently and navigate social situations with greater ease and confidence. We work together to identify potential triggers for setbacks, develop strategies for maintaining progress, and establish a plan for accessing support if needed in the future. Many patients reach a point where they no longer meet criteria for social anxiety disorder, though some prefer continued periodic check-ins to maintain wellness and address life changes proactively.'
              }
            ].map((stage, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="text-6xl font-light text-[var(--color-primary)]/20" style={{ fontFamily: 'Cormorant, serif' }}>
                    {stage.phase}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline gap-4 mb-3">
                    <h3 className="text-2xl font-light text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                      {stage.title}
                    </h3>
                    <span className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide">
                      {stage.timeframe}
                    </span>
                  </div>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-white rounded-lg border-l-4 border-[var(--color-primary)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Important to know:</strong> Recovery timelines vary significantly based on symptom severity, co-occurring conditions, treatment adherence, and individual factors. Some patients experience meaningful improvement within weeks, while others require several months of consistent treatment. Social anxiety disorder is highly treatable, and most people who complete treatment experience substantial, lasting improvement in their quality of life. Progress isn't always linear—setbacks are normal and become opportunities for learning and skill refinement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions About Social Anxiety Disorder
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'How long does treatment for social anxiety disorder typically take?',
                answer: 'Treatment duration varies based on symptom severity, co-occurring conditions, and individual response, but most people participate in active treatment for 3-6 months before experiencing significant improvement. Cognitive-behavioral therapy protocols specifically designed for social anxiety disorder typically run 12-16 weekly sessions, though some individuals benefit from longer or more intensive treatment. If medication is part of your treatment, it may take 4-8 weeks to experience full benefits, and most people continue medication for at least 6-12 months after symptoms improve to prevent relapse. Many patients reach a point where they no longer need regular appointments but may return periodically for maintenance sessions or when facing particularly stressful life transitions. The goal is not just symptom reduction but developing lasting skills and confidence that serve you throughout life.'
              },
              {
                question: 'Is medication always required for social anxiety disorder?',
                answer: 'No, medication is not always necessary for treating social anxiety disorder. Many people achieve significant improvement through cognitive-behavioral therapy alone, particularly if symptoms are mild to moderate. However, medication can be extremely helpful and is often recommended for moderate to severe social anxiety, when symptoms significantly impair functioning, or when therapy alone hasn\'t provided sufficient relief. Medication can also make it easier to engage in exposure exercises by reducing anxiety enough that you can face feared situations. The decision to use medication is always collaborative and based on symptom severity, your preferences, medical history, and treatment goals. Some people prefer to start with therapy and add medication later if needed, while others benefit from combined treatment from the beginning. There\'s no one-size-fits-all approach—we work together to find what works best for you.'
              },
              {
                question: 'Does insurance cover treatment for social anxiety disorder?',
                answer: 'Most health insurance plans cover treatment for social anxiety disorder, as it\'s a recognized mental health condition in the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders). Coverage typically includes psychiatric evaluations, therapy sessions, and medication management. However, specific coverage details—including copays, deductibles, session limits, and whether prior authorization is required—vary considerably by plan and insurance carrier. We recommend contacting your insurance provider directly before your first appointment to verify your behavioral health benefits, understand your financial responsibility, and confirm whether our practice is in-network with your plan. If you don\'t have insurance or your plan doesn\'t provide adequate coverage, we can discuss self-pay options and payment plans. Don\'t let insurance questions prevent you from seeking help—we\'ll work with you to make treatment accessible.'
              },
              {
                question: 'What if therapy isn\'t working or I\'m not seeing improvement?',
                answer: 'If you\'re not experiencing improvement after several weeks of treatment, it\'s crucial to communicate this openly so we can reassess and adjust our approach. Sometimes treatment needs time to work—particularly with exposure therapy, anxiety may temporarily increase before it decreases. However, if you\'re not seeing any progress after 6-8 weeks of consistent treatment, we should explore alternative strategies. This might include adjusting medication dosage or trying a different medication, increasing therapy session frequency, incorporating additional treatment modalities, addressing co-occurring conditions like depression that may be interfering with progress, or identifying barriers to treatment engagement such as incomplete homework practice. Occasionally, certain therapeutic approaches resonate better with different individuals, and we may explore alternative evidence-based treatments. Your feedback is essential—treatment should feel collaborative, and you should notice at least small improvements in functioning or symptom intensity within a reasonable timeframe. We\'re committed to adjusting our approach until we find what works for you.'
              },
              {
                question: 'Can telehealth appointments be effective for treating social anxiety disorder?',
                answer: 'Yes, telehealth can be highly effective for treating social anxiety disorder, and research increasingly supports virtual delivery of cognitive-behavioral therapy and medication management. For many people with social anxiety, telehealth offers significant advantages: you can access care from a comfortable, familiar environment; there\'s no anxiety about traveling to an office or sitting in a waiting room; and geographic barriers are eliminated. Telehealth also allows for more flexible scheduling and can facilitate in-the-moment support during anxiety-provoking situations. The therapeutic techniques used in treatment—cognitive restructuring, developing coping strategies, and even exposure exercises—translate very well to virtual sessions. That said, some aspects of treatment, particularly certain exposure exercises, may eventually benefit from in-person sessions or real-world practice between appointments. We can discuss whether telehealth, in-person care, or a combination of both best suits your needs and circumstances, and we maintain flexibility to adjust the format as your treatment progresses.'
              },
              {
                question: 'What\'s the difference between social anxiety disorder and just being shy or introverted?',
                answer: 'While shyness and introversion involve discomfort in social situations, social anxiety disorder is a clinical condition characterized by intense, persistent fear that causes significant distress and substantially interferes with daily functioning. Shy or introverted people may prefer smaller gatherings or need time alone to recharge, but they can engage socially when needed without overwhelming anxiety or impairment. People with social anxiety disorder experience fear so intense that they avoid important opportunities—turning down job promotions, dropping out of school, forgoing relationships—and often develop secondary problems like depression or substance abuse. The anxiety in social anxiety disorder is disproportionate to the actual threat, involves severe physical symptoms, and doesn\'t improve simply through repeated exposure without treatment. Additionally, social anxiety causes significant anticipatory worry and post-event rumination that shy individuals typically don\'t experience. If social discomfort is preventing you from living the life you want, causing marked distress, or leading you to avoid important activities, it\'s worth seeking professional evaluation—this level of impairment goes beyond normal shyness and responds well to treatment.'
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
                <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-light mb-8 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Generalized Anxiety Disorder',
                description: 'Persistent, excessive worry about various aspects of daily life that interferes with functioning and well-being.',
                href: '/conditions/generalized-anxiety-disorder'
              },
              {
                title: 'Panic Disorder',
                description: 'Recurrent, unexpected panic attacks and persistent concern about future attacks or their consequences.',
                href: '/conditions/panic-disorder'
              },
              {
                title: 'Depression',
                description: 'Persistent feelings of sadness, hopelessness, and loss of interest that affect daily functioning and quality of life.',
                href: '/conditions/depression'
              }
            ].map((condition, index) => (
              <Link key={index} href={condition.href} className="block bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 group">
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                  {condition.title}
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  {condition.description}
                </p>
                <span className="text-[var(--color-primary)] font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Help for Social Anxiety Disorder Today
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light leading-relaxed">
            You don't have to face social anxiety disorder alone. Our team is ready to help you build confidence, overcome fear, and reclaim the life you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors duration-300 inline-block">
              Schedule a Consultation
            </Link>
            <Link href="/conditions" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 inline-block">
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}