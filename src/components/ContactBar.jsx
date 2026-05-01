'use client';

// Email is split via character codes to prevent scraping bots from harvesting it.
// Replace the parts below with your actual address.
const EMAIL_USER = 'hello';
const EMAIL_DOMAIN = 'trincellshelvin';
const EMAIL_TLD = 'com';
const EMAIL_DISPLAY = [
  EMAIL_USER,
  String.fromCharCode(64), // @
  EMAIL_DOMAIN,
  String.fromCharCode(46), // .
  EMAIL_TLD,
].join('');
const EMAIL_HREF = 'mailto:' + EMAIL_DISPLAY;

const buttons = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/1234567890',
    color: '#25D366',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.875L.057 23.776a.5.5 0 0 0 .614.637l6.083-1.594A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.877 9.877 0 0 1-5.031-1.377l-.36-.214-3.733.978.995-3.638-.235-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/placeholder', // Replace with your LinkedIn URL
    color: '#0A66C2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/placeholder', // Replace with your GitHub URL
    color: '#f5f5f7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: EMAIL_DISPLAY,
    href: EMAIL_HREF,
    color: '#a78bfa',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function ContactBar() {
  return (
    <div
      style={{ backgroundColor: '#050509', borderBottom: '1px solid rgba(245,245,247,0.08)' }}
      className="w-full py-5 px-8"
    >
      <div className="container mx-auto flex flex-wrap gap-3 justify-center md:justify-start">
        {buttons.map(({ label, href, color, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            style={{
              '--glow-color': color,
              color: color,
              borderColor: `${color}33`,
            }}
            className="contact-pill inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200"
          >
            {icon}
            {label}
          </a>
        ))}
      </div>

      <style>{`
        .contact-pill {
          background: transparent;
          text-decoration: none;
        }
        .contact-pill:hover {
          background: color-mix(in srgb, var(--glow-color) 10%, transparent);
          border-color: var(--glow-color) !important;
          box-shadow: 0 0 12px color-mix(in srgb, var(--glow-color) 35%, transparent),
                      0 0 24px color-mix(in srgb, var(--glow-color) 15%, transparent);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
