import BgShapes from "@/components/bg-shapes"
import VerticalLines from "@/components/vertical-lines"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export const metadata = {
    title: "Turn your photos into Chanted Art | ChantedArt",
    description: "Just simply upload your photo and let the magic happen.",
};

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <VerticalLines />
            <BgShapes />
            <Header />

            <main className="grow">{children}</main>

            <Footer />
        </>
    )
}
