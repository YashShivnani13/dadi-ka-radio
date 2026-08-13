"use client";

import { useEffect, useState } from "react";

function getIstParts() {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const parts = formatter.formatToParts(new Date());
  const hour = parts.find((p) => p.type === "hour")?.value ?? "--";
  const minute = parts.find((p) => p.type === "minute")?.value ?? "--";
  const period = parts.find((p) => p.type === "dayPeriod")?.value ?? "";

  return { hour, minute, period };
}

export default function Clock() {
  const [time, setTime] = useState<{
    hour: string;
    minute: string;
    period: string;
  } | null>(null);

  useEffect(() => {
    setTime(getIstParts());
    const id = setInterval(() => setTime(getIstParts()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-baseline gap-1.5 text-warm-white/90">
      <span className="tabular text-[13px] sm:text-sm font-semibold tracking-wide">
        {time ? (
          <>
            {time.hour}
            <span className="colon-blink">:</span>
            {time.minute}
          </>
        ) : (
          "--:--"
        )}
      </span>
      <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.18em] text-warm-white/55">
        {time?.period ?? ""} IST
      </span>
    </div>
  );
}
