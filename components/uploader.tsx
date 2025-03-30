'use client'
import React, { useState, useRef, DragEvent, ChangeEvent } from 'react'
import { Upload, TrashIcon } from 'lucide-react'
import CustomButton from './custom-button'
interface ImageUploadProps {
    maxSizeMB?: number
    onImageUpload?: (file: File | null) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    maxSizeMB = 10,
    onImageUpload
}) => {
    const [image, setImage] = useState<string | null>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

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

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-lg mx-auto p-6 border-2 border-slate-700 rounded-xl bg-white">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Upload Your Image</h2>

                    <div
                        className={`
          border-2 border-dashed rounded-xl p-6 
          flex flex-col items-center justify-center
          bg-gray-50 cursor-pointer
          transition-all duration-200
          ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}
          ${image ? 'h-auto' : 'h-96'}
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
                                    <TrashIcon className="w-4 h-4" />
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
                </div>
            </div>
            <div className="flex justify-center my-12">
                <CustomButton disabled={!image} />
            </div>
        </>
    )
}

export default ImageUpload