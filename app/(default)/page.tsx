import { SparklesText } from "@/components/magicui/sparkles-text"
import FAQ from "@/components/faqs"
import SubscribeForm from "@/components/subscribe-form"
import ImageUpload from "@/components/uploader"
import Gallery from "@/components/gallery"
import HomeContent from "@/components/home-content"
export default function Home() {
    return (
        <section>
            <div className="pt-32 pb-12 md:pt-44 md:pb-20">
                <div className="px-4 sm:px-6">
                    <div>
                        <h1 className="text-4xl font-bold text-center mb-12">
                            Turn any photo into
                            <SparklesText className="text-indigo-500 mt-4" text="Chanted Art" />
                        </h1>
                        <SubscribeForm />
                    </div>
                    <HomeContent />
                    {/* <ImageUpload />
                    <div className="flex justify-center my-12">
                        <Gallery />
                    </div> */}
                    <FAQ />
                </div>
            </div>
        </section>
    )
}
