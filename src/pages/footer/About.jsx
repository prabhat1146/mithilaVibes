import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const {t}=useTranslation();
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-[#333]">
      <h1 className="text-3xl font-bold mb-6 text-[#800000]">{t("about_mithilaVibes")}</h1>

      <p className="text-sm mb-4">
        <strong>MithilaVibes</strong> is a digital platform dedicated to celebrating the rich cultural heritage, traditions, and artistic expressions of the Mithila region. Our mission is to preserve, promote, and share the essence of Mithila through curated content, stories, artwork, and community collaboration.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Our Vision</h2>
      <p className="text-sm mb-4">
        We envision a world where the unique traditions of Mithila—such as Madhubani art, Maithili language, festivals, and folklore—are not only preserved but thrive in the digital era. MithilaVibes aims to bridge the gap between generations and geographies by connecting enthusiasts, artists, and storytellers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">What We Do</h2>
      <ul className="list-disc list-inside text-sm mb-4 space-y-2">
        <li>Showcase original and traditional Mithila art and crafts</li>
        <li>Share cultural blogs, poetry, and articles in Maithili and English</li>
        <li>Support local artisans by giving them a digital platform</li>
        <li>Promote Mithila’s heritage through events and collaborations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Join the Movement</h2>
      <p className="text-sm mb-4">
        Whether you're an artist, a history enthusiast, or someone with deep roots in Mithila, you are welcome to join our community. Together, let's spread the colors and stories of Mithila across the world.
      </p>

      <p className="text-sm mt-10 text-gray-600">
        For collaborations or suggestions, feel free to contact us at:{" "}
        <a href="mailto:info@mithilavibes.com" className="underline text-blue-600">
          info@mithilavibes.com
        </a>
      </p>
    </div>
  );
};

export default About;
