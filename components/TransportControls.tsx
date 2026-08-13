function PrevIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm3.7 6.15 9.14-6.32A1 1 0 0 1 20.4 5.65v12.7a1 1 0 0 1-1.56.83L9.7 12.86a1 1 0 0 1 0-1.71Z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm-3.7 6.15L5.16 4.83A1 1 0 0 0 3.6 5.65v12.7a1 1 0 0 0 1.56.83l9.14-6.32a1 1 0 0 0 0-1.71Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.5a1 1 0 0 1 1.53-.85l10 6.5a1 1 0 0 1 0 1.7l-10 6.5A1 1 0 0 1 8 18.5v-13Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="5" width="4.5" height="14" rx="1.2" />
      <rect x="13.5" y="5" width="4.5" height="14" rx="1.2" />
    </svg>
  );
}

export default function TransportControls({
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
}: {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <button
        type="button"
        aria-label="Previous track"
        onClick={onPrev}
        className="flex h-11 w-11 items-center justify-center rounded-full text-warm-white/75 transition-colors hover:text-warm-white active:scale-95"
      >
        <PrevIcon />
      </button>

      <button
        type="button"
        aria-label={isPlaying ? "Pause" : "Play"}
        onClick={onTogglePlay}
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full transition-transform active:scale-95"
        style={{
          background: "linear-gradient(155deg, #f0af62 0%, #d9791f 100%)",
          boxShadow:
            "0 0 0 1.5px rgba(255,255,255,0.35), 0 6px 18px -3px rgba(217,121,31,0.65)",
        }}
      >
        <span className="text-charcoal">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </span>
      </button>

      <button
        type="button"
        aria-label="Next track"
        onClick={onNext}
        className="flex h-11 w-11 items-center justify-center rounded-full text-warm-white/75 transition-colors hover:text-warm-white active:scale-95"
      >
        <NextIcon />
      </button>
    </div>
  );
}
