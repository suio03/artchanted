import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ImageCompareProps {
    beforeImage: string
    afterImage: string
    beforeAlt?: string
    afterAlt?: string
}

export default function ImageCompare({ 
    beforeImage, 
    afterImage, 
    beforeAlt = "Before", 
    afterAlt = "After" 
}: ImageCompareProps) {
    return (
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
            <div className="relative w-1/3 aspect-square">
                <Image
                    src={beforeImage}
                    alt={beforeAlt}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <ArrowRight className="w-8 h-8 text-indigo-500" />
            </div>

            <div className="relative w-1/3 aspect-square">
                <Image
                    src={afterImage}
                    alt={afterAlt}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
        </div>
    )
} 