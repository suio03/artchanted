import "./css/style.css"
import { Toaster } from 'react-hot-toast'
import { Artifika } from 'next/font/google'
import Analytics from "@/components/analytics"

// Initialize the Artifika font
const artifika = Artifika({
    weight: '400', // Artifika only comes in 400 weight
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-artifika', // Optional: for using as a CSS variable
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Analytics />
            <body
                className={`${artifika.variable} font-artifika antialiased bg-indigo-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 tracking-tight`}
            >
                <div className="relative flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
                    {children}
                </div>
                <Toaster
                            position="top-center"
                            reverseOrder={false}
                            gutter={8}
                            containerStyle={{
                                top: 40,
                                left: 20,
                                right: 20,
                                bottom: 20,
                            }}
                            toastOptions={{
                                duration: 4000,
                                style: {
                                    background: '#333',
                                    color: '#fff',
                                    maxWidth: '90vw',
                                    width: 'fit-content',
                                    padding: '12px 16px',
                                    fontSize: '16px',
                                    borderRadius: '8px',
                                    zIndex: 9999,
                                },
                                success: {
                                    style: {
                                        background: 'rgba(48, 151, 71, 0.9)',
                                    },
                                },
                                error: {
                                    style: {
                                        background: 'rgba(205, 50, 50, 0.9)',
                                    },
                                },
                            }}
                        />
            </body>
        </html>
    )
}
