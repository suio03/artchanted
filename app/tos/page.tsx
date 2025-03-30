import Link from "next/link"
export const runtime = 'edge'
export const metadata = {
    title: 'Terms and Conditions | ChantedArt',
    description: 'Terms and Conditions for ChantedArt',
}
const TOS = () => {
    return (
        <div className="mt-24">
            <main className="max-w-xl mx-auto">
                <div className="p-5">
                    <Link href="/" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back
                    </Link>
                    <h1 className="text-3xl font-extrabold pb-6">
                        Terms and Conditions for ChantedArt
                    </h1>

                    <pre
                        className="leading-relaxed whitespace-pre-wrap"
                        style={{ fontFamily: "sans-serif" }}
                    >
                        {` 
Last Updated: March 29, 2025
Acceptance of Terms
By accessing and using the ChantedArt image generation service (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
Description of Service
ChantedArt provides a state-of-the-art text-to-image generation service that converts text descriptions into high-quality images. Our service uses advanced AI technology to create professional-grade images from text inputs, with superior image generation and composition capabilities.
User Accounts and Subscriptions
To access ChantedArt's image generation features, you may need to:

Create an account
Choose a subscription plan
Maintain account security
Manage usage credits
Monitor image generation history

Fees and Service Usage
a) Payment Terms:

Fees based on subscription tier
Usage-based billing for image generation
Processing fees for custom style creation
Additional costs for high-quality exports or extended compositions

b) Refund Policy:

Non-refundable after image generation
Credit system for failed generations
Subscription cancellation options
Pro-rated refunds where applicable

Acceptable Use Policy
Users must not use ChantedArt to:

Generate inappropriate or offensive content
Violate copyright laws
Create misleading image content
Impersonate artists without permission
Bypass safety measures
Generate content that violates our content guidelines

Intellectual Property Rights
a) Service Ownership:

ChantedArt platform and technology
Generation algorithms
User interface elements
Brand assets
AI image generation technology

b) User Rights:

Generated image content
Custom style configurations
Output modifications
Commercial usage rights as per subscription terms

Content Generation Guidelines
Users must ensure:

Appropriate text descriptions
Clear style descriptions
Proper licensing of referenced musical elements
Ethical use of technology
Compliance with content policies

Service Limitations
ChantedArt's current limitations include:

Image size restrictions
Generation queue limits
Style variation constraints
Composition capabilities
Export format specifications

Privacy and Data Protection
We protect:

User generation descriptions
Generated images
Personal information
Usage patterns
Payment information

Termination
Account termination may occur for:

Terms violation
Inappropriate content generation
Payment issues
Misuse of service
Violation of content guidelines

Updates and Modifications
We may update:

Service features
Pricing structure
Generation capabilities
Terms of service
Technical specifications

Liability Limitations
ChantedArt is not liable for:

Generation results
Content misuse
Technical issues
Third-party claims
Service interruptions
Data loss

Governing Law
These Terms are governed by applicable laws while maintaining compliance with international regulations.
Contact Information
For service inquiries:

Email: support@artchanted.com
`}
                    </pre>
                </div>
            </main>
        </div>
    )
}

export default TOS
