import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post-Traumatic Stress Disorder (PTSD) Treatment in Holland | Arlene Holland',
  description: 'Expert Post-Traumatic Stress Disorder (PTSD) treatment in Holland. Board-certified care with evidence-based therapy and medication management. Telehealth available.',
  keywords: 'PTSD treatment Holland, post-traumatic stress disorder Holland, trauma therapy Holland, PTSD psychiatrist Holland, PTSD medication Holland',
  openGraph: {
    title: 'Post-Traumatic Stress Disorder (PTSD) Treatment in Holland | Arlene Holland',
    description: 'Expert Post-Traumatic Stress Disorder (PTSD) treatment in Holland. Board-certified care with evidence-based therapy and medication management.',
    url: 'https://arleneholland.net/conditions/post-traumatic-stress-disorder-ptsd',
    type: 'website',
  },
}

export default function PTSDPage() {
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
            <span>Post-Traumatic Stress Disorder (PTSD)</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 leading-tight" style={{fontFamily: 'Cormorant'}}>
            Post-Traumatic Stress Disorder (PTSD) Treatment in Holland
          </h1>
          <p className="text-xl opacity-95 max-w-3xl leading-relaxed">
            PTSD is a treatable mental health condition that develops after experiencing or witnessing traumatic events. With evidence-based therapy and comprehensive care, you can reclaim your life and find relief from intrusive memories, hypervigilance, and emotional distress.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
            Understanding Post-Traumatic Stress Disorder (PTSD)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Post-Traumatic Stress Disorder (PTSD) is a psychiatric condition that can develop after exposure to traumatic events such as combat, sexual assault, serious accidents, natural disasters, or witnessing violence. While it's natural to experience distress after trauma, PTSD occurs when these reactions persist and intensify over time, significantly interfering with daily functioning. Affecting approximately 6-8% of the U.S. population at some point in their lives, PTSD impacts relationships, work performance, physical health, and overall quality of life. Symptoms typically include intrusive memories or flashbacks, avoidance of trauma reminders, negative changes in thoughts and mood, and heightened arousal or reactivity. The condition can emerge immediately after trauma or months to years later, and without treatment, symptoms often worsen and become more debilitating.
            </p>
            <p>
              The development of PTSD involves complex interactions between biological, psychological, and environmental factors. Not everyone who experiences trauma develops PTSD—risk factors include the severity and duration of the traumatic event, prior trauma exposure, pre-existing mental health conditions, lack of social support, and genetic predisposition. Combat veterans, first responders, assault survivors, and individuals with repeated trauma exposure face elevated risk. Neurobiological research shows that PTSD involves alterations in brain regions responsible for fear processing, memory consolidation, and emotional regulation, including the amygdala, hippocampus, and prefrontal cortex. The condition also frequently co-occurs with depression, anxiety disorders, substance use disorders, and chronic pain, creating a complex clinical picture that requires comprehensive assessment and integrated treatment.
            </p>
            <p>
              Professional treatment for PTSD is essential because the condition rarely resolves on its own and can lead to serious complications including relationship breakdown, job loss, substance dependence, and increased suicide risk. The good news is that PTSD is highly treatable with evidence-based interventions. Specialized trauma-focused psychotherapies such as Prolonged Exposure (PE), Cognitive Processing Therapy (CPT), and Eye Movement Desensitization and Reprocessing (EMDR) have strong research support and help individuals process traumatic memories, challenge unhelpful beliefs, and reduce symptoms. Medication, particularly selective serotonin reuptake inhibitors (SSRIs), can effectively manage symptoms and is often combined with therapy for optimal outcomes. Early intervention and consistent treatment lead to significant symptom reduction and improved functioning, allowing individuals to move forward with their lives while honoring their experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Signs & Symptoms of Post-Traumatic Stress Disorder (PTSD)
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Emotional & Cognitive Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Intrusive Memories or Flashbacks</p>
                  <p className="text-[var(--color-muted)]">Unwanted, distressing memories of the traumatic event that feel as if they're happening again in the present moment.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Recurrent Nightmares</p>
                  <p className="text-[var(--color-muted)]">Frequent distressing dreams related to the trauma that disrupt sleep and cause significant anxiety.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Avoidance of Trauma Reminders</p>
                  <p className="text-[var(--color-muted)]">Deliberately avoiding people, places, activities, or conversations that trigger memories of the traumatic event.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Negative Thoughts About Self or World</p>
                  <p className="text-[var(--color-muted)]">Persistent distorted beliefs such as "I'm broken," "No one can be trusted," or "The world is completely dangerous."</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Emotional Numbness or Detachment</p>
                  <p className="text-[var(--color-muted)]">Feeling disconnected from emotions, inability to experience positive feelings, or feeling detached from loved ones.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Memory Gaps About the Trauma</p>
                  <p className="text-[var(--color-muted)]">Inability to remember important aspects of the traumatic event due to dissociative amnesia.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Loss of Interest in Activities</p>
                  <p className="text-[var(--color-muted)]">Marked decrease in participation in previously enjoyed activities, hobbies, or social interactions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Persistent Guilt or Shame</p>
                  <p className="text-[var(--color-muted)]">Ongoing self-blame about the trauma or its consequences, including survivor guilt.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Physical & Behavioral Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Hypervigilance</p>
                  <p className="text-[var(--color-muted)]">Constantly scanning the environment for threats, remaining on guard, or feeling unable to relax even in safe situations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Exaggerated Startle Response</p>
                  <p className="text-[var(--color-muted)]">Jumping or reacting intensely to unexpected noises, touch, or movements that wouldn't typically cause such reactions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Sleep Disturbances</p>
                  <p className="text-[var(--color-muted)]">Difficulty falling or staying asleep, often due to nightmares, hyperarousal, or intrusive thoughts at night.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Irritability or Angry Outbursts</p>
                  <p className="text-[var(--color-muted)]">Frequent episodes of anger, aggression, or irritability with little provocation that strain relationships.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Difficulty Concentrating</p>
                  <p className="text-[var(--color-muted)]">Problems focusing on tasks, making decisions, or completing work due to intrusive thoughts or hyperarousal.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Reckless or Self-Destructive Behavior</p>
                  <p className="text-[var(--color-muted)]">Engaging in dangerous activities, substance abuse, or other harmful behaviors as coping mechanisms.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Physical Stress Reactions</p>
                  <p className="text-[var(--color-muted)]">Sweating, rapid heartbeat, shortness of breath, or nausea when reminded of the traumatic event.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Social Withdrawal or Isolation</p>
                  <p className="text-[var(--color-muted)]">Pulling away from family, friends, and social situations due to emotional numbing or fear of judgment.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes, and you don't have to continue suffering in silence.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            How We Treat Post-Traumatic Stress Disorder (PTSD)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your treatment begins with a thorough evaluation of your trauma history, symptom patterns, co-occurring conditions, and current functioning. We assess the severity of PTSD symptoms using validated clinical tools and explore how the condition affects your relationships, work, and daily life. This comprehensive understanding allows us to develop a personalized treatment plan tailored to your specific needs and trauma experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Evidence-Based Treatment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We implement trauma-focused therapies proven effective for PTSD, including Cognitive Processing Therapy (CPT) and elements of Prolonged Exposure therapy when appropriate. Treatment focuses on processing traumatic memories, challenging unhelpful beliefs, and reducing avoidance behaviors. For many patients, we combine therapy with medication—typically SSRIs like sertraline or paroxetine—to manage symptoms and optimize treatment response.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                PTSD treatment requires consistent monitoring and adjustment as you progress through therapy. We schedule regular follow-up appointments to assess symptom improvement, medication response, and functioning. As you develop coping skills and process traumatic memories, we adjust the treatment plan accordingly. Long-term management focuses on relapse prevention, maintaining gains, and supporting your continued recovery and growth beyond symptom reduction.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our treatment approach integrates multiple evidence-based modalities tailored to your specific trauma and symptoms. Cognitive Processing Therapy (CPT) helps you examine and challenge unhelpful beliefs about the trauma, yourself, and the world. Elements of Prolonged Exposure therapy may be incorporated to gradually reduce avoidance and help you safely confront trauma memories and reminders. For patients who prefer or require medication, SSRIs such as sertraline (Zoloft) and paroxetine (Paxil) are FDA-approved for PTSD and effectively reduce intrusive thoughts, hyperarousal, and emotional numbing. Some patients benefit from prazosin for trauma-related nightmares. We also address co-occurring conditions like depression, anxiety, and substance use disorders, which commonly accompany PTSD and require integrated treatment for optimal outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Why Choose Arlene Holland for Post-Traumatic Stress Disorder (PTSD) Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">Specialized psychiatric training in trauma and evidence-based PTSD treatment approaches.</p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Personalized Treatment</h3>
              <p className="text-[var(--color-muted)]">Individualized care plans that address your specific trauma history and current needs.</p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">Convenient virtual appointments that provide access to care from the comfort of home.</p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Trauma-Informed Care</h3>
              <p className="text-[var(--color-muted)]">Compassionate, evidence-based treatment with extensive experience in trauma recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl text-[var(--color-primary)]" style={{fontFamily: 'Cormorant'}}>01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Initial Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your first appointment involves a comprehensive assessment of your trauma history, current symptoms, and overall functioning. We'll discuss your goals for treatment, any previous therapy experiences, and determine the most appropriate treatment approach. This evaluation typically takes 60-90 minutes and establishes the foundation for your personalized treatment plan. We create a safe, non-judgmental space where you can share your experiences at your own pace.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl text-[var(--color-primary)]" style={{fontFamily: 'Cormorant'}}>02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Early treatment focuses on stabilization, psychoeducation about PTSD, and establishing coping strategies for managing symptoms. If medication is part of your treatment plan, we'll start at an appropriate dose and monitor for side effects and early response. You'll begin learning skills for emotional regulation and grounding techniques. Trauma-focused therapy typically starts with building a foundation of safety and understanding before moving into more intensive trauma processing work.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl text-[var(--color-primary)]" style={{fontFamily: 'Cormorant'}}>03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Active Treatment Phase (Months 2-6)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During this phase, you'll engage in the core work of trauma processing through evidence-based therapy approaches. This involves gradually confronting trauma memories, challenging unhelpful beliefs, and reducing avoidance behaviors. Many patients notice significant symptom improvement during this period, with reductions in flashbacks, nightmares, and hypervigilance. Medication adjustments may be made to optimize symptom management. Progress is steady but varies individually—some weeks feel easier than others, which is normal.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl text-[var(--color-primary)]" style={{fontFamily: 'Cormorant'}}>04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Long-Term Management (Month 6+)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As symptoms improve and you develop effective coping strategies, treatment focuses on relapse prevention, maintaining gains, and addressing any remaining symptoms or functional impairments. Many patients continue with periodic maintenance appointments to monitor progress and prevent setbacks. The goal is sustainable recovery where you can engage fully in life, relationships, and activities without being controlled by trauma responses. Some patients choose to continue medication long-term, while others successfully taper off under medical supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Frequently Asked Questions About Post-Traumatic Stress Disorder (PTSD)
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                How long does PTSD treatment take?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Treatment duration varies depending on trauma complexity, symptom severity, and individual response. Many evidence-based therapies like Cognitive Processing Therapy (CPT) are structured as 12-16 session protocols delivered over 3-4 months, with significant symptom improvement often seen within this timeframe. However, complex PTSD from repeated trauma, or cases with multiple co-occurring conditions, may require longer treatment—typically 6-12 months or more. Medication effects usually begin within 4-8 weeks, with full benefit at 8-12 weeks. Most patients experience meaningful improvement within the first few months of consistent treatment, though complete recovery is a gradual process.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Is medication always required for PTSD?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No, medication is not always required for PTSD treatment. Trauma-focused psychotherapy alone can be highly effective, particularly for patients with less severe symptoms or those who prefer non-medication approaches. However, many patients benefit from combining therapy with medication, especially when symptoms significantly impair functioning, when co-occurring depression or anxiety is present, or when therapy progress is limited by symptom severity. SSRIs like sertraline and paroxetine are FDA-approved for PTSD and can reduce intrusive thoughts, nightmares, hyperarousal, and emotional numbing. The decision about medication is collaborative and based on your specific symptoms, preferences, and treatment goals.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Does insurance cover PTSD treatment?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most insurance plans cover PTSD treatment as it is a recognized psychiatric diagnosis included under mental health benefits. Coverage typically includes diagnostic evaluation, medication management, and psychotherapy. The Mental Health Parity Act requires that mental health conditions be covered at the same level as medical conditions. Your specific coverage depends on your plan's details, including copays, deductibles, and whether we are in-network with your insurance. We recommend contacting your insurance provider to verify mental health benefits and our network status. We can provide documentation for out-of-network reimbursement if needed. Veterans may also have coverage through VA benefits.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                What if previous therapy didn't work for my PTSD?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Previous therapy experiences that didn't help don't mean PTSD can't be effectively treated. Several factors may have limited earlier treatment success: the therapy approach may not have been trauma-focused or evidence-based for PTSD, the therapeutic relationship may not have been strong, co-occurring conditions may not have been addressed, or treatment may have been discontinued before significant progress occurred. Specialized trauma-focused therapies like CPT, PE, and EMDR have strong research support specifically for PTSD and differ significantly from general counseling. Additionally, combining therapy with medication often improves outcomes when therapy alone has been insufficient. We'll carefully review your treatment history to understand what worked, what didn't, and develop a new approach tailored to your needs.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Can telehealth be effective for PTSD treatment?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, research demonstrates that telehealth can be equally effective as in-person treatment for PTSD. Evidence-based therapies like CPT have been successfully adapted for virtual delivery, and multiple studies show comparable outcomes to face-to-face treatment. Telehealth offers several advantages for trauma survivors, including reduced barriers to accessing specialized care, elimination of travel stress, and the comfort of participating from a safe, familiar environment. Medication management is also effectively conducted via telehealth. Some patients find it easier to discuss difficult trauma experiences from home. However, telehealth requires reliable internet access, a private space for appointments, and comfort with technology. We ensure the same quality of care whether treatment is delivered virtually or in person.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Will I have to relive my trauma in therapy?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Effective PTSD treatment does involve processing traumatic memories, but this is done gradually, safely, and with your control at every step. You won't be forced to discuss anything before you're ready, and we work collaboratively to ensure you feel safe throughout treatment. Trauma-focused therapies help you process memories in a way that reduces their emotional intensity and power over you—the goal is not to forget what happened, but to remember it without being overwhelmed. Different approaches vary in how directly they address trauma: Cognitive Processing Therapy focuses more on beliefs about the trauma than detailed recounting, while Prolonged Exposure involves more direct engagement with memories. We'll discuss which approach fits your needs and comfort level, and maintain appropriate pacing throughout treatment.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/depression" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Depression</h4>
              <p className="text-[var(--color-muted)] mb-4">PTSD frequently co-occurs with major depressive disorder, requiring integrated treatment approaches.</p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>

            <a href="/conditions/anxiety" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Anxiety Disorders</h4>
              <p className="text-[var(--color-muted)] mb-4">Generalized anxiety, panic disorder, and specific phobias often accompany PTSD symptoms.</p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>

            <a href="/conditions/substance-use-disorders" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Substance Use Disorders</h4>
              <p className="text-[var(--color-muted)] mb-4">Many individuals with PTSD develop substance dependence as a coping mechanism for traumatic stress.</p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Get Help for Post-Traumatic Stress Disorder (PTSD) Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face Post-Traumatic Stress Disorder (PTSD) alone. Our team is ready to help you begin your recovery journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors inline-block"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-block"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}