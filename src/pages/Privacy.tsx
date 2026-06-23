import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Hot Shot Aviation · Last Updated: June 23, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>Hot Shot Aviation ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you rent airplanes from us or participate in instruction or a lesson.</p>
            <p className="mt-3">By providing your personal information to us, you consent to the practices described in this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <p>We collect the following categories of personal information from our customers:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Full name</li>
              <li>Phone number (including mobile number if provided for SMS communications)</li>
              <li>Email address</li>
              <li>Pilot credentials (including but not limited to your pilot certificate, instructor certificate, and medical certificate)</li>
              <li>Emergency contact information</li>
            </ul>
            <p className="mt-3">We collect this information directly from you when you make a reservation, register for a lesson, complete a rental agreement, or otherwise contact us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Personal Information</h2>
            <p>We use the personal information we collect solely for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>To communicate with you directly about your equipment rental, including reservation confirmations, pickup and return reminders, and equipment availability.</li>
              <li>To communicate with you directly about lessons or instruction programs you have enrolled in, including scheduling, updates, and cancellations.</li>
              <li>To process billing and payment for rental or lesson services.</li>
              <li>To respond to your inquiries and provide customer support.</li>
            </ul>
            <p className="mt-3">We do not use your personal information for marketing to third parties, data analytics, or any purpose beyond direct communication related to your rental or lesson activities with us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. SMS and Text Message Communications</h2>
            <p>If you provide us with a mobile phone number, we may send you text messages (SMS) related to your reservations, lesson schedules, billing reminders, or other direct communications about your account.</p>
            <p className="mt-3">By providing your mobile phone number, you consent to receive SMS messages from us. Standard message and data rates may apply. You may opt out of SMS communications at any time by replying STOP to any message or by contacting us directly.</p>
            <p className="mt-3 font-semibold">SMS consent and your phone number provided for SMS purposes are not shared with third parties or affiliates for their marketing purposes. SMS consent is not shared with third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. How We Share Your Personal Information</h2>
            <p>We do not sell, rent, or trade your personal information to any third parties. We share your information only in the following limited circumstances:</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Instructors and Staff</h3>
            <p>Your name and contact information may be shared with our instructors and internal staff members who are directly involved in delivering the lesson or rental service you have requested. This sharing is necessary to coordinate your experience and ensure instructors can communicate with you about your scheduled activities.</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Legal Requirements</h3>
            <p>We may disclose your personal information if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of all or a portion of our business assets, your personal information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have regarding your information.</p>
            <p className="mt-3">We do not share your personal information with any other third parties, affiliates, marketing partners, or data brokers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, to comply with our legal obligations, and to resolve any disputes. When your information is no longer needed, we will securely delete or anonymize it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Access: You may request a copy of the personal information we hold about you.</li>
              <li>Correction: You may request that we correct inaccurate or incomplete information.</li>
              <li>Deletion: You may request that we delete your personal information, subject to any legal obligations we have to retain it.</li>
              <li>Opt-Out of SMS: You may opt out of SMS communications at any time by replying STOP or contacting us directly.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us using the information provided in Section 10.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Children's Privacy</h2>
            <p>Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If a parent or guardian believes their child has provided us with personal information, please contact us immediately and we will take steps to delete it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, or to exercise your rights regarding your personal information, please contact us:</p>
            <div className="mt-3">
              <p className="font-semibold">Hot Shot Aviation</p>
              <p>Address: 16425 Hart St, Van Nuys CA, 91406</p>
              <p>Phone: 424-407-1869</p>
              <p>Email: info@hotshotaviation.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Updates to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of material changes by posting the updated policy on our website or by contacting you directly. Your continued use of our services after any update constitutes your acceptance of the revised policy.</p>
          </section>

          <div className="pt-8">
            <Link to="/" className="text-primary hover:underline">← Back to home</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
