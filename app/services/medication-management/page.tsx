import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medication Management Services | Arlene Holland Mental Health',
  description: 'Expert medication management for depression, anxiety, bipolar disorder, and other mental health conditions. Personalized psychiatric medication services with ongoing monitoring and support.',
  keywords: 'medication management, psychiatric medication, mental health medication, depression medication, anxiety medication, bipolar medication, medication monitoring, psychiatric care',
}

export default function MedicationManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span className="mx-2">›</span>
            <span>Medication Management</span>
          </nav>
          <h1 className="font-light text-5xl mb-6" style={{fontFamily: 'Cormorant, serif'}}>
            Medication Management in arleneholland
          </h1>
          <p className="text-xl leading-relaxed opacity-95 max-w-3xl">
            Comprehensive psychiatric medication services designed to optimize your mental health treatment through careful prescribing, monitoring, and adjustment. Our evidence-based approach ensures you receive the right medication at the right dose with ongoing support to manage side effects and maximize therapeutic benefits.
          </p>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-8" style={{fontFamily: 'Cormorant, serif'}}>
            What is Medication Management?
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-[var(--color-ink)]">
            <p className="leading-relaxed">
              Medication management is a comprehensive psychiatric service that involves the careful selection, prescribing, monitoring, and adjustment of psychotropic medications to treat mental health conditions. This service goes far beyond simply writing prescriptions—it encompasses a thorough evaluation of your symptoms, medical history, current medications, lifestyle factors, and treatment goals to develop an individualized medication strategy that addresses your unique needs. Through regular follow-up appointments and ongoing monitoring, medication management ensures that your treatment remains effective, safe, and optimally adjusted as your condition and circumstances evolve.
            </p>

            <p className="leading-relaxed">
              The foundation of effective medication management lies in understanding that psychiatric medications work differently for each person. Factors such as genetics, metabolism, co-existing medical conditions, other medications, diet, sleep patterns, and stress levels all influence how medications work in your body. A skilled psychiatric provider considers all these variables when recommending medications and makes adjustments based on your response, side effects, and changing needs over time. This personalized approach maximizes the benefits of medication while minimizing unwanted effects, helping you achieve symptom relief and improved quality of life.
            </p>

            <p className="leading-relaxed">
              Medication management is particularly beneficial for individuals with depression, anxiety disorders, bipolar disorder, ADHD, OCD, PTSD, schizophrenia, and other mental health conditions where medication has been shown to be effective. Research consistently demonstrates that for many mental health conditions, the combination of appropriate medication and psychotherapy produces better outcomes than either treatment alone. Medication can help stabilize mood, reduce anxiety, improve focus, manage psychotic symptoms, and regulate sleep, creating a foundation that allows therapy and other interventions to be more effective. Our approach emphasizes collaboration, education, and empowerment, ensuring you understand your medications and feel confident in your treatment plan.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6" style={{fontFamily: 'Cormorant, serif'}}>
              Signs You May Benefit from Medication Management
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Persistent depression or low mood despite lifestyle changes',
                'Anxiety that interferes with daily functioning',
                'Mood swings or emotional instability',
                'Difficulty concentrating or completing tasks',
                'Intrusive thoughts or compulsive behaviors',
                'Sleep disturbances affecting quality of life',
                'Panic attacks or intense worry',
                'Previous positive response to psychiatric medication',
                'Symptoms that impact work, relationships, or self-care',
                'Side effects from current psychiatric medications',
                'Need for medication adjustments or optimization',
                'Complex medication regimens requiring expert coordination'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE TREAT IT */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Our Approach to Medication Management
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'Cormorant, serif'}}>
                Initial Assessment
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Comprehensive psychiatric evaluation including detailed symptom history, previous treatments, medical conditions, family history, and lifestyle factors to inform medication decisions.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'Cormorant, serif'}}>
                Personalized Plan
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Evidence-based medication selection tailored to your specific symptoms, health profile, and preferences, with clear explanation of expected benefits, potential side effects, and timeline.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'Cormorant, serif'}}>
                Ongoing Support
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Regular monitoring appointments to assess effectiveness, manage side effects, adjust dosages as needed, and provide education to optimize your treatment outcomes and wellbeing.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-light mb-6" style={{fontFamily: 'Cormorant, serif'}}>
              Our Medication Management Process
            </h3>
            <div className="space-y-6 text-[var(--color-ink)] leading-relaxed">
              <p>
                Our medication management approach is grounded in the latest psychiatric research and clinical best practices. We prescribe medications from several classes depending on your diagnosis and symptoms, including antidepressants (SSRIs, SNRIs, TCAs), anti-anxiety medications (benzodiazepines, buspirone), mood stabilizers (lithium, anticonvulsants), antipsychotics (for psychosis, bipolar disorder, or treatment-resistant depression), and stimulants or non-stimulants for ADHD. Each medication class has specific mechanisms of action, benefits, and considerations that we discuss thoroughly with you.
              </p>
              <p>
                The medication selection process considers multiple factors: the nature and severity of your symptoms, your treatment history and previous medication responses, potential drug interactions with current medications, side effect profiles and your tolerance, onset of action and expected timeline for improvement, your lifestyle and daily schedule, cost and insurance coverage, and your personal preferences and concerns. We start medications at appropriate doses and adjust carefully based on your response, using the principle of "start low and go slow" when appropriate to minimize side effects while achieving therapeutic benefits.
              </p>
              <p>
                Regular follow-up appointments are essential to medication management success. Initially, we schedule more frequent visits (every 1-2 weeks) to monitor your response and make timely adjustments. As your symptoms stabilize and your medication regimen is optimized, appointments typically occur monthly or quarterly. During these visits, we assess symptom improvement using standardized rating scales, evaluate side effects and quality of life, review medication adherence and any barriers, discuss lifestyle factors affecting treatment, adjust medications as needed, order laboratory tests when indicated, and coordinate care with your therapist or other providers. We also provide education about your medications, answer questions, and empower you to be an active participant in your treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-2xl p-12">
            <h2 className="text-3xl font-light mb-8" style={{fontFamily: 'Cormorant, serif'}}>
              What to Expect: Your Medication Management Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">First Visit (60-90 minutes)</h3>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    Comprehensive psychiatric evaluation covering your symptoms, history, medical conditions, current medications, family history, and lifestyle. Discussion of treatment options, medication recommendations, expected benefits, potential side effects, and answering all your questions. If medication is prescribed, you'll receive detailed instructions on dosing, timing, what to expect, and when to follow up.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Weeks 2-4</h3>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    Follow-up appointment to assess early response, side effects, and medication tolerance. Many medications take 2-6 weeks to reach full effectiveness, so we monitor your progress and make dosage adjustments if needed. This is a critical period for addressing concerns, providing encouragement, and ensuring you're comfortable with your treatment plan. We may adjust the dose, add adjunctive medications, or try a different medication if the initial choice isn't working well.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Months 1-3</h3>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    Continued monitoring and optimization of your medication regimen. As medications reach therapeutic levels and your symptoms improve, we fine-tune dosages and address any residual symptoms or side effects. This period often involves collaboration with your therapist to integrate medication benefits with psychotherapy gains. We assess functioning across multiple domains—mood, sleep, energy, concentration, relationships, and work—to ensure comprehensive improvement.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Long-term Management</h3>
                  <p className="text-[var(--color-ink)] leading-relaxed">
                    Once your symptoms are stable and your medication regimen is optimized, appointments typically occur every 1-3 months for ongoing monitoring and prescription refills. We continue to assess effectiveness, side effects, life changes that may affect treatment, and opportunities to simplify your regimen or reduce medications when appropriate. Long-term medication management focuses on maintaining wellness, preventing relapse, and supporting your continued growth and recovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-[var(--color-primary)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Important to know:</strong> Everyone responds to medications differently. Some people experience significant improvement within 2-3 weeks, while others may need 6-8 weeks or may need to try several medications before finding the most effective option. This is a normal part of psychiatric treatment. We work collaboratively with you throughout this process, making informed adjustments based on your feedback and clinical progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-12" style={{fontFamily: 'Cormorant, serif'}}>
            Common Questions About Medication Management
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>How long will I need to take psychiatric medication?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>The duration of medication treatment varies significantly depending on your diagnosis, symptom severity, treatment response, and history of episodes. For a first episode of depression or anxiety, treatment typically lasts 6-12 months after symptoms resolve to reduce relapse risk. For recurrent depression, bipolar disorder, or chronic conditions, longer-term or indefinite medication may be recommended to maintain stability. We regularly reassess the need for medication and discuss the risks and benefits of continuing versus discontinuing treatment. Any decision to reduce or stop medication is made collaboratively and involves careful tapering under medical supervision to minimize withdrawal symptoms and relapse risk. Many people successfully reduce or discontinue medications after sustained improvement, while others benefit from long-term maintenance treatment.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>What are the side effects of psychiatric medications?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Side effects vary by medication class and individual response. Common side effects include nausea, headache, drowsiness or insomnia, dry mouth, changes in appetite or weight, and sexual side effects. Most side effects are mild, temporary, and diminish within the first few weeks as your body adjusts to the medication. We discuss potential side effects before starting any medication and provide strategies to manage them. Some side effects can be minimized by adjusting the dose, changing the timing of medication, or switching to a different medication with a more favorable side effect profile. Serious side effects are rare but possible, which is why regular monitoring is essential. We encourage you to report any concerning symptoms promptly so we can address them quickly and ensure your treatment remains safe and tolerable.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Will psychiatric medication change my personality?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Properly prescribed psychiatric medications should not change your core personality or "who you are." Instead, effective medication helps reduce symptoms that are interfering with your ability to function as yourself—symptoms like overwhelming anxiety, debilitating depression, intrusive thoughts, or emotional instability. Most people report that medication helps them feel "more like themselves" by relieving the burden of mental health symptoms. You should still experience the full range of human emotions, maintain your values and interests, and feel in control of your thoughts and behaviors. If you feel emotionally numb, disconnected, or unlike yourself, this is important feedback that your medication may need adjustment. Our goal is to optimize your wellbeing while preserving your essential self and supporting your authentic engagement with life.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Can I combine medication with therapy?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Yes, absolutely—and for many conditions, the combination of medication and psychotherapy produces the best outcomes. Research consistently shows that integrated treatment addressing both the biological and psychological aspects of mental health conditions is more effective than either approach alone. Medication can help stabilize symptoms quickly, reduce biological vulnerabilities, and create a foundation that allows therapy to be more effective. Therapy helps you develop coping skills, address underlying psychological issues, change unhelpful thought patterns, improve relationships, and build resilience. Together, medication and therapy work synergistically to promote lasting recovery and wellbeing. We strongly encourage working with a therapist alongside medication management and can coordinate care to ensure your treatments are complementary and mutually reinforcing.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>What if the first medication doesn't work?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Finding the right medication often requires some trial and adjustment, and this is completely normal in psychiatric treatment. If the first medication doesn't provide adequate symptom relief or causes intolerable side effects, we have many alternative options to try. We may adjust the dosage, add a second medication to augment the first, switch to a different medication within the same class, or try a medication from a different class with a different mechanism of action. Genetic testing (pharmacogenomics) is also available to help guide medication selection based on how your genes affect medication metabolism. While the process of finding the optimal medication can require patience, most people eventually achieve significant symptom improvement with persistent, collaborative medication management. We work closely with you throughout this process, making informed adjustments based on your response and maintaining open communication about your experience.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 animate-fade-up">
          <h3 className="text-3xl font-light mb-8 text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/depression-treatment" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Depression Treatment</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">Comprehensive care for major depression, persistent depressive disorder, and related mood conditions.</p>
            </Link>

            <Link href="/services/anxiety-therapy" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Anxiety Therapy</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">Evidence-based treatment for generalized anxiety, panic disorder, social anxiety, and phobias.</p>
            </Link>

            <Link href="/services/bipolar-disorder" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Bipolar Disorder</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">Specialized treatment for bipolar I, bipolar II, and cyclothymic disorder with mood stabilization.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-6" style={{fontFamily: 'Cormorant, serif'}}>
            Ready to Get Help with Medication Management?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Take the first step toward optimized mental health treatment with expert medication management services.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}