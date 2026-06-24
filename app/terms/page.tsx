import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Arlene Holland',
  description: 'Terms of Service for Arlene Holland Mental Health Services',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl mb-4">Terms of Service</h1>
          <p className="text-lg text-white/90">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="bg-white max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-muted)] text-lg mb-8">
            Please read these Terms of Service carefully before using the services provided by Arlene Holland.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Acceptance of Terms</h2>
          <p className="text-[var(--color-ink)] mb-4">
            By accessing and using this website or engaging with services provided by Arlene Holland, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website or services.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Description of Services</h2>
          <p className="text-[var(--color-ink)] mb-4">
            This website provides information about mental health services offered by Arlene Holland. The content on this website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            All information provided on this website is general in nature and does not constitute medical advice. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Not Emergency Care</h2>
          <p className="text-[var(--color-ink)] mb-4">
            This website and the services described herein are not intended for emergency situations. If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room immediately.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            For crisis support, contact the National Suicide Prevention Lifeline at 988 or the Crisis Text Line by texting HOME to 741741.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Insurance and Billing</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Arlene Holland does not directly bill insurance companies. Clients are responsible for payment at the time of service. A superbill can be provided upon request for clients to submit to their insurance company for potential reimbursement.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            Payment terms, cancellation policies, and fee schedules will be discussed and agreed upon prior to beginning services.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">HIPAA and Privacy</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Arlene Holland is committed to protecting your privacy and maintaining the confidentiality of your protected health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            Please review our Privacy Policy for detailed information about how we collect, use, and protect your personal and health information.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Limitation of Liability</h2>
          <p className="text-[var(--color-ink)] mb-4">
            To the fullest extent permitted by law, Arlene Holland shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of this website or services.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            The information provided on this website is provided "as is" without any representations or warranties, express or implied.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Governing Law</h2>
          <p className="text-[var(--color-ink)] mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of the state in which services are provided, without regard to its conflict of law provisions.
          </p>
          <p className="text-[var(--color-ink)] mb-4">
            Any disputes arising from these terms or your use of services shall be resolved in the appropriate courts of that jurisdiction.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Changes to Terms</h2>
          <p className="text-[var(--color-ink)] mb-4">
            Arlene Holland reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of this website or services following the posting of changes constitutes acceptance of those changes.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Contact Information</h2>
          <p className="text-[var(--color-ink)] mb-4">
            If you have any questions about these Terms of Service, please contact:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mt-6">
            <p className="text-[var(--color-ink)] font-semibold mb-2">Arlene Holland</p>
            <p className="text-[var(--color-muted)]">Mental Health Services</p>
            <p className="text-[var(--color-muted)]">arleneholland.net</p>
          </div>
        </div>
      </section>
    </main>
  )
}