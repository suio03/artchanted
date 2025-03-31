
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ImageTransformDisplayProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export default function ImageTransformDisplay({ 
  beforeImage, 
  afterImage,
  className = ''
}: ImageTransformDisplayProps) {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-4 ${className}`}>
      <div className="relative w-full md:w-2/5 h-60 md:h-80">
        <Image
          src={beforeImage}
          alt="Original image"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Original
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <ArrowRight className="h-8 w-8 text-purple-600" />
      </div>
      
      <div className="relative w-full md:w-2/5 h-60 md:h-80">
        <Image
          src={afterImage}
          alt="Transformed image"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute bottom-2 left-2 bg-purple-600/90 text-white text-xs px-2 py-1 rounded">
          Ghibli AI
        </div>
      </div>
    </div>
  );
}
