import Link from 'next/link'

export const metadata = {
  title: 'Frequently Asked Questions | Arlene Holland',
  description: 'Find answers to common questions about our mental health services, insurance, appointments, and treatment approaches.',
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Everything you need to know about our practice and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Do you accept insurance?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, and Medicare. Insurance coverage varies by plan, so we recommend contacting your insurance provider to verify your mental health benefits before your first appointment. Our office staff can also help verify your benefits and provide information about your coverage, including copays, deductibles, and out-of-network reimbursement options. If you don't have insurance or prefer not to use it, we offer self-pay rates and can provide superbills for potential reimbursement.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Are you accepting new patients?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, Dr. Holland is currently accepting new patients for both in-person and telehealth appointments. We strive to accommodate new patient requests as quickly as possible, typically within 2-3 weeks depending on scheduling availability. Priority appointments may be available for urgent psychiatric needs. To schedule your initial consultation, please call our office or complete the contact form on our website. We welcome patients ages 16 and older seeking comprehensive mental health care.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>What should I expect during my first appointment?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Your initial psychiatric evaluation typically lasts 60-90 minutes and is a comprehensive assessment of your mental health. Dr. Holland will discuss your current symptoms, mental health history, medical history, family history, and life circumstances. This is a collaborative conversation designed to understand your unique situation and treatment goals. You'll have the opportunity to ask questions and express any concerns. Please arrive 15 minutes early to complete intake paperwork, or fill out forms in advance through our patient portal. By the end of the session, we'll discuss initial treatment recommendations and develop a personalized care plan together.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>How long are follow-up appointments?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Follow-up appointments typically last 30 minutes for medication management visits and 45-60 minutes for therapy sessions. The frequency of appointments depends on your individual needs and treatment plan. Initially, you may need appointments every 2-4 weeks as we establish or adjust your treatment. Once your symptoms stabilize, follow-up visits may be scheduled monthly or every few months. We schedule appointments based on what will best support your mental health progress, and this timeline can be adjusted as your needs change.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Do you offer telehealth appointments?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, we offer secure telehealth appointments through HIPAA-compliant video conferencing for both initial evaluations and follow-up visits. Telehealth provides convenient access to care from the comfort of your home and can be particularly helpful for patients with scheduling constraints, mobility challenges, or anxiety about in-person visits. Many patients find telehealth appointments just as effective as in-person sessions. You'll need a smartphone, tablet, or computer with a camera and stable internet connection. We'll send you a secure link before your appointment that requires no special software to download.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Will I need to take medication?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Medication is not required for treatment, and the decision to use medication is always a collaborative one between you and Dr. Holland. Some mental health conditions respond well to therapy alone, while others benefit from a combination of medication and therapy. During your evaluation, we'll discuss all treatment options including their benefits, potential side effects, and alternatives. If medication is recommended, we'll start with the lowest effective dose and carefully monitor your response. You have the right to ask questions, express concerns, and participate fully in decisions about your treatment plan. Our goal is to find the approach that works best for you.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>What is your cancellation policy?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We require 24 hours notice for appointment cancellations or rescheduling. Appointments cancelled with less than 24 hours notice, or missed appointments without notification, may be subject to a cancellation fee. We understand that emergencies and unexpected situations occur, and we handle these on a case-by-case basis. To cancel or reschedule, please call our office directly. Consistent late cancellations or no-shows may affect your ability to maintain regular appointments, as these time slots could have been offered to other patients in need of care.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Do you prescribe controlled substances?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, Dr. Holland is licensed to prescribe controlled substances including stimulants for ADHD and certain medications for anxiety when clinically appropriate. However, prescribing controlled substances requires careful evaluation, ongoing monitoring, and compliance with state and federal regulations. For stimulant medications, we typically require regular follow-up appointments, periodic drug screening, and monitoring through the state prescription drug monitoring program. We prioritize evidence-based prescribing practices and will discuss both the benefits and risks of any controlled substance. Alternative non-controlled medications are always considered first when clinically appropriate.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>What should I bring to my first appointment?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Please bring your insurance card, photo ID, and a list of all current medications including dosages. If you have previous psychiatric records, psychological testing results, or medical records relevant to your mental health, bringing copies can be helpful but is not required. We'll send you intake forms to complete before your appointment—returning these in advance helps maximize your appointment time. It's also helpful to prepare a brief timeline of your symptoms and any questions you'd like to discuss. If you're currently taking psychiatric medications, knowing when you started them and any previous medications you've tried will assist in treatment planning.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>How do I get prescription refills?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Routine prescription refills can be requested through your pharmacy, and we'll typically receive an electronic refill request that we process within 1-2 business days. For faster service, you can also call our office directly or send a message through the patient portal. Please request refills at least 5-7 days before you run out of medication to allow processing time. Refills for controlled substances require an active treatment relationship with regular appointments and cannot be filled early. If you're experiencing side effects or concerns about your medication, please schedule an appointment rather than simply requesting a refill so we can properly address your needs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>What if I'm having a mental health crisis?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              If you're experiencing a psychiatric emergency or having thoughts of harming yourself or others, please call 911 or go to your nearest emergency room immediately. You can also contact the 988 Suicide and Crisis Lifeline by calling or texting 988 for free, confidential support 24/7. Our office is not equipped to handle psychiatric emergencies outside of scheduled appointment times. However, if you're an established patient experiencing urgent but non-emergency concerns, you may call our office during business hours to discuss scheduling an urgent appointment. Your safety is our top priority, and emergency services are always available when you need immediate help.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Do you offer therapy or just medication management?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Dr. Holland offers both medication management and psychotherapy services. As a psychiatrist, she can provide comprehensive care that addresses both the biological and psychological aspects of mental health. Therapy sessions utilize evidence-based approaches including cognitive behavioral therapy (CBT), interpersonal therapy, and supportive counseling. Some patients benefit from therapy alone, others from medication alone, and many find that a combination approach works best. During your initial evaluation, we'll discuss which treatment modalities are most appropriate for your specific concerns and preferences. The treatment plan can always be adjusted as we learn what works best for you.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>How much do appointments cost?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Appointment costs vary depending on whether you're using insurance or self-pay. If you're using insurance, your out-of-pocket cost depends on your plan's copay, coinsurance, and whether you've met your deductible. Initial evaluations typically cost more than follow-up appointments due to their comprehensive nature and longer duration. For self-pay patients, we offer competitive rates and can provide detailed pricing information when you schedule. Payment is due at the time of service, and we accept credit cards, debit cards, and HSA/FSA cards. Our staff can provide a good faith estimate of costs before your appointment and help you understand your insurance benefits.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Can I see Dr. Holland if I already have a therapist?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Absolutely. Many patients benefit from seeing a psychiatrist for medication management while continuing therapy with a separate therapist or counselor. This collaborative care approach can be very effective, combining the benefits of both modalities. With your permission, Dr. Holland can communicate with your therapist to coordinate care and ensure everyone is working toward the same treatment goals. If you're seeing another therapist, please bring their contact information to your first appointment. This integrated approach often leads to better outcomes than either treatment alone, and we encourage coordination of care when appropriate.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Do you treat children and adolescents?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Dr. Holland treats adolescents ages 16 and older, as well as adults of all ages. For patients under 18, we require parental or guardian involvement in treatment, including consent for evaluation and ongoing participation in treatment planning. Adolescent mental health care often involves family collaboration to address developmental needs and create supportive environments. For younger children under 16, we can provide referrals to child and adolescent psychiatrists who specialize in younger age groups. Our practice focuses on the unique mental health needs of older adolescents and adults, including life transitions, academic stress, and emerging mental health conditions.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>How do I transfer my care from another psychiatrist?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Transferring your care is straightforward. When you schedule your initial appointment, let us know you're transferring from another provider and we'll send you a records release form. Having your previous treatment records helps us understand what treatments you've tried and how you've responded. Please bring a current medication list and your previous psychiatrist's contact information. If possible, try not to run out of your current medications before your appointment—we may be able to provide temporary refills until we complete your full evaluation. We'll work to make the transition as smooth as possible and ensure continuity of your mental health care.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Is my information kept confidential?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, your privacy is protected by federal HIPAA laws and professional ethical standards. All information you share during appointments is confidential and maintained in secure electronic medical records. We will not share your information with anyone without your written permission, except in limited circumstances required by law such as when there's an imminent risk of harm to yourself or others, suspected child or elder abuse, or valid court orders. You have the right to access your medical records, request corrections, and receive an accounting of disclosures. We take your privacy seriously and use secure, encrypted systems for all communications and record-keeping.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>Do you provide disability or FMLA paperwork?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, Dr. Holland can complete disability forms, FMLA paperwork, accommodation letters, and other documentation for established patients when clinically appropriate. These requests require an active treatment relationship and sufficient clinical information to support the documentation. There may be an administrative fee for completing extensive paperwork, which is typically not covered by insurance. Please allow 5-10 business days for completion of forms, as they require careful review of your medical records and thoughtful clinical assessment. It's best to discuss these needs during a scheduled appointment so we can ensure the documentation accurately reflects your clinical situation and treatment needs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant_Garamond',serif] text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
              <span>What happens if my medication isn't working?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Finding the right medication often requires patience and adjustment. If your medication isn't providing adequate symptom relief or is causing bothersome side effects, please schedule a follow-up appointment to discuss alternatives. We may need to adjust your dosage, switch to a different medication, or add complementary treatments. Most psychiatric medications require 4-6 weeks to reach full effectiveness, so we typically give each medication an adequate trial period unless side effects are intolerable. Your feedback about how medications are working is essential to finding the right treatment. There are many effective medication options available, and we'll work together to find what works best for you.
            </div>
          </details>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our team is here to help. Contact us today to learn more about our services or schedule your consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-all hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}