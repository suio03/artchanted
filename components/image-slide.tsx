'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

interface ImageComparisonSliderProps {
    beforeImage: string
    afterImage: string
}

const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({
    beforeImage,
    afterImage
}) => {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const sliderRef = useRef<HTMLDivElement>(null)

    // Handle mouse down event on slider
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    // Handle touch start event on slider
    const handleTouchStart = () => {
        setIsDragging(true)
    }

    // Calculate slider position based on mouse or touch position
    const updateSliderPosition = (clientX: number) => {
        if (!sliderRef.current) return
        
        const sliderRect = sliderRef.current.getBoundingClientRect()
        const newPosition = ((clientX - sliderRect.left) / sliderRect.width) * 100
        
        // Clamp the value between 0 and 100
        const clampedPosition = Math.min(Math.max(newPosition, 0), 100)
        setSliderPosition(clampedPosition)
    }

    // Mouse move handler
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging) {
            updateSliderPosition(e.clientX)
        }
    }, [isDragging])

    // Touch move handler
    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (isDragging && e.touches[0]) {
            updateSliderPosition(e.touches[0].clientX)
        }
    }, [isDragging])

    // Mouse up handler
    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    // Add event listeners
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('touchmove', handleTouchMove)
        document.addEventListener('touchend', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleMouseUp)
        }
    }, [handleMouseMove, handleMouseUp, handleTouchMove])

    return (
        <div
            className="relative w-96 max-w-md aspect-[2/3] overflow-hidden shadow-xl rounded-2xl"
            ref={sliderRef}
        >
            <Image width={500} height={500} src={afterImage} alt="After" className="absolute top-0 left-0 w-full h-full object-cover" />
            <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image width={500} height={500} src={beforeImage} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
                style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </div>
            </div>
            <div
                className={`absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm transition-opacity duration-300 ${sliderPosition > 50 ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                Before
            </div>
            <div
                className={`absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm transition-opacity duration-300 ${sliderPosition <= 50 ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                After
            </div>
        </div>
    )
}

export default ImageComparisonSlider