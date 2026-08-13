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

  // Keeps track of whether the player should automatically
  // start the current/next song.
  const shouldAutoplayRef = useRef(false);

  // Prevents an audio error from repeatedly skipping forever.
  const errorHandledRef = useRef(false);

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
   * Load and play songs.
   *
   * This effect handles:
   * - loading the new song
   * - autoplay
   * - song ending
   * - broken/unsupported audio files
   * - metadata
   * - time updates
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !song) return;

    errorHandledRef.current = false;

    setCurrentTime(0);
    setDuration(0);

    const handleLoadedMetadata = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setCurrentTime(0);

      // Automatically continue to the next song.
      shouldAutoplayRef.current = true;

      setSongIndex((current) => {
        if (playlist.length === 0) return 0;

        return (current + 1) % playlist.length;
      });
    };

    const handleCanPlay = () => {
      if (!shouldAutoplayRef.current) {
        return;
      }

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Autoplay failed:", error);

          /*
           * Browser autoplay restrictions can sometimes prevent
           * playback. The user can press Play in that situation.
           */
          setIsPlaying(false);
        });
    };

    const handleError = () => {
      /*
       * Prevent multiple error events from skipping
       * through several songs at once.
       */
      if (errorHandledRef.current) {
        return;
      }

      errorHandledRef.current = true;

      console.error(
        `Unable to play song: ${song.title}`,
        "\nFile:",
        song.audio,
        "\nAudio error:",
        audio.error
      );

      /*
       * If a file is broken/unsupported, automatically
       * move to the next song.
       */
      shouldAutoplayRef.current = true;

      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);

      setSongIndex((current) => {
        if (playlist.length === 0) return 0;

        return (current + 1) % playlist.length;
      });
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);

    /*
     * Set the new source.
     */
    audio.pause();
    audio.src = song.audio;
    audio.load();

    /*
     * If:
     * - user clicked Next/Previous while music was playing
     * - current song finished
     * - a broken song was skipped
     *
     * then the new song should automatically play.
     */
    if (shouldAutoplayRef.current) {
      /*
       * canplay will normally handle this.
       * This fallback handles cases where the browser
       * already has enough data available.
       */
      if (audio.readyState >= 3) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
          });
      }
    }

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
    };
  }, [songIndex, song]);

  /*
   * Play / Pause
   */
  const handleTogglePlay = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      shouldAutoplayRef.current = true;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Playback failed:", error);
          setIsPlaying(false);
        });
    } else {
      /*
       * User explicitly pressed pause.
       * Therefore don't autoplay the next song.
       */
      shouldAutoplayRef.current = false;

      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  /*
   * Previous song
   */
  const handlePrev = useCallback(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
    }

    /*
     * IMPORTANT:
     * Keep autoplay enabled when switching songs.
     */
    shouldAutoplayRef.current = true;

    setCurrentTime(0);
    setDuration(0);

    setSongIndex((current) => {
      if (playlist.length === 0) return 0;

      return (current - 1 + playlist.length) % playlist.length;
    });
  }, []);

  /*
   * Next song
   */
  const handleNext = useCallback(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
    }

    /*
     * IMPORTANT:
     * Keep autoplay enabled when switching songs.
     */
    shouldAutoplayRef.current = true;

    setCurrentTime(0);
    setDuration(0);

    setSongIndex((current) => {
      if (playlist.length === 0) return 0;

      return (current + 1) % playlist.length;
    });
  }, []);

  /*
   * Seek
   */
  const handleSeek = useCallback(
    (time: number) => {
      const audio = audioRef.current;

      if (!audio) return;

      const maxDuration = Number.isFinite(audio.duration)
        ? audio.duration
        : duration;

      const nextTime = Math.min(
        Math.max(time, 0),
        maxDuration || 0
      );

      audio.currentTime = nextTime;
      setCurrentTime(nextTime);
    },
    [duration]
  );

  /*
   * No songs available.
   */
  if (!song) {
    return null;
  }

  return (
    <div
      className="player-enter fixed inset-x-0 bottom-0 z-20 flex w-full justify-center px-3 sm:px-4"
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
  );
}