
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import Image from 'next/image'
export default function Header() {
    return (
        <header className="w-full backdrop-blur-md fixed top-0 z-50 px-4">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-purple-600">
                        <Image src={Logo} alt="Logo" width={32} height={32} />
                        Chanted Art
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="ghibli-ai" className="text-sm font-medium transition-colors hover:text-purple-600">
                        Ghibli AI
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
