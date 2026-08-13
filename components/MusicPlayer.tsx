"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { playlist } from "@/data/generatedPlaylist";
import DesktopPlayer from "./DesktopPlayer";
import MobilePlayer from "./MobilePlayer";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const song = playlist[songIndex];

  const playCurrentSong = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Unable to play audio:", error);
      setIsPlaying(false);
    }
  }, []);

  const handleTogglePlay = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await playCurrentSong();
    } else {
      audio.pause();
    }
  }, [playCurrentSong]);

  const handleNext = useCallback(() => {
    setSongIndex((index) => (index + 1) % playlist.length);
    setCurrentTime(0);
    setDuration(0);
  }, []);

  const handlePrev = useCallback(() => {
    setSongIndex(
      (index) => (index - 1 + playlist.length) % playlist.length,
    );

    setCurrentTime(0);
    setDuration(0);
  }, []);

  const handleSeek = useCallback(
    (time: number) => {
      const audio = audioRef.current;

      if (!audio) return;

      const maxTime = Number.isFinite(audio.duration)
        ? audio.duration
        : duration;

      const safeTime = Math.max(0, Math.min(time, maxTime));

      audio.currentTime = safeTime;
      setCurrentTime(safeTime);
    },
    [duration],
  );

  const handleLoadedMetadata = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (Number.isFinite(audio.duration)) {
      setDuration(audio.duration);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    setCurrentTime(audio.currentTime);
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleEnded = useCallback(() => {
    setCurrentTime(0);

    setSongIndex((index) => (index + 1) % playlist.length);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.load();

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [songIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 1;

    return () => {
      audio.pause();
    };
  }, []);

  if (!song) return null;

  return (
    <>
      {/* Actual audio element */}
      <audio
        ref={audioRef}
        src={song.audio}
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      />

      {/* 
        CENTERED PLAYER
        Do NOT add player-enter here.
      */}
      <div
        className="
          fixed
          bottom-6
          left-1/2
          z-20
          w-[calc(100%-24px)]
          max-w-[800px]
          -translate-x-1/2
        "
        style={{
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
      >
        <DesktopPlayer
          song={song}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
          onTogglePlay={handleTogglePlay}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        <MobilePlayer
          song={song}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
          onTogglePlay={handleTogglePlay}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </>
  );
}