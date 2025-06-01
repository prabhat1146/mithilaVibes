import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-[#333]">
      <h1 className="text-3xl font-bold mb-6 text-[#800000]">Privacy Policy</h1>

      <p className="text-sm mb-4">
        This Privacy Policy describes how <strong>MithilaVibes</strong> (“we”, “our”, or “us”) collects, uses, and shares information when you use our website <strong>www.mithilavibes.com</strong> (the “Site”).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="text-sm mb-4">
        We may collect personal information that you voluntarily provide to us when you contact us, subscribe to a newsletter, or interact with forms. This may include:
      </p>
      <ul className="list-disc list-inside text-sm mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Message contents</li>
        <li>Any other information you choose to provide</li>
      </ul>

      <p className="text-sm mb-4">
        We may also collect non-personal data such as browser type, IP address, referring URLs, and usage data through analytics tools (e.g., Google Analytics).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="text-sm mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc list-inside text-sm mb-4">
        <li>To respond to your inquiries and provide support</li>
        <li>To send newsletters or updates (if subscribed)</li>
        <li>To analyze traffic and improve our website</li>
        <li>To ensure website security and prevent abuse</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing of Information</h2>
      <p className="text-sm mb-4">
        We do not sell, trade, or rent your personal information to others. We may share your data only with trusted third parties (such as analytics or hosting services) who assist us in operating our website, so long as they agree to keep your information confidential.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies and Tracking</h2>
      <p className="text-sm mb-4">
        Our website may use cookies and similar technologies to enhance user experience. You can set your browser to refuse all or some cookies, or to alert you when cookies are being sent.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
      <p className="text-sm mb-4">
        We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, misuse, or disclosure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Children’s Privacy</h2>
      <p className="text-sm mb-4">
        Our site is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you believe we may have collected data from a child, please contact us immediately.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Your Rights</h2>
      <p className="text-sm mb-4">
        You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at:{" "}
        <a href="mailto:info@mithilavibes.com" className="underline text-blue-600">
          info@mithilavibes.com
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Changes to This Privacy Policy</h2>
      <p className="text-sm mb-4">
        We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page with the new effective date.
      </p>

      <p className="text-sm mt-10 text-gray-600">
        Last updated: {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
      </p>
    </div>
  );
}
