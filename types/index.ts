export type StyleType = 'anime' | 'lego' | 'minecraft' | 'muppets' | 'rick&morty';

export interface GalleryImage {
    src: string
    style?: string
}

export interface GalleryProps {
    count?: number
    subtitle?: string
    animateCount?: boolean
    images?: GalleryImage[]
    activeStyle: StyleType
    onStyleChange: (style: StyleType) => void
}

export interface ImageUploadProps {
    maxSizeMB?: number
    onImageUpload?: (file: File | null) => void
    activeStyle: StyleType
    onStyleChange: (style: StyleType) => void
} 