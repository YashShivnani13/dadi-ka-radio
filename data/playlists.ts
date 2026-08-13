export type Song = {
  id: string;
  title: string;
  artist: string;
  film?: string;
  year?: number;
  audio: string;
};

export { playlist } from "./generatedPlaylist";