import React from "react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-[#333]">
      <h1 className="text-3xl font-bold mb-6 text-[#800000]">Terms of Service</h1>

      <p className="text-sm mb-4">
        These Terms of Service ("Terms") govern your access to and use of the website operated by <strong>MithilaVibes</strong> (“we”, “our”, or “us”). By accessing or using our website <strong>www.mithilavibes.com</strong> (the "Site"), you agree to be bound by these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of the Site</h2>
      <p className="text-sm mb-4">
        You agree to use the Site for lawful purposes only. You must not use the Site in a way that violates any applicable laws, infringes on the rights of others, or interferes with the operation of the Site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
      <p className="text-sm mb-4">
        All content on this Site, including text, graphics, images, logos, and designs, is the property of MithilaVibes or its content suppliers and is protected by intellectual property laws. You may not copy, reproduce, distribute, or modify any content without written permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. User Submissions</h2>
      <p className="text-sm mb-4">
        If you submit any content (e.g., comments, suggestions), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute such content.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Links</h2>
      <p className="text-sm mb-4">
        Our Site may contain links to third-party websites. We are not responsible for the content or practices of those websites. Use them at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Disclaimer of Warranties</h2>
      <p className="text-sm mb-4">
        The Site is provided “as is” without warranties of any kind. We do not guarantee that the Site will be error-free, secure, or uninterrupted.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
      <p className="text-sm mb-4">
        We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use the Site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Termination</h2>
      <p className="text-sm mb-4">
        We may suspend or terminate your access to the Site at any time for any reason, including violation of these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Governing Law</h2>
      <p className="text-sm mb-4">
        These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to Terms</h2>
      <p className="text-sm mb-4">
        We reserve the right to update or change these Terms at any time. Changes will be posted on this page. Continued use of the Site constitutes acceptance of the updated Terms.
      </p>

      <p className="text-sm mt-10">
        If you have any questions about these Terms, please contact us at:{" "}
        <a href="mailto:info@mithilavibes.com" className="underline text-blue-600">
          info@mithilavibes.com
        </a>
      </p>

      <p className="text-sm mt-6 text-gray-600">
        Last updated: {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
      </p>
    </div>
  );
}
