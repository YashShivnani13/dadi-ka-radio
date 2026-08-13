# 📻 Dadi Ka Radio

<div align="center">

### पुराने गीत • पुरानी यादें • हमेशा आपके साथ

A nostalgic digital radio experience inspired by old Hindi songs, vintage radios, and the warmth of memories.

<br>

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)

</div>

---

## 🌅 About

**Dadi Ka Radio** is a nostalgia-driven music experience inspired by the feeling of listening to old Hindi songs on a vintage radio.

Instead of building another modern music streaming interface, the goal was to create something that feels **warm, familiar, and timeless** — like sitting beside a window while an old song plays in the background.

The interface combines a vintage Indian neighbourhood aesthetic with a modern, minimal music player.

---

## 🖼️ Preview

<p align="center">
  <img 
    src="./public/dashboard-preview.png" 
    alt="Dadi Ka Radio Dashboard"
    width="100%"
  />
</p>

---

## ✨ Features

- 📻 Vintage Indian neighbourhood inspired interface
- 🎵 Local MP3 music playback
- ▶️ Play / Pause controls
- ⏮️ Previous / Next song
- ⏱️ Interactive progress bar
- 🔄 Automatic next-song transition
- 💿 Animated vinyl-style player
- 📱 Responsive desktop and mobile interface
- 🌅 Nostalgic full-screen artwork
- 🕐 Live local time
- 👥 Live listener counter
- 🎶 Background music playback
- 📸 Instagram link
- 💻 GitHub link
- ⚡ Automatically generated playlist
- 🎨 Warm retro visual design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | Web application framework |
| **React 19** | UI development |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Styling and responsive design |
| **HTML5 Audio** | Music playback |
| **Node.js** | Playlist generation |

---

## 📂 Project Structure

```text
dadi-ka-radio/
│
├── app/
│   └── ...                    # Next.js application
│
├── components/
│   ├── MusicPlayer.tsx
│   ├── DesktopPlayer.tsx
│   ├── MobilePlayer.tsx
│   ├── Vinyl.tsx
│   ├── ProgressBar.tsx
│   ├── TransportControls.tsx
│   └── SocialLinks.tsx
│
├── data/
│   └── playlists.ts           # Generated playlist data
│
├── public/
│   ├── ...                    # Images and static assets
│   └── music/                 # MP3 files
│
├── scripts/
│   └── generate-playlist.mjs  # Playlist generator
│
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
🚀 Getting Started

Follow these steps to run Dadi Ka Radio locally.

Prerequisites

Make sure you have installed:

Node.js
npm
Git

You can check your installations with:

node --version
npm --version
git --version
1. Clone the repository
git clone https://github.com/YashShivnani13/dadi-ka-radio.git
2. Open the project
cd dadi-ka-radio
3. Install dependencies
npm install
4. Generate the playlist

The project includes an automatic playlist generator.

Run:

npm run generate:playlist

This scans the music directory and generates the playlist data used by the application.

5. Start the development server
npm run dev

Open the application in your browser:

http://localhost:3000
🎶 Adding New Songs

Adding a new song is simple.

Place the .mp3 file inside the project's music folder:

public/
└── music/
    ├── song-1.mp3
    ├── song-2.mp3
    ├── song-3.mp3
    └── new-song.mp3

Then regenerate the playlist:

npm run generate:playlist

Start the application again if necessary:

npm run dev

That's it.

You don't need to manually edit the playlist every time you add a song.

Quick workflow
Add MP3
   ↓
npm run generate:playlist
   ↓
npm run build
   ↓
Deploy
🧪 Production Build

Before deploying, create a production build:

npm run build

If the build completes successfully, start the production server:

npm run start

Then visit:

http://localhost:3000

This lets you test the production version locally before deployment.

🎨 Design Philosophy

Dadi Ka Radio was built around one simple idea:

What if listening to an old song felt like finding an old memory?

The visual design takes inspiration from:

📻 Vintage radios
🎞️ Old Bollywood
🏘️ Indian neighbourhoods
🌅 Golden-hour evenings
📼 Cassette and record shops
👵 Childhood memories
🎵 Old Hindi melodies

The goal wasn't to build another Spotify clone.

It was to build a feeling.

📱 Responsive Design

The interface is designed to work across:

💻 Desktop
🖥️ Large screens
📱 Mobile
📲 Tablets

The music player automatically adapts to different screen sizes.

🔗 Links
Instagram

https://www.instagram.com/flosy.global/

GitHub

https://github.com/YashShivnani13/dadi-ka-radio

⚠️ Music & Copyright

This project is a personal and portfolio experiment.

Only use audio files that you have the appropriate rights or permission to distribute and stream through the website.

Do not redistribute copyrighted music without the necessary permissions.

<div align="center">
📻 Dadi Ka Radio
पुराने गीत • पुरानी यादें • हमेशा आपके साथ
<br>

Developed by Yash Shivnani

<br>

⭐ If you like the project, consider giving the repository a star.

</div> ```