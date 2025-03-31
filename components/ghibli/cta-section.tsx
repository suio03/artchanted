
import { Button } from '@/components/ui/button';
import { CTA } from '@/types/landing-page';
import { Wand2 } from 'lucide-react';

interface CTASectionProps {
  content: CTA;
}

export default function CTASection({ content }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Wand2 className="h-16 w-16" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.text}
          </h2>
          <p className="text-lg text-purple-100 mb-10">
            {content.subtext}
          </p>
          <a href="/" className="bg-white text-purple-600 hover:bg-purple-100 font-medium text-lg px-8 py-6 h-auto rounded-full">
            {content.button}
          </a>
        </div>
      </div>
    </section>
  );
}
