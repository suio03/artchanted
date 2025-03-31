import BgShapes from "@/components/bg-shapes"
import VerticalLines from "@/components/vertical-lines"

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
            <main className="grow">{children}</main>
        </>
    )
}
