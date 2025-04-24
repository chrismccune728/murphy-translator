'use client';

import { Toaster, toast } from 'react-hot-toast';

export default function Home() {
  const barks = [
    {
      label: "Angry Squirrel Mode",
      translation: "This is my yard now.",
      sound: "/sounds/angry squirrel.mp3",
    },
    {
      label: "Ball Hysteria",
      translation: "Where is the ball?! WHERE IS IT?!",
      sound: "/sounds/ball.mp3",
    },
    {
      label: "Zoomie Madness",
      translation: "I must sprint... indoors!",
      sound: "/sounds/zoomies.mp3",
    },
  ];

  const loveNotes = [
    "I peed on the rug, but it was out of love.",
    "Your smell comforts my soul.",
    "I miss you even when you’re in the next room.",
  ];

  const playSound = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <main className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-6 space-y-10 font-serif">
      <img
  src="/images/murphy.jpeg"
  alt="Murphy looking noble"
  className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-orange-300"
/>

      <h1 className="text-4xl font-bold text-orange-800">🐶 Murphy Translator™</h1>

      <div className="grid gap-4 w-full max-w-sm">
        {barks.map((bark, i) => (
          <button
            key={i}
            className="bg-orange-300 text-orange-900 p-4 rounded-xl shadow hover:bg-orange-400 transition"
            onClick={() => {
              playSound(bark.sound);
              toast(bark.translation);
            }}
          >
            {bark.label}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold text-orange-800 mb-2">💌 Love Notes from Murphy</h2>
        <ul className="space-y-2 text-lg text-orange-700 list-disc pl-6">
          {loveNotes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>

      <Toaster />
    </main>
  );
}
