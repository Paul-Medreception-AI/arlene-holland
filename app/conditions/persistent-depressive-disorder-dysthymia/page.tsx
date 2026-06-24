import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Persistent Depressive Disorder (Dysthymia) Treatment in Holland | Arlene Holland',
  description: 'Expert treatment for Persistent Depressive Disorder (Dysthymia) in Holland. Board-certified care with personalized therapy and medication management. Telehealth available.',
  keywords: 'persistent depressive disorder treatment Holland, dysthymia treatment Holland, chronic depression Holland, depression therapy Holland, mental health Holland',
  openGraph: {
    title: 'Persistent Depressive Disorder (Dysthymia) Treatment in Holland',
    description: 'Expert treatment for Persistent Depressive Disorder (Dysthymia) in Holland. Board-certified care with personalized therapy and medication management.',
    url: 'https://arleneholland.net/conditions/persistent-depressive-disorder-dysthymia',
    siteName: 'Arlene Holland',
    locale: 'en_US',
    type: 'website',
  }
}

export default function PersistentDepressiveDisorderPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Persistent Depressive Disorder (Dysthymia)</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Persistent Depressive Disorder (Dysthymia) Treatment in Holland
          </h1>
          
          <p className="text-xl leading-relaxed opacity-95 max-w-3xl">
            Persistent Depressive Disorder, also known as dysthymia, is a chronic form of depression that can diminish your quality of life for years if left untreated. At Arlene Holland, we provide evidence-based treatment that addresses both the immediate symptoms and long-term management of this persistent condition, helping you rediscover hope and vitality.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Persistent Depressive Disorder (Dysthymia)
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Persistent Depressive Disorder (PDD), formerly known as dysthymia, is a chronic form of depression characterized by a depressed mood that lasts for at least two years in adults or one year in children and adolescents. Unlike major depressive disorder, which involves intense episodes of depression, PDD is marked by a lower-grade but constant feeling of sadness, hopelessness, and lack of interest in daily activities. Approximately 3-6% of the population will experience PDD at some point in their lives, with many people living with symptoms for years before seeking treatment. This condition significantly impacts work performance, relationships, and overall life satisfaction, often creating a pervasive sense that "this is just how life is" when, in fact, effective treatment can bring substantial relief.
            </p>
            
            <p>
              The causes of Persistent Depressive Disorder are multifaceted and involve a complex interplay of biological, psychological, and environmental factors. Neurotransmitter imbalances—particularly involving serotonin, norepinephrine, and dopamine—play a significant role in the development and maintenance of chronic depressive symptoms. Genetic predisposition increases risk, with individuals who have family members with depression being more vulnerable to developing PDD themselves. Early life experiences, including childhood trauma, chronic stress, or adverse life circumstances, can alter brain development and stress response systems in ways that contribute to persistent depression. Additionally, certain personality traits, such as pessimism or low self-esteem, along with chronic medical conditions or other mental health disorders, can increase susceptibility to this long-lasting form of depression.
            </p>
            
            <p>
              Professional treatment for Persistent Depressive Disorder is essential because this condition rarely improves on its own and tends to worsen over time without intervention. Many people with PDD have lived with symptoms for so long that they've normalized their experience, not realizing that life can feel significantly better. Left untreated, PDD increases the risk of developing major depressive episodes (a condition called "double depression"), substance abuse problems, relationship difficulties, unemployment, and even physical health problems. Evidence-based treatment—including psychotherapy, medication management, and lifestyle interventions—has been proven effective in reducing symptoms, improving functioning, and preventing relapse. The earlier treatment begins, the better the outcomes, as prolonged depression can create entrenched patterns of negative thinking and behavior that become more challenging to address over time. With proper treatment, most people with PDD experience substantial improvement in mood, energy, and overall quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Persistent Depressive Disorder (Dysthymia)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">Emotional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Persistent Sadness or Low Mood</span>
                    <p className="text-[var(--color-muted)]">A chronic feeling of sadness, emptiness, or being "down" that persists most days for years.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Loss of Interest in Activities</span>
                    <p className="text-[var(--color-muted)]">Diminished pleasure or interest in hobbies, social activities, and things that once brought joy.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Feelings of Hopelessness</span>
                    <p className="text-[var(--color-muted)]">A pervasive sense that things won't improve or that the future looks bleak.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Low Self-Esteem</span>
                    <p className="text-[var(--color-muted)]">Persistent feelings of inadequacy, worthlessness, or excessive self-criticism.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Experiencing Pleasure</span>
                    <p className="text-[var(--color-muted)]">An inability to feel happiness or satisfaction even during positive events or circumstances.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Irritability or Excessive Anger</span>
                    <p className="text-[var(--color-muted)]">Heightened frustration, irritability, or angry responses to minor stressors.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Social Withdrawal</span>
                    <p className="text-[var(--color-muted)]">Tendency to isolate from friends, family, and social situations due to low energy or mood.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Chronic Fatigue</span>
                    <p className="text-[var(--color-muted)]">Persistent low energy and tiredness that isn't relieved by rest or sleep.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Sleep Disturbances</span>
                    <p className="text-[var(--color-muted)]">Insomnia or excessive sleeping that disrupts normal daily functioning.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Appetite Changes</span>
                    <p className="text-[var(--color-muted)]">Significant decrease or increase in appetite leading to weight changes.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Concentrating</span>
                    <p className="text-[var(--color-muted)]">Trouble focusing on tasks, making decisions, or remembering information.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Reduced Productivity</span>
                    <p className="text-[var(--color-muted)]">Decreased performance at work, school, or in managing daily responsibilities.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Physical Complaints</span>
                    <p className="text-[var(--color-muted)]">Unexplained aches, pains, or digestive problems without clear medical cause.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Neglecting Self-Care</span>
                    <p className="text-[var(--color-muted)]">Decreased attention to personal hygiene, health maintenance, or appearance.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Substance Use</span>
                    <p className="text-[var(--color-muted)]">Increased reliance on alcohol, drugs, or other substances to cope with symptoms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent the development of more severe depression.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Persistent Depressive Disorder (Dysthymia)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough psychiatric evaluation to understand your symptom history, medical background, and life circumstances. This assessment includes screening for co-occurring conditions and identifying factors that may be maintaining your chronic depression. We take time to understand your unique experience and treatment goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop an individualized treatment plan that may include psychotherapy, medication management, or a combination of both. Your plan is tailored to your specific symptoms, preferences, and life situation. We discuss all options thoroughly so you can make informed decisions about your care.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Treating Persistent Depressive Disorder requires consistent follow-up and adjustment. We schedule regular appointments to monitor your progress, adjust medications as needed, and refine therapeutic approaches. We're committed to long-term support, helping you maintain gains and prevent relapse through continuous care.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our treatment approach for Persistent Depressive Disorder integrates evidence-based therapies proven effective for chronic depression. <strong>Cognitive Behavioral Therapy (CBT)</strong> helps identify and change negative thought patterns and behaviors that perpetuate depression. <strong>Behavioral Activation</strong> focuses on increasing engagement in meaningful activities to improve mood and break cycles of withdrawal. <strong>Interpersonal Therapy (IPT)</strong> addresses relationship issues and life transitions that may contribute to persistent symptoms.
            </p>
            
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              When appropriate, medication management is an important component of treatment. <strong>Antidepressant medications</strong>—particularly SSRIs (selective serotonin reuptake inhibitors) and SNRIs (serotonin-norepinephrine reuptake inhibitors)—have demonstrated effectiveness in treating PDD. We carefully monitor medication response and side effects, making adjustments to find the optimal treatment for you. Many patients benefit most from a combination of psychotherapy and medication, which research shows is often more effective than either treatment alone for chronic depression.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Persistent Depressive Disorder (Dysthymia) Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Arlene Holland is a board-certified psychiatric nurse practitioner with specialized training in treating mood disorders and chronic depression.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every person's experience with dysthymia is unique, and we tailor treatment plans to your specific needs, goals, and circumstances.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Access quality mental health care from the comfort of your home with secure, HIPAA-compliant telehealth appointments that fit your schedule.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Proven Experience</h3>
              <p className="text-[var(--color-muted)]">
                Extensive experience treating chronic depression and helping patients achieve lasting improvement in mood, functioning, and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment typically lasts 60-90 minutes and includes a comprehensive psychiatric assessment. We'll discuss your symptoms, medical history, previous treatments, and current life circumstances. This is a collaborative conversation where we'll work together to understand your experience and establish treatment goals. You'll leave with a clear treatment plan and next steps.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We'll initiate your treatment plan, which may include starting medication, beginning therapy sessions, or both. During this phase, we monitor your response closely with follow-up appointments every 1-2 weeks. If medication is prescribed, we'll start with a low dose and adjust gradually based on your response and any side effects. This early phase focuses on safety, tolerability, and beginning to shift patterns that maintain depression.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  By 8-12 weeks, most patients begin experiencing noticeable improvement in symptoms like mood, energy, and motivation. We'll assess your progress, make any necessary treatment adjustments, and address any remaining symptoms. Because PDD is chronic, improvement is often gradual rather than dramatic. We'll celebrate gains while continuing to work toward your treatment goals. Appointments typically occur every 2-4 weeks during this phase.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once symptoms are well-controlled, we transition to maintenance care with appointments every 1-3 months. Continued treatment is important for PDD, as discontinuing treatment prematurely often leads to relapse. Long-term management focuses on maintaining improvements, preventing relapse, addressing new stressors, and helping you build a life worth living. Many patients continue some form of treatment for extended periods to sustain wellness.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg border border-[var(--color-border)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Important:</strong> Recovery from Persistent Depressive Disorder takes time. While some improvement may be noticed within weeks, significant symptom relief often takes 2-3 months, and full recovery may take 6-12 months or longer. This timeline is normal for chronic depression. Patience, persistence, and consistent treatment are key to achieving lasting improvement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Persistent Depressive Disorder (Dysthymia)
          </h2>
          
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does treatment for Persistent Depressive Disorder take?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Treatment duration varies by individual, but because PDD is a chronic condition, most people require longer-term treatment than for acute depression. Initial symptom improvement often takes 6-12 weeks, with more substantial recovery occurring over 6-12 months. Many individuals benefit from ongoing maintenance treatment (therapy and/or medication) for extended periods—sometimes years—to maintain wellness and prevent relapse. This isn't a sign of treatment failure; it's simply the nature of managing a chronic condition, similar to ongoing treatment for diabetes or hypertension.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication always required for treating dysthymia?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Not always, but medication is often recommended for PDD. Research shows that antidepressant medications are effective for chronic depression, and many patients experience significant improvement with medication. However, psychotherapy alone can be effective for some individuals, particularly those with milder symptoms or strong preferences against medication. The most effective approach for many people is a combination of medication and psychotherapy, which addresses both the biological and psychological aspects of the disorder. We'll discuss your options thoroughly and make a collaborative decision about your treatment plan.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover treatment for Persistent Depressive Disorder?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Most insurance plans cover treatment for Persistent Depressive Disorder, as it's a recognized psychiatric diagnosis. Coverage typically includes both psychotherapy and medication management appointments. However, specific coverage details vary by plan, including copays, deductibles, and whether prior authorization is required. We recommend contacting your insurance provider to verify your mental health benefits before your first appointment. Our office can also provide information about payment options and help you understand your coverage.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if therapy or medication isn't working for me?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  If you're not experiencing improvement after an adequate trial period (usually 8-12 weeks), several options exist. We may adjust your medication dosage, switch to a different medication, add an additional medication to enhance effectiveness, or try a different therapeutic approach. Sometimes combining treatments that weren't effective alone produces better results. It's also important to ensure the diagnosis is accurate and that no co-occurring conditions are interfering with treatment. Finding the right treatment sometimes requires patience and multiple adjustments, but persistence typically leads to improvement.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth appointments be effective for treating this condition?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Yes, research demonstrates that telehealth is highly effective for treating depression, including Persistent Depressive Disorder. Virtual appointments offer the same quality of care as in-person visits while providing added convenience, reduced travel time, and increased access to treatment. Therapy and medication management both work well via telehealth. Many patients actually prefer virtual appointments because they can attend from a comfortable, familiar environment. We use secure, HIPAA-compliant video platforms to protect your privacy while delivering excellent care.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How is Persistent Depressive Disorder different from major depression?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Persistent Depressive Disorder involves chronic, lower-grade depressive symptoms lasting at least two years, while major depression involves more severe episodes that may last weeks to months. Think of PDD as a constant drizzle versus major depression as intense storms. However, individuals with PDD can also experience major depressive episodes (called "double depression"). Both conditions are serious and treatable, but PDD's chronic nature often means people have adapted to feeling depressed and may not realize treatment could help them feel significantly better. The treatment approaches overlap but PDD often requires longer-term management.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/major-depressive-disorder" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Major Depressive Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Intense episodes of depression affecting mood, energy, and daily functioning.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn More →</span>
            </a>
            
            <a href="/conditions/generalized-anxiety-disorder" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Generalized Anxiety Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Persistent, excessive worry about various aspects of life that's difficult to control.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn More →</span>
            </a>
            
            <a href="/conditions/bipolar-disorder" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Bipolar Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Mood disorder involving episodes of depression and elevated or irritable mood.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn More →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Get Help for Persistent Depressive Disorder (Dysthymia) Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face Persistent Depressive Disorder (Dysthymia) alone. Our team is ready to help you find relief and rediscover joy in life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}