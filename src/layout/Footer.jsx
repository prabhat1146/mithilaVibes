import React from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#800000] text-[#FAF3E0] px-6 pt-10 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t("mithilaVibes")}</h2>
          <p className="text-sm">
            <Typewriter
              words={[t("mithilaVibes_footer_desc")]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{t("quick_links")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#FFD700]">
                {t("home")}
              </a>
            </li>
            <li>
              <a href="/pages/about" className="hover:text-[#FFD700]">
                {t("about")}
              </a>
            </li>
            <li>
              <a href="/pages/gallery" className="hover:text-[#FFD700]">
                {t("gallery")}
              </a>
            </li>
            <li>
              <a href="/pages/contact" className="hover:text-[#FFD700]">
                {t("contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{t("contact_us")}</h3>
          <p className="text-sm mb-4">
            {t("email")}:{" "}
            <a
              href="mailto:info@mithilavibes.com"
              className="underline hover:text-[#FFD700]"
            >
              info@mithilavibes.com
            </a>
          </p>
          <div className="flex space-x-4 text-[#FFD700]">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#E34234]"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.073C22 6.48 17.523 2 12 2S2 6.48 2 12.073c0 5.02 3.657 9.175 8.438 9.93v-7.03h-2.54v-2.9h2.54v-2.21c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.883h2.773l-.443 2.9h-2.33v7.03C18.343 21.248 22 17.093 22 12.073z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-[#E34234]"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.96-2.46c-.88.52-1.86.9-2.9 1.1A4.5 4.5 0 0016.5 2a4.48 4.48 0 00-4.49 4.49c0 .35.04.69.12 1.02A12.85 12.85 0 013 4.15a4.49 4.49 0 001.39 6.01 4.43 4.43 0 01-2.04-.56v.06a4.49 4.49 0 003.6 4.41 4.5 4.5 0 01-2.03.08 4.49 4.49 0 004.19 3.12A9 9 0 012 19.54 12.8 12.8 0 008.29 21c7.54 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#E34234]"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.5a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 2a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section with Disclaimer and Links */}
      <div className="mt-10 border-t border-[#E34234] pt-6 text-center text-xs text-[#FFD700] space-y-2">
        <p>
          &copy; {new Date().getFullYear()} {t("mithilaVibes")}.{" "}
          {t("all_rights_reserved")}.
        </p>
        <p className="text-[#FAF3E0] text-[11px]">
          {t("mithilaVibes_footer_policy_desc")}
        </p>
        <div className="flex justify-center space-x-4 text-[11px]">
          <a
            href="/pages/privacy-policy"
            className="hover:underline hover:text-[#FFD700]"
          >
            {t("privacy_policy")}
          </a>
          <a
            href="/pages/terms-of-service"
            className="hover:underline hover:text-[#FFD700]"
          >
            {t("terms_of_service")}
          </a>
          <a
            href="/pages/disclaimer"
            className="hover:underline hover:text-[#FFD700]"
          >
            {t("disclaimer")}
          </a>
        </div>
      </div>
    </footer>
  );
}
