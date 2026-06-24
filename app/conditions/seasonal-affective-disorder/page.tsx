import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Seasonal Affective Disorder Treatment in Holland | Arlene Holland',
  description: 'Expert treatment for Seasonal Affective Disorder (SAD) in Holland. Board-certified psychiatric care, evidence-based therapy, and personalized treatment plans. Telehealth available.',
  keywords: 'seasonal affective disorder treatment Holland, SAD therapy Holland, winter depression Holland, seasonal depression psychiatrist, light therapy Holland',
  openGraph: {
    title: 'Seasonal Affective Disorder Treatment in Holland | Arlene Holland',
    description: 'Compassionate, evidence-based treatment for Seasonal Affective Disorder in Holland. Get help managing winter depression with personalized psychiatric care.',
    url: 'https://arleneholland.net/conditions/seasonal-affective-disorder',
    type: 'website',
  }
}

export default function SeasonalAffectiveDisorderPage() {
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
            <span>Seasonal Affective Disorder</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Seasonal Affective Disorder Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Seasonal Affective Disorder (SAD) is more than just "winter blues"—it's a clinically recognized form of depression that can significantly impact your quality of life. Our compassionate, evidence-based treatment approach helps you reclaim your energy, mood, and well-being throughout every season.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Seasonal Affective Disorder
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Seasonal Affective Disorder is a type of depression that follows a seasonal pattern, most commonly occurring during the fall and winter months when daylight hours are reduced. Affecting approximately 5% of adults in the United States, SAD goes far beyond occasional mood changes or a preference for sunny weather. It represents a genuine medical condition that can cause debilitating symptoms including profound fatigue, social withdrawal, difficulty concentrating, changes in sleep and appetite, and persistent feelings of hopelessness. For those living in Holland and throughout Michigan, where winter months can be particularly long and gray, SAD presents a significant mental health challenge that impacts work performance, relationships, and overall quality of life. The condition is more than four times more common in women than men, and typically begins in young adulthood, though it can develop at any age.
            </p>
            <p>
              The primary cause of Seasonal Affective Disorder is reduced exposure to natural sunlight, which disrupts your body's internal clock (circadian rhythm) and leads to drops in serotonin and melatonin levels—neurotransmitters crucial for regulating mood, sleep, and energy. Additional risk factors include having a family history of depression or bipolar disorder, living at higher latitudes far from the equator (which describes Michigan's position), having existing depression or bipolar disorder, and being female or younger in age. Your brain chemistry literally changes in response to seasonal light variations, making this a biological condition rather than a character flaw or something you can simply "snap out of." Some individuals experience a less common summer-pattern SAD, but the winter pattern accounts for the vast majority of cases and is what we most frequently treat in our Holland practice.
            </p>
            <p>
              Professional treatment for Seasonal Affective Disorder is essential because, left untreated, SAD can worsen over time and lead to serious complications including social withdrawal, substance abuse problems, other mental health disorders such as anxiety, and in severe cases, suicidal thoughts or behaviors. Many people suffering from SAD dismiss their symptoms as normal winter doldrums or believe they should simply endure until spring arrives, but this perspective prevents them from accessing effective treatments that can dramatically improve their quality of life. With proper diagnosis and evidence-based treatment—including light therapy, psychotherapy, medication, and lifestyle modifications—the vast majority of individuals with SAD experience significant symptom relief and can maintain stable mood and functioning throughout the year. Early intervention not only alleviates current suffering but also helps prevent the condition from becoming more entrenched and difficult to treat in subsequent years.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Seasonal Affective Disorder
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Emotional & Cognitive Symptoms</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Persistent Sadness or Depressed Mood</p>
                    <p className="text-[var(--color-muted)]">Feeling down, empty, or hopeless most of the day, nearly every day, particularly during fall and winter months.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Loss of Interest in Activities</p>
                    <p className="text-[var(--color-muted)]">No longer enjoying hobbies, social activities, or things that previously brought pleasure and meaning to your life.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Concentrating</p>
                    <p className="text-[var(--color-muted)]">Trouble focusing on tasks, making decisions, or remembering information, which can impact work and daily responsibilities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Feelings of Worthlessness or Guilt</p>
                    <p className="text-[var(--color-muted)]">Excessive self-criticism, feeling like a burden to others, or experiencing inappropriate guilt about your condition.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Irritability and Anxiety</p>
                    <p className="text-[var(--color-muted)]">Increased frustration, restlessness, or anxious feelings that seem disproportionate to circumstances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Thoughts of Death or Suicide</p>
                    <p className="text-[var(--color-muted)]">Recurrent thoughts about death, dying, or suicide—if you experience this, seek immediate professional help.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Excessive Fatigue and Low Energy</p>
                    <p className="text-[var(--color-muted)]">Feeling physically and mentally drained despite adequate rest, making even simple tasks feel overwhelming.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Oversleeping (Hypersomnia)</p>
                    <p className="text-[var(--color-muted)]">Sleeping much more than usual, difficulty waking up in the morning, or taking frequent naps throughout the day.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Carbohydrate Cravings and Weight Gain</p>
                    <p className="text-[var(--color-muted)]">Strong urges to eat sugary or starchy foods, often leading to noticeable weight gain during winter months.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Social Withdrawal</p>
                    <p className="text-[var(--color-muted)]">Avoiding social interactions, isolating yourself from friends and family, or feeling like "hibernating" through winter.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Heavy, Leaden Feeling in Arms or Legs</p>
                    <p className="text-[var(--color-muted)]">Physical sensation of heaviness or weakness in your limbs that makes movement feel difficult.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Decreased Libido</p>
                    <p className="text-[var(--color-muted)]">Reduced interest in sexual activity or intimacy, which can strain relationships and further impact mood.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Work or School Performance Decline</p>
                    <p className="text-[var(--color-muted)]">Missing deadlines, decreased productivity, or struggling to meet responsibilities that you normally handle well.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent SAD from worsening or leading to more serious complications. You don't have to suffer through another winter—effective treatment can restore your quality of life.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Seasonal Affective Disorder
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation of your symptoms, medical history, and seasonal patterns to confirm a diagnosis of SAD and rule out other conditions. Our assessment examines the timing, duration, and severity of your symptoms, as well as how they impact your daily functioning. We also review any previous treatment attempts and identify factors that may be contributing to or worsening your seasonal depression.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your unique needs, we develop a customized treatment strategy that may include multiple evidence-based approaches working together. Your plan is tailored to your symptom severity, lifestyle, preferences, and any co-existing conditions. We collaborate with you to ensure your treatment plan is realistic, sustainable, and aligned with your goals, adjusting our approach as needed based on your progress and feedback.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                SAD treatment requires consistent monitoring and adjustment, particularly as seasons change and your response to treatment becomes clear. We schedule regular follow-up appointments to track your progress, manage any side effects, and refine your treatment plan as needed. Between visits, you have access to our support team for questions or concerns. Our goal is not just to help you through the current season, but to develop preventive strategies for future years.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our treatment approach for Seasonal Affective Disorder incorporates several evidence-based modalities proven effective through extensive research. <strong>Light therapy (phototherapy)</strong> is often a first-line treatment, involving daily exposure to a specialized light box that mimics natural outdoor light, helping to reset your circadian rhythm and boost serotonin production. We provide specific guidance on light box selection, timing, duration, and proper use to maximize effectiveness while minimizing side effects.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              <strong>Cognitive Behavioral Therapy (CBT)</strong>, specifically adapted for SAD (CBT-SAD), helps you identify and change negative thought patterns and behaviors that contribute to depression, while building healthy coping strategies and increasing engagement in positive activities even when you don't feel like it. <strong>Medication management</strong> may be recommended for moderate to severe cases, with antidepressants such as SSRIs or bupropion (which is FDA-approved for preventing SAD) helping to balance brain chemistry and alleviate symptoms. We also emphasize <strong>lifestyle modifications</strong> including maximizing natural light exposure, maintaining regular sleep schedules, engaging in physical exercise, managing stress, and ensuring proper nutrition—all of which can significantly impact the course of SAD. For some individuals, <strong>vitamin D supplementation</strong> may be beneficial, as deficiency is common in northern climates and may contribute to depressive symptoms. Our comprehensive approach addresses SAD from multiple angles, giving you the best chance at symptom relief and lasting improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Seasonal Affective Disorder Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Specialized psychiatric training and extensive experience treating seasonal affective disorder and mood disorders in the Holland community.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                No two patients experience SAD identically—we create treatment plans tailored to your specific symptoms, lifestyle, and goals for recovery.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Access high-quality SAD treatment from the comfort of your home—especially valuable during difficult winter months when leaving home feels overwhelming.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Proven Track Record</h3>
              <p className="text-[var(--color-muted)]">
                Years of successful outcomes helping individuals in Holland manage and overcome seasonal depression through evidence-based, compassionate care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment includes a comprehensive psychiatric evaluation where we discuss your symptoms in detail, review your seasonal patterns over previous years, explore your medical and mental health history, and assess how SAD is impacting your life. This typically takes 60-90 minutes and can be conducted in-person or via telehealth. We'll establish a preliminary diagnosis and begin discussing treatment options that align with your needs and preferences. Many patients feel relief simply from being heard and validated, and from learning that effective treatments exist.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We implement your personalized treatment plan, which may include starting light therapy (with specific instructions on timing and duration), beginning medication if appropriate (typically antidepressants take 2-4 weeks to show effects), initiating psychotherapy sessions, and implementing lifestyle modifications. During this phase, we schedule more frequent check-ins to monitor your response, manage any side effects, and provide support as you adjust to new routines. It's important to maintain realistic expectations—while some people notice improvements within days of starting light therapy, more significant mood improvement typically takes several weeks of consistent treatment.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  By this point, you should be experiencing noticeable improvement in your energy levels, mood, concentration, and overall functioning. We'll assess your progress using standardized measures and your subjective experience, make any necessary adjustments to your treatment plan (such as medication dosage changes or therapy focus areas), and work on solidifying healthy habits that support your mental health. If you're not experiencing adequate improvement, we'll explore alternative or additional interventions. This is also when we begin planning for the spring transition and discuss strategies for preventing relapse in future seasons.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Successful SAD treatment involves not just addressing current symptoms but preventing future episodes. As spring approaches and symptoms naturally improve, we'll discuss how to safely discontinue or reduce treatments like light therapy and whether to continue medication through summer months or taper off gradually. We develop a proactive plan for the next fall, potentially including starting preventive treatments before symptoms emerge. Many patients benefit from ongoing periodic check-ins, even during symptom-free months, to maintain wellness and address any concerns early. Our goal is to empower you with tools, knowledge, and support for long-term management of SAD across all seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Seasonal Affective Disorder
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-[var(--color-cream)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">How long does SAD treatment take to work?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>The timeline varies depending on the treatment modality. Light therapy can produce noticeable improvements within 2-4 days for some people, though maximum benefits typically appear after 2-3 weeks of consistent daily use. Antidepressant medications generally take 2-4 weeks to begin working and 6-8 weeks to reach full effectiveness. Psychotherapy benefits accumulate over time, with many patients noticing gradual improvements in coping skills and mood within 4-6 weeks. Most individuals experience significant symptom relief within 4-6 weeks when following a comprehensive treatment plan, though complete remission may take longer. The key is consistency—sticking with your treatment plan even before you feel better is crucial for success.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-[var(--color-cream)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">Is medication always required for treating SAD?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>No, medication is not always necessary for SAD treatment. Many individuals with mild to moderate SAD respond well to light therapy alone or light therapy combined with psychotherapy and lifestyle changes. However, medication becomes more important for moderate to severe cases, when other treatments haven't been sufficient, when symptoms significantly impair daily functioning, or when there's a history of major depressive disorder beyond seasonal patterns. Some people use medication only during winter months, while others benefit from year-round treatment. The decision about medication is always individualized based on your specific situation, symptom severity, preferences, and response to other treatments. We'll thoroughly discuss the risks and benefits to help you make an informed decision.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-[var(--color-cream)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">Does insurance cover SAD treatment?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>Most insurance plans cover psychiatric evaluation and treatment for Seasonal Affective Disorder, as it's a recognized medical diagnosis under major depressive disorder with seasonal pattern. Coverage typically includes diagnostic appointments, medication management visits, and psychotherapy sessions. However, insurance may not cover the purchase of a light therapy box, though these are often available for $50-200 and are considered a worthwhile investment given their effectiveness. We recommend contacting your insurance provider before your first appointment to understand your specific mental health benefits, including copays, deductibles, and any requirements for pre-authorization. Our office can provide documentation needed for insurance claims and will work with you to make treatment accessible and affordable.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-[var(--color-cream)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">Can I receive effective SAD treatment through telehealth?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>Absolutely. Telehealth is highly effective for SAD treatment and offers particular advantages during winter months when leaving home can feel overwhelming due to depression, dark mornings, or difficult weather conditions. Through video appointments, we can conduct comprehensive evaluations, provide medication management, deliver psychotherapy, monitor your progress, and adjust treatment plans just as effectively as in-person visits. In fact, telehealth may improve treatment adherence by removing barriers like transportation and making it easier to fit appointments into your schedule. We can visually assess your light therapy setup to ensure you're using it correctly, and many patients find the convenience of home-based care reduces stress and makes consistent treatment more achievable. The therapeutic relationship and quality of care remain strong through telehealth platforms.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-[var(--color-cream)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">What if I try treatment and it doesn't work?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>If your initial treatment approach isn't producing adequate results, we have multiple options to explore. First, we'll assess whether the treatment has been given sufficient time and is being implemented correctly—for example, ensuring light therapy is done at the right time of day for the proper duration. We may adjust dosages, timing, or combinations of treatments. If light therapy alone isn't sufficient, we can add medication or psychotherapy. If one medication doesn't work, we can try a different class of antidepressant. We might also investigate whether there are complicating factors such as vitamin D deficiency, thyroid problems, sleep disorders, or substance use that need to be addressed. In rare cases where standard treatments are ineffective, advanced interventions like intensive therapy or consultation with specialists may be appropriate. The vast majority of SAD patients respond well to treatment—it's often a matter of finding the right combination and giving it adequate time to work.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-[var(--color-cream)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">Will I need treatment for SAD every year for the rest of my life?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>The course of SAD varies by individual. Many people do experience recurring symptoms each winter and benefit from ongoing seasonal treatment, but this doesn't necessarily mean intensive therapy forever. Once we've identified what works for you, future treatment may simply involve resuming light therapy each fall, taking preventive medication during winter months, or having periodic check-in appointments. Some individuals find that after several years of treatment, implementing strong preventive strategies (like starting light therapy before symptoms emerge), and making lasting lifestyle changes, their symptoms become milder or more manageable. Others may experience changes in their SAD pattern over time due to life circumstances, relocations, or natural variations. The goal is to develop a sustainable management plan that preserves your quality of life without being overly burdensome, and to empower you with knowledge and tools to recognize and address symptoms early each season.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/depression" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Depression</h4>
                  <p className="text-[var(--color-muted)]">Comprehensive treatment for major depressive disorder and persistent depressive symptoms affecting your daily life and well-being.</p>
                </div>
              </div>
            </Link>
            <Link href="/conditions/anxiety" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Anxiety Disorders</h4>
                  <p className="text-[var(--color-muted)]">Evidence-based treatment for generalized anxiety, panic disorder, social anxiety, and other anxiety conditions that interfere with life.</p>
                </div>
              </div>
            </Link>
            <Link href="/conditions/bipolar-disorder" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Bipolar Disorder</h4>
                  <p className="text-[var(--color-muted)]">Specialized care for managing mood episodes, stabilizing symptoms, and achieving long-term balance with bipolar I and II disorder.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Seasonal Affective Disorder Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 font-light">
            You don't have to face Seasonal Affective Disorder alone. Our team is ready to help you reclaim your energy, mood, and quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </Link>
          </div>
          <p className="mt-8 text-sm opacity-90">
            Serving Holland, MI and surrounding communities • Telehealth available throughout Michigan
          </p>
        </div>
      </section>
    </main>
  )
}