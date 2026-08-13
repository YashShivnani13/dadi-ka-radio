export default function Vinyl({
  isPlaying,
  size = 76,
}: {
  isPlaying: boolean;
  size?: number;
}) {
  return (
    <div
      className="relative shrink-0 select-none"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        data-playing={isPlaying}
        className="vinyl-spin h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #17110c 0%, #17110c 27%, #241a12 27.5%, #241a12 33%, #17110c 33.5%, #17110c 46%, #241a12 46.5%, #241a12 52%, #17110c 52.5%, #17110c 65%, #241a12 65.5%, #241a12 70%, #17110c 70.5%, #17110c 100%)",
          boxShadow:
            "0 6px 18px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* center label */}
        <div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{
            width: size * 0.4,
            height: size * 0.4,
            background:
              "radial-gradient(circle at 40% 35%, #f0b169 0%, #d97f2c 55%, #b5641c 100%)",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.25)",
          }}
        >
          <span
            className="font-semibold text-charcoal/80"
            style={{ fontSize: size * 0.13 }}
          >
            दा
          </span>
        </div>

        {/* spindle hole */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b0805]"
          style={{ width: size * 0.045, height: size * 0.045 }}
        />
      </div>

      {/* subtle sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 32%)",
        }}
      />
    </div>
  );
}
