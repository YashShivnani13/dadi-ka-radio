
<div align="center">

# 📻 Dadi Ka Radio

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

<img width="1919" height="971" alt="Screenshot 2026-08-13 151606" src="https://github.com/user-attachments/assets/9ac24716-5a29-4162-a56f-012a1f56cf6c" />


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
```

## 🚀 Getting Started

Follow these steps to run **Dadi Ka Radio** locally.

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

Verify your installations:

```bash
node --version
npm --version
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/YashShivnani13/dadi-ka-radio.git
```

### 2. Navigate to the Project

```bash
cd dadi-ka-radio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Generate the Playlist

Dadi Ka Radio includes an automatic playlist generator that scans the music directory and creates the playlist data used by the application.

Run:

```bash
npm run generate:playlist
```

You don't need to manually maintain the playlist whenever new songs are added.

### 5. Start the Development Server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

---

## 🎶 Adding New Songs

Adding songs to Dadi Ka Radio is simple.

Place your `.mp3` files inside:

```text
public/
└── music/
    ├── song-1.mp3
    ├── song-2.mp3
    ├── song-3.mp3
    └── new-song.mp3
```

Then regenerate the playlist:

```bash
npm run generate:playlist
```

Start the development server:

```bash
npm run dev
```

That's it. The new song will automatically be included in the playlist.

### Quick Workflow

```text
Add MP3
   ↓
npm run generate:playlist
   ↓
npm run build
   ↓
Deploy
```

---

## 🧪 Production Build

Before deploying, create a production build:

```bash
npm run build
```

If the build completes successfully, start the production server:

```bash
npm run start
```

The production version will be available at:

```text
http://localhost:3000
```

This allows you to verify the production build locally before deployment.

---

## 🎨 Design Philosophy

**Dadi Ka Radio** was built around one simple idea:

> *What if listening to an old song felt like finding an old memory?*

The visual identity takes inspiration from:

* 📻 Vintage radios
* 🎞️ Old Bollywood cinema
* 🏘️ Indian neighbourhoods
* 🌅 Golden-hour evenings
* 📼 Cassette and record shops
* 👵 Childhood memories
* 🎵 Old Hindi melodies

The goal wasn't to build another Spotify clone.

**It was to build a feeling.**

A warm, nostalgic experience that makes old songs feel like memories rather than just tracks in a playlist.

---

## 📱 Responsive Design

Dadi Ka Radio is designed to provide a consistent experience across different screen sizes:

* 💻 Desktop
* 🖥️ Large screens
* 📱 Mobile
* 📲 Tablets

The music player automatically adapts its layout and controls based on the device's screen size.

---

## 🔗 Links

* **Instagram:** https://www.instagram.com/flosy.global/
* **GitHub:** https://github.com/YashShivnani13/dadi-ka-radio

---

## ⚠️ Music & Copyright

Dadi Ka Radio is a personal and portfolio project created for educational and experimental purposes.

The application and its code are intended to demonstrate web development, music-player functionality, playlist automation, and nostalgic UI/UX design.

Please ensure that you have the appropriate rights or permissions for any music distributed with your own deployment of the project.

---

<div align="center">

# 📻 Dadi Ka Radio

### पुराने गीत • पुरानी यादें • हमेशा आपके साथ

<br>

**Developed by Yash Shivnani**

</div>

<div align="center">
⭐ If you like the project, consider giving the repository a star.

</div> 
