
import HeroSectionComponent from '@/components/ghibli/hero-section'
import FeaturesSection from '@/components/ghibli/features-section'
import HowItWorksSection from '@/components/ghibli/how-it-works-section'
import UseCasesSection from '@/components/use-cases-section'
import FAQSection from '@/components/ghibli/faq-section'
import CTASection from '@/components/ghibli/cta-section'
import BenefitsSection from '@/components/ghibli/benefits-section'
import { landingPageContent } from '@/data/landing-page-content'

export const metadata = {
    title: "Ghibli AI | ChantedArt",
    description: "Transform your images into Ghibli-style anime art with our AI-powered tool. Easy to use, fast",
}

export default function GhibliAI() {
    return (
        <main className="pt-16">
            <HeroSectionComponent content={landingPageContent.heroSection} />
            <FeaturesSection content={landingPageContent.features} />
            <HowItWorksSection content={landingPageContent.howItWorks} />
            <UseCasesSection content={landingPageContent.useCases} />
            <BenefitsSection content={landingPageContent.benefits} />
            <FAQSection content={landingPageContent.faqs} />
            <CTASection content={landingPageContent.cta} />
        </main>
    )
}
