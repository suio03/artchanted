
import Image from 'next/image';
import { UseCases } from '@/types/landing-page';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Camera, 
  Share2, 
  Lightbulb, 
  Smartphone, 
  GraduationCap, 
  Gift 
} from 'lucide-react';

interface UseCasesSectionProps {
  content: UseCases;
}

export default function UseCasesSection({ content }: UseCasesSectionProps) {
  const useCases = [
    { title: content.case01.title, description: content.case01.description, icon: <Camera className="h-8 w-8 text-purple-600" />, image: '/images/anime/anime03.png' },
    { title: content.case02.title, description: content.case02.description, icon: <Share2 className="h-8 w-8 text-purple-600" />, image: '/images/anime/anime04.png' },
    { title: content.case03.title, description: content.case03.description, icon: <Lightbulb className="h-8 w-8 text-purple-600" />, image: '/images/anime/anime05.png' },
    { title: content.case04.title, description: content.case04.description, icon: <Smartphone className="h-8 w-8 text-purple-600" />, image: '/images/anime/anime06.png' },
    { title: content.case05.title, description: content.case05.description, icon: <GraduationCap className="h-8 w-8 text-purple-600" />, image: '/images/anime/anime07.png' },
    { title: content.case06.title, description: content.case06.description, icon: <Gift className="h-8 w-8 text-purple-600" />, image: '/images/anime/anime08.png' },
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            {content.title}
          </h2>
          <p className="text-lg text-gray-700">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-2">
                  {useCase.icon}
                </div>
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-full h-96 max-w-md">
              <div className="absolute top-0 left-0 z-10 w-3/4 h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/anime/anime09.png"
                  alt="Original photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3/4 h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/anime/anime10.png"
                  alt="Transformed image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Unlimited Creative Possibilities</h3>
            <p className="text-gray-700 mb-6">
              Ghibli AI opens up a world of creative expression. Transform landscapes into dreamscapes, portraits into animated characters, or everyday objects into magical artifacts. The possibilities are limited only by your imagination.
            </p>
            <ul className="space-y-3">
              {[
                "Perfect for social media content creators",
                "Great for artists looking for inspiration",
                "Ideal for making unique personalized gifts",
                "Excellent for educational projects and presentations"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
