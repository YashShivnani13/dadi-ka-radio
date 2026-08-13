import fs from "fs";
import path from "path";

const musicDir = path.join(process.cwd(), "public", "MP3");
const outputDir = path.join(process.cwd(), "data");
const outputFile = path.join(outputDir, "generatedPlaylist.ts");

if (!fs.existsSync(musicDir)) {
  console.error("❌ public/MP3 folder does not exist.");
  process.exit(1);
}

const files = fs
  .readdirSync(musicDir)
  .filter((file) => /\.(mp3|wav|m4a|ogg)$/i.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const songs = files.map((file, index) => {
  const extension = path.extname(file);
  const filename = path.basename(file, extension);

  const title = file
  .replace(/\.[^/.]+$/, "")
  .replace(/\s*\[[a-zA-Z0-9_-]{8,}\]\s*$/, "")
  .replace(/\s*\([a-zA-Z0-9_-]{8,}\)\s*$/, "")
  .replace(/\s+/g, " ")
  .trim();

  const id = `track-${index + 1}`;

  return {
    id,
    title,
    artist: "Dadi Ka Radio",
    audio: `/MP3/${encodeURIComponent(file)}`,
  };
});

const output = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY.
// Generated from files inside public/MP3/

export type Song = {
  id: string;
  title: string;
  artist: string;
  audio: string;
};

export const playlist: Song[] = ${JSON.stringify(songs, null, 2)};
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, output, "utf8");

console.log(`✅ Generated playlist with ${songs.length} songs.`);