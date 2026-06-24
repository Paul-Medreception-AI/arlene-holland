import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premenstrual Dysphoric Disorder (PMDD) Treatment in Holland | Arlene Holland',
  description: 'Expert PMDD treatment in Holland. Board-certified care for premenstrual dysphoric disorder with personalized treatment plans. Telehealth available. Get relief today.',
  keywords: 'PMDD treatment Holland, premenstrual dysphoric disorder Holland, PMDD therapy, hormonal mood disorder treatment, PMDD psychiatrist Holland',
}

export default function PMDDPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Premenstrual Dysphoric Disorder (PMDD)</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Premenstrual Dysphoric Disorder (PMDD) Treatment in Holland
          </h1>
          <p className="text-xl leading-relaxed mb-4 text-white/90">
            PMDD is a severe form of premenstrual syndrome that affects every aspect of your life, but you don't have to suffer through it. With proper diagnosis and treatment, you can regain control and experience lasting relief.
          </p>
          <p className="text-xl leading-relaxed text-white/90">
            Our evidence-based approach combines psychiatric expertise with compassionate care to help you manage symptoms and restore quality of life.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Premenstrual Dysphoric Disorder (PMDD)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Premenstrual Dysphoric Disorder (PMDD) is a severe, chronic medical condition characterized by intense emotional, behavioral, and physical symptoms that occur during the luteal phase of the menstrual cycle—typically the one to two weeks before menstruation begins. Unlike typical premenstrual syndrome (PMS), PMDD causes debilitating symptoms that significantly interfere with work, relationships, and daily functioning. Research indicates that PMDD affects approximately 5-8% of menstruating individuals, though many cases go undiagnosed or are dismissed as "normal" period symptoms. The condition results from an abnormal response to normal hormonal fluctuations, particularly involving serotonin sensitivity to changes in estrogen and progesterone levels. For those living with PMDD, the cyclical nature of symptoms can feel overwhelming and unpredictable, creating a monthly pattern of emotional crisis that impacts self-esteem, career stability, and personal relationships.
            </p>
            <p>
              The exact causes of PMDD involve complex interactions between reproductive hormones and brain chemistry, particularly the neurotransmitter serotonin, which regulates mood, sleep, and appetite. Research suggests that individuals with PMDD have an underlying sensitivity to normal hormonal fluctuations rather than abnormal hormone levels themselves. This sensitivity triggers a cascade of neurochemical changes that produce the characteristic symptoms of PMDD. Risk factors include a personal or family history of mood disorders such as depression or anxiety, a history of trauma or postpartum depression, high stress levels, and possibly genetic factors that affect hormone metabolism and serotonin regulation. Environmental stressors, lifestyle factors such as poor sleep or nutrition, and certain medical conditions can exacerbate symptoms. Understanding these biological underpinnings helps validate the experience of those with PMDD and reinforces that this is a legitimate medical condition, not a character flaw or something you should be able to control through willpower alone.
            </p>
            <p>
              Professional treatment for PMDD is essential because the condition rarely improves on its own and can significantly worsen quality of life over time. Without proper intervention, PMDD can lead to chronic depression, severe anxiety, relationship breakdowns, job loss, and in severe cases, suicidal ideation. Many individuals with PMDD describe feeling like they become a different person during symptomatic weeks, experiencing rage, despair, or hopelessness that feels completely out of their control. The good news is that PMDD is highly treatable with the right combination of interventions. Evidence-based treatments including specific medications, targeted psychotherapy, lifestyle modifications, and nutritional strategies can dramatically reduce symptom severity and help you regain predictability and stability in your life. Early diagnosis and treatment not only provide symptom relief but also prevent the secondary consequences of PMDD, such as damaged relationships, decreased work performance, and the development of comorbid mental health conditions. With proper care, most individuals with PMDD experience substantial improvement and are able to maintain full, productive lives.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Signs & Symptoms of Premenstrual Dysphoric Disorder (PMDD)
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Emotional Symptoms */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Emotional & Cognitive Symptoms
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Severe mood swings</strong>
                    <p className="text-[var(--color-muted)]">Sudden shifts between intense sadness, irritability, or anxiety that feel completely out of proportion to circumstances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Overwhelming irritability or anger</strong>
                    <p className="text-[var(--color-muted)]">Intense rage, increased interpersonal conflicts, or feeling like you might "explode" over minor frustrations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Profound depression or hopelessness</strong>
                    <p className="text-[var(--color-muted)]">Feelings of deep sadness, worthlessness, or even thoughts of self-harm that occur cyclically before menstruation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Severe anxiety or tension</strong>
                    <p className="text-[var(--color-muted)]">Feeling on edge, overwhelmed, or experiencing panic symptoms that intensify before your period.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Loss of interest in usual activities</strong>
                    <p className="text-[var(--color-muted)]">Withdrawal from hobbies, social activities, or relationships during symptomatic weeks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty concentrating</strong>
                    <p className="text-[var(--color-muted)]">Brain fog, trouble focusing on tasks, memory problems, or feeling mentally overwhelmed during the luteal phase.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Feeling out of control</strong>
                    <p className="text-[var(--color-muted)]">A sense that your emotions or behaviors are beyond your control, creating fear or distress about the next cycle.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical & Behavioral Symptoms */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Physical & Behavioral Symptoms
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Severe fatigue or lethargy</strong>
                    <p className="text-[var(--color-muted)]">Extreme tiredness, low energy, or feeling physically exhausted even with adequate rest.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sleep disturbances</strong>
                    <p className="text-[var(--color-muted)]">Insomnia, excessive sleeping, or disrupted sleep patterns that worsen during the premenstrual phase.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Changes in appetite</strong>
                    <p className="text-[var(--color-muted)]">Intense food cravings, overeating, or loss of appetite that occurs cyclically before menstruation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Physical pain and discomfort</strong>
                    <p className="text-[var(--color-muted)]">Breast tenderness, bloating, joint or muscle pain, or headaches that accompany emotional symptoms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Relationship conflicts</strong>
                    <p className="text-[var(--color-muted)]">Increased arguments, withdrawal from loved ones, or relationship strain that follows a monthly pattern.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Work or school impairment</strong>
                    <p className="text-[var(--color-muted)]">Difficulty meeting responsibilities, calling in sick, or decreased productivity during symptomatic weeks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Social withdrawal</strong>
                    <p className="text-[var(--color-muted)]">Avoiding social situations, canceling plans, or isolating yourself during the premenstrual period.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. PMDD symptoms typically resolve within a few days after menstruation begins, creating a predictable pattern that can be tracked and treated effectively.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How We Treat Premenstrual Dysphoric Disorder (PMDD)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough psychiatric evaluation and symptom tracking to establish a PMDD diagnosis using DSM-5 criteria. You'll be asked to track symptoms across at least two menstrual cycles to confirm the cyclical pattern and rule out other conditions. We also review your medical history, current medications, and any previous treatments to create a complete picture of your health.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all delay-100">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop an individualized treatment plan that may include medication, psychotherapy, lifestyle modifications, and nutritional strategies. Your plan is tailored to your symptom severity, personal preferences, reproductive goals, and response to previous treatments. We take time to explain all options and collaborate with you to choose the approach that feels right for your life and values.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up transition-all delay-200">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Ongoing Monitoring & Adjustment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                PMDD treatment requires regular follow-up to monitor symptom improvement and adjust interventions as needed. We typically schedule more frequent appointments initially, then transition to monthly or as-needed visits once symptoms stabilize. Continued symptom tracking helps us objectively measure progress and make data-driven decisions about your care. We remain responsive to your needs and committed to finding the most effective treatment combination.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-6">
              Our evidence-based approach to PMDD treatment draws from the latest research and clinical guidelines. For many individuals, selective serotonin reuptake inhibitors (SSRIs) are the first-line treatment and can be taken daily or only during the luteal phase, depending on symptom patterns and individual response. SSRIs like sertraline, fluoxetine, or escitalopram have strong evidence for reducing both emotional and physical PMDD symptoms by addressing the underlying serotonin dysregulation.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Additional treatment modalities may include hormonal contraceptives (particularly continuous-use or extended-cycle formulations) to suppress ovulation and hormonal fluctuations, cognitive behavioral therapy (CBT) to develop coping strategies and challenge negative thought patterns, nutritional interventions such as calcium, vitamin B6, and magnesium supplementation, exercise programs to improve mood regulation, stress management techniques including mindfulness and relaxation training, and in severe cases, consultation with gynecology for consideration of more aggressive hormonal suppression. We take a whole-person approach that addresses biological, psychological, and lifestyle factors contributing to your symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Why Choose Arlene Holland for Premenstrual Dysphoric Disorder (PMDD) Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Board-Certified Expertise
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                As a board-certified psychiatric mental health nurse practitioner, Arlene Holland brings specialized training in women's mental health and hormonal mood disorders. PMDD requires specific expertise in the intersection of reproductive hormones and mental health—expertise that comes from dedicated study and clinical experience treating this complex condition.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Individualized Care Approach
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We understand that PMDD affects each person differently and that what works for one individual may not work for another. Your treatment plan is customized to your unique symptom profile, medical history, lifestyle, and personal goals. We listen to your concerns, respect your treatment preferences, and work collaboratively to find solutions that fit your life.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Convenient Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Access expert PMDD treatment from the comfort of your home through secure telehealth appointments. This is especially valuable during symptomatic weeks when leaving the house feels overwhelming. Telehealth eliminates travel time, provides scheduling flexibility, and ensures you can maintain consistent care even when symptoms are severe.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Specialized PMDD Experience
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We have extensive experience diagnosing and treating PMDD, including complex cases where symptoms overlap with other mood disorders or where previous treatments have been unsuccessful. Our familiarity with the latest research, treatment protocols, and emerging therapies means you benefit from cutting-edge, evidence-based care throughout your treatment journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>
                1
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  First Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment typically lasts 60-90 minutes and includes a comprehensive psychiatric evaluation, review of your menstrual cycle history and symptom patterns, discussion of previous treatments, and establishment of a working diagnosis. We'll provide you with symptom tracking tools to use over the next two cycles if diagnosis needs confirmation. You'll leave with a clear understanding of PMDD, initial treatment recommendations, and a plan for follow-up care. Many patients feel relief simply from having their experiences validated and understood.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>
                2
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Treatment Begins (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If medication is part of your treatment plan, we'll typically start with an SSRI, beginning at a low dose and adjusting based on your response and any side effects. For some individuals, we may recommend starting medication immediately; for others, we may wait to track symptoms first. You'll also receive guidance on lifestyle modifications, nutritional support, and self-care strategies that can complement medical treatment. Follow-up appointments during this phase ensure you're tolerating treatment well and beginning to see improvement.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>
                3
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After tracking symptoms across 2-3 menstrual cycles with treatment, we'll comprehensively review your progress. Most individuals begin experiencing significant symptom reduction within 2-3 cycles, though some notice improvement sooner. We'll analyze your symptom tracking data, assess treatment effectiveness, and make any necessary adjustments to medication dosages or treatment approaches. This is also when we address any concerns about side effects, treatment adherence, or additional interventions that might be helpful.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>
                4
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Long-term Management
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your symptoms are well-controlled, we transition to maintenance care with less frequent appointments—typically every 1-3 months or as needed. PMDD is a chronic condition that often requires ongoing treatment, though some individuals can eventually taper off medication under careful supervision. Long-term management focuses on maintaining symptom control, preventing relapse, adjusting treatment for life changes (pregnancy planning, perimenopause, etc.), and supporting your overall mental health and wellbeing. We remain your partner in care for as long as you need support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Frequently Asked Questions About Premenstrual Dysphoric Disorder (PMDD)
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="text-xl font-light cursor-pointer text-[var(--color-ink)] list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                How is PMDD different from regular PMS?
                <span className="text-2xl text-[var(--color-primary)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While PMS is common and causes mild to moderate discomfort, PMDD is a severe medical condition that significantly impairs daily functioning. To meet diagnostic criteria for PMDD, you must experience at least five specific symptoms (including at least one core emotional symptom) that are severe enough to interfere with work, school, relationships, or social activities. PMDD symptoms are markedly more intense than PMS and typically cause serious distress. Research shows that PMDD involves different neurobiological mechanisms than typical PMS, particularly in serotonin regulation and hormonal sensitivity. Many individuals with PMDD describe feeling like a different person during symptomatic weeks, with emotional reactions that feel completely out of proportion or out of their control—this intensity distinguishes PMDD from more common premenstrual symptoms.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="text-xl font-light cursor-pointer text-[var(--color-ink)] list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                How long does PMDD treatment take to work?
                <span className="text-2xl text-[var(--color-primary)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The timeline for improvement varies depending on the treatment approach. SSRIs, which are first-line treatment for PMDD, often work more quickly for PMDD than for depression—some individuals notice improvement within days to weeks, though it typically takes 2-3 menstrual cycles to see the full benefit. Interestingly, SSRIs can be effective for PMDD even at lower doses than those used for depression. If you're using intermittent dosing (taking medication only during the luteal phase), you may notice benefits within the first cycle. Hormonal treatments like birth control pills typically require 2-3 months to assess effectiveness. Lifestyle modifications and therapy skills often provide gradual, cumulative benefits over several months. If you haven't seen significant improvement after 2-3 cycles of treatment, we'll reassess and adjust your treatment plan to find a more effective approach.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="text-xl font-light cursor-pointer text-[var(--color-ink)] list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Is medication required for PMDD, or are there other options?
                <span className="text-2xl text-[var(--color-primary)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While medication (particularly SSRIs) has the strongest evidence base for PMDD treatment and is considered first-line therapy, treatment should always be individualized based on symptom severity, personal preferences, and previous treatment responses. For mild to moderate PMDD, some individuals achieve sufficient relief through lifestyle modifications including regular exercise, stress management, dietary changes (reducing caffeine, alcohol, salt, and sugar particularly during the luteal phase), nutritional supplements (calcium, vitamin B6, magnesium), and cognitive behavioral therapy. However, for moderate to severe PMDD—especially when symptoms significantly impair functioning or include suicidal thoughts—medication is typically necessary and most effective. Many individuals find the best results come from combining medication with lifestyle changes and therapy. We'll work with you to develop a treatment plan that aligns with your values and goals while providing the level of symptom relief you need to live fully.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="text-xl font-light cursor-pointer text-[var(--color-ink)] list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Does insurance cover PMDD treatment?
                <span className="text-2xl text-[var(--color-primary)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                PMDD is a recognized psychiatric diagnosis in the DSM-5, and treatment is typically covered by health insurance plans just like other mental health conditions. Coverage includes psychiatric evaluation, medication management appointments, and prescribed medications (though specific drug coverage varies by plan and formulary). Many plans also cover psychotherapy for PMDD. We recommend verifying your specific mental health benefits, including copays, deductibles, and any requirements for referrals or pre-authorization. Our office can provide documentation of your diagnosis and treatment plan if needed for insurance purposes. Even if you don't have insurance or your plan has limited mental health benefits, we believe PMDD treatment is an investment in your health and quality of life, and we'll work with you to make care as accessible as possible.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="text-xl font-light cursor-pointer text-[var(--color-ink)] list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                What if I've tried treatment before and it didn't work?
                <span className="text-2xl text-[var(--color-primary)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Treatment resistance is not uncommon with PMDD, but it doesn't mean you're out of options. There are multiple SSRIs to try, different dosing strategies (continuous vs. luteal-phase only), alternative medications including SNRIs or hormonal treatments, and combination approaches that may be more effective. Sometimes what appears to be treatment failure is actually an incorrect diagnosis—if symptoms don't follow a clear cyclical pattern or don't resolve after menstruation begins, we may need to reconsider whether PMDD is the primary diagnosis or if there's a comorbid condition that also needs treatment. We'll carefully review your previous treatment history to understand what's been tried, at what doses, for how long, and why it was discontinued. This information helps us identify new strategies or approaches you haven't yet explored. Many individuals who initially struggled to find relief eventually achieve significant improvement with the right treatment combination and adequate trial duration.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="text-xl font-light cursor-pointer text-[var(--color-ink)] list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Can telehealth appointments effectively treat PMDD?
                <span className="text-2xl text-[var(--color-primary)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, telehealth is highly effective for PMDD treatment and offers several advantages. PMDD is primarily diagnosed through clinical interview and symptom tracking rather than physical examination or lab tests, making it well-suited to virtual care. Telehealth appointments allow you to access care from home during symptomatic weeks when leaving the house may feel overwhelming, eliminate travel time and parking hassles, provide more scheduling flexibility for follow-up appointments, and enable you to be in a comfortable, private environment during sessions. Research shows that telehealth delivers outcomes equivalent to in-person care for psychiatric medication management and therapy. You'll receive the same comprehensive evaluation, personalized treatment planning, and ongoing support through secure video appointments. The convenience of telehealth often improves treatment adherence and makes it easier to maintain consistent care—both critical factors in successfully managing PMDD.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/depression" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Depression
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                PMDD often coexists with depression, and symptoms can overlap. We help differentiate and treat both conditions effectively.
              </p>
            </a>
            <a href="/conditions/anxiety" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Anxiety Disorders
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Anxiety is a common feature of PMDD and may also exist independently. We provide comprehensive assessment and treatment.
              </p>
            </a>
            <a href="/conditions/bipolar-disorder" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Bipolar Disorder
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Mood cycling in PMDD can sometimes be confused with bipolar disorder. Accurate diagnosis is essential for effective treatment.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Get Help for Premenstrual Dysphoric Disorder (PMDD) Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            You don't have to face Premenstrual Dysphoric Disorder (PMDD) alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-medium hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}