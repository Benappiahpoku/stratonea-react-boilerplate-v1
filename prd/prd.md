# 📝 Product Requirements Document (PRD)

1. Product Name
ScullyDraw – A local-first sketching app with multiple canvases.

2. Objective
Create a lightweight, local-only Excalidraw alternative with:

Multiple canvas support

Persistent offline storage using localforage

Fast load times and responsive design

Usable across Chrome on desktop and tablet (PWA-ready)

Tech Stack
Frontend Framework: React (with Vite)

Language: TypeScript

Styling: Tailwind CSS

Canvas Drawing: @excalidraw/excalidraw

Storage: LocalForage (IndexedDB wrapper)

PWA: Vite PWA plugin (optional)

1. Core Features
4.1 Canvas Manager (Home Page)
View a list of all saved canvases (title + date)

Create new canvas

Rename or delete canvases

Store canvas metadata in LocalForage

4.2 Drawing Canvas
Load @excalidraw/excalidraw editor

Load saved canvas data from LocalForage

Auto-save canvas on change

Full-screen responsive layout

Download as image or .excalidraw file

4.3 PWA Support (Optional)
Installable via Chrome on Desktop/iPad

Offline-first support with fallback caching

 File Structure
bash
Copy
Edit
scully-draw/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CanvasCard.tsx        # Display a single canvas in the dashboard
│   │   └── ExcalidrawWrapper.tsx # Wrapper around the Excalidraw component
│   ├── pages/
│   │   ├── Home.tsx              # Canvas list and manager
│   │   └── CanvasPage.tsx        # Specific canvas page
│   ├── utils/
│   │   └── storage.ts            # LocalForage helpers (save/load/delete)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # Tailwind CSS import
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
Dependencies
bash

npm install @excalidraw/excalidraw localforage react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Basic Route Plan
Route Component Description
/ Home.tsx List all canvases
/canvas/:id CanvasPage.tsx View/edit a specific canvas

Example Storage Structure (LocalForage)
Canvases Metadata

ts
Copy
Edit
{
  id: 'abc123',
  title: 'Brainstorm',
  updatedAt: 1691457600000
}
Canvas Data
Key: canvas:abc123
Value: Excalidraw scene object (serialized)

1. Future Extensions
Sync to Firebase/Firestore

Real-time collaboration

User login (OAuth)

Cloud backup option
