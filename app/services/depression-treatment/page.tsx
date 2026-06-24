import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Depression Treatment in arleneholland | Arlene Holland',
  description: 'Professional depression treatment services in arleneholland. Evidence-based therapy and personalized care for individuals struggling with depression. Schedule your consultation today.',
}

export default function DepressionTreatmentPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Depression Treatment</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Depression Treatment in arleneholland
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Comprehensive, evidence-based depression treatment designed to help you regain hope, energy, and joy in your life. Our personalized approach combines proven therapeutic methods with compassionate support to guide you toward lasting recovery and emotional well-being.
          </p>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            What is Depression Treatment?
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Depression treatment is a comprehensive therapeutic approach designed to help individuals overcome persistent feelings of sadness, hopelessness, and loss of interest in daily activities. Clinical depression, also known as major depressive disorder, is more than just temporary sadness—it's a serious mental health condition that affects how you think, feel, and function in everyday life. Professional depression treatment addresses the biological, psychological, and social factors contributing to your symptoms, offering a pathway to recovery and renewed quality of life.
            </p>
            
            <p>
              Our depression treatment services are grounded in decades of clinical research and evidence-based practices. We understand that depression manifests differently in each person, which is why our approach is highly individualized. Treatment typically combines psychotherapy, lifestyle modifications, and when appropriate, medication management. Cognitive Behavioral Therapy (CBT), Interpersonal Therapy (IPT), and mindfulness-based approaches have all demonstrated significant effectiveness in treating depression. The goal is not just symptom relief, but helping you develop sustainable coping strategies and resilience for long-term mental wellness.
            </p>
            
            <p>
              Depression treatment benefits individuals experiencing a wide range of symptoms, from mild persistent low mood to severe depression that interferes with work, relationships, and self-care. Many people struggle with depression for months or years before seeking help, often believing they should be able to "snap out of it" on their own. However, depression is a medical condition that responds well to professional treatment. Whether you're dealing with situational depression triggered by life events, chronic depression that has persisted for years, or depression co-occurring with anxiety or other conditions, specialized treatment can make a profound difference in your recovery journey.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">
              Common Signs You May Benefit from Depression Treatment:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Persistent sadness, emptiness, or hopelessness lasting two weeks or longer</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Loss of interest or pleasure in activities you once enjoyed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Significant changes in sleep patterns (insomnia or sleeping too much)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Fatigue and decreased energy, even with adequate rest</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Changes in appetite or significant weight loss or gain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Difficulty concentrating, making decisions, or remembering things</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Feelings of worthlessness, excessive guilt, or self-criticism</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Physical symptoms such as headaches, digestive issues, or chronic pain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Withdrawal from social activities, family, and friends</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Thoughts of death or suicide (seek immediate help if experiencing)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE TREAT IT */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Our Approach to Depression Treatment
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Comprehensive Initial Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough evaluation of your symptoms, medical history, life circumstances, and mental health background. We use standardized depression screening tools and conduct an in-depth clinical interview to understand the severity, duration, and impact of your depression. This assessment helps us identify contributing factors and co-occurring conditions to create the most effective treatment plan.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop a customized treatment plan tailored to your specific needs, preferences, and goals. Your plan may include evidence-based psychotherapy approaches like Cognitive Behavioral Therapy or Interpersonal Therapy, lifestyle interventions, and if appropriate, medication management. We collaborate with you to ensure your treatment aligns with your values and life circumstances.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Ongoing Support & Monitoring
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Depression treatment is a process that requires consistent support and regular monitoring. We track your progress using symptom measures and adjust your treatment plan as needed. Regular therapy sessions provide accountability, skill-building, and a safe space to process emotions. We're committed to supporting you through setbacks and celebrating your victories as you work toward sustained recovery.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">
              Evidence-Based Treatment Modalities
            </h3>
            <div className="bg-[var(--color-light)] rounded-xl p-8 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                  Cognitive Behavioral Therapy (CBT)
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  CBT is one of the most extensively researched and effective treatments for depression. This structured approach helps you identify and change negative thought patterns and behaviors that maintain depression. You'll learn practical skills to challenge distorted thinking, increase positive activities, and develop healthier coping mechanisms. CBT typically shows results within 12-16 sessions and equips you with lifelong tools for managing depressive symptoms.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                  Interpersonal Therapy (IPT)
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  IPT focuses on improving your relationships and social functioning, recognizing that interpersonal difficulties often contribute to depression. This time-limited therapy addresses issues such as unresolved grief, role transitions, interpersonal disputes, and social isolation. By strengthening your communication skills and relationship patterns, IPT helps reduce depressive symptoms and improve overall life satisfaction.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                  Mindfulness-Based Approaches
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Mindfulness-based cognitive therapy (MBCT) combines meditation practices with cognitive therapy principles to help prevent relapse in individuals with recurrent depression. You'll learn to observe your thoughts and feelings without judgment, reducing rumination and increasing present-moment awareness. These techniques are particularly effective for managing the negative thought patterns that fuel depression.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                  Medication Management (When Appropriate)
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  For moderate to severe depression, antidepressant medication can be an important component of treatment. When clinically indicated, we provide referrals to psychiatrists who can prescribe and monitor medications such as SSRIs, SNRIs, or other antidepressants. Medication combined with therapy often produces better outcomes than either treatment alone, particularly for severe depression. We coordinate care to ensure integrated treatment and optimal results.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">
                  Lifestyle and Behavioral Interventions
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Depression treatment includes attention to factors that influence mental health, including sleep hygiene, physical activity, nutrition, and social connection. We work with you to develop sustainable lifestyle changes that support your recovery. Regular exercise, consistent sleep schedules, and meaningful social engagement are proven to reduce depressive symptoms and enhance treatment effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8 text-center">
              What to Expect During Treatment
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  First Visit (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial session focuses on understanding your experience with depression, including symptom history, triggers, previous treatments, and current challenges. We'll complete a comprehensive assessment and begin developing your personalized treatment plan. You'll leave with initial coping strategies and a clear understanding of what to expect in the coming weeks. This session typically lasts 60-90 minutes.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  Early Treatment (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During the first month, you'll attend weekly therapy sessions to establish a therapeutic relationship and begin implementing treatment strategies. You'll learn foundational skills for managing symptoms, such as behavioral activation, thought monitoring, and relaxation techniques. While some improvement may be noticeable, significant symptom reduction typically takes 4-6 weeks. This is a crucial period for building momentum and commitment to treatment.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  Active Treatment (Months 1-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As treatment progresses, you'll notice gradual improvements in mood, energy, and functioning. Therapy sessions continue weekly or bi-weekly, focusing on deepening skills, addressing underlying issues, and consolidating progress. You'll work on identifying and modifying negative thinking patterns, improving relationships, and increasing engagement in meaningful activities. Most people experience significant symptom reduction during this phase. If medication is part of your treatment, dosage adjustments may occur based on your response.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  Maintenance & Long-term Support (3+ Months)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once symptoms have significantly improved, treatment shifts toward relapse prevention and maintaining gains. Sessions may occur less frequently (bi-weekly or monthly) as you practice skills independently. We'll develop a wellness plan for managing future challenges and recognizing early warning signs of relapse. Many people benefit from ongoing periodic "check-in" sessions to maintain progress. Long-term outcomes are best when treatment continues for at least 6-12 months, even after symptoms improve.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] leading-relaxed text-center">
                <strong className="text-[var(--color-ink)]">Important Note:</strong> Recovery from depression is not always linear. You may experience setbacks or difficult periods, which are a normal part of the healing process. We'll work together to navigate challenges and adjust your treatment as needed to support your continued progress toward wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Common Questions About Depression Treatment
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How long does depression treatment take to work?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  The timeline for improvement varies depending on depression severity, individual factors, and treatment approach. Many people begin noticing small improvements within 2-4 weeks of starting treatment, such as better sleep or slightly improved energy. Significant symptom reduction typically occurs within 6-12 weeks of consistent therapy and/or medication. However, full recovery and developing strong coping skills usually takes 3-6 months or longer. Psychotherapy generally requires 12-20 sessions for optimal results, though some people benefit from longer-term treatment. Remember that recovery is not always linear—you may experience ups and downs along the way, which is completely normal.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Will I need medication for my depression?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Not everyone with depression requires medication. The decision depends on several factors, including symptom severity, functional impairment, treatment history, and personal preferences. For mild to moderate depression, psychotherapy alone is often effective. For moderate to severe depression, or when psychotherapy hasn't provided sufficient relief, antidepressant medication combined with therapy typically produces the best outcomes. If medication is recommended, we'll provide referrals to trusted psychiatrists and coordinate care to ensure integrated treatment. Medication decisions are always made collaboratively, considering your specific situation, concerns, and treatment goals. Many people successfully manage depression with therapy alone, while others benefit from a combined approach.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                What if I've tried therapy before and it didn't help?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Previous unsuccessful therapy experiences don't mean treatment won't work for you. There are many reasons prior therapy may not have been effective: the therapeutic approach may not have been right for you, the timing wasn't optimal, the therapeutic relationship wasn't strong, or the treatment wasn't specifically targeting depression. Depression treatment has advanced significantly, with multiple evidence-based approaches available. We'll conduct a thorough assessment to understand what didn't work before and why, then develop a treatment plan using different strategies better suited to your needs. Many people who didn't benefit from previous therapy find success with a different approach, therapist, or treatment modality. Your previous experience provides valuable information that helps us create a more effective treatment plan.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Can depression be cured, or will I always struggle with it?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Many people fully recover from depression and go on to live fulfilling lives without ongoing symptoms. However, depression can be recurrent for some individuals, particularly if they've experienced multiple episodes. The good news is that with effective treatment, you can achieve full remission of symptoms and learn skills to prevent or manage future episodes. Treatment focuses not just on symptom relief, but on building resilience, developing healthy coping strategies, and addressing underlying vulnerabilities. Even if you're prone to recurrent depression, the duration and severity of episodes typically decrease with proper treatment and maintenance strategies. Many people who've struggled with depression become stronger and more self-aware through the recovery process, developing tools that serve them throughout their lives.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How do I know if what I'm experiencing is depression or just normal sadness?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Everyone experiences sadness as a normal emotional response to life's challenges, but clinical depression is different in duration, intensity, and impact on functioning. Normal sadness is typically related to specific circumstances, improves with time, and doesn't significantly interfere with daily life. Depression, on the other hand, persists for two weeks or longer, affects multiple areas of your life (work, relationships, self-care), and often occurs without a clear trigger or continues long after triggering events have resolved. Depression involves additional symptoms beyond sadness, such as loss of interest in activities, changes in sleep and appetite, fatigue, difficulty concentrating, and feelings of worthlessness. If you're unsure whether what you're experiencing is depression, a professional assessment can provide clarity and determine whether treatment would be beneficial.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-10 text-center">
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/anxiety-treatment" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Anxiety Treatment
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Evidence-based therapy for generalized anxiety, panic disorder, and anxiety-related conditions with proven techniques for lasting relief.
              </p>
            </a>

            <a href="/services/trauma-therapy" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Trauma Therapy
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Compassionate, specialized treatment for trauma and PTSD using evidence-based approaches to help you heal and reclaim your life.
              </p>
            </a>

            <a href="/services/stress-management" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Stress Management
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Learn practical strategies to manage chronic stress, prevent burnout, and develop resilience for better mental and physical health.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">
            Ready to Get Help with Depression Treatment?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Take the first step toward healing. Schedule a consultation to discuss how our depression treatment services can help you rediscover hope and joy.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}