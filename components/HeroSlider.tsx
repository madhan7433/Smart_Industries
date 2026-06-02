"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="Hero Slide"
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}