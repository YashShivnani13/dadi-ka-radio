"use client";

import { useEffect, useState } from "react";

export default function ListenerCount() {
  const [count, setCount] = useState(142);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        const drift = Math.floor(Math.random() * 5) - 2; // -2..+2
        const next = prev + drift;
        return Math.min(212, Math.max(96, next));
      });
    }, 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1.5 rounded-full text-warm-white/85">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_6px_1px_rgba(231,154,69,0.8)]" />
      </span>
      <span className="tabular text-[11px] sm:text-xs font-medium tracking-wide whitespace-nowrap">
        {count} सुन रहे हैं
      </span>
    </div>
  );
}
