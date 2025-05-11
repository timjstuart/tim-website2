import React from "react";
import Link from "next/link";

const data = [
  {
    "title": "Jesus Christ Superstar",
    "image": "/images/acteur.jpg",
    "description": "Meer info over Jesus Christ Superstar."
  },
  {
    "title": "Daens",
    "image": "/images/acteur.jpg",
    "description": "Meer info over Daens."
  },
  {
    "title": "Campus 12",
    "image": "/images/acteur.jpg",
    "description": "Meer info over Campus 12."
  },
  {
    "title": "Idefix",
    "image": "/images/acteur.jpg",
    "description": "Meer info over Idefix."
  }
];

export default function Page() {
  return (
    <main className="p-8 max-w-6xl mx-auto space-y-12">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">ACTEUR</h1>
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