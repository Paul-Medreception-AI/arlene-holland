import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Arlene Holland',
  description: 'Comprehensive mental health services including psychiatric evaluation, medication management, psychotherapy, and specialized treatment for anxiety, depression, and ADHD.',
}

export default function ServicesPage() {
  const services = [
    {
      name: "Psychiatric Evaluation",
      description: "Comprehensive diagnostic assessments that explore your mental health history, current symptoms, and life circumstances. We create personalized treatment plans based on a thorough understanding of your unique needs.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      )
    },
    {
      name: "Medication Management",
      description: "Careful prescription and monitoring of psychiatric medications with attention to effectiveness and side effects. We prioritize finding the right medication at the right dose for optimal symptom relief.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      )
    },
    {
      name: "Psychotherapy",
      description: "Evidence-based talk therapy including cognitive behavioral therapy, interpersonal therapy, and supportive counseling. Therapy sessions focus on developing coping skills and addressing underlying patterns.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      name: "Anxiety Treatment",
      description: "Specialized care for generalized anxiety, panic disorder, social anxiety, and phobias using proven therapeutic techniques. Treatment combines medication when appropriate with cognitive-behavioral strategies.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      name: "Depression Treatment",
      description: "Comprehensive treatment for major depression, persistent depressive disorder, and seasonal affective disorder. We address both biological and psychological factors contributing to depressive symptoms.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )
    },
    {
      name: "ADHD Assessment & Treatment",
      description: "Thorough evaluation and treatment planning for adult and adolescent ADHD including medication options and behavioral strategies. We help you develop systems that work with your brain, not against it.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Schedule Your Initial Consultation",
      description: "Contact our office by phone or through our secure online form to schedule your first appointment. We'll gather basic information and answer any questions you have about the process, insurance, or what to expect during your visit."
    },
    {
      number: "02",
      title: "Complete Your Comprehensive Evaluation",
      description: "During your first appointment, Dr. Holland will conduct a thorough assessment of your mental health history, current symptoms, and treatment goals. This collaborative session typically lasts 60-90 minutes and forms the foundation of your personalized treatment plan."
    },
    {
      number: "03",
      title: "Begin Your Personalized Treatment",
      description: "Based on your evaluation, we'll develop a treatment plan that may include medication, therapy, lifestyle modifications, or a combination approach. You'll have ongoing support with regular follow-up appointments to monitor progress and adjust your treatment as needed."
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › Services
          </p>
          <h1 className="font-serif text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Comprehensive mental health care tailored to your individual needs and goals
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-[var(--color-ink)] mb-4">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Evidence-based treatments designed to address your unique mental health journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group"
              >
                <div className="flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mt-5">
                  {service.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  {service.description}
                </p>
                <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-[var(--color-ink)] mb-4">
            How It Works
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Your path to better mental health starts with a simple three-step process
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up">
                <div className="lg:px-8">
                  <div className="font-serif text-7xl text-[var(--color-primary)] opacity-50 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-px h-32 bg-[var(--color-border)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Schedule your consultation today and take the first step toward better mental health
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-colors duration-300"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  )
}