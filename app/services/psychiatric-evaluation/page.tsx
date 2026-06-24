import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Psychiatric Evaluation | Arlene Holland Mental Health Services',
  description: 'Comprehensive psychiatric evaluation services at Arlene Holland. Expert diagnostic assessment, personalized treatment planning, and ongoing mental health support.',
}

export default function PsychiatricEvaluationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span className="mx-2">›</span>
            <span>Psychiatric Evaluation</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Psychiatric Evaluation in arleneholland
          </h1>
          <p className="text-xl leading-relaxed opacity-95 mb-4">
            A comprehensive psychiatric evaluation is the foundation of effective mental health treatment, providing a thorough assessment of your psychological, emotional, and behavioral health. Our detailed diagnostic process ensures you receive an accurate diagnosis and personalized treatment plan tailored to your unique needs and circumstances.
          </p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            What is Psychiatric Evaluation?
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              A psychiatric evaluation is a comprehensive clinical assessment conducted by a qualified mental health professional to understand your mental health status, identify any psychiatric conditions, and develop an appropriate treatment strategy. This thorough evaluation process involves detailed interviews, standardized assessment tools, review of medical and family history, and careful consideration of biological, psychological, and social factors that may be affecting your mental well-being. Unlike a brief screening, a full psychiatric evaluation provides an in-depth understanding of your mental health that serves as the cornerstone for all future treatment decisions.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              During the evaluation, we explore your current symptoms, their duration and severity, past mental health history, substance use, medical conditions, medications, family psychiatric history, life stressors, trauma history, and your current support systems. This holistic approach ensures we understand not just your symptoms, but you as a whole person within the context of your life circumstances. The evaluation typically takes 60-90 minutes and provides a safe, confidential space for you to share your experiences and concerns without judgment.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed mb-8">
              Psychiatric evaluations are evidence-based assessments grounded in decades of clinical research and diagnostic frameworks such as the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders). These evaluations help identify conditions ranging from depression and anxiety disorders to bipolar disorder, PTSD, ADHD, and other mental health conditions. Early and accurate diagnosis through comprehensive evaluation significantly improves treatment outcomes, prevents unnecessary suffering, and helps individuals regain control of their mental health and quality of life.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              You May Benefit from a Psychiatric Evaluation if You Experience:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Persistent sadness, hopelessness, or loss of interest in activities you once enjoyed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Excessive worry, panic attacks, or overwhelming anxiety that interferes with daily life</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Dramatic mood swings, unusual energy levels, or periods of extreme irritability</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Difficulty concentrating, making decisions, or completing tasks at work or school</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Sleep disturbances including insomnia, oversleeping, or nightmares</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Changes in appetite, weight, or eating patterns that concern you</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Intrusive thoughts, flashbacks, or difficulty recovering from traumatic experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Substance use that feels out of control or is causing problems in your life</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Social withdrawal, relationship difficulties, or isolation from friends and family</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Thoughts of self-harm or suicide (seek immediate help if experiencing crisis)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center text-[var(--color-ink)] animate-fade-up" style={{fontFamily: 'var(--font-cormorant)'}}>
            Our Approach to Psychiatric Evaluation
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Initial Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough clinical interview covering your complete mental health history, current symptoms, medical background, family psychiatric history, substance use, trauma experiences, and psychosocial stressors. We use standardized diagnostic tools and screening instruments to ensure accuracy and completeness in our assessment process.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Accurate Diagnosis & Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Following the evaluation, we provide a clear diagnostic formulation using DSM-5 criteria and develop a comprehensive, individualized treatment plan. This plan may include recommendations for psychotherapy, medication management, lifestyle modifications, and referrals to specialists when appropriate. You'll receive clear explanations of your diagnosis and treatment options.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Monitoring & Support
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Psychiatric evaluation is not a one-time event but the beginning of your treatment journey. We provide follow-up appointments to monitor your progress, adjust treatment as needed, and ensure you're moving toward your mental health goals. Regular reassessment helps us track improvement and modify interventions based on your response to treatment.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-[var(--color-light)] rounded-xl p-10 animate-fade-up">
            <h3 className="text-3xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              Evidence-Based Treatment Modalities
            </h3>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Based on your evaluation results, treatment recommendations may include several evidence-based approaches tailored to your specific diagnosis and needs. For many conditions, a combination of psychotherapy and medication management provides the most effective outcomes, though treatment is always individualized.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Psychotherapy Options</h4>
                <ul className="space-y-2 text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Cognitive Behavioral Therapy (CBT) for anxiety and depression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Dialectical Behavior Therapy (DBT) for emotion regulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Trauma-focused therapy including EMDR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Interpersonal therapy for relationship issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Supportive psychotherapy and psychoeducation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Medication Management</h4>
                <ul className="space-y-2 text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Antidepressants for mood disorders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Anti-anxiety medications when appropriate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Mood stabilizers for bipolar disorder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Stimulants for ADHD management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span>Careful monitoring and adjustment protocols</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              What to Expect: Your Treatment Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  First Visit (60-90 minutes)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial psychiatric evaluation, we'll conduct a comprehensive assessment of your mental health history, current symptoms, medical background, and life circumstances. Please bring a list of current medications, any previous treatment records, and questions you'd like to discuss. This session establishes the foundation for your diagnosis and treatment plan. You'll leave with a clear understanding of next steps and initial recommendations.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Weeks 2-4: Treatment Initiation
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Follow-up appointments during this period focus on implementing your treatment plan, which may include starting therapy, initiating medication, or both. If medication is prescribed, we'll monitor for effectiveness and side effects carefully. You'll begin learning coping strategies and gaining insight into your condition. This is a critical adjustment period where open communication about your experience is essential.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Months 1-3: Active Treatment Phase
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most patients begin noticing improvements in symptoms during this phase, though the timeline varies by individual and condition. Medication adjustments may be made to optimize effectiveness. Therapy sessions continue regularly as you develop new skills and insights. We'll assess progress using objective measures and your subjective experience, adjusting the treatment plan as needed to ensure you're moving toward your goals.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Long-term: Maintenance & Wellness
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once symptoms are well-managed, we transition to a maintenance phase with less frequent appointments focused on sustaining progress and preventing relapse. You'll have developed coping skills and self-awareness to manage challenges independently. Ongoing support remains available as needed, with the flexibility to increase session frequency during stressful periods. Many patients continue periodic check-ins to maintain mental wellness long-term.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white rounded-lg border-2 border-[var(--color-border)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Important Note:</strong> Every individual's journey is unique, and timelines vary based on diagnosis, symptom severity, treatment adherence, and personal circumstances. Some conditions require longer treatment periods, while others may improve more quickly. We're committed to working at your pace and adjusting our approach to meet your evolving needs throughout the treatment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Common Questions About Psychiatric Evaluation
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between">
                <span>How long does a psychiatric evaluation take?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>A comprehensive initial psychiatric evaluation typically takes 60-90 minutes, though complex cases may require additional time. This extended session allows for thorough exploration of your symptoms, history, and circumstances. We never rush the evaluation process, as accuracy and completeness are essential for developing an effective treatment plan. Follow-up appointments are usually 30-50 minutes depending on the nature of treatment (therapy sessions vs. medication management visits).</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between">
                <span>Will I need to take medication after a psychiatric evaluation?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Not necessarily. Medication is just one possible treatment option, and whether it's recommended depends entirely on your specific diagnosis, symptom severity, preferences, and overall clinical picture. Many conditions respond well to psychotherapy alone, while others benefit most from a combination of therapy and medication. We always discuss all treatment options with you, including risks and benefits, and involve you fully in treatment decisions. You're never pressured to take medication if you're uncomfortable with that approach, and we'll work together to find the treatment strategy that fits your needs and values.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between">
                <span>Is everything I share during the evaluation confidential?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, your privacy is protected by law and professional ethics codes. Everything discussed during your psychiatric evaluation is confidential and cannot be shared without your written permission, with only a few legal exceptions: if there's an imminent risk of harm to yourself or others, suspected abuse of a child or vulnerable adult, or if records are subpoenaed by a court. These exceptions exist to protect safety but are rarely encountered. We take your confidentiality very seriously and create a safe, non-judgmental space for you to share openly. Feel free to ask any questions about confidentiality during your first visit.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between">
                <span>How do I prepare for my first psychiatric evaluation?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>To make the most of your evaluation, bring a list of all current medications (including dosages), any previous mental health treatment records if available, a summary of relevant medical conditions, and your insurance information. It's helpful to think about what symptoms brought you to seek help, when they started, and how they're affecting your daily life. Consider jotting down questions or concerns you want to discuss. Try to get adequate sleep the night before and arrive a few minutes early to complete any necessary paperwork. Most importantly, come ready to be open and honest—the more we understand about your experience, the better we can help you.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg flex items-center justify-between">
                <span>Does insurance cover psychiatric evaluation and treatment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most insurance plans cover psychiatric evaluation and treatment services, though coverage details vary by plan. Mental health services are now required to be covered at parity with physical health services under federal law. We recommend contacting your insurance company before your first appointment to verify your mental health benefits, including copays, deductibles, and any requirements for pre-authorization. Our office can also help verify benefits and answer questions about insurance coverage. For those without insurance or with high deductibles, we may offer self-pay options or can discuss payment plans to make treatment accessible.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-10 text-center text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/medication-management" className="block group">
              <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.402m-14.8-6.269l-1.402 1.402c-1.232 1.232-1.232 3.233 0 4.465l1.402 1.402M12 12h.008v.008H12V12zm0 0h.008v.008H12V12zm0 0h.008v.008H12V12z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Medication Management
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Expert psychiatric medication management to optimize treatment effectiveness while minimizing side effects, with regular monitoring and adjustments.
                </p>
                <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/services/therapy-counseling" className="block group">
              <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Therapy & Counseling
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Evidence-based psychotherapy including CBT, DBT, and trauma-focused approaches tailored to your unique mental health needs and goals.
                </p>
                <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/services/anxiety-treatment" className="block group">
              <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Anxiety Treatment
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Specialized treatment for generalized anxiety, panic disorder, social anxiety, and phobias using proven therapeutic techniques and medication when needed.
                </p>
                <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Get Help with Psychiatric Evaluation?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Take the first step toward better mental health with a comprehensive psychiatric evaluation. We're here to listen, understand, and help you find your path to wellness.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold text-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}