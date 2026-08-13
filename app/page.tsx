import TopBar from "@/components/TopBar";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden">
      <div className="scene-bg scene-bg--wide" />
      <div className="scene-bg scene-bg--tall" />
      <div className="scene-overlay" />
      <div className="scene-grain" />

      <TopBar />
      <MusicPlayer />
    </main>
  );
}
