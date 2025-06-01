import React from "react";

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-[#333]">
      <h1 className="text-3xl font-bold mb-6 text-[#800000]">Disclaimer</h1>

      <p className="text-sm mb-4">
        The information provided by <strong>MithilaVibes</strong> (“we,” “us,” or “our”) on this website is for general informational and cultural purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. External Links Disclaimer</h2>
      <p className="text-sm mb-4">
        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. We do not investigate, monitor, or check such external links for accuracy, adequacy, validity, reliability, availability, or completeness. 
        <br />
        We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Artistic & Cultural Content</h2>
      <p className="text-sm mb-4">
        MithilaVibes showcases traditional and modern art, literature, and cultural elements from the Mithila region. All such content is intended to promote appreciation and awareness. We do not claim ownership of any public domain artwork unless explicitly stated. 
        <br />
        If any content is believed to violate copyrights, please contact us at <a href="mailto:info@mithilavibes.com" className="underline text-blue-600">info@mithilavibes.com</a> for prompt resolution.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Professional Advice Disclaimer</h2>
      <p className="text-sm mb-4">
        The content on this website does not constitute professional advice. For any specific advice or action, consult with an appropriate professional (e.g., legal, medical, financial, or cultural expert).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. No Liability</h2>
      <p className="text-sm mb-4">
        Under no circumstance shall we be held liable for any loss or damage incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Changes to This Disclaimer</h2>
      <p className="text-sm mb-4">
        We reserve the right to modify this disclaimer at any time, without prior notice. Your continued use of the site after changes are posted constitutes your acceptance of the updated disclaimer.
      </p>

      <p className="text-sm mt-10 text-gray-600">
        Last updated: {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
      </p>
    </div>
  );
}
