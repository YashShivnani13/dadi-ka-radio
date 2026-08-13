import type { Song } from "@/data/playlists";
import Vinyl from "./Vinyl";
import ProgressBar from "./ProgressBar";
import TransportControls from "./TransportControls";

export default function DesktopPlayer({
  song,
  isPlaying,
  currentTime,
  duration,
  onSeek,
  onTogglePlay,
  onPrev,
  onNext,
}: {
  song: Song;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onSeek: (t: number) => void;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="glass-panel hidden w-full max-w-[800px] items-center gap-5 rounded-full py-3.5 pl-4 pr-6 md:flex">
      <Vinyl isPlaying={isPlaying} size={76} />

      <div className="flex w-[210px] shrink-0 flex-col justify-center">
        <p className="truncate text-[15px] font-semibold leading-tight text-warm-white">
          {song.title}
        </p>

        <p className="truncate text-[12.5px] font-medium leading-tight text-warm-white/65">
          {song.artist}
        </p>

        {song.film && (
          <p className="truncate text-[11px] leading-tight text-warm-white/40">
            {song.film}
            {song.year ? ` • ${song.year}` : ""}
          </p>
        )}
      </div>

      <div className="h-10 w-px shrink-0 bg-warm-white/10" />

      <div className="min-w-0 flex-1">
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={onSeek}
        />
      </div>

      <div className="h-10 w-px shrink-0 bg-warm-white/10" />

      <TransportControls
        isPlaying={isPlaying}
        onTogglePlay={onTogglePlay}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}