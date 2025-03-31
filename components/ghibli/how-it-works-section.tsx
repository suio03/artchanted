
import { HowItWorks } from '@/types/landing-page';
import { 
  Upload, 
  Mail, 
  Palette, 
  Download 
} from 'lucide-react';

interface HowItWorksSectionProps {
  content: HowItWorks;
}

export default function HowItWorksSection({ content }: HowItWorksSectionProps) {
  const steps = [
    { title: content.steps.step1.title, description: content.steps.step1.description, icon: <Upload className="h-8 w-8 text-white" /> },
    { title: content.steps.step2.title, description: content.steps.step2.description, icon: <Mail className="h-8 w-8 text-white" /> },
    { title: content.steps.step3.title, description: content.steps.step3.description, icon: <Palette className="h-8 w-8 text-white" /> },
    { title: content.steps.step4.title, description: content.steps.step4.description, icon: <Download className="h-8 w-8 text-white" /> },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            {content.title}
          </h2>
          <p className="text-lg text-gray-700">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full h-0.5 w-full -translate-y-1/2 bg-purple-200"></div>
                )}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Try it yourself</h3>
              <p className="text-gray-600 mb-6">
                Experience the magic of Ghibli AI transformation with just a few clicks. Upload your image now!
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
                <div className="flex justify-center mb-2">
                  <Upload className="h-6 w-6 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">Drag & drop or click to upload</p>
              </div>
              <p className="text-xs text-gray-500">Supports PNG, JPG, WEBP (max 10MB)</p>
            </div>
            <div className="bg-purple-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <Palette className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <p className="text-purple-800 font-medium">
                  AI processing happens instantly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
