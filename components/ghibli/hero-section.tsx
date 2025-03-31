
import { HeroSection } from '@/types/landing-page'
import ImageComparisonSlider from '@/components/image-slide'
import afterImage from '@/public/images/anime/anime08.png'
import beforeImage from '@/public/images/slide/slide-cat.png'
interface HeroSectionProps {
    content: HeroSection
}

export default function HeroSectionComponent({ content }: HeroSectionProps) {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-purple-100 to-purple-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
                            {content.h1}
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-700">
                            {content.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="/" className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                                {content.button}
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <ImageComparisonSlider beforeImage={beforeImage.src} afterImage={afterImage.src} />
                    </div>
                </div>

            </div>
        </section>
    )
}
