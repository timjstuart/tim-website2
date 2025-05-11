import React from "react";
import Link from "next/link";

const data = [
  {
    "title": "Universal Voice Instituut",
    "image": "/images/vocal-pedagogue.jpg",
    "description": "Meer info over Universal Voice Instituut."
  },
  {
    "title": "James De Musical",
    "image": "/images/vocal-pedagogue.jpg",
    "description": "Meer info over James De Musical."
  },
  {
    "title": "Oostpool",
    "image": "/images/vocal-pedagogue.jpg",
    "description": "Meer info over Oostpool."
  }
];

export default function Page() {
  return (
    <main className="p-8 max-w-6xl mx-auto space-y-12">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">VOCAL PEDAGOGUE</h1>
        <p className="text-gray-600">Details en projecten binnen deze categorie</p>
        <Link href="/" className="text-blue-600 text-sm hover:underline">← Terug naar homepage</Link>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border"
          >
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}