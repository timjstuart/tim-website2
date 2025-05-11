import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    slug: "cv",
    title: "📄 CV / BIO",
    description: "Opleidingen, producties, lesgeven, stemwerk",
    image: "/images/cv.jpg",
  },
  {
    slug: "acteur",
    title: "ACTEUR",
    description: "Theater, TV, Voice-over",
    image: "/images/acteur.jpg",
  },
  {
    slug: "regisseur",
    title: "REGISSEUR",
    description: "Dubbing projecten",
    image: "/images/regisseur.jpg",
  },
  {
    slug: "vocal-pedagogue",
    title: "VOCAL PEDAGOGUE",
    description: "Universal Voice Course Instructor",
    image: "/images/vocal.jpg",
  },
  {
    slug: "music",
    title: "MUSIC",
    description: "Compositie & songwriting",
    image: "/images/music.jpg",
  },
  {
    slug: "podcast",
    title: "PODCAST",
    description: "The Voice Boyz",
    image: "/images/podcast.jpg",
  },
  {
    slug: "news",
    title: "NEWS",
    description: "Laatste updates en media",
    image: "/images/news.jpg",
  },
  {
    slug: "shop",
    title: "SHOP",
    description: "Boeken, muziek en meer",
    image: "/images/shop.jpg",
  },
  {
    slug: "contact",
    title: "CONTACT",
    description: "Stuur een bericht of boek een sessie",
    image: "/images/contact.jpg",
  },
];

export default function Home() {
  return (
    <main className="p-8 max-w-6xl mx-auto space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Tim Stuart</h1>
        <p className="text-xl text-gray-600">
          Stemacteur. Musicalperformer. Podcastmaker. Stemcoach.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="mailto:tim@example.com"><Mail className="mr-2" /> Contact</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://instagram.com/timstuart"><Instagram className="mr-2" /> Instagram</a>
          </Button>
        </div>
      </section>

      <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`} className="hover:underline">
            {cat.title}
          </Link>
        ))}
      </nav>

      <section id="work">
        <h2 className="text-3xl font-semibold mb-6 text-center">Work / Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/${cat.slug}`}
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-100"
            >
              <img src={cat.image} alt={cat.title} className="w-full h-40 object-cover group-hover:opacity-80" />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">{cat.title}</h3>
                <p className="text-sm text-gray-600">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}