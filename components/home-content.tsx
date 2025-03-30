'use client'
import React, { useState } from 'react'
import ImageUpload from './uploader'
import ImageGallery from './gallery'
import { StyleType } from '@/types/index'

export default function HomeContent() {
    const [activeStyle, setActiveStyle] = useState<StyleType>('anime')

    return (
        <div className="flex flex-col gap-12">
            <ImageUpload
                activeStyle={activeStyle}
                onStyleChange={setActiveStyle}
            />
            <ImageGallery
                activeStyle={activeStyle}
                onStyleChange={setActiveStyle}
            />
        </div>
    )
} 