import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perinatal and Postpartum Depression Treatment in Holland | Arlene Holland',
  description: 'Expert perinatal and postpartum depression treatment in Holland. Board-certified psychiatric care with evidence-based therapies and compassionate support for new mothers.',
  keywords: 'perinatal depression treatment Holland, postpartum depression Holland, maternal mental health, new mother depression, pregnancy depression treatment',
}

export default function PerinatalPostpartumDepressionPage() {
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
            <span>Perinatal and Postpartum Depression</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl font-light mb-6 leading-tight">
            Perinatal and Postpartum Depression Treatment in Holland
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Pregnancy and new motherhood should be a time of joy, but for many women, it becomes overshadowed by depression and anxiety. Our specialized treatment provides compassionate, evidence-based care to help you reclaim your emotional well-being and bond with your baby.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Perinatal and Postpartum Depression
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Perinatal depression encompasses depressive episodes that occur during pregnancy, while postpartum depression develops after childbirth, typically within the first year. These conditions affect approximately 1 in 7 women, making them among the most common complications of pregnancy and childbirth. Unlike the temporary "baby blues" that resolve within two weeks, perinatal and postpartum depression are serious medical conditions that persist and intensify without treatment. They profoundly impact a mother's ability to function, affecting her relationship with her baby, partner, and family, while also influencing infant development and family dynamics.
            </p>
            <p>
              The causes of perinatal and postpartum depression are multifaceted, involving dramatic hormonal shifts, sleep deprivation, physical recovery from childbirth, and the overwhelming adjustment to motherhood. Risk factors include a personal or family history of depression or anxiety, previous perinatal mood disorders, lack of social support, relationship stress, pregnancy complications, and traumatic birth experiences. Women experiencing infertility treatment, pregnancy loss, or caring for babies with health concerns face elevated risk. Contrary to persistent myths, perinatal and postpartum depression are not signs of weakness, character flaws, or failures in motherhood—they are medical conditions resulting from biological, psychological, and social factors beyond a mother's control.
            </p>
            <p>
              Professional treatment is essential because perinatal and postpartum depression rarely resolve on their own and can worsen over time, leading to chronic depression, anxiety disorders, or thoughts of self-harm. Untreated maternal depression affects infant attachment, developmental milestones, and long-term emotional health. Early intervention dramatically improves outcomes for both mother and baby, helping women recover fully and develop the nurturing bond they desire with their children. With appropriate treatment—including therapy, medication when needed, and support services—most women experience significant improvement within weeks and complete recovery within months. Seeking help is not only the right choice for your own well-being but one of the most important things you can do for your baby and family.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Perinatal and Postpartum Depression
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Emotional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Persistent Sadness or Emptiness</strong>
                    <p className="text-[var(--color-muted)] mt-1">Feeling overwhelmingly sad, hopeless, or emotionally numb most of the day, nearly every day.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty Bonding with Baby</strong>
                    <p className="text-[var(--color-muted)] mt-1">Feeling emotionally disconnected from your baby or lacking the joy and attachment you expected.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Excessive Guilt or Worthlessness</strong>
                    <p className="text-[var(--color-muted)] mt-1">Believing you're a bad mother, feeling intense guilt over perceived failures, or thinking your baby would be better off without you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Severe Anxiety or Panic</strong>
                    <p className="text-[var(--color-muted)] mt-1">Experiencing racing thoughts, constant worry about the baby's safety, or panic attacks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Loss of Interest in Activities</strong>
                    <p className="text-[var(--color-muted)] mt-1">No longer enjoying things that once brought pleasure, including spending time with your baby.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Irritability or Anger</strong>
                    <p className="text-[var(--color-muted)] mt-1">Feeling unusually irritable, frustrated, or angry with your partner, baby, or yourself.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Thoughts of Harming Yourself or Baby</strong>
                    <p className="text-[var(--color-muted)] mt-1">Having intrusive thoughts about self-harm or harming your baby (this requires immediate professional help).</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sleep Disturbances</strong>
                    <p className="text-[var(--color-muted)] mt-1">Inability to sleep even when the baby is sleeping, or sleeping excessively and struggling to get out of bed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Changes in Appetite</strong>
                    <p className="text-[var(--color-muted)] mt-1">Significant loss of appetite and weight loss, or overeating and weight gain beyond normal postpartum changes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Severe Fatigue or No Energy</strong>
                    <p className="text-[var(--color-muted)] mt-1">Feeling exhausted beyond normal new parent tiredness, lacking energy for basic daily tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Withdrawal from Others</strong>
                    <p className="text-[var(--color-muted)] mt-1">Isolating yourself from family and friends, avoiding social contact or help from others.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty Concentrating</strong>
                    <p className="text-[var(--color-muted)] mt-1">Struggling to focus, make decisions, or remember things beyond normal "mom brain."</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Physical Aches and Pains</strong>
                    <p className="text-[var(--color-muted)] mt-1">Experiencing headaches, stomachaches, or other physical symptoms without clear medical cause.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Crying Spells</strong>
                    <p className="text-[var(--color-muted)] mt-1">Frequent, uncontrollable crying or feeling tearful without apparent reason.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Feeling Overwhelmed</strong>
                    <p className="text-[var(--color-muted)] mt-1">Constant sense of being unable to cope or that caring for your baby is impossible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes for both mother and baby, and recovery is entirely possible with the right support.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Perinatal and Postpartum Depression
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation of your symptoms, medical history, pregnancy and birth experience, and current support system. We screen for related conditions like anxiety disorders and assess risk factors to develop a complete understanding of your unique situation. This evaluation includes validated screening tools specific to perinatal mood disorders and consideration of any complications during pregnancy or delivery.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we create a customized treatment plan that may include psychotherapy, medication management, or a combination approach. We carefully consider whether you're pregnant or breastfeeding when recommending medications, prioritizing both your mental health and your baby's safety. Your plan addresses immediate symptom relief while building long-term coping strategies and resilience for the challenges of early motherhood.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We provide continuous monitoring through regular follow-up appointments to track your progress, adjust treatments as needed, and address new challenges as they emerge. We maintain close communication during the critical early weeks and coordinate with your OB-GYN, pediatrician, and other providers when appropriate. Our goal is supporting your complete recovery and helping you develop the confidence and emotional health to thrive as a mother.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Our treatment approach is grounded in evidence-based interventions proven effective for perinatal and postpartum depression. We utilize Cognitive Behavioral Therapy (CBT) to address negative thought patterns and develop practical coping skills, Interpersonal Therapy (IPT) to navigate relationship changes and role transitions, and supportive therapy focused on the unique challenges of new motherhood. When medication is appropriate, we prescribe antidepressants with established safety profiles during pregnancy and breastfeeding, such as selective serotonin reuptake inhibitors (SSRIs), carefully weighing benefits against potential risks. We also connect you with community resources, including support groups, lactation consultants, and postpartum doulas, recognizing that comprehensive care extends beyond the therapy office. Treatment is tailored to your specific circumstances, whether you're experiencing depression during pregnancy, in the immediate postpartum period, or months after delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Perinatal and Postpartum Depression Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified psychiatric mental health nurse practitioner with specialized training in perinatal mood and anxiety disorders.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Compassionate, Non-Judgmental Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We understand the guilt and shame many mothers feel. Our approach is empathetic, validating, and focused on your complete recovery.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Telehealth Services</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Access treatment from home without arranging childcare—ideal for new mothers managing feeding schedules and infant needs.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Specialized Maternal Mental Health Focus</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Extensive experience treating perinatal and postpartum mood disorders with understanding of the unique challenges facing new mothers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial appointment, we conduct a comprehensive assessment of your symptoms, pregnancy and birth experience, sleep patterns, support system, and medical history. We use validated screening tools to determine the severity of your depression and identify any co-occurring anxiety or other concerns. You'll leave with a clear diagnosis, an understanding of what you're experiencing, and an initial treatment plan tailored to your specific situation. Many mothers report feeling relief simply from being heard and validated.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment typically starts immediately with weekly therapy sessions and, if appropriate, medication initiation. During this phase, we focus on symptom stabilization, sleep improvement strategies, and developing immediate coping skills. If you've started medication, we monitor closely for side effects and early response. Most women begin noticing improvements in sleep and anxiety within the first few weeks, though full antidepressant effects typically emerge around week 4-6. We maintain frequent contact during this critical period to ensure you're responding well and feeling supported.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  By this stage, most women experience significant improvement in mood, energy, and ability to bond with their baby. We assess your progress using the same screening tools from your initial evaluation to measure objective improvement. Sessions may decrease to every other week as you gain confidence and stability. We work on deeper issues like adjusting to motherhood, relationship changes, and building long-term resilience. If progress is slower than expected, we reevaluate and adjust your treatment plan, possibly adding or changing interventions.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">4</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management (Month 4+)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once you've achieved stability and remission, we transition to maintenance care with less frequent appointments focused on relapse prevention and continued wellness. We discuss how long to continue medication—typically at least 6-12 months after symptoms resolve—and develop a plan for eventual tapering if appropriate. We also prepare you for future reproductive decisions, as having had postpartum depression increases risk with subsequent pregnancies. Our goal is ensuring you have the tools and support to maintain your mental health long-term, with the confidence to reach out if symptoms return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Perinatal and Postpartum Depression
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does treatment for postpartum depression typically take?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Most women experience significant improvement within 4-8 weeks of starting treatment, with full symptom resolution typically occurring within 3-6 months. However, treatment duration varies based on symptom severity, treatment approach, and individual response. Many women continue therapy or medication for 6-12 months after symptoms resolve to prevent relapse. Early intervention generally leads to faster recovery, which is why seeking help as soon as you notice symptoms is so important. Some women benefit from ongoing maintenance therapy, particularly if they have a history of depression or are planning future pregnancies.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication required, or can I recover with therapy alone?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Treatment approach depends on symptom severity and your individual circumstances. Mild to moderate postpartum depression may respond well to psychotherapy alone, particularly cognitive behavioral therapy and interpersonal therapy. Moderate to severe depression often benefits from a combination of medication and therapy, which research shows is more effective than either treatment alone. If you're experiencing thoughts of self-harm, severe anxiety, or inability to function, medication is typically recommended. We carefully consider whether you're pregnant or breastfeeding when recommending medications, discussing benefits and risks thoroughly so you can make an informed decision. Many antidepressants are considered safe during breastfeeding and the benefits of treating your depression often outweigh potential risks to your baby.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Will my insurance cover perinatal and postpartum depression treatment?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Most insurance plans cover mental health treatment for perinatal and postpartum depression as they would any other medical condition, thanks to mental health parity laws. Coverage typically includes psychiatric evaluation, medication management, and psychotherapy sessions. We recommend contacting your insurance provider to verify your specific mental health benefits, including copayments, deductibles, and any session limits. Our office can provide documentation to help you understand your coverage. If you have limited insurance coverage or are uninsured, we can discuss sliding scale options or connect you with community resources. Don't let insurance concerns prevent you from seeking treatment—solutions are available.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can I safely take antidepressants while breastfeeding?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Many antidepressants are considered compatible with breastfeeding, with decades of research supporting their safety. Selective serotonin reuptake inhibitors (SSRIs) like sertraline and paroxetine have the most extensive safety data and minimal infant exposure through breast milk. When prescribing medication, we carefully consider the most current research, your symptoms, previous medication responses, and your feeding preferences. The risks of untreated postpartum depression to both mother and baby—including impaired bonding, developmental delays, and safety concerns—often outweigh the minimal risks associated with medication exposure through breast milk. We can thoroughly discuss the evidence and help you make the best decision for your family. Many women find they can successfully breastfeed while taking antidepressants with no adverse effects on their babies.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if therapy and medication aren't helping my symptoms?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  If you're not responding to initial treatment after 4-6 weeks, we reassess your diagnosis and treatment plan. Sometimes what appears as postpartum depression is complicated by other factors like thyroid dysfunction, severe sleep deprivation, or co-occurring anxiety disorders that need targeted treatment. We may adjust your medication dosage, switch to a different medication, add augmentation strategies, or increase therapy frequency. For treatment-resistant cases, we can discuss specialized interventions or refer you to perinatal mental health specialists for additional evaluation. It's crucial to communicate honestly about your symptoms and any side effects you're experiencing so we can adjust your treatment appropriately. The vast majority of women with postpartum depression respond well when the right combination of treatments is found—recovery is possible even when initial attempts don't provide relief.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can I receive effective treatment through telehealth appointments?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Yes, telehealth is highly effective for treating perinatal and postpartum depression and offers significant advantages for new mothers. Research shows that virtual therapy and medication management produce outcomes equivalent to in-person care. Telehealth eliminates barriers like arranging childcare, traveling with a newborn, and scheduling around feeding times—all major obstacles that prevent many mothers from accessing treatment. You can attend appointments from the comfort of your home, even while your baby naps or during brief quiet moments. Our HIPAA-compliant video platform ensures privacy and security. Many mothers find telehealth less stressful and more convenient, which improves treatment adherence and outcomes. We can prescribe medications, conduct therapy sessions, and provide the same comprehensive care remotely as we would in person.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/anxiety-disorders" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Anxiety Disorders</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Comprehensive treatment for generalized anxiety, panic disorder, and perinatal anxiety that often co-occurs with postpartum depression.
              </p>
            </a>
            <a href="/conditions/depression" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Depression</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Evidence-based treatment for major depressive disorder and persistent depressive symptoms affecting quality of life.
              </p>
            </a>
            <a href="/conditions/adjustment-disorders" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Adjustment Disorders</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Support for navigating major life transitions, including the challenges of becoming a parent and adapting to motherhood.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">
            Get Help for Perinatal and Postpartum Depression Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face perinatal and postpartum depression alone. Our team is ready to help you recover and thrive as a mother.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors">
              Schedule a Consultation
            </a>
            <a href="/conditions" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors">
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}