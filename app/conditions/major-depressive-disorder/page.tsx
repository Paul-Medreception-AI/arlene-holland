import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Major Depressive Disorder Treatment in Holland | Arlene Holland',
  description: 'Expert Major Depressive Disorder treatment in Holland. Board-certified psychiatric care with personalized therapy and medication management. Telehealth available.',
  keywords: 'Major Depressive Disorder treatment Holland, depression treatment Holland, MDD therapy Holland, depression psychiatrist Holland',
}

export default function MajorDepressiveDisorderPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Major Depressive Disorder</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Major Depressive Disorder Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            Major Depressive Disorder is a serious but treatable mental health condition that affects millions of people. Our evidence-based treatment approach combines personalized therapy, medication management, and compassionate care to help you reclaim your life and find lasting relief from depression.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Major Depressive Disorder
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Major Depressive Disorder (MDD), commonly referred to as clinical depression, is one of the most prevalent mental health conditions in the United States, affecting approximately 21 million adults annually. Unlike temporary feelings of sadness or grief that naturally occur in response to life's challenges, MDD is a persistent mood disorder characterized by profound and pervasive feelings of sadness, hopelessness, and loss of interest in activities once enjoyed. This condition significantly impacts every aspect of daily functioning—from work performance and relationships to physical health and overall quality of life. The emotional pain of depression is real and debilitating, but it's crucial to understand that MDD is a medical condition with biological underpinnings, not a personal weakness or character flaw.
            </p>
            <p>
              The causes of Major Depressive Disorder are multifactorial, involving complex interactions between genetic predisposition, brain chemistry, environmental stressors, and life circumstances. Research has identified that individuals with a family history of depression are at higher risk, suggesting a genetic component. Neurobiological factors play a significant role—imbalances in neurotransmitters such as serotonin, norepinephrine, and dopamine affect mood regulation and emotional processing. Environmental triggers including traumatic life events, chronic stress, significant loss, relationship difficulties, financial hardship, or medical illness can precipitate or exacerbate depressive episodes. Additional risk factors include history of other mental health conditions, substance abuse, chronic medical conditions, certain medications, and hormonal changes. Understanding these contributing factors helps inform personalized treatment approaches that address the unique circumstances of each individual.
            </p>
            <p>
              Professional treatment for Major Depressive Disorder is not just beneficial—it's essential for recovery and preventing serious complications. Without proper intervention, depression typically worsens over time and can lead to severe consequences including relationship breakdown, job loss, substance abuse, physical health deterioration, and in the most serious cases, suicidal ideation or attempts. The encouraging reality is that MDD is highly treatable, with research showing that 80-90% of people with depression eventually respond well to treatment. Evidence-based approaches including psychotherapy, medication management, and lifestyle modifications have proven effectiveness in alleviating symptoms, restoring functioning, and preventing relapse. Early intervention significantly improves outcomes and reduces the duration and severity of depressive episodes. With professional guidance, the right treatment plan, and appropriate support, individuals with Major Depressive Disorder can achieve full remission, regain their sense of self, and build resilience against future episodes.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Major Depressive Disorder
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-6">Emotional Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Persistent Sadness or Emptiness</p>
                  <p className="text-[var(--color-muted)]">Overwhelming feelings of sadness, emptiness, or hopelessness that persist throughout most of the day, nearly every day.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Loss of Interest or Pleasure</p>
                  <p className="text-[var(--color-muted)]">Marked disinterest in activities previously enjoyed, including hobbies, social interactions, and intimate relationships.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Feelings of Worthlessness or Excessive Guilt</p>
                  <p className="text-[var(--color-muted)]">Pervasive negative self-perception, harsh self-criticism, and inappropriate feelings of guilt or responsibility.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Irritability or Frustration</p>
                  <p className="text-[var(--color-muted)]">Heightened irritability, anger, or frustration even over minor matters, particularly common in men with depression.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Anxiety or Restlessness</p>
                  <p className="text-[var(--color-muted)]">Co-occurring anxiety symptoms including excessive worry, tension, or feelings of impending doom.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Experiencing Positive Emotions</p>
                  <p className="text-[var(--color-muted)]">Emotional numbness or inability to feel joy, affection, or satisfaction even during typically pleasant experiences.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Thoughts of Death or Suicide</p>
                  <p className="text-[var(--color-muted)]">Recurrent thoughts about death, suicidal ideation, suicide attempts, or specific plans for suicide requiring immediate professional help.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-6">Physical & Behavioral Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Sleep Disturbances</p>
                  <p className="text-[var(--color-muted)]">Insomnia with difficulty falling or staying asleep, or conversely, excessive sleeping and difficulty getting out of bed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Fatigue and Low Energy</p>
                  <p className="text-[var(--color-muted)]">Persistent exhaustion, feeling physically and mentally drained, with even small tasks requiring excessive effort.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Changes in Appetite or Weight</p>
                  <p className="text-[var(--color-muted)]">Significant weight loss or gain, or noticeable changes in appetite with either reduced interest in food or comfort eating.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Slowed Thinking or Movement</p>
                  <p className="text-[var(--color-muted)]">Psychomotor retardation including slowed speech, thinking, and body movements observable to others.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Concentrating</p>
                  <p className="text-[var(--color-muted)]">Impaired ability to focus, make decisions, remember information, or complete tasks at work or home.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Physical Aches and Pains</p>
                  <p className="text-[var(--color-muted)]">Unexplained physical problems such as headaches, back pain, digestive issues, or chronic pain without clear medical cause.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Social Withdrawal</p>
                  <p className="text-[var(--color-muted)]">Isolation from friends and family, avoiding social situations, and declining invitations to previously enjoyed activities.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)] mb-1">Neglect of Responsibilities</p>
                  <p className="text-[var(--color-muted)]">Difficulty maintaining work performance, household duties, personal hygiene, or other daily responsibilities.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent the progression of symptoms. Reach out today to begin your journey toward recovery.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Major Depressive Disorder
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your treatment begins with a thorough diagnostic evaluation that includes detailed psychiatric history, symptom assessment using validated screening tools, medical history review, and exploration of life circumstances. We assess symptom severity, duration, functional impairment, co-occurring conditions, and risk factors to develop a complete understanding of your unique presentation. This comprehensive approach ensures accurate diagnosis and forms the foundation for your personalized treatment plan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we collaboratively develop an individualized treatment plan tailored to your specific needs, preferences, and circumstances. Your plan integrates multiple evidence-based interventions and may include psychotherapy modalities, medication management, lifestyle modifications, and supportive resources. We consider your treatment goals, previous treatment experiences, medical conditions, and personal preferences to create an approach that maximizes effectiveness while respecting your autonomy and values.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Depression treatment is a dynamic process requiring regular monitoring and adjustment. We schedule frequent follow-up appointments to track your progress, assess treatment response, manage any side effects, and modify your plan as needed. Throughout your care, we provide consistent support, crisis intervention when necessary, and collaboration with other healthcare providers. Our goal is sustained symptom improvement, functional restoration, and prevention of relapse through long-term management strategies.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our treatment approach for Major Depressive Disorder integrates multiple evidence-based modalities proven effective through rigorous research. <strong>Cognitive Behavioral Therapy (CBT)</strong> helps identify and modify negative thought patterns and behaviors that perpetuate depression. <strong>Interpersonal Therapy (IPT)</strong> addresses relationship difficulties and life transitions contributing to depressive symptoms. <strong>Behavioral Activation</strong> gradually reengages you with meaningful activities and experiences. When clinically indicated, <strong>antidepressant medications</strong>—including SSRIs, SNRIs, or other classes—can effectively address neurochemical imbalances. We provide comprehensive medication management with careful monitoring for efficacy and side effects. Additionally, we emphasize <strong>lifestyle interventions</strong> including sleep hygiene, regular physical activity, nutrition, stress management, and social connection—all vital components of depression recovery. Treatment duration varies based on individual response, typically ranging from several months to longer-term maintenance, with the goal of achieving full remission and building resilience against future episodes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Arlene Holland for Major Depressive Disorder Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">Specialized training and board certification in psychiatry with extensive experience treating mood disorders and depression.</p>
            </div>

            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">Individualized treatment plans tailored to your unique symptoms, circumstances, preferences, and treatment goals.</p>
            </div>

            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">Convenient virtual appointments provide accessible, effective treatment from the comfort and privacy of your home.</p>
            </div>

            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Compassionate Care</h3>
              <p className="text-[var(--color-muted)]">A supportive, non-judgmental environment where you're treated with empathy, respect, and genuine understanding throughout your recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your journey begins with a comprehensive initial evaluation lasting 60-90 minutes. We'll discuss your symptoms in detail, review your medical and psychiatric history, explore contributing factors, and perform a thorough assessment. Together, we'll establish treatment goals and develop your personalized treatment plan. You'll leave this first session with clear understanding of your diagnosis, treatment options, and next steps. This is also an opportunity for you to ask questions and determine if our approach feels right for you.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Active treatment implementation begins with frequent follow-up sessions, typically weekly during this initial phase. If medication is part of your plan, we'll start at an appropriate dose and monitor closely for both therapeutic effects and any side effects. Psychotherapy sessions focus on developing coping skills, addressing negative thought patterns, and beginning behavioral activation. This early phase requires patience—while some people notice improvements within 2-3 weeks, it typically takes 4-6 weeks to experience significant symptom relief from antidepressant medications.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As treatment progresses, we carefully monitor your response using both subjective reports and objective measures. If you're responding well, we continue with the current approach and may gradually extend time between sessions. If progress is slower than expected or side effects are problematic, we adjust the treatment plan—this might include medication changes, dosage adjustments, adding complementary therapies, or intensifying psychotherapy. Most individuals experience substantial improvement by this stage, with reduced symptom severity and improved daily functioning.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once you achieve remission or significant improvement, focus shifts to maintenance and relapse prevention. For first-episode depression, treatment typically continues for 6-12 months after symptom resolution. Those with recurrent depression may benefit from longer-term maintenance treatment to prevent future episodes. Follow-up sessions become less frequent—monthly or quarterly—while maintaining the gains you've achieved. We'll work together to develop a sustainable long-term plan that includes ongoing medication (if appropriate), continued skill application, lifestyle maintenance, and strategies for recognizing and addressing early warning signs of relapse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Major Depressive Disorder
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="font-semibold text-lg text-[var(--color-ink)]">How long does treatment for Major Depressive Disorder take?</h3>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment duration varies significantly based on individual factors including symptom severity, treatment response, presence of co-occurring conditions, and personal circumstances. Most people begin experiencing symptom improvement within 4-8 weeks of starting treatment, with substantial improvement by 3-4 months. For acute treatment, the typical duration is 6-12 months after achieving remission. However, recurrent depression may require longer maintenance treatment—sometimes years—to prevent relapse. Research shows that continuing treatment for at least 6-9 months after symptom resolution significantly reduces relapse risk. We'll work together to determine the optimal treatment duration for your specific situation, balancing effective symptom management with your quality of life and treatment preferences.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="font-semibold text-lg text-[var(--color-ink)]">Is medication always necessary for treating depression?</h3>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Medication is not always necessary, but the decision depends on several factors including symptom severity, functional impairment, treatment history, and patient preference. For mild to moderate depression, evidence-based psychotherapy alone can be highly effective. However, for moderate to severe Major Depressive Disorder, research consistently shows that combining medication and psychotherapy produces the best outcomes. Antidepressant medications are particularly important when depression involves significant neurovegetative symptoms (sleep, appetite, energy changes), when previous therapy-only approaches haven't been effective, when rapid symptom relief is critical, or when depression is severe enough to impair safety or functioning. We take a collaborative approach to medication decisions, thoroughly discussing benefits, potential side effects, and alternatives so you can make an informed choice aligned with your preferences and values.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="font-semibold text-lg text-[var(--color-ink)]">Does insurance cover Major Depressive Disorder treatment?</h3>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most health insurance plans provide coverage for mental health treatment including Major Depressive Disorder, thanks to the Mental Health Parity and Addiction Equity Act which requires insurance companies to cover mental health services comparably to medical services. Coverage typically includes psychiatric evaluations, medication management, and psychotherapy sessions, though specific benefits vary by plan including copays, deductibles, and session limits. We recommend contacting your insurance provider before your first appointment to verify mental health benefits, confirm our participation in your network, understand your financial responsibility, and determine if prior authorization is required. Our practice can provide documentation to support insurance claims and help you understand your coverage. For those without insurance or with limited coverage, we can discuss alternative payment options and financial arrangements.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="font-semibold text-lg text-[var(--color-ink)]">What if therapy or medication isn't working for me?</h3>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Insufficient treatment response is not uncommon and doesn't mean you can't get better—it typically means your treatment plan needs adjustment. When progress is slower than expected, we systematically evaluate possible reasons: medication may need dosage optimization, switching to a different medication class, or augmentation with additional agents; therapy approach might need modification or intensification; co-occurring conditions may need to be addressed; lifestyle factors, medical conditions, or medications might be interfering with treatment response. Treatment-resistant depression—defined as inadequate response to two or more antidepressant trials—affects about 30% of individuals and requires specialized approaches. Options include genetic testing to guide medication selection, trying different therapy modalities, combining treatments more aggressively, or considering advanced interventions. The key is open communication about your response—if something isn't working, we'll work together persistently to find the approach that does.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="font-semibold text-lg text-[var(--color-ink)]">Can telehealth be effective for treating Major Depressive Disorder?</h3>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, extensive research demonstrates that telehealth is highly effective for treating Major Depressive Disorder, with outcomes comparable to traditional in-person care. Virtual appointments provide the same therapeutic relationship, clinical assessment capabilities, and treatment interventions as face-to-face sessions. Telehealth offers significant advantages including eliminating travel time and associated stress, providing treatment access from home where you may feel most comfortable, maintaining continuity of care despite weather, illness, or schedule conflicts, and increasing accessibility for those with mobility limitations, transportation barriers, or living in rural areas. Both medication management and psychotherapy translate effectively to the virtual format. Many patients find telehealth particularly beneficial when depression symptoms—such as fatigue, low motivation, or difficulty leaving home—make in-person appointments challenging. We ensure secure, HIPAA-compliant video platforms and work with you to create an effective virtual treatment experience.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="font-semibold text-lg text-[var(--color-ink)]">How can I support my recovery outside of therapy sessions?</h3>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your recovery extends far beyond therapy sessions, and self-care strategies significantly enhance treatment effectiveness. Prioritize sleep hygiene by maintaining consistent sleep-wake schedules and creating a restful bedroom environment. Regular physical activity—even moderate exercise like daily walks—has proven antidepressant effects comparable to medication for mild depression. Nutrition matters: eat regular, balanced meals and limit alcohol which can worsen depression. Social connection is vital even when you don't feel like it—maintain contact with supportive friends and family. Practice stress management through mindfulness, meditation, deep breathing, or activities you find calming. Structure your days with routines and gradually reengage with previously enjoyed activities through behavioral activation. Limit exposure to excessive news or social media that worsens your mood. Take medications as prescribed consistently. Keep a mood journal to track patterns and progress. Most importantly, be patient and compassionate with yourself—recovery isn't linear, and setbacks are normal parts of the healing process.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/generalized-anxiety-disorder" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Generalized Anxiety Disorder</h4>
              <p className="text-[var(--color-muted)] text-sm">Persistent excessive worry and anxiety that interferes with daily functioning, often co-occurring with depression.</p>
            </Link>

            <Link href="/conditions/persistent-depressive-disorder" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Persistent Depressive Disorder</h4>
              <p className="text-[var(--color-muted)] text-sm">Chronic low-grade depression lasting two years or longer, characterized by persistent depressed mood.</p>
            </Link>

            <Link href="/conditions/bipolar-disorder" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Bipolar Disorder</h4>
              <p className="text-[var(--color-muted)] text-sm">Mood disorder involving episodes of depression alternating with periods of elevated or irritable mood.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Major Depressive Disorder Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face Major Depressive Disorder alone. Our team is ready to help you find relief and reclaim your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors">
              Schedule a Consultation
            </Link>
            <Link href="/conditions" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors">
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}