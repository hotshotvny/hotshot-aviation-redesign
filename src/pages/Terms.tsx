import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">Hot Shot Aviation · Last Updated: June 23, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Agreement to Terms</h2>
            <p>These Terms and Conditions ("Terms") govern your use of the services offered by Hot Shot Aviation ("we," "us," or "our"), including the rental of our airplanes and participation in instruction or a lesson. By renting equipment, booking a lesson, or otherwise engaging with our services, you agree to be bound by these Terms.</p>
            <p className="mt-3">If you do not agree to these Terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Services Offered</h2>
            <p>We provide the following services:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Aircraft rental.</li>
              <li>Guided instruction and lessons for new or existing pilot and instructor ratings.</li>
              <li>Associated booking, scheduling, and customer support services.</li>
            </ul>
            <p className="mt-3">We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Rental Agreement</h2>
            <p>Each renter or student will be required to complete and abide by a Rental Agreement prepared by Hot Shot Aviation prior to and at any time while renting an aircraft or using our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. SMS and Text Message Communications</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Program Description</h3>
            <p>By providing your mobile phone number and opting in to SMS communications, you consent to receive text messages from Hot Shot Aviation related to your rentals, lessons, and account. The types of messages you may receive include:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Reservation confirmations and booking reminders for equipment rentals and lessons.</li>
              <li>Appointment reminders for upcoming reservations.</li>
              <li>Account notifications, such as changes to your booking, billing updates, or payment confirmations.</li>
              <li>Safety and weather alerts relevant to your scheduled reservation.</li>
              <li>General service updates and important notices about your reservation or account.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">SMS Program Terms</h3>
            <p>The following terms apply to all SMS communications from Hot Shot Aviation:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 font-semibold">
              <li>Messaging frequency may vary depending on your reservations, lessons, and activity.</li>
              <li>Message and data rates may apply. Check with your mobile carrier for details.</li>
              <li>To opt out of SMS messages at any time, text STOP to 424-407-1869.</li>
              <li>For assistance, text HELP to 424-407-1869 or visit our website at www.hotshotaviation.com.</li>
            </ul>
            <p className="mt-3">Opting out of SMS communications will not affect your ability to use our services, but you may miss important reminders and notifications related to your bookings. You may re-enroll in SMS communications at any time by contacting us or following enrollment instructions on our website.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Supported Carriers</h3>
            <p>SMS messaging is available on most major U.S. carriers. We are not responsible for delayed or undelivered messages due to factors beyond our control, including carrier service issues.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Privacy Policy</h2>
            <p>Your use of our services is also governed by our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and sharing of your personal information.</p>
            <p className="mt-3 font-semibold">Visit www.hotshotaviation.com for our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Modifications to These Terms</h2>
            <p>We reserve the right to update or modify these Terms at any time. Changes will be effective upon posting the updated Terms on our website or notifying you directly. Your continued use of our services after any modification constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className="mt-3">
              <p className="font-semibold">Hot Shot Aviation</p>
              <p>Address: 16425 Hart St, Van Nuys CA, 91406</p>
              <p>Phone: 424-407-1869</p>
              <p>Email: info@hotshotaviation.com</p>
            </div>
          </section>

          <div className="pt-8">
            <Link to="/" className="text-primary hover:underline">← Back to home</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
