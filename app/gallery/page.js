// pages/gallery.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Generate image paths
const images = Array.from({ length: 67 }, (_, i) => `/img/1 (${i + 1}).jpeg`);

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    setSelectedImage((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      } else {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Gallery | New Wings Foundation</title>
        <meta name="description" content="View our gallery of rehabilitation center activities and facilities" />
      </Head>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-30 ">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A glimpse into our rehabilitation center and the work we do
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0  group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round"  strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-indigo-300 transition"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white text-4xl z-50 hover:text-indigo-300 transition md:left-10"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <Image
              src={images[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white text-4xl z-50 hover:text-indigo-300 transition md:right-10"
            aria-label="Next image"
          >
            &#8250;
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            Image {selectedImage + 1} of {images.length}
          </div>
        </div>
      )}

      {/* Back to Home Link */}
      <div className="container mx-auto px-6 pb-16 text-center">
        <Link href="/" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}