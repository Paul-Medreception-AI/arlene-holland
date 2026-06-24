import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adjustment Disorders Treatment in Holland | Arlene Holland',
  description: 'Expert adjustment disorders treatment in Holland. Board-certified care for stress-related mental health challenges. Telehealth available. Get compassionate, evidence-based help today.',
  keywords: 'adjustment disorders treatment Holland, adjustment disorder therapy, stress-related mental health, Holland MI mental health, adjustment disorder psychiatrist',
}

export default function AdjustmentDisordersPage() {
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
            <span>Adjustment Disorders</span>
          </nav>
          
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Adjustment Disorders Treatment in Holland
          </h1>
          
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Life transitions and unexpected stressors can overwhelm even the most resilient individuals. When stress interferes with your daily functioning, professional treatment provides the support and skills needed to regain balance and move forward with confidence.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Adjustment Disorders
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Adjustment disorders are stress-related mental health conditions that develop when an individual struggles to cope with a significant life change or stressful event. Unlike normal stress responses that gradually improve, adjustment disorders cause emotional and behavioral symptoms that are disproportionate to the stressor and significantly impair daily functioning. These conditions affect approximately 5-20% of individuals seeking outpatient mental health treatment, making them one of the most common diagnoses in clinical practice. Adjustment disorders can impact work performance, relationships, physical health, and overall quality of life, creating a cycle where decreased functioning generates additional stress and worsening symptoms.
            </p>
            
            <p>
              Common triggers for adjustment disorders include major life transitions such as job loss or career changes, relationship difficulties or divorce, moving to a new location, financial problems, chronic illness diagnosis, loss of a loved one, and family conflicts. While anyone can develop an adjustment disorder in response to significant stress, certain risk factors increase vulnerability including previous mental health challenges, limited social support systems, multiple concurrent stressors, childhood adversity or trauma, genetic predisposition to mood disorders, and inadequate coping skills. The condition typically develops within three months of the identified stressor and can manifest with predominantly depressive symptoms, anxiety symptoms, mixed emotional features, or disturbances in conduct and behavior.
            </p>
            
            <p>
              Professional treatment for adjustment disorders is essential because these conditions rarely resolve without intervention and can evolve into more serious mental health disorders if left untreated. Evidence-based psychotherapy helps individuals process the stressor, develop effective coping strategies, build resilience, and restore normal functioning. Early intervention prevents progression to major depressive disorder, generalized anxiety disorder, or substance use disorders that commonly develop when adjustment difficulties persist. With appropriate treatment, most individuals experience significant improvement within weeks to months, learning skills that protect against future stress-related difficulties. Seeking help demonstrates strength and self-awareness, not weakness, and provides the foundation for healthier responses to life's inevitable challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs & Symptoms of Adjustment Disorders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Emotional Symptoms */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Emotional Symptoms
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Persistent Sadness or Hopelessness</strong>
                    <p className="text-[var(--color-muted)] mt-1">Overwhelming feelings of depression, despair, or emotional emptiness that interfere with daily activities and enjoyment of previously pleasurable experiences.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Excessive Worry or Anxiety</strong>
                    <p className="text-[var(--color-muted)] mt-1">Constant tension, nervousness, or fear about the stressor and its consequences that feels uncontrollable and disproportionate to the actual situation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Feeling Overwhelmed</strong>
                    <p className="text-[var(--color-muted)] mt-1">Sense that you cannot cope with daily demands or that the challenges you face are insurmountable, leading to paralysis and avoidance.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Irritability or Anger</strong>
                    <p className="text-[var(--color-muted)] mt-1">Increased frustration, short temper, or anger outbursts that are uncharacteristic and strain relationships with family, friends, and colleagues.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Loss of Interest</strong>
                    <p className="text-[var(--color-muted)] mt-1">Diminished motivation and pleasure in hobbies, social activities, or work that once brought satisfaction, accompanied by emotional numbness.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Frequent Crying</strong>
                    <p className="text-[var(--color-muted)] mt-1">Episodes of tearfulness that occur without clear triggers or feel disproportionate to situations, reflecting underlying emotional distress.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Feelings of Worthlessness</strong>
                    <p className="text-[var(--color-muted)] mt-1">Negative self-evaluation, diminished self-esteem, or thoughts that you are inadequate or have failed in important areas of life.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical & Behavioral Symptoms */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Physical & Behavioral Symptoms
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sleep Disturbances</strong>
                    <p className="text-[var(--color-muted)] mt-1">Difficulty falling asleep, staying asleep, or sleeping too much, accompanied by fatigue and lack of refreshment from rest.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Changes in Appetite</strong>
                    <p className="text-[var(--color-muted)] mt-1">Significant increase or decrease in eating patterns leading to noticeable weight changes and altered relationship with food.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Physical Symptoms</strong>
                    <p className="text-[var(--color-muted)] mt-1">Headaches, muscle tension, stomach problems, or other bodily complaints without clear medical cause that reflect stress manifestation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Social Withdrawal</strong>
                    <p className="text-[var(--color-muted)] mt-1">Avoiding friends, family, and social situations that were previously enjoyed, leading to isolation and decreased support.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Work or School Problems</strong>
                    <p className="text-[var(--color-muted)] mt-1">Decreased performance, concentration difficulties, increased absences, or inability to meet responsibilities and deadlines.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Reckless Behavior</strong>
                    <p className="text-[var(--color-muted)] mt-1">Engaging in impulsive or dangerous activities, substance use, or other behaviors that are out of character and potentially harmful.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty Concentrating</strong>
                    <p className="text-[var(--color-muted)] mt-1">Trouble focusing on tasks, making decisions, or remembering information due to preoccupation with the stressor and its consequences.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Neglecting Responsibilities</strong>
                    <p className="text-[var(--color-muted)] mt-1">Failure to maintain personal hygiene, household tasks, or important obligations that were previously managed without difficulty.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and prevents the development of more serious mental health conditions.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Treat Adjustment Disorders
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your treatment begins with a thorough evaluation to understand the stressor, your symptoms, their impact on functioning, and any contributing factors. We explore your history, current challenges, coping strategies, and support systems to develop a complete picture. This assessment informs a personalized treatment plan tailored to your specific needs and circumstances.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we create an individualized treatment approach that addresses your unique situation. Your plan integrates evidence-based therapies, practical coping strategies, and if needed, medication management. We establish clear goals and milestones, ensuring treatment remains focused on restoring your functioning and building resilience for future challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-2xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Care & Support
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Treatment includes regular sessions to monitor progress, adjust interventions, and address emerging challenges. We provide continuous support as you implement new coping strategies and work through the stressor. Progress is systematically tracked, and treatment evolves based on your response, ensuring optimal outcomes and preventing relapse as you transition back to full functioning.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our treatment approach primarily utilizes <strong>Cognitive Behavioral Therapy (CBT)</strong>, which helps identify and modify unhelpful thought patterns that intensify emotional distress and impair coping. CBT teaches practical skills for managing stress, solving problems effectively, and challenging catastrophic thinking about the stressor. <strong>Problem-Solving Therapy</strong> is integrated to help you systematically address the challenges you face, breaking overwhelming situations into manageable steps.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              <strong>Supportive psychotherapy</strong> provides a safe space to process emotions and gain perspective on the stressor, while <strong>stress management techniques</strong> including relaxation training, mindfulness, and lifestyle modifications build resilience. When symptoms are severe or significantly impairing function, short-term medication such as antidepressants or anti-anxiety medications may be recommended to provide symptom relief while therapy progresses. Treatment is time-limited, typically lasting three to six months, with the goal of complete symptom resolution and return to pre-stressor functioning.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Choose Arlene Holland for Adjustment Disorders Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--color-border)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Board-Certified Expertise
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arlene Holland is a board-certified psychiatric mental health nurse practitioner with specialized training in stress-related disorders. Her extensive experience treating adjustment disorders ensures you receive expert, evidence-based care grounded in the latest clinical research and best practices.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Personalized Approach
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every individual's experience with stress and adjustment is unique. Treatment is tailored to your specific situation, symptoms, personal strengths, and goals. This individualized approach ensures maximum effectiveness and relevance to your particular challenges.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Convenient Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Access high-quality treatment from the comfort and privacy of your home through secure telehealth appointments. This flexible option eliminates travel barriers and scheduling challenges, making it easier to maintain consistent treatment even during stressful periods.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Proven Track Record
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                With years of experience successfully treating adjustment disorders, we have helped countless individuals navigate difficult life transitions and regain their equilibrium. Our compassionate, results-oriented approach focuses on rapid symptom relief and lasting skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                01
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Initial Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your first appointment involves a comprehensive assessment where we discuss the stressor you're facing, your symptoms, how they're affecting your life, and your history. We'll identify your strengths, support systems, and treatment goals. This evaluation typically lasts 60-90 minutes and concludes with an initial treatment plan and clear next steps.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                02
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Active Treatment (Weeks 2-8)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll attend regular therapy sessions, typically weekly, where we work on understanding and processing the stressor, developing effective coping strategies, and building problem-solving skills. You'll learn specific techniques to manage emotions, challenge unhelpful thinking, and take constructive action. Many patients notice improvement in symptoms within the first few weeks as new skills are implemented.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                03
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As treatment progresses, we systematically evaluate your improvement, adjusting interventions as needed. Sessions may become less frequent as you gain confidence and independence in managing challenges. We focus on consolidating skills, preventing relapse, and preparing you for treatment completion. Most patients experience significant symptom reduction and functional improvement during this phase.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                04
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Completion & Maintenance (Month 4+)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment for adjustment disorders is typically time-limited, with most patients completing active therapy within three to six months. As you approach completion, we review the progress you've made, reinforce coping skills, and develop a plan for maintaining gains. Follow-up appointments or booster sessions can be scheduled as needed, and our door remains open should future challenges arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions About Adjustment Disorders
          </h2>
          
          <div className="space-y-4">
            <details className="border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 text-lg font-medium text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                How long does treatment for adjustment disorders typically take?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Treatment for adjustment disorders is generally time-limited and shorter than therapy for chronic mental health conditions. Most patients experience significant improvement within 8-12 weeks of starting treatment, with complete symptom resolution typically occurring within three to six months. The exact duration depends on the severity of symptoms, the nature of the stressor, your coping resources, and how consistently you engage with treatment. Some individuals feel substantially better after just a few sessions, while others benefit from the full treatment course. Our goal is always to help you recover as quickly as possible while ensuring you develop lasting skills to prevent future difficulties.</p>
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 text-lg font-medium text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                Is medication required for treating adjustment disorders?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Medication is not always necessary for adjustment disorders, and many patients respond well to psychotherapy alone. However, when symptoms are severe—such as intense anxiety that interferes with daily functioning, significant depression, or sleep disturbances—short-term medication can provide important relief while therapy takes effect. If medication is recommended, we typically use low-dose antidepressants or anti-anxiety medications for a limited period, usually a few months. The decision to use medication is always made collaboratively based on your specific symptoms, preferences, and treatment goals. Many patients find that a combination of therapy and short-term medication provides the fastest and most complete recovery.</p>
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 text-lg font-medium text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                Will my insurance cover treatment for adjustment disorders?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most insurance plans, including commercial insurance, Medicare, and Medicaid, provide coverage for adjustment disorder treatment as it is a recognized mental health diagnosis. Coverage typically includes both psychotherapy and medication management when medically necessary. However, specific benefits vary by plan, including copays, deductibles, and session limits. We recommend contacting your insurance provider before your first appointment to understand your mental health benefits. Our office can provide the necessary information for insurance verification and will work with you to maximize your coverage. For patients without insurance or with limited mental health benefits, we discuss self-pay options and payment plans.</p>
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 text-lg font-medium text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                Can adjustment disorders develop into more serious mental health conditions?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Without treatment, adjustment disorders can evolve into more serious conditions. Research shows that untreated adjustment disorders increase the risk of developing major depressive disorder, generalized anxiety disorder, post-traumatic stress disorder, or substance use disorders. This is one of the primary reasons early intervention is so important. When adjustment disorders are properly treated, the prognosis is excellent—most people fully recover and return to their previous level of functioning. Treatment not only resolves current symptoms but also builds coping skills that protect against future stress-related difficulties. If you're experiencing symptoms of an adjustment disorder, seeking help promptly significantly reduces the risk of progression to chronic mental health problems.</p>
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 text-lg font-medium text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                What if therapy doesn't seem to be working?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>If you don't notice improvement after several weeks of treatment, it's important to discuss this openly with your provider. Several factors could be contributing: the treatment approach may need adjustment, additional stressors may have emerged, or the diagnosis may need reassessment. We regularly monitor your progress and will modify treatment strategies if you're not responding as expected. This might involve intensifying therapy, adding or adjusting medication, incorporating different therapeutic techniques, or addressing barriers to treatment engagement. Sometimes progress is gradual and may not be immediately apparent—looking back over several weeks often reveals meaningful changes. Your feedback is essential to ensuring treatment remains effective and aligned with your needs.</p>
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 text-lg font-medium text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors">
                Is telehealth effective for treating adjustment disorders?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, research demonstrates that telehealth is highly effective for treating adjustment disorders and offers outcomes comparable to in-person treatment. Video sessions allow for the same therapeutic interventions, personal connection, and treatment monitoring as office visits. Many patients find telehealth particularly beneficial when dealing with adjustment disorders because it eliminates travel stress, offers greater scheduling flexibility, and provides access to care during times when leaving home feels overwhelming. The convenience of telehealth can actually improve treatment adherence and outcomes by removing practical barriers to consistent care. We use secure, HIPAA-compliant platforms to ensure your privacy and confidentiality are fully protected during virtual sessions.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/conditions/depression" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-light mb-2 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Depression
              </h4>
              <p className="text-[var(--color-muted)]">
                Comprehensive treatment for persistent sadness, hopelessness, and loss of interest that interfere with daily life and well-being.
              </p>
            </Link>

            <Link href="/conditions/anxiety" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-light mb-2 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Anxiety Disorders
              </h4>
              <p className="text-[var(--color-muted)]">
                Expert care for excessive worry, panic attacks, and anxiety symptoms that limit your ability to function and enjoy life.
              </p>
            </Link>

            <Link href="/conditions/stress-management" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-light mb-2 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Stress Management
              </h4>
              <p className="text-[var(--color-muted)]">
                Evidence-based strategies and support for managing chronic stress before it leads to burnout or mental health problems.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Help for Adjustment Disorders Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face adjustment disorders alone. Our experienced team is ready to help you regain balance and move forward with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-medium hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}