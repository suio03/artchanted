
import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full border-b bg-white/50 backdrop-blur-md fixed top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-purple-600">
                        Ghibli AI
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#features" className="text-sm font-medium transition-colors hover:text-purple-600">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-purple-600">
                        How It Works
                    </Link>
                    <Link href="#use-cases" className="text-sm font-medium transition-colors hover:text-purple-600">
                        Use Cases
                    </Link>
                    <Link href="#faq" className="text-sm font-medium transition-colors hover:text-purple-600">
                        FAQ
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/privacy-policy" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </header>
    )
}
