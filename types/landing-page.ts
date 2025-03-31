
export interface HeroSection {
  h1: string;
  description: string;
  button: string;
  "clear-button": string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface Features {
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface Step {
  title: string;
  description: string;
}

export interface HowItWorks {
  title: string;
  description: string;
  steps: {
    step1: Step;
    step2: Step;
    step3: Step;
    step4: Step;
  };
}

export interface UseCase {
  title: string;
  description: string;
}

export interface UseCases {
  title: string;
  description: string;
  case01: UseCase;
  case02: UseCase;
  case03: UseCase;
  case04: UseCase;
  case05: UseCase;
  case06: UseCase;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQs {
  title: string;
  q1: FAQ;
  q2: FAQ;
  q3: FAQ;
  q4: FAQ;
  q5: FAQ;
  q6: FAQ;
  q7: FAQ;
  q8: FAQ;
}

export interface CTA {
  text: string;
  subtext: string;
  button: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Benefits {
  item01: Benefit;
  item02: Benefit;
  item03: Benefit;
  item04: Benefit;
}

export interface LandingPageContent {
  "meta-title": string;
  "meta-description": string;
  heroSection: HeroSection;
  features: Features;
  howItWorks: HowItWorks;
  useCases: UseCases;
  faqs: FAQs;
  cta: CTA;
  benefits: Benefits;
}
