import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/90">Effective Date: January 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[var(--color-muted)] mb-8">
            Arlene Holland is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or contact us for services.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Who We Are</h2>
          <p className="text-[var(--color-muted)] mb-6">
            Arlene Holland provides mental health counseling services. Our website is arleneholland.net. If you have any questions about this Privacy Policy, please contact us using the information provided at the end of this document.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Information We Collect</h2>
          <p className="text-[var(--color-muted)] mb-4">
            When you contact us through our website or inquiry forms, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] mb-6 space-y-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service interest or inquiry details</li>
            <li>Any other information you voluntarily provide in your message</li>
          </ul>
          <p className="text-[var(--color-muted)] mb-6">
            <strong>Important:</strong> This website does NOT collect, transmit, or store Protected Health Information (PHI) or sensitive clinical information. Any health-related information is handled exclusively through our secure, HIPAA-compliant patient portal.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">SMS Messaging</h2>
          <p className="text-[var(--color-muted)] mb-4">
            If you provide your phone number and consent to receive text messages, we may send you appointment reminders, practice updates, or other service-related communications via SMS.
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] mb-6 space-y-2">
            <li>By providing your phone number, you consent to receive SMS messages from Arlene Holland</li>
            <li>Message frequency varies based on your appointment schedule and service needs</li>
            <li>Message and data rates may apply</li>
            <li>You may opt out at any time by replying <strong>STOP</strong> to any text message</li>
            <li>For help, reply <strong>HELP</strong> or contact us directly</li>
          </ul>
          <p className="text-[var(--color-muted)] mb-6">
            For complete SMS terms and conditions, please visit our <Link href="/sms-terms" className="text-[var(--color-primary)] hover:text-[var(--color-dark)] underline transition-colors">SMS Terms page</Link>.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">How We Use Your Information</h2>
          <p className="text-[var(--color-muted)] mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] mb-6 space-y-2">
            <li>Respond to your inquiries and service requests</li>
            <li>Schedule appointments and send reminders</li>
            <li>Provide information about our services</li>
            <li>Communicate with you about your care (through secure channels only)</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Data Security</h2>
          <p className="text-[var(--color-muted)] mb-6">
            We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">HIPAA Notice</h2>
          <p className="text-[var(--color-muted)] mb-6">
            As a healthcare provider, Arlene Holland complies with the Health Insurance Portability and Accountability Act (HIPAA). <strong>Protected Health Information (PHI) is handled exclusively through our secure, HIPAA-compliant patient portal and is never transmitted through this website, email, or standard text messaging.</strong> Once you become a client, you will receive a separate Notice of Privacy Practices that explains how your health information is used and protected in accordance with HIPAA regulations.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Third-Party Services</h2>
          <p className="text-[var(--color-muted)] mb-6">
            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Cookies and Analytics</h2>
          <p className="text-[var(--color-muted)] mb-6">
            Our website may use cookies and similar technologies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Your Rights</h2>
          <p className="text-[var(--color-muted)] mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] mb-6 space-y-2">
            <li>Access the personal information we have collected about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal and regulatory requirements)</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Withdraw consent for SMS messaging by texting STOP</li>
          </ul>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Changes to This Policy</h2>
          <p className="text-[var(--color-muted)] mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>

          <h2 className="font-serif text-2xl text-[var(--color-ink)] mt-10 mb-4">Contact Us</h2>
          <p className="text-[var(--color-muted)] mb-4">
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mb-6">
            <p className="text-[var(--color-ink)] mb-2"><strong>Arlene Holland</strong></p>
            <p className="text-[var(--color-muted)] mb-2">Email: contact@arleneholland.net</p>
            <p className="text-[var(--color-muted)]">Website: arleneholland.net</p>
          </div>
        </div>
      </div>

      <footer className="bg-[var(--color-ink)] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sms-terms" className="text-white/80 hover:text-white transition-colors">
              SMS Terms
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-6">
            © {new Date().getFullYear()} Arlene Holland. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}