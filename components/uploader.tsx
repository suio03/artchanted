'use client'
import React, { useState, useRef, DragEvent, ChangeEvent } from 'react'
import { Upload, Trash2Icon } from 'lucide-react'
import CustomButton from './custom-button'
import ImageCompare from './image-compare'
import toast from 'react-hot-toast'
import { ImageUploadProps, StyleType } from '@/types/index'

const ImageUpload: React.FC<ImageUploadProps> = ({
    maxSizeMB = 10,
    onImageUpload,
    activeStyle,
    onStyleChange
}) => {
    const [image, setImage] = useState<string | null>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [email, setEmail] = useState('')
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Style preview images mapping
    const stylePreviews: Record<StyleType, string> = {
        'anime': '/images/slide/anime-slide.png',
        'lego': '/images/slide/lego-slide.png',
        'minecraft': '/images/slide/minecraft-slide.png',
        'muppets': '/images/slide/muppets-slide.png',
        'rick&morty': '/images/slide/rick-morty-slide.png'
    }

    // Style mapping for select element
    const styleOptions: Record<StyleType, string> = {
        'anime': 'Anime',
        'lego': 'Lego',
        'minecraft': 'Minecraft',
        'muppets': 'Muppets',
        'rick&morty': 'Rick & Morty'
    }

    // Convert MB to bytes
    const maxSizeBytes = maxSizeMB * 1024 * 1024

    const handleFileChange = (file: File | null) => {
        if (!file) {
            setImage(null)
            setError(null)
            if (onImageUpload) onImageUpload(null)
            return
        }

        // Check if the file is an image
        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file (PNG, JPG, WEBP)')
            return
        }

        // Check file size
        if (file.size > maxSizeBytes) {
            setError(`Image size should be less than 10MB`)
            return
        }

        // Reset error
        setError(null)

        // Create a URL for the image
        const reader = new FileReader()
        reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
                setImage(e.target.result)
                if (onImageUpload) onImageUpload(file)
            }
        }
        reader.readAsDataURL(file)
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileChange(e.dataTransfer.files[0])
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFileChange(e.target.files[0])
        }
    }

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const clearImage = () => {
        setImage(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
        if (onImageUpload) onImageUpload(null)
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleSubmit = async () => {
        if (!image) {
            toast.error('Please upload an image first')
            return
        }

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address')
            return
        }

        try {
            // Create a unique image ID
            const imageId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`

            // Get the file from the input
            const file = fileInputRef.current?.files?.[0]
            if (!file) {
                throw new Error('No file found')
            }

            // Upload to R2 first
            const uploadResponse = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    imageData: image,
                    imageId,
                    fileName: file.name
                })
            })

            if (!uploadResponse.ok) {
                throw new Error('Failed to upload image')
            }

            const { imageUrl } = await uploadResponse.json()
            console.log("Image URL:", imageUrl);
            // Create Stripe checkout session with the R2 URL
            const checkoutResponse = await fetch('/api/stripe/create-checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
                    mode: 'payment',
                    successUrl: `${window.location.origin}?imageId=${imageId}`,
                    cancelUrl: `${window.location.origin}`,
                    email,
                    imageId,
                    style: activeStyle,
                    fileName: file.name,
                    imageUrl
                })
            })

            if (!checkoutResponse.ok) {
                throw new Error('Failed to create checkout session')
            }

            const { url } = await checkoutResponse.json()
            window.location.href = url
        } catch (error) {
            console.error('Error:', error)
            toast.error('Something went wrong. Please try again.')
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-lg mx-auto p-6 border-2 border-slate-700 rounded-xl bg-white">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Chanted your photo now</h2>
                    {(
                        <div className="my-6">
                            <ImageCompare
                                beforeImage="/images/slide/slide01.png"
                                afterImage={stylePreviews[activeStyle]}
                                beforeAlt="Your Image"
                                afterAlt="Style Preview"
                            />
                        </div>
                    )}
                    <div
                        className={`
          border-2 border-dashed rounded-xl p-6 
          flex flex-col items-center justify-center
          bg-gray-50 cursor-pointer
          transition-all duration-200
          ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}
          ${image ? 'h-auto' : 'h-48'}
        `}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={image ? undefined : handleClick}
                    >
                        {image ? (
                            <div className="relative w-full">
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    className="w-full rounded-lg object-contain max-h-80"
                                />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        clearImage()
                                    }}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                                >
                                    <Trash2Icon className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <>
                                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                                <p className="text-lg text-center text-gray-600 mb-2">
                                    Drag & drop an image here, or click to select
                                </p>
                                <p className="text-sm text-gray-500">
                                    Supports PNG, JPG, WEBP, JPEG (max 10MB)
                                </p>
                            </>
                        )}

                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleInputChange}
                            accept="image/png, image/jpeg, image/webp, image/jpg"
                        />
                    </div>
                    {error && (
                        <p className="text-red-500 mt-2">{error}</p>
                    )}

                    {/* Style Selection and Email Input */}
                    <div className="flex items-center justify-center my-6 gap-4">
                        <select
                            value={activeStyle}
                            onChange={(e) => onStyleChange(e.target.value as StyleType)}
                            className="w-1/3 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            {Object.entries(styleOptions).map(([value, label]) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-2/3 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <CustomButton onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageUpload