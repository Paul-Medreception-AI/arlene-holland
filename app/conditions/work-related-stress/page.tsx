import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work-Related Stress Treatment in Holland | Arlene Holland',
  description: 'Expert work-related stress treatment in Holland. Board-certified care for burnout, workplace anxiety, and occupational stress. Telehealth available. Contact us today.',
  keywords: 'work-related stress treatment Holland, workplace stress therapy, burnout treatment, occupational stress Holland, job stress counseling',
}

export default function WorkRelatedStressPage() {
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
            <span>Work-Related Stress</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Work-Related Stress Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl font-light opacity-95">
            Work-related stress affects millions of professionals, leading to burnout, anxiety, and diminished quality of life. Our specialized treatment approaches help you regain balance, develop healthy coping strategies, and rediscover fulfillment in your career and personal life.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]">
            Understanding Work-Related Stress
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Work-related stress is a harmful physical and emotional response that occurs when job requirements exceed a worker's capabilities, resources, or needs. It is one of the most common mental health challenges in today's workforce, affecting employees across all industries and career levels. According to the American Institute of Stress, work is the leading source of stress for American adults, with 83% of workers suffering from work-related stress. This chronic occupational stress doesn't just impact job performance—it significantly affects physical health, relationships, sleep quality, and overall life satisfaction. Unlike normal work pressures that can motivate and energize, chronic work-related stress persistently overwhelms your coping mechanisms, leading to serious consequences including burnout, depression, anxiety disorders, cardiovascular problems, and weakened immune function.
            </p>
            <p>
              The causes of work-related stress are multifaceted and often interconnected. Common triggers include excessive workloads and unrealistic deadlines, lack of control over work processes or decisions, unclear job expectations or conflicting demands, poor work-life balance and long hours, inadequate compensation or lack of recognition, toxic workplace relationships or bullying, job insecurity or organizational changes, and misalignment between personal values and company culture. Individual risk factors also play a role—perfectionistic tendencies, difficulty setting boundaries, people-pleasing behaviors, unresolved trauma, and pre-existing mental health conditions can all increase vulnerability to workplace stress. The COVID-19 pandemic has intensified these challenges, with remote work blurring boundaries between professional and personal life, increased feelings of isolation, and heightened uncertainty about employment security creating additional layers of occupational stress.
            </p>
            <p>
              Professional treatment for work-related stress is essential because this condition rarely resolves on its own and typically worsens over time without intervention. Many people attempt to "push through" or normalize their symptoms, believing stress is simply part of working life. However, chronic workplace stress fundamentally alters brain chemistry, stress hormone levels, and physiological functioning in ways that require professional support to reverse. Evidence-based treatment helps you identify specific stressors, develop effective coping strategies, establish healthy boundaries, process underlying emotional issues, and make informed decisions about your career path. At Arlene Holland's practice, we provide comprehensive work-related stress treatment that addresses both immediate symptom relief and long-term resilience building, helping you create sustainable changes that protect your mental health while maintaining professional success.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Work-Related Stress
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Emotional & Cognitive Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Constant Worry and Anxiety</p>
                    <p className="text-[var(--color-muted)]">Persistent feelings of dread about work, ruminating about tasks even during time off, or anticipatory anxiety before the workweek begins.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Concentrating</p>
                    <p className="text-[var(--color-muted)]">Trouble focusing on tasks, making decisions, or remembering important details that would normally be routine.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Emotional Exhaustion</p>
                    <p className="text-[var(--color-muted)]">Feeling emotionally drained, depleted, or numb, with nothing left to give by the end of the workday or week.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Irritability and Mood Swings</p>
                    <p className="text-[var(--color-muted)]">Becoming easily frustrated, snapping at colleagues or loved ones, or experiencing disproportionate emotional reactions to minor issues.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Loss of Motivation</p>
                    <p className="text-[var(--color-muted)]">Feeling cynical about work, losing interest in projects that once excited you, or experiencing a profound sense of meaninglessness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Sense of Failure</p>
                    <p className="text-[var(--color-muted)]">Feelings of inadequacy, imposter syndrome, or belief that you're not meeting expectations despite evidence to the contrary.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Feelings of Helplessness</p>
                    <p className="text-[var(--color-muted)]">Believing nothing will change or improve, feeling trapped in your situation, or experiencing hopelessness about your career.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Sleep Disturbances</p>
                    <p className="text-[var(--color-muted)]">Difficulty falling asleep, waking during the night with work thoughts racing, or sleeping excessively but never feeling rested.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Physical Tension and Pain</p>
                    <p className="text-[var(--color-muted)]">Chronic headaches, muscle tension especially in neck and shoulders, jaw clenching, or unexplained body aches.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Digestive Issues</p>
                    <p className="text-[var(--color-muted)]">Stomach problems, nausea, changes in appetite, or development of conditions like irritable bowel syndrome related to stress.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Frequent Illness</p>
                    <p className="text-[var(--color-muted)]">Increased susceptibility to colds, infections, or other illnesses as chronic stress weakens immune system functioning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Social Withdrawal</p>
                    <p className="text-[var(--color-muted)]">Isolating from colleagues, friends, or family, declining invitations, or avoiding workplace social interactions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Changes in Productivity</p>
                    <p className="text-[var(--color-muted)]">Decreased work quality, procrastination, missing deadlines, or needing significantly more time to complete routine tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Unhealthy Coping Mechanisms</p>
                    <p className="text-[var(--color-muted)]">Increased reliance on alcohol, substances, food, or other behaviors to manage stress or numb difficult emotions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Absenteeism</p>
                    <p className="text-[var(--color-muted)]">Frequently calling in sick, arriving late, or mentally checking out during work hours as a way to cope with overwhelming stress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself, help is available. Early treatment leads to better outcomes and can prevent progression to more serious mental health conditions like clinical depression or generalized anxiety disorder.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-16 text-[var(--color-ink)] text-center">
            How We Treat Work-Related Stress
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation of your work environment, stressors, symptoms, and overall mental health. This includes identifying specific workplace triggers, assessing for co-occurring conditions like depression or anxiety, and understanding how work stress impacts your relationships and physical health. We also explore your coping patterns, support systems, and personal and professional goals to create a complete picture of your situation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop an individualized treatment approach that addresses your specific needs and circumstances. Your plan may include psychotherapy, stress management techniques, lifestyle modifications, and when appropriate, medication management. We collaborate with you to set realistic goals, establish boundaries, and develop practical strategies you can implement immediately to reduce stress and improve workplace functioning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Treatment for work-related stress is not one-time but rather an ongoing process of building resilience and maintaining balance. We provide regular follow-up sessions to monitor your progress, adjust treatment as needed, and support you through workplace changes or challenges. We help you develop long-term coping skills, recognize early warning signs of stress escalation, and create sustainable practices that protect your mental health while supporting professional success.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our treatment approach draws on evidence-based modalities proven effective for work-related stress and burnout. These include Cognitive Behavioral Therapy (CBT) to identify and change stress-producing thought patterns, mindfulness-based stress reduction techniques to increase present-moment awareness and emotional regulation, and solution-focused therapy to develop practical coping strategies. We also incorporate psychoeducation about the physiological effects of stress, boundary-setting skills, assertiveness training, and work-life balance strategies. When appropriate, medication management may be recommended to address co-occurring anxiety or depression that compounds workplace stress. For some clients, we provide guidance on workplace accommodations, career transitions, or communication with employers about mental health needs. Our holistic approach addresses both immediate symptom relief and the development of lasting resilience skills that serve you throughout your career.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Work-Related Stress Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arlene Holland is a board-certified psychiatric mental health nurse practitioner with specialized training in treating occupational stress, burnout, and workplace-related mental health conditions. Her clinical expertise ensures you receive evidence-based treatment grounded in the latest research on work stress management.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized, Compassionate Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We understand that work-related stress affects each person differently based on their unique circumstances, personality, and life situation. Your treatment plan is tailored specifically to your needs, work environment, and goals—not a one-size-fits-all approach. We create a non-judgmental space where you can openly discuss workplace challenges without fear.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Telehealth Services</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer secure telehealth appointments that fit seamlessly into your busy work schedule. Meet with us from the privacy of your home, office, or anywhere you feel comfortable, eliminating commute time and making it easier to prioritize your mental health even during demanding work periods. This flexibility is especially valuable for professionals managing heavy workloads.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Proven Experience with Workplace Stress</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We have extensive experience treating professionals across diverse industries who struggle with work-related stress, from healthcare workers and teachers to corporate executives and entrepreneurs. We understand the unique pressures of modern work environments and help clients navigate complex workplace dynamics while maintaining their mental health and career satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment is a comprehensive 60-75 minute evaluation where we discuss your work situation, stress symptoms, mental health history, and treatment goals. We create a safe, confidential space for you to share your experiences without judgment. You'll leave this first session with initial strategies you can begin implementing immediately and a clear understanding of your treatment plan moving forward.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During the initial treatment phase, we typically meet weekly to establish momentum and provide consistent support as you implement new coping strategies. You'll learn stress management techniques, boundary-setting skills, and cognitive tools to change stress-producing thought patterns. If medication is part of your treatment plan, we'll carefully monitor your response and adjust as needed. Most clients notice some improvement in symptoms during this phase.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As you develop stronger coping skills and begin experiencing relief, we may adjust your appointment frequency based on your progress and needs. We assess which strategies are most effective for you, address any remaining symptoms or new challenges, and refine your treatment approach. This phase focuses on building resilience and developing sustainable practices that will serve you long-term, not just providing temporary relief.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Recovery from work-related stress is not just about feeling better—it's about creating lasting change in how you relate to work and manage stress. Ongoing support may include monthly check-ins to maintain progress, support during workplace transitions or increased stress periods, and continued development of resilience skills. Many clients maintain a therapeutic relationship even after symptoms improve, viewing regular appointments as preventive mental health care rather than crisis management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Work-Related Stress
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                How long does treatment for work-related stress typically take?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Treatment duration varies significantly depending on the severity of your symptoms, how long you've been experiencing stress, and your specific circumstances. Many clients notice meaningful improvement within 4-8 weeks of consistent treatment, particularly in managing acute symptoms like anxiety, sleep problems, and emotional reactivity. However, developing lasting resilience and making sustainable changes to your relationship with work typically takes 3-6 months or longer. Some clients benefit from ongoing support beyond initial symptom relief, especially if they work in high-stress environments or have a history of burnout. We'll regularly assess your progress and adjust treatment duration based on your individual needs and goals.</p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Is medication required to treat work-related stress?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Medication is not always required for work-related stress, and many clients achieve significant improvement through psychotherapy, stress management techniques, and lifestyle modifications alone. However, medication can be helpful and sometimes necessary when work-related stress has led to clinical depression or anxiety disorders, when symptoms are severe enough to significantly impair functioning, or when non-medication approaches haven't provided sufficient relief. If medication is recommended, we typically use it as part of a comprehensive treatment plan that includes therapy and skill-building, not as a standalone solution. We'll discuss the potential benefits and risks of medication for your specific situation and make decisions collaboratively based on your preferences and clinical needs.</p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Does insurance cover treatment for work-related stress?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most insurance plans cover treatment for mental health conditions including anxiety and depression that result from work-related stress. While insurance doesn't typically have a specific code for "work-related stress," the mental health symptoms you're experiencing (such as generalized anxiety disorder, adjustment disorder, or major depression) are covered diagnoses. We recommend contacting your insurance provider to verify your specific mental health benefits, including copays, deductibles, and any authorization requirements. Our practice can provide documentation to support insurance claims, and we'll work with you to maximize your benefits. We also offer self-pay options for clients who prefer not to use insurance or whose plans don't include mental health coverage.</p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                What if therapy isn't working or I'm not seeing improvement?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>If you're not experiencing improvement, it's important to communicate this openly with your provider. There are many reasons therapy progress may stall, and there are always options to explore. We may need to adjust your treatment approach, increase appointment frequency, add or modify medications, address underlying issues that weren't initially apparent, or explore whether workplace factors need to change. Sometimes the lack of progress indicates that the work environment itself is untenable and requires a different solution, such as a job change or career transition. We view your feedback as essential to treatment success and will work collaboratively with you to identify barriers to improvement and adjust our approach accordingly. Your concerns about treatment effectiveness are never dismissed—they're valuable information that helps us provide better care.</p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Can telehealth be effective for treating work-related stress?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, telehealth is highly effective for treating work-related stress and offers several advantages for busy professionals. Research shows that outcomes for telehealth mental health treatment are comparable to in-person care for conditions like work-related stress, anxiety, and depression. Telehealth eliminates commute time, making it easier to fit appointments into demanding work schedules. It provides flexibility to meet from a location where you feel comfortable and private. Many clients find it easier to attend regular appointments consistently when using telehealth, which improves treatment outcomes. Additionally, being able to attend sessions from home can be particularly helpful when you're experiencing high stress and don't have energy for travel. We use secure, HIPAA-compliant video platforms to ensure your confidentiality and privacy.</p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Should I tell my employer I'm receiving treatment for work-related stress?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Whether to disclose your treatment to your employer is a personal decision that depends on your specific workplace culture, relationship with management, and individual circumstances. You are not legally required to disclose mental health treatment to your employer in most cases. However, disclosure may be beneficial if you need workplace accommodations (such as modified schedule or duties), if your employer has a supportive culture around mental health, or if you're working with HR to address workplace issues contributing to your stress. We can help you think through the potential benefits and risks of disclosure in your specific situation, prepare for conversations with employers if you choose to disclose, and understand your legal protections under laws like the Americans with Disabilities Act (ADA) and Family and Medical Leave Act (FMLA). Your treatment with us remains confidential unless you choose to share information with your employer.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl md:text-4xl font-light mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/conditions/burnout" className="bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Burnout</h4>
              <p className="text-[var(--color-muted)] mb-4">Emotional exhaustion, cynicism, and reduced effectiveness resulting from prolonged workplace stress.</p>
              <span className="text-[var(--color-primary)] group-hover:underline">Learn more →</span>
            </Link>
            <Link href="/conditions/generalized-anxiety-disorder" className="bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Generalized Anxiety Disorder</h4>
              <p className="text-[var(--color-muted)] mb-4">Persistent, excessive worry about various aspects of life including work performance and job security.</p>
              <span className="text-[var(--color-primary)] group-hover:underline">Learn more →</span>
            </Link>
            <Link href="/conditions/depression" className="bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Depression</h4>
              <p className="text-[var(--color-muted)] mb-4">Persistent low mood, loss of interest, and hopelessness that often develops from chronic workplace stress.</p>
              <span className="text-[var(--color-primary)] group-hover:underline">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-4">
            Get Help for Work-Related Stress Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face work-related stress alone. Our team is ready to help you find balance and reclaim your well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}