// src/app/components/ProjectCarousel.tsx
"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useState } from "react";
import ImageZoomModal from "./ImageZoomModal";

interface ProjectCarouselProps {
  images: string[];
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="max-w-4xl mx-auto rounded-lg overflow-hidden"
      >
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="relative h-96 cursor-pointer"
            onClick={() => openModal(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={`Project image ${index + 1}`}
              fill
              // FIX 1: Add the 'sizes' prop to help Next.js optimize the image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              // FIX 2: Add 'priority' to the first image to improve page load speed (LCP)
              priority={index === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Carousel>

      {isModalOpen && selectedImage && (
        <ImageZoomModal src={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}
