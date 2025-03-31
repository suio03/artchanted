import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

type FAQItem = {
    question: string
    answer: string
}


export default function FAQ() {
    const faqItems: FAQItem[] = [
        {
            question: "What is ChantedArt?",
            answer: "ChantedArt is a magic photo editor that allows you to transform your photos into various artistic styles. It uses AI to create stunning art from your images."
        },
        {
            question: "How does ChantedArt work?",
            answer: "Simply upload your photo and select the style you want to apply. ChantedArt will use AI to create a stunning art piece from your image."
        },
        {
            question: "Is ChantedArt free to use?",
            answer: "No, ChantedArt is a paid service. We offer pay-per-image service. One image is $3, Three images are $8, and Five images are $12."
        },
        {
            question: "How long does it take to generate an image?",
            answer: "It takes 10-15 minutes to generate an image, once we receive your image."
        },
        {
            question: "Are my photos stored on ChantedArt servers?",
            answer: "Yes, your photos are temporarily stored on our secure servers during processing but can be deleted afterward."
        },
        {
            question: "Do i have to create an account to use ChantedArt?",
            answer: "No, you can use ChantedArt without creating an account, we only require your email to send you the generated image."
        },
        {
            question: "What kind of photos work best with ChantedArt?",
            answer: "We recommend using photos with a clear subject and good lighting, but you can use any photo you want."
        },
        {
            question: "Can I use the generated images commercially?",
            answer: "Yes, you can use the generated images commercially."
        },
        {
            question: "Are there any copyright issues with using artistic styles?",
            answer: "ChantedArt's styles are designed to be inspired by general artistic movements rather than specific copyrighted works."
        },
        {
            question: "Is this site connected to any animation studios or brands?",
            answer: "No, ChantedArt is not affiliated with, endorsed by, or connected to any specific animation studio, brand, or intellectual property holder. It’s a standalone creative exploration, not an official product or collaboration."
        },
        {
            question: "Does 'Artchanted' use content from existing animated works?",
            answer: "No, we do not use any original characters, storylines, names, audio, or artwork from existing copyrighted works. All images you see here are freshly created using generative AI, designed to be unique and original."
        },
        {
            question: "Who owns the trademarks or logos that might come to mind?",
            answer: "Any trademarks, logos, or copyrighted materials that might feel familiar are the property of their respective owners. We don’t claim ownership or use them here—just pure, original creations instead."
        },
        {
            question: "What’s the goal of 'Artchanted'?",
            answer: "It’s all about creative expression! We’re here to spark joy and imagination through AI-generated art, keeping things fun, original, and independent."
        }
    ]
    return (
        <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="rounded-md border border-gray-800 bg-indigo-100 shadow-md overflow-hidden"
                    >
                        <AccordionTrigger className="p-5 font-medium text-left hover:no-underline hover:bg-indigo-200 transition-colors">
                            <span className="pr-8 font-semibold">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-5 pt-2">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
};

