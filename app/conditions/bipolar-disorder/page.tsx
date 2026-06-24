import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bipolar Disorder Treatment in Holland | Arlene Holland',
  description: 'Expert bipolar disorder treatment in Holland. Board-certified care for mood stabilization, symptom management, and long-term recovery. Telehealth available.',
  keywords: 'bipolar disorder treatment Holland, bipolar therapy Holland, mood disorder specialist, psychiatrist Holland, manic depression treatment',
}

export default function BipolarDisorderPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Bipolar Disorder</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Bipolar Disorder Treatment in Holland
          </h1>
          <p className="text-xl leading-relaxed opacity-95 max-w-3xl">
            Bipolar disorder creates intense mood swings that can disrupt every aspect of your life, but with the right treatment, stability and wellness are within reach. At Arlene Holland, we provide comprehensive, evidence-based care that helps you manage symptoms, prevent episodes, and build a fulfilling life.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Bipolar Disorder
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Bipolar disorder is a chronic mental health condition characterized by extreme shifts in mood, energy, and activity levels that range from manic or hypomanic episodes to depressive episodes. These fluctuations go far beyond typical mood changes and can significantly impair daily functioning, relationships, and professional life. Affecting approximately 2.8% of adults in the United States, bipolar disorder doesn't discriminate by age, gender, or background. During manic episodes, individuals may experience heightened energy, reduced need for sleep, racing thoughts, and impulsive behavior, while depressive episodes bring overwhelming sadness, fatigue, difficulty concentrating, and sometimes thoughts of self-harm. The unpredictable nature of these mood swings creates substantial challenges in maintaining stability across all life domains.
            </p>
            <p>
              The exact causes of bipolar disorder remain complex and multifaceted, involving an interplay of genetic, neurobiological, and environmental factors. Research indicates strong hereditary components—individuals with a first-degree relative who has bipolar disorder face a significantly elevated risk of developing the condition themselves. Brain structure and function differences, particularly in areas regulating emotion and executive function, play crucial roles in symptom manifestation. Neurotransmitter imbalances, especially involving serotonin, dopamine, and norepinephrine, contribute to mood instability. Environmental triggers such as significant life stressors, trauma, sleep disruption, substance use, and major life transitions can precipitate initial episodes or exacerbate existing symptoms. Understanding these contributing factors helps inform comprehensive treatment approaches that address both biological vulnerabilities and environmental influences.
            </p>
            <p>
              Professional treatment for bipolar disorder is not simply beneficial—it's essential for long-term health and quality of life. Left untreated, bipolar disorder typically worsens over time, with episodes becoming more frequent, severe, and difficult to manage. The condition carries significant risks including relationship breakdowns, job loss, financial difficulties, substance abuse, and tragically, one of the highest suicide rates among mental health disorders. However, with appropriate intervention combining medication management, psychotherapy, and lifestyle modifications, the vast majority of individuals with bipolar disorder achieve substantial symptom reduction and mood stabilization. Early diagnosis and consistent treatment dramatically improve outcomes, enabling people to maintain careers, nurture relationships, and pursue meaningful goals. The key is establishing a therapeutic relationship with experienced mental health professionals who understand the nuanced presentation of bipolar disorder and can tailor treatment to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs & Symptoms of Bipolar Disorder
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Manic/Hypomanic Symptoms
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Elevated or Irritable Mood</p>
                    <p className="text-[var(--color-muted)]">Abnormally upbeat, euphoric, or unusually irritable mood lasting at least four days that feels distinctly different from your normal state.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Decreased Need for Sleep</p>
                    <p className="text-[var(--color-muted)]">Feeling rested after only three hours of sleep or going days with minimal rest without feeling tired.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Racing Thoughts and Rapid Speech</p>
                    <p className="text-[var(--color-muted)]">Thoughts jumping quickly from topic to topic, speaking so fast others can't keep up, or feeling your mind is racing uncontrollably.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Grandiose Thinking</p>
                    <p className="text-[var(--color-muted)]">Inflated self-esteem, unrealistic beliefs about your abilities, or feeling invincible and capable of anything.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Increased Goal-Directed Activity</p>
                    <p className="text-[var(--color-muted)]">Taking on multiple new projects simultaneously, excessive social activity, or dramatically increased productivity that feels unsustainable.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Impulsive or Risky Behavior</p>
                    <p className="text-[var(--color-muted)]">Spending sprees, impulsive business decisions, increased sexual activity, or engaging in activities with potentially harmful consequences.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Distractibility</p>
                    <p className="text-[var(--color-muted)]">Attention easily pulled to unimportant or irrelevant stimuli, difficulty completing tasks, or constantly starting new activities without finishing previous ones.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Depressive Symptoms
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Persistent Sadness or Emptiness</p>
                    <p className="text-[var(--color-muted)]">Overwhelming feelings of hopelessness, emptiness, or sadness that persist most of the day, nearly every day for at least two weeks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Loss of Interest or Pleasure</p>
                    <p className="text-[var(--color-muted)]">Activities that once brought joy no longer feel rewarding or worth the effort, including hobbies, social connections, or intimacy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Severe Fatigue and Low Energy</p>
                    <p className="text-[var(--color-muted)]">Profound exhaustion where even small tasks feel overwhelming, or feeling physically and mentally drained despite adequate rest.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Sleep Disturbances</p>
                    <p className="text-[var(--color-muted)]">Sleeping excessively (hypersomnia) or experiencing insomnia with early morning awakening and inability to return to sleep.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Concentrating</p>
                    <p className="text-[var(--color-muted)]">Trouble focusing, making decisions, or remembering information, with cognitive tasks requiring significantly more effort than usual.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Changes in Appetite or Weight</p>
                    <p className="text-[var(--color-muted)]">Significant weight loss or gain without intentional dietary changes, or noticeable decrease or increase in appetite.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Feelings of Worthlessness or Guilt</p>
                    <p className="text-[var(--color-muted)]">Excessive guilt about past events, persistent feelings of inadequacy, or beliefs that you're a burden to others.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Thoughts of Death or Suicide</p>
                    <p className="text-[var(--color-muted)]">Recurrent thoughts about death, suicidal ideation, suicide attempts, or specific plans for ending your life—this requires immediate professional help.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent the condition from worsening over time.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Treat Bipolar Disorder
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough psychiatric evaluation examining your mood patterns, episode history, family history, and current symptoms. This detailed assessment helps us determine whether you're experiencing Bipolar I, Bipolar II, or cyclothymic disorder, and identifies any co-occurring conditions that require attention. We also review previous treatments, medication responses, and lifestyle factors that influence your mood stability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your unique presentation, we develop an individualized treatment strategy combining medication management and psychotherapy. Your plan addresses immediate symptom relief, long-term mood stabilization, and strategies for preventing future episodes. We collaborate with you to set realistic goals and ensure the treatment approach aligns with your values, lifestyle, and recovery objectives while maintaining the flexibility to adjust as your needs evolve.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Care & Monitoring
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Bipolar disorder requires consistent monitoring and proactive management. We schedule regular follow-up appointments to track your mood patterns, assess medication effectiveness, and make timely adjustments. You'll learn to recognize early warning signs of mood episodes and develop concrete strategies for intervention. Our ongoing support includes crisis planning, lifestyle optimization guidance, and coordination with other healthcare providers to ensure comprehensive, integrated care throughout your recovery journey.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Our evidence-based treatment approach integrates multiple therapeutic modalities proven effective for bipolar disorder. Medication management typically includes mood stabilizers such as lithium, valproate, or lamotrigine, and may incorporate atypical antipsychotics like quetiapine or aripiprazole depending on your symptom profile. Psychotherapy is equally essential—we utilize Cognitive Behavioral Therapy (CBT) to help you identify thought patterns that influence mood, develop coping strategies, and improve problem-solving skills. Interpersonal and Social Rhythm Therapy (IPSRT) focuses on stabilizing daily routines and sleep-wake cycles, which significantly impact mood stability. Psychoeducation empowers you with deep understanding of your condition, medication adherence strategies, and skills for recognizing early warning signs. We also address lifestyle factors including sleep hygiene, stress management, substance avoidance, and building supportive relationships—all critical components of comprehensive bipolar disorder treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Choose Arlene Holland for Bipolar Disorder Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Specialized training and extensive experience in diagnosing and treating complex mood disorders including all bipolar subtypes.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                Treatment plans tailored to your specific symptoms, lifestyle, goals, and preferences—no one-size-fits-all protocols.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Convenient, confidential virtual appointments allow you to access expert care from anywhere while maintaining treatment consistency.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Proven Track Record</h3>
              <p className="text-[var(--color-muted)]">
                Years of successful outcomes helping individuals with bipolar disorder achieve stability, manage symptoms, and reclaim their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                1
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  First Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your comprehensive initial evaluation, we'll conduct an in-depth review of your symptoms, mood episode history, family psychiatric history, and current functioning. This typically involves detailed questionnaires, mood charting, and discussion of previous treatments. We'll explain your diagnosis clearly, answer all questions, and begin developing your personalized treatment plan. You'll leave with a clear understanding of next steps and may begin medication if appropriate.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                2
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Treatment Begins (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The initial treatment phase focuses on stabilization and symptom reduction. If you're experiencing an acute episode, our priority is helping you reach safety and stability. We'll have frequent check-ins to monitor medication response, manage side effects, and adjust dosages as needed. You'll begin learning about bipolar disorder, identifying triggers, and developing coping strategies. Many patients notice initial improvements during this period, though full stabilization takes longer.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                3
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As you progress through treatment, we assess your response comprehensively and refine your treatment plan. By this point, many individuals experience significant mood stabilization, though achieving optimal balance often requires adjustment. We'll evaluate whether your medication regimen is working effectively, address any remaining symptoms, and deepen your therapeutic work. This phase emphasizes building skills for long-term management and recognizing early warning signs of mood shifts.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                4
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Long-Term Management
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Bipolar disorder is a chronic condition requiring ongoing management, but with proper treatment, you can maintain stability and live a fulfilling life. Long-term care involves regular monitoring appointments (frequency tailored to your stability), continued medication management, and proactive strategies to prevent relapse. We'll help you optimize your lifestyle factors, navigate life transitions, and adjust treatment as circumstances change. The goal is sustained wellness, minimized episode frequency, and maximal quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions About Bipolar Disorder
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                How long does bipolar disorder treatment take?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Bipolar disorder is a lifelong condition that requires ongoing management rather than short-term treatment. While initial stabilization often occurs within 3-6 months of starting appropriate treatment, maintaining stability requires continuous care. Most individuals continue medication indefinitely to prevent future episodes, as discontinuation significantly increases relapse risk. Therapy may be ongoing or intermittent depending on your needs. The good news is that with consistent treatment, the vast majority of people with bipolar disorder achieve substantial improvement and can lead productive, satisfying lives. Treatment duration varies individually, but the focus is on long-term wellness rather than a fixed endpoint.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Is medication always required for bipolar disorder?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  For most individuals with bipolar disorder, medication is an essential component of effective treatment and is strongly recommended by clinical guidelines. Mood stabilizers and other psychiatric medications directly address the neurobiological factors underlying mood episodes and significantly reduce the frequency and severity of both manic and depressive episodes. While therapy alone may be insufficient for managing bipolar disorder, medication combined with psychotherapy produces the best outcomes. Some people with milder forms (such as cyclothymic disorder) may manage with therapy and lifestyle modifications, but this should only be determined through careful evaluation with a psychiatrist. Discontinuing medication without medical supervision frequently leads to relapse. We'll work collaboratively with you to find the medication approach that maximizes benefits while minimizing side effects.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Does insurance cover bipolar disorder treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Most insurance plans cover treatment for bipolar disorder, including psychiatric evaluations, medication management, and psychotherapy. Coverage specifics vary by plan, including copayments, deductibles, and session limits. Mental health parity laws require insurers to cover mental health conditions, including bipolar disorder, on par with physical health conditions. We recommend contacting your insurance provider before your first appointment to understand your specific benefits, coverage levels, and any prior authorization requirements. Our office can provide documentation and work with you to maximize your insurance benefits. If you're uninsured or prefer not to use insurance, we offer self-pay options and can discuss affordable payment arrangements.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                What if my current treatment isn't working?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  If your current treatment isn't providing adequate relief, you have options. Finding the right medication or combination of medications can take time, and many people don't respond optimally to the first treatment tried. We can conduct a thorough review of your current regimen, assess whether dosages are therapeutic, evaluate medication adherence, and identify potential interactions or factors limiting effectiveness. Alternative mood stabilizers, different medication classes, or augmentation strategies may provide better results. Additionally, ensuring therapy is evidence-based and specifically targets bipolar disorder is crucial. Lifestyle factors such as sleep irregularity, substance use, or high stress can also undermine treatment effectiveness. We'll work systematically to identify barriers and adjust your treatment plan until we find an approach that works for you.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Can telehealth work for bipolar disorder treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Yes, telehealth is an effective option for ongoing bipolar disorder treatment and offers several advantages including convenience, reduced travel time, and consistent access to care regardless of location or weather. Research demonstrates that telepsychiatry produces outcomes comparable to in-person care for medication management and therapy. Virtual appointments work particularly well for stable patients engaged in maintenance treatment. We can conduct comprehensive evaluations, adjust medications, provide therapy, and monitor your progress via secure video sessions. However, initial evaluations may benefit from in-person assessment, and acute crises requiring immediate intervention may necessitate in-person or emergency care. We'll discuss whether telehealth is appropriate for your specific situation and can combine virtual and in-person visits as needed.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                What's the difference between Bipolar I and Bipolar II?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Bipolar I disorder is characterized by at least one full manic episode lasting at least seven days (or requiring hospitalization) and typically includes depressive episodes as well. Manic episodes involve severely elevated mood, reduced need for sleep, grandiosity, impulsivity, and impaired functioning that significantly impacts daily life. Bipolar II disorder involves at least one major depressive episode and at least one hypomanic episode, but no full manic episodes. Hypomania is a less severe form of elevated mood lasting at least four days—individuals may feel unusually energetic and productive but can still function, and hospitalization isn't required. Interestingly, Bipolar II is not simply a "milder" form; individuals often experience more frequent and longer depressive episodes, which can be quite debilitating. Both conditions require professional treatment, though medication approaches may differ somewhat. Accurate diagnosis is crucial for effective treatment planning.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/depression" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Depression
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Major depressive disorder shares depressive symptoms with bipolar disorder but requires different treatment approaches.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/conditions/anxiety" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Anxiety Disorders
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Anxiety disorders commonly co-occur with bipolar disorder and require integrated treatment for optimal outcomes.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/conditions/adhd" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                ADHD
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                ADHD symptoms can overlap with bipolar disorder and frequently co-occur, requiring careful differential diagnosis.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Help for Bipolar Disorder Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face bipolar disorder alone. Our team is ready to help you achieve stability and reclaim your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/conditions"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}