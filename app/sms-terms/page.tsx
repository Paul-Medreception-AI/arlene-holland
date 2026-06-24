import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Terms & Conditions | Arlene Holland',
  description: 'SMS messaging terms and conditions for Arlene Holland mental health services. Text STOP to unsubscribe.',
}

export default function SMSTermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl mb-6">SMS Terms & Conditions</h1>
          <p className="text-xl text-[var(--color-cream)] max-w-2xl mx-auto">
            Important information about text message communications from Arlene Holland
          </p>
        </div>
        
        <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-2xl p-6 max-w-xl mx-auto mt-8 text-[var(--color-ink)]">
          <p className="font-semibold mb-2">Quick Reference</p>
          <p className="text-sm leading-relaxed">
            Text <strong>STOP</strong> to unsubscribe | Text <strong>HELP</strong> for help<br />
            Message and data rates may apply | Frequency varies
          </p>
        </div>
      </section>

      <section className="bg-white max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">Program Description</h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Arlene Holland offers an SMS messaging program to send appointment reminders, mental health tips, practice updates, and other service-related information to clients and interested parties who have opted in to receive text messages.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">Opt-In Process</h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              By providing your mobile phone number and opting in through our website, intake forms, or by texting a keyword to our number, you expressly consent to receive SMS messages from Arlene Holland at the mobile number provided.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Consent to receive SMS messages is not a condition of purchasing any goods or services. You may opt out at any time.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">Message Frequency</h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Message frequency varies. You may receive up to 4 messages per month, though actual frequency may be lower depending on appointment schedules and practice updates.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">Message & Data Rates</h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Message and data rates may apply. Standard text messaging rates from your mobile carrier will apply to all SMS correspondence. Please contact your mobile carrier for pricing plans and details.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">How to Opt-Out</h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us. You will receive a confirmation message that you have been unsubscribed.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              After opting out, you will no longer receive SMS messages from Arlene Holland unless you opt in again.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">Help & Support</h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              For help or more information about our SMS program, reply <strong>HELP</strong> to any message or contact us directly through the methods listed below.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">Supported Carriers</h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              Our SMS program is supported by all major carriers, including but not limited to:
            </p>
            <ul className="text-[var(--color-ink)] leading-relaxed space-y-2 list-disc list-inside">
              <li>AT&T</li>
              <li>Verizon Wireless</li>
              <li>T-Mobile</li>
              <li>Sprint</li>
              <li>Boost Mobile</li>
              <li>U.S. Cellular</li>
            </ul>
            <p className="text-[var(--color-ink)] leading-relaxed mt-4">
              Carriers are not liable for delayed or undelivered messages.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">Privacy & Data Protection</h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              Your privacy is important to us. We will not share, sell, or distribute your mobile phone number to third parties for marketing purposes. Your information will be handled in accordance with our Privacy Policy and applicable HIPAA regulations.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              SMS messages may contain protected health information. Please ensure your mobile device is secure and protected with a password or biometric lock.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-dark)] mb-4">Contact Information</h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              If you have questions about our SMS program or these terms and conditions, please contact:
            </p>
            <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl p-6">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Arlene Holland</p>
              <p className="text-[var(--color-ink)]">Mental Health Services</p>
              <p className="text-[var(--color-ink)]">arleneholland.net</p>
            </div>
          </div>

          <div className="animate-fade-up border-t border-[var(--color-border)] pt-8">
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              These SMS Terms & Conditions are effective as of the date of your opt-in and may be updated from time to time. Continued participation in the SMS program after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}