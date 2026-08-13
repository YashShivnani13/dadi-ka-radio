"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { playlist } from "@/data/generatedPlaylist";
import DesktopPlayer from "./DesktopPlayer";
import MobilePlayer from "./MobilePlayer";

export default function MusicPlayer() {
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const song = playlist[songIndex];

  /*
   * Create the audio element once.
   */
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  /*
   * Load the current song whenever songIndex changes.
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !song) return;

    audio.src = song.audio;
    audio.currentTime = 0;
    setCurrentTime(0);
    setDuration(0);

    if (isPlaying) {
      audio
        .play()
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [songIndex]);

  /*
   * Keep React state synchronized with the audio element.
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setSongIndex((current) => (current + 1) % playlist.length);
      setCurrentTime(0);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  /*
   * Play / pause.
   */
  const handleTogglePlay = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  /*
   * Previous song.
   */
  const handlePrev = useCallback(() => {
    const audio = audioRef.current;

    setSongIndex((current) => {
      return (current - 1 + playlist.length) % playlist.length;
    });

    setCurrentTime(0);

    if (audio) {
      audio.currentTime = 0;
    }
  }, []);

  /*
   * Next song.
   */
  const handleNext = useCallback(() => {
    setSongIndex((current) => {
      return (current + 1) % playlist.length;
    });

    setCurrentTime(0);
  }, []);

  /*
   * Seek.
   */
  const handleSeek = useCallback((time: number) => {
    const audio = audioRef.current;

    if (!audio) return;

    const maxDuration = Number.isFinite(audio.duration)
      ? audio.duration
      : duration;

    const nextTime = Math.min(Math.max(time, 0), maxDuration || 0);

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }, [duration]);

  if (!song) {
    return null;
  }

  return (
    <div
      className="player-enter fixed bottom-0 left-1/2 z-20 w-full -translate-x-1/2 px-3 sm:px-4"
      style={{
        maxWidth: "820px",
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
  );
}