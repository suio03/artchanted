
import { Features } from '@/types/landing-page';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  PaintBucket, 
  UserCheck, 
  CheckSquare, 
  Globe, 
  Gift 
} from 'lucide-react';

interface FeaturesSectionProps {
  content: Features;
}

export default function FeaturesSection({ content }: FeaturesSectionProps) {
  // Icons for each feature
  const featureIcons = [
    <Zap key="zap" className="h-8 w-8 text-purple-600" />,
    <PaintBucket key="paint" className="h-8 w-8 text-purple-600" />,
    <UserCheck key="user" className="h-8 w-8 text-purple-600" />,
    <CheckSquare key="check" className="h-8 w-8 text-purple-600" />,
    <Globe key="globe" className="h-8 w-8 text-purple-600" />,
    <Gift key="gift" className="h-8 w-8 text-purple-600" />
  ];

  return (
    <section id="features" className="py-20 bg-white">
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
          {content.items.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {featureIcons[index]}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
