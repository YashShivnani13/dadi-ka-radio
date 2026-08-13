export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3 sm:gap-4 text-warm-white/80">
      <a
        href="https://www.instagram.com/flosy.global/?utm_source=ig_web_button_share_sheet"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Dadi Ka Radio on Instagram"
        className="group flex items-center gap-1.5 transition-colors hover:text-amber"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="opacity-80 transition-opacity group-hover:opacity-100"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>

        <span className="hidden sm:inline text-[15px] font-medium tracking-wide">
          Instagram
        </span>
      </a>

      <span className="h-3 w-px bg-warm-white/20" />

      <a
        href="https://github.com/YashShivnani13/dadi-ka-radio"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Dadi Ka Radio on GitHub"
        className="group flex items-center gap-1.5 transition-colors hover:text-amber"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="opacity-80 transition-opacity group-hover:opacity-100"
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.55 2.36 1.11 2.94.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04a9.4 9.4 0 0 1 5 0c1.9-1.31 2.74-1.04 2.74-1.04.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.57 5.01.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
        </svg>

        <span className="hidden sm:inline text-[15px] font-medium tracking-wide">
          GitHub
        </span>
      </a>
    </div>
  );
}