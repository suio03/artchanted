'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  displayDuration?: number // in milliseconds
  transitionDuration?: number // in milliseconds
  width?: number
  height?: number
  className?: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  displayDuration = 1500,
  transitionDuration = 500,
  width = 300,
  height = 400,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (images.length <= 1) return

    const intervalId = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, transitionDuration)
    }, displayDuration + transitionDuration)

    return () => clearInterval(intervalId)
  }, [images.length, displayDuration, transitionDuration])

  if (!images || images.length === 0) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`} 
        style={{ width, height }}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    )
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl ${className}`} 
      style={{ width, height }}
    >
      {images.map((src, index) => (
        <div
          key={`image-${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity`}
          style={{
            opacity: currentIndex === index ? 1 : 0,
            transitionDuration: `${transitionDuration}ms`,
            zIndex: currentIndex === index ? 10 : 0
          }}
        >
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0 || index === currentIndex || index === (currentIndex + 1) % images.length}
          />
        </div>
      ))}
      
      {/* Optional: Image count indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={`indicator-${index}`}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel