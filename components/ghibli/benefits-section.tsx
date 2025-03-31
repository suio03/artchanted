
import { Benefits } from '@/types/landing-page';
import { 
  Sparkles, 
  Clock, 
  Cpu, 
  Palette 
} from 'lucide-react';

interface BenefitsSectionProps {
  content: Benefits;
}

export default function BenefitsSection({ content }: BenefitsSectionProps) {
  const benefits = [
    { title: content.item01.title, description: content.item01.description, icon: <Sparkles className="h-12 w-12 text-purple-600" /> },
    { title: content.item02.title, description: content.item02.description, icon: <Clock className="h-12 w-12 text-purple-600" /> },
    { title: content.item03.title, description: content.item03.description, icon: <Cpu className="h-12 w-12 text-purple-600" /> },
    { title: content.item04.title, description: content.item04.description, icon: <Palette className="h-12 w-12 text-purple-600" /> },
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Why Choose Ghibli AI?
          </h2>
          <p className="text-lg text-gray-700">
            Discover the unique advantages of our Ghibli AI transformation tool
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex gap-6">
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Experience the Difference</h3>
              <p className="text-gray-600 mb-6">
                Our Ghibli AI stands apart with its exceptional quality, speed, and versatility. Try it today and see the magic for yourself!
              </p>
              <ul className="space-y-3">
                {[
                  "High-quality transformations that preserve details",
                  "Instant processing with no waiting time",
                  "Multiple style options to choose from",
                  "No account creation required",
                  "Completely free to use"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 bg-purple-600 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 flex items-center justify-center text-white">
              <div className="text-center">
                <p className="text-3xl font-bold mb-2">Transform Your Images Today</p>
                <p className="text-xl mb-6">It only takes a few seconds!</p>
                <a href="/" className="bg-white text-purple-600 hover:bg-purple-100 font-bold px-6 py-3 rounded-full transition-colors">
                  Try Ghibli AI Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
