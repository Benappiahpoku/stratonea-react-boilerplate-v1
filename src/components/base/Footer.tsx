/*
  Footer.tsx
  Stratonea App Footer Component (React/TypeScript)

  - Improved for visibility and accessibility.
  - Uses a darker background, stronger contrast, and better spacing.
  - Ghana mobile-first, accessible, and fully documented.
*/

import React, { useState } from "react";

// ===== [New Feature] START: WhatsApp and Email Icons (SVG Inline) =====
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const EnvelopeIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 01-1.42 0L4 6.41V20h16V6.41z" />
  </svg>
);

const MobileIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zm0 18H7V4h10v16zm-5-2a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
);

const CopyIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M8 2a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0015.414 5L13 2.586A2 2 0 0011.586 2H8zm0 2h3v3a1 1 0 001 1h3v8H8V4zm5 1.414V5h1.586L13 3.414z" />
  </svg>
);
// ===== [New Feature] END: WhatsApp and Email Icons =====

// ===== [New Feature] START: Footer Component =====
const Footer: React.FC = () => {
  // State for copy-to-clipboard feedback
  const [copied, setCopied] = useState(false);

  // WhatsApp share message and URL
  const shareMessage =
    "Hey! I found this helpful free Receipt maker tool. Thought you might like it. https://receipt.stratonea.com/";
  const whatsAppShareUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

  // Copy MTN MoMo number to clipboard and show feedback
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      alert("Could not copy number. Please try manually.");
    }
  };

  return (
    <footer className="bg-primary text-white mt-auto border-t border-primary-700 shadow-lg">
      {/* Main container with max width and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Two-column grid: vertical on mobile, horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Help Us Improve - Share Your Feedback
            </h3>
            <div className="space-y-3">
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/233594093926"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-primary-200 transition-colors"
              >
                <WhatsAppIcon className="text-xl" />
                <span className="text-white">WhatsApp: +233 59 409 3926</span>
              </a>

              {/* Share Free Tool via WhatsApp */}
              <a
                href={whatsAppShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-primary-200 transition-colors"
              >
                <WhatsAppIcon className="text-xl" />
                <span className="font-bold text-white">Share this Free Tool</span>
              </a>

              {/* Email Contact */}
              <a
                href="mailto:stratoneaconsult@gmail.com"
                className="flex items-center justify-center gap-2 hover:text-primary-200 transition-colors"
              >
                <EnvelopeIcon className="text-xl" />
                <span className="text-white">stratoneaconsult@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support Our Mission</h3>
            <p className="text-sm text-primary-100">
              Help us keep this tool free for SMEs across Ghana
            </p>
            {/* Mobile Money Button */}
            <button
              onClick={() => copyToClipboard("0594093926")}
              className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-600 rounded-lg transition-colors"
            >
              <MobileIcon className="text-xl" />
              <span className="text-white">MTN MoMo: 0594093926</span>
              <CopyIcon className="ml-2 text-sm opacity-75" />
            </button>
            <p className="text-xs text-primary-200">
              {copied ? "MoMo number copied! Thank you for your support! 🙏" : "Click to copy number"}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-500 my-8 max-w-xs mx-auto"></div>

        {/* Footer Bottom - Always Centered */}
        <div className="text-center space-y-4">
          <p className="text-sm text-primary-100">
            © {new Date().getFullYear()} Created with
            <span className="mx-1 animate-pulse" role="img" aria-label="love">
              ❤️
            </span>
            by{" "}
            <a
              href="https://www.teklumin.com/"
              className="underline hover:text-primary-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              TekLumin
            </a>
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-primary-100">
            <span>Made in</span>
            <img
              src="/ghana-flag.webp"
              alt="Ghana Flag"
              className="w-4 h-4 rounded-sm"
            />
            <span>Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
  All styling is handled with Tailwind CSS utility classes for clarity and mobile-first workflow.
  - WhatsApp and email icons are inline SVGs for performance and offline support.
  - Copy-to-clipboard uses browser API with feedback.
  - Footer is responsive and accessible for Ghanaian users.
  - Footer background and text colors are optimized for visibility.
*/