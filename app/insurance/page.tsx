import Link from 'next/link'

export default function InsurancePage() {
  const insurers = [
    "Aetna",
    "BlueCross BlueShield",
    "Cigna",
    "United Healthcare",
    "Humana",
    "Medicare",
    "Medicaid",
    "Tricare",
    "Anthem",
    "Magellan"
  ]

  const billingSteps = [
    {
      title: "Verify Coverage",
      description: "We verify your insurance benefits before your first appointment to confirm coverage and estimate your costs.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Service Provided",
      description: "You receive your psychiatric evaluation, therapy session, or medication management appointment.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      title: "Claim Submitted",
      description: "We submit claims directly to your insurance company on your behalf and handle all billing coordination.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: "You Pay Remainder",
      description: "After insurance processes the claim, you receive an Explanation of Benefits (EOB) and pay any remaining balance like co-pays or deductibles.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      )
    }
  ]

  const faqs = [
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans including those listed on this page. To verify your specific coverage, please contact our office with your insurance information. We'll check your benefits and let you know your estimated costs before your first appointment."
    },
    {
      question: "What will I owe for my appointment?",
      answer: "Your out-of-pocket costs depend on your specific insurance plan and may include co-pays, co-insurance, or deductibles. After verifying your insurance, we'll provide an estimate of what you'll owe. Typical co-pays for mental health services range from $20-75 per visit."
    },
    {
      question: "What if I don't have insurance or prefer not to use it?",
      answer: "We welcome self-pay patients and offer transparent pricing. Our self-pay rates vary by service type and session length. We also offer a sliding scale fee structure based on financial need and can arrange payment plans for ongoing treatment."
    },
    {
      question: "How do I know what my insurance covered?",
      answer: "After each appointment, we submit a claim to your insurance company. You'll receive an Explanation of Benefits (EOB) from your insurer showing what was billed, what insurance paid, and what you owe. This typically arrives 2-4 weeks after your visit. Any remaining balance will be billed to you by our office."
    },
    {
      question: "What is the No Surprises Act and how does it protect me?",
      answer: "The No Surprises Act protects you from unexpected medical bills. Before receiving services, you have the right to receive a Good Faith Estimate of expected charges. If you're uninsured or choose not to use insurance, we'll provide this estimate in advance so you know what to expect."
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Insurance & Billing</h1>
          <p className="text-xl text-white/90">Transparent pricing and billing information</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Accepted Insurance Plans</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {insurers.map((insurer, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] animate-fade-up">
                <p className="font-semibold text-[var(--color-ink)]">{insurer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-[var(--color-muted)] max-w-2xl mx-auto">
              Don't see your insurance provider listed? Many other plans may also be accepted. Please contact our office to verify your specific coverage and benefits.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">How Billing Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {billingSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-up">
                <div className="text-[var(--color-primary)] mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">{step.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Understanding Your Costs</h3>
              <div className="space-y-4 text-[var(--color-muted)]">
                <p>
                  <strong className="text-[var(--color-ink)]">Co-pay:</strong> A fixed amount you pay at each visit, determined by your insurance plan. This is typically due at the time of service.
                </p>
                <p>
                  <strong className="text-[var(--color-ink)]">Deductible:</strong> The amount you pay out-of-pocket before your insurance begins covering services. Once met for the year, your insurance coverage increases.
                </p>
                <p>
                  <strong className="text-[var(--color-ink)]">Co-insurance:</strong> After meeting your deductible, you may pay a percentage of the service cost while insurance covers the rest.
                </p>
                <p>
                  <strong className="text-[var(--color-ink)]">Explanation of Benefits (EOB):</strong> A statement from your insurance company showing what they paid and what you owe. This is not a bill, but helps you understand your coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Self-Pay Options</h3>
            <div className="space-y-6 text-[var(--color-muted)]">
              <p className="text-lg">
                We believe everyone deserves access to quality mental health care. For patients without insurance or who prefer not to use their insurance, we offer several self-pay options.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Transparent Pricing</h4>
                  <p>Our self-pay rates are clearly communicated before your first appointment. You'll know exactly what to expect with no hidden fees or surprise charges.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Sliding Scale Fees</h4>
                  <p>We offer a sliding scale fee structure based on income and financial circumstances. This ensures that cost doesn't become a barrier to receiving the care you need.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Payment Plans</h4>
                  <p>For patients requiring ongoing treatment, we can arrange flexible payment plans to make care more affordable and manageable within your budget.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Good Faith Estimate</h4>
                  <p>Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges before receiving services. This estimate helps you understand and plan for the cost of your care.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-ink)]">
                  <strong>Your Rights Under the No Surprises Act:</strong> You have the right to receive a Good Faith Estimate explaining how much your medical care will cost. If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. For more information, visit cms.gov/nosurprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Billing Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl border border-[var(--color-border)] animate-fade-up group">
                <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-cormorant text-4xl font-light mb-6">Questions About Insurance or Billing?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our billing team is here to help you understand your coverage and costs. Contact us today to verify your insurance or discuss self-pay options.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors">
            Contact Our Office
          </Link>
        </div>
      </section>
    </main>
  )
}