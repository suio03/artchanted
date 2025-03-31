
import { FAQs } from '@/types/landing-page';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  content: FAQs;
}

export default function FAQSection({ content }: FAQSectionProps) {
  const faqs = [
    { value: 'item-1', question: content.q1.question, answer: content.q1.answer },
    { value: 'item-2', question: content.q2.question, answer: content.q2.answer },
    { value: 'item-3', question: content.q3.question, answer: content.q3.answer },
    { value: 'item-4', question: content.q4.question, answer: content.q4.answer },
    { value: 'item-5', question: content.q5.question, answer: content.q5.answer },
    { value: 'item-6', question: content.q6.question, answer: content.q6.answer },
    { value: 'item-7', question: content.q7.question, answer: content.q7.answer },
    { value: 'item-8', question: content.q8.question, answer: content.q8.answer },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            {content.title}
          </h2>
          <p className="text-lg text-gray-700">
            Have questions about Ghibli AI? Find answers to the most commonly asked questions below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="border-b border-purple-100">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-purple-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        
      </div>
    </section>
  );
}
