'use client'
import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'

type StyleType = 'anime' | 'lego' | 'minecraft' | 'muppets' | 'rick&morty';

const galleryImages: Record<StyleType, GalleryImage[]> = {
    anime: Array.from({ length: 22 }, (_, i) => ({
        src: `/images/anime/anime${String(i + 1).padStart(2, '0')}.png`,
        style: 'anime'
    })),
    lego: Array.from({ length: 12 }, (_, i) => ({
        src: `/images/lego/lego${String(i + 1).padStart(2, '0')}.png`,
        style: 'lego'
    })),
    minecraft: Array.from({ length: 14 }, (_, i) => ({
        src: `/images/minecraft/minecraft${String(i + 1).padStart(2, '0')}.png`,
        style: 'minecraft'
    })),
    muppets: Array.from({ length: 16 }, (_, i) => ({
        src: `/images/muppets/muppets${String(i + 1).padStart(2, '0')}.png`,
        style: 'muppets'
    })),
    'rick&morty': Array.from({ length: 13 }, (_, i) => ({
        src: `/images/rick&morty/rick&morty${String(i + 1).padStart(2, '0')}.png`,
        style: 'rick&morty'
    }))
}

// Define image interface
interface GalleryImage {
    src: string
    style?: string
}

interface GalleryProps {
    count?: number
    subtitle?: string
    animateCount?: boolean
    images?: GalleryImage[]
}

const ImageGallery: React.FC<GalleryProps> = ({
    count = 2159,
    subtitle = "Images Chanted",
    animateCount = true,
    images = galleryImages.anime
}) => {
    const [displayCount, setDisplayCount] = useState(0)
    const [imageData, setImageData] = useState<GalleryImage[]>([])
    const [activeStyle, setActiveStyle] = useState<StyleType>('anime')

    // Animate counter on mount
    useEffect(() => {
        if (animateCount) {
            let start = 0
            const increment = Math.floor(count / 100)
            const timer = setInterval(() => {
                start += increment
                if (start >= count) {
                    clearInterval(timer)
                    setDisplayCount(count)
                } else {
                    setDisplayCount(start)
                }
            }, 15)

            return () => {
                clearInterval(timer)
            }
        } else {
            setDisplayCount(count)
        }
    }, [count, animateCount])

    // Set initial image data and update when style changes
    useEffect(() => {
        setImageData(galleryImages[activeStyle])
    }, [activeStyle])

    const styles: StyleType[] = ['anime', 'lego', 'minecraft', 'muppets', 'rick&morty']

    // Breakpoints for the masonry layout
    const breakpointColumnsObj = {
        default: 3, // Default number of columns
        1100: 3,
        700: 2,
        500: 1
    }

    return (
        <div className={`w-full max-w-6xl mx-auto px-4 py-12`}>
            {/* Counter section */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-indigo-600 mb-2">
                    {displayCount.toLocaleString()}
                </h2>
                <p className="text-gray-600 text-lg">
                    {subtitle}
                </p>
            </div>

            {/* Style Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {styles.map((style) => (
                    <button
                        key={style}
                        onClick={() => setActiveStyle(style)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            activeStyle === style
                                ? 'bg-indigo-500 text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {style.charAt(0).toUpperCase() + style.slice(1)}
                    </button>
                ))}
            </div>

            <div className="text-center mb-16">
                <ChevronDown className="w-10 h-10 mx-auto animate-bounce" />
            </div>

            <style jsx global>{`
                .my-masonry-grid {
                    display: flex;
                    margin-left: -16px; /* gutter size offset */
                    width: auto;
                }
                .my-masonry-grid_column {
                    padding-left: 16px; /* gutter size */
                    background-clip: padding-box;
                }
                .my-masonry-grid_column > div {
                    margin-bottom: 16px;
                }
            `}</style>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {imageData.map((image, index) => (
                    <div 
                        key={index} 
                        className="rounded-lg overflow-hidden shadow-sm"
                    >
                        <Image
                            src={image.src}
                            alt={`Gallery example ${index + 1}`}
                            width={400}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    )
}

export default ImageGallery