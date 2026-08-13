import type { Song } from "@/data/playlists";
import Vinyl from "./Vinyl";
import ProgressBar from "./ProgressBar";
import TransportControls from "./TransportControls";

export default function MobilePlayer({
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
    <div className="glass-panel flex w-full flex-col gap-3 rounded-[26px] px-4 pb-4 pt-4 md:hidden">
      <div className="flex items-center gap-3.5">
        <Vinyl isPlaying={isPlaying} size={54} />

        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold leading-tight text-warm-white">
            {song.title}
          </p>

          <p className="truncate text-[12.5px] font-medium leading-tight text-warm-white/65">
            {song.artist}
          </p>

          {song.film && (
            <p className="truncate text-[10.5px] leading-tight text-warm-white/40">
              {song.film}
              {song.year ? ` • ${song.year}` : ""}
            </p>
          )}
        </div>
      </div>

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={onSeek}
      />

      <div className="flex items-center justify-center pt-0.5">
        <TransportControls
          isPlaying={isPlaying}
          onTogglePlay={onTogglePlay}
          onPrev={onPrev}
          onNext={onNext}
        />
      </div>
    </div>
  );
}