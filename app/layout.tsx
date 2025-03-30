import "./css/style.css"

import { Artifika } from 'next/font/google'

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
            <body
                className={`${artifika.variable} font-artifika antialiased bg-indigo-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 tracking-tight`}
            >
                <div className="relative flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
                    {children}
                </div>
            </body>
        </html>
    )
}
