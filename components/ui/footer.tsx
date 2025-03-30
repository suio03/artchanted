import Logo from "@/public/logo.svg"
import Link from "next/link"
export default function Footer() {
    return (
        <footer className="border-t [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
            <div className="px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-2">
                        <Link href="/tos">Terms of Use</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img src={Logo.src} alt="ChantedArt Logo" className="w-10 h-10" />
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                            © ChantedArt - Turn your photos into Chanted Art.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
