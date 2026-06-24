import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bereavement and Grief Treatment in Holland | Arlene Holland',
  description: 'Expert bereavement and grief counseling in Holland. Compassionate, evidence-based treatment to help you navigate loss and find healing. Telehealth available.',
  keywords: 'bereavement treatment Holland, grief counseling Holland, grief therapy, loss counseling, bereavement support, grief specialist Holland',
}

export default function BereavementAndGriefPage() {
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
            <span>Bereavement and Grief</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Bereavement and Grief Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Losing someone you love is one of life's most profound challenges. Our compassionate, evidence-based grief counseling helps you process your loss, honor your loved one's memory, and rediscover meaning and hope as you move forward.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8">
            Understanding Bereavement and Grief
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Bereavement and grief are natural responses to loss, particularly the death of someone close to us. While grief is a universal human experience, the way it manifests varies significantly from person to person. Normal grief typically involves waves of sadness, yearning, guilt, anger, and emotional pain that gradually diminish over time as the bereaved person adjusts to life without their loved one. However, approximately 7-10% of bereaved individuals experience complicated grief (also called prolonged grief disorder), where intense symptoms persist beyond what is typical and significantly impair daily functioning. This condition affects millions of Americans each year, with higher rates among those who lost someone suddenly or traumatically, those with prior mental health conditions, or those lacking adequate social support. The impact extends beyond emotional suffering—unresolved grief can lead to physical health problems, substance abuse, relationship difficulties, work impairment, and increased risk of depression and anxiety disorders.
            </p>
            <p>
              Grief responses are influenced by multiple factors including the nature of the relationship with the deceased, the circumstances of the death, the bereaved person's coping skills and mental health history, and the availability of social support. Sudden or traumatic deaths, such as accidents, suicide, or homicide, often complicate the grieving process. Loss of a child or spouse typically triggers more intense and prolonged grief reactions. Pre-existing anxiety or depression can intensify grief symptoms and slow recovery. Cultural and religious beliefs shape how grief is expressed and processed. Additional stressors such as financial hardship, legal issues, or caregiving responsibilities can compound grief. Risk factors for complicated grief include a history of multiple losses, insecure attachment patterns, lack of preparation for the death, unresolved conflicts with the deceased, and social isolation. Understanding these factors helps mental health professionals tailor treatment to each person's unique circumstances and needs.
            </p>
            <p>
              While grief is a natural process, professional treatment becomes essential when symptoms are overwhelming, persist for an extended period, or prevent you from engaging in daily life. Therapy provides a safe space to express difficult emotions, process traumatic aspects of the loss, and develop healthy coping strategies. Evidence-based treatments for complicated grief have been shown to significantly reduce symptoms and improve quality of life, often more effectively than standard depression treatments. Professional support helps distinguish normal grief from clinical depression or anxiety disorders that may require additional intervention. Early treatment can prevent grief from becoming chronic and debilitating. Whether you're struggling with a recent loss or unresolved grief from years past, reaching out for help is a sign of strength and an important step toward healing. You don't have to navigate this painful journey alone—compassionate, specialized care can make a profound difference in your recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Bereavement and Grief
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Emotional Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Emotional Symptoms</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Intense Yearning or Longing</p>
                    <p className="text-[var(--color-muted)]">Overwhelming desire to be reunited with the deceased person that doesn't diminish over time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Persistent Sadness or Emptiness</p>
                    <p className="text-[var(--color-muted)]">Pervasive feelings of sorrow, hopelessness, or emotional numbness that interfere with daily life.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Accepting the Death</p>
                    <p className="text-[var(--color-muted)]">Trouble believing the person is really gone or feeling shocked even months after the loss.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Anger or Bitterness</p>
                    <p className="text-[var(--color-muted)]">Intense feelings of rage about the death, toward the deceased, others, or yourself.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Guilt or Self-Blame</p>
                    <p className="text-[var(--color-muted)]">Preoccupation with things you wish you had said or done differently before the death.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Loss of Meaning or Purpose</p>
                    <p className="text-[var(--color-muted)]">Feeling that life is empty or meaningless without the deceased person.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Emotional Detachment</p>
                    <p className="text-[var(--color-muted)]">Feeling disconnected from others or unable to enjoy relationships and activities you once valued.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical & Behavioral Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Physical & Behavioral Symptoms</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Sleep Disturbances</p>
                    <p className="text-[var(--color-muted)]">Insomnia, nightmares about the deceased, or sleeping excessively to avoid painful feelings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Physical Pain or Fatigue</p>
                    <p className="text-[var(--color-muted)]">Unexplained aches, heaviness in the chest, exhaustion, or other somatic complaints.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Avoidance of Reminders</p>
                    <p className="text-[var(--color-muted)]">Staying away from people, places, or activities that trigger memories of the deceased.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Social Withdrawal</p>
                    <p className="text-[var(--color-muted)]">Isolating yourself from family and friends or losing interest in social activities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Functioning</p>
                    <p className="text-[var(--color-muted)]">Trouble maintaining work responsibilities, self-care routines, or household tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Appetite Changes</p>
                    <p className="text-[var(--color-muted)]">Significant weight loss or gain due to loss of appetite or emotional eating.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Substance Use</p>
                    <p className="text-[var(--color-muted)]">Increased use of alcohol, medications, or other substances to cope with painful emotions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Thoughts of Death</p>
                    <p className="text-[var(--color-muted)]">Wishes to die in order to be reunited with the deceased or feeling life isn't worth living.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-center text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or someone you love, help is available. Early treatment leads to better outcomes and can prevent grief from becoming chronic and debilitating.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-16 text-center">
            How We Treat Bereavement and Grief
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation to understand your unique loss experience, grief symptoms, and how they're affecting your daily life. We assess for complicated grief as well as co-occurring conditions like depression or anxiety. This helps us develop a personalized treatment plan tailored to your specific needs and circumstances.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we create an individualized treatment approach that may include specialized grief therapy, cognitive-behavioral techniques, and supportive counseling. We establish clear goals focused on processing your loss, managing distressing symptoms, and gradually re-engaging with life. Your treatment plan is flexible and evolves as your needs change throughout the healing process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Healing from loss is a journey, not a destination. We provide consistent support through regular therapy sessions, monitor your progress, and adjust treatment as needed. We help you navigate difficult milestones like anniversaries and holidays. Our goal is to help you integrate the loss into your life story while rediscovering joy, meaning, and connection with others.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our treatment approach is grounded in evidence-based modalities specifically designed for grief and loss. We primarily utilize <strong>Complicated Grief Treatment (CGT)</strong>, a specialized form of therapy proven highly effective for prolonged grief disorder. This structured approach combines elements of cognitive-behavioral therapy, exposure techniques, and interpersonal therapy to help you process traumatic aspects of the loss, reduce avoidance behaviors, and work toward personal goals. We also incorporate <strong>Cognitive-Behavioral Therapy (CBT)</strong> to address unhelpful thought patterns and behaviors that may be maintaining your distress. <strong>Meaning-Reconstruction Therapy</strong> helps you make sense of your loss and find renewed purpose. For those dealing with traumatic loss, we may integrate <strong>trauma-focused approaches</strong> such as EMDR. While medication is not typically the primary treatment for grief, we may recommend antidepressants if you're experiencing co-occurring major depression or anxiety disorders. Our compassionate, individualized approach respects your unique relationship with the deceased while gently guiding you toward healing and hope.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Why Choose Arlene Holland for Bereavement and Grief Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arlene Holland is a board-certified psychiatric mental health nurse practitioner with specialized training in grief and bereavement counseling. Her clinical expertise and compassionate approach provide the highest standard of care for those navigating loss.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Personalized, Compassionate Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every person's grief is unique. We tailor treatment to your specific loss, cultural background, beliefs, and personal needs. You'll receive individualized attention in a safe, non-judgmental environment where your feelings are validated and respected.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Convenient Telehealth Services</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer secure telehealth appointments that allow you to receive grief counseling from the comfort and privacy of your own home. This is especially valuable when grief makes it difficult to leave the house or when you need flexible scheduling options.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Specialized Grief Experience</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice has extensive experience treating all types of grief, including complicated grief, traumatic loss, anticipatory grief, and disenfranchised grief. We understand the nuances of different loss experiences and provide specialized support for each situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial appointment, we'll discuss the loss you've experienced, your current symptoms, and how grief is affecting your daily life. This comprehensive assessment takes 60-90 minutes and provides the foundation for your personalized treatment plan. You'll leave with a clear understanding of your diagnosis and next steps for treatment.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-8)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We typically meet weekly or biweekly during this intensive phase. Sessions focus on processing your grief, addressing avoidance behaviors, challenging unhelpful thoughts, and gradually re-engaging with activities and relationships. Many clients begin noticing improvements in functioning and emotional regulation within the first month, though deep healing takes longer.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Around 2-3 months into treatment, we'll review your progress and adjust the treatment plan as needed. Most people experience significant symptom reduction by this point and have developed healthier coping strategies. We'll work on integrating your loss into your life narrative and identifying sources of ongoing meaning and connection.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Long-Term Management (Months 4+)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As symptoms continue to improve, we gradually reduce session frequency. Some clients complete treatment in 4-6 months, while others benefit from longer-term support, especially when navigating anniversaries, holidays, or new life transitions. We'll develop a maintenance plan and provide resources for continued healing. Remember that grief doesn't follow a timeline—healing happens at its own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Bereavement and Grief
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does grief treatment typically take?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>The duration of grief treatment varies significantly based on individual circumstances. Normal grief typically resolves gradually over 6-12 months without formal treatment, though painful feelings may resurface periodically. Complicated grief therapy usually involves 16-20 weekly sessions (approximately 4-5 months), though some people benefit from shorter or longer treatment. Factors affecting treatment length include the nature of the loss, severity of symptoms, presence of co-occurring conditions, and your personal coping resources. Rather than rushing toward closure, the goal is to process the loss at a pace that feels manageable while helping you regain functioning and quality of life. Many clients continue with less frequent maintenance sessions after completing intensive treatment, particularly around significant dates or life transitions.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication required for treating grief?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Medication is not typically required for treating normal or even complicated grief. Psychotherapy, particularly specialized grief therapy, is the primary and most effective treatment. However, medication may be recommended if you're experiencing co-occurring major depression, severe anxiety, insomnia, or other psychiatric conditions that require pharmacological intervention. Antidepressants can help stabilize mood if depression is significantly impairing your functioning, and sleep aids may provide short-term relief for severe insomnia. Research shows that complicated grief therapy is more effective than antidepressants alone for grief-specific symptoms, though combining therapy with medication can be beneficial for some individuals. We take a conservative, individualized approach to medication, always starting with therapy and adding medication only when clinically indicated and aligned with your preferences.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover grief counseling?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most insurance plans do cover grief counseling when it meets criteria for a diagnosable mental health condition such as complicated grief (prolonged grief disorder), major depression, adjustment disorder, or post-traumatic stress disorder. Coverage typically includes both individual therapy sessions and psychiatric evaluation and management. However, coverage policies vary by insurance provider and plan, including differences in copays, deductibles, and session limits. We recommend contacting your insurance company before your first appointment to verify mental health benefits and any requirements such as prior authorization. Our practice can provide documentation of medical necessity to support coverage. If insurance doesn't cover treatment or if you prefer not to use insurance, we also offer self-pay options with transparent pricing.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if grief therapy isn't helping?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>If you feel therapy isn't helping after several sessions, this is important information to share openly with your provider. Several factors could be at play: you may need more time (grief work is inherently slow and painful), the therapeutic approach may need adjustment, there may be underlying issues like trauma or depression requiring different treatment, or the therapeutic relationship may not be the right fit. We regularly assess treatment progress and welcome honest feedback about what's working and what isn't. We can modify the treatment approach, incorporate additional modalities, consider adding medication if appropriate, or discuss referral to a specialist if needed. Research shows that specialized complicated grief therapy is highly effective, but it requires active participation and willingness to gradually confront painful feelings. If you're avoiding homework assignments or not engaging fully with the process, we'll explore what barriers might be preventing you from benefiting from treatment.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth work effectively for grief counseling?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, telehealth is highly effective for grief counseling and offers several advantages. Research conducted during and after the pandemic shows that online therapy produces outcomes comparable to in-person treatment for grief and bereavement. Telehealth allows you to receive care in the comfort and privacy of your own home, which can feel safer when discussing painful emotions. It eliminates travel time and logistical barriers that might otherwise prevent you from attending sessions regularly—especially important when grief makes it difficult to leave the house. The flexibility of scheduling can help you fit treatment into your life during a time when you may be managing funeral arrangements, estate matters, or other responsibilities. We use secure, HIPAA-compliant video platforms that protect your confidentiality. The only requirements are a private space, reliable internet connection, and a device with camera and microphone. Many clients find the familiarity of their home environment actually enhances their ability to open up during therapy sessions.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How do I know if I need professional help for my grief?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Consider seeking professional help if your grief is severe, persistent, or significantly interfering with your daily functioning. Warning signs include: intense yearning or preoccupation with the deceased that doesn't diminish over time; persistent difficulty accepting the death even many months later; overwhelming guilt, anger, or bitterness; avoidance of reminders of the person or conversely, excessive focus on reminders to the point of impairment; feelings that life is meaningless without the deceased; social isolation or inability to maintain relationships; significant disruption to work, self-care, or responsibilities; thoughts of suicide or wishes to die to be reunited with the deceased; or new or worsening physical health problems. Additionally, if your grief feels different from how others describe their experiences, if you've experienced multiple losses in a short time, or if the death was traumatic or sudden, professional support can be especially valuable. Trust your instincts—if you're wondering whether you need help, that question itself often indicates that reaching out would be beneficial. There's no shame in seeking support, and early intervention can prevent acute grief from becoming chronic.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/conditions/depression" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Depression</h4>
              <p className="text-[var(--color-muted)] mb-4">Grief and depression often co-occur and require careful differential diagnosis and integrated treatment.</p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </Link>
            <Link href="/conditions/anxiety" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Anxiety Disorders</h4>
              <p className="text-[var(--color-muted)] mb-4">Loss can trigger anxiety about mortality, safety, and future losses that may require specialized treatment.</p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </Link>
            <Link href="/conditions/ptsd" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2">PTSD & Trauma</h4>
              <p className="text-[var(--color-muted)] mb-4">Traumatic loss such as suicide, homicide, or accidents may result in post-traumatic stress disorder.</p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Bereavement and Grief Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face grief alone. Our compassionate team is ready to help you navigate this difficult journey toward healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}