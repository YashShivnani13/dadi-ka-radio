"use client";

import { useCallback, useRef, useState } from "react";

function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${rem.toString().padStart(2, "0")}`;
}

export default function ProgressBar({
  currentTime,
  duration,
  onSeek,
}: {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [dragRatio, setDragRatio] = useState<number | null>(null);

  const ratioFromEvent = useCallback((clientX: number) => {
    const rail = railRef.current;
    if (!rail) return 0;
    const rect = rail.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    return Math.min(1, Math.max(0, ratio));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const ratio = ratioFromEvent(e.clientX);
    setDragging(true);
    setDragRatio(ratio);
    onSeek(ratio * duration);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const ratio = ratioFromEvent(e.clientX);
    setDragRatio(ratio);
    onSeek(ratio * duration);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    setDragRatio(null);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const liveRatio =
    dragging && dragRatio !== null
      ? dragRatio
      : duration > 0
        ? currentTime / duration
        : 0;
  const percent = Math.min(100, Math.max(0, liveRatio * 100));

  return (
    <div className="flex w-full items-center gap-2.5">
      <span className="tabular text-[10px] sm:text-[11px] text-warm-white/60 w-8 shrink-0">
        {formatTime(currentTime)}
      </span>

      <div
        ref={railRef}
        role="slider"
        aria-label="Seek"
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.round(currentTime)}
        tabIndex={0}
        className="group relative flex-1 touch-none py-3"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-warm-white/20">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-deep to-amber"
            style={{
              width: `${percent}%`,
              boxShadow: "0 0 8px 0 rgba(231,154,69,0.65)",
            }}
          />
        </div>
        <div
          className="pointer-events-none absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-amber opacity-0 shadow-[0_0_6px_rgba(231,154,69,0.9)] transition-opacity duration-150 group-hover:opacity-100"
          style={{ left: `calc(${percent}% - 5px)` }}
        />
      </div>

      <span className="tabular text-[10px] sm:text-[11px] text-warm-white/60 w-8 shrink-0 text-right">
        {formatTime(duration)}
      </span>
    </div>
  );
}
