import Image from "next/image"
import Avatar01 from "@/public/images/avatar-01.jpg"
import Avatar02 from "@/public/images/avatar-02.jpg"
import Avatar03 from "@/public/images/avatar-03.jpg"
import Avatar04 from "@/public/images/avatar-04.jpg"
import Avatar05 from "@/public/images/avatar-05.jpg"
import CustomButton from "@/components/custom-button"
export default function SubscribeForm() {
    return (
        <>
            <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-11">
                <div className="w-full max-w-xs mx-auto shrink-0">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center">
                            {/* Avatars */}
                            <ul className="flex justify-center -space-x-2 mb-4">
                                <li>
                                    <Image
                                        className="rounded-full"
                                        src={Avatar01}
                                        width={32}
                                        height={32}
                                        alt="Avatar 01"
                                    />
                                </li>
                                <li>
                                    <Image
                                        className="rounded-full"
                                        src={Avatar02}
                                        width={32}
                                        height={32}
                                        alt="Avatar 02"
                                    />
                                </li>
                                <li>
                                    <Image
                                        className="rounded-full"
                                        src={Avatar03}
                                        width={32}
                                        height={32}
                                        alt="Avatar 03"
                                    />
                                </li>
                                <li>
                                    <Image
                                        className="rounded-full"
                                        src={Avatar04}
                                        width={32}
                                        height={32}
                                        alt="Avatar 04"
                                    />
                                </li>
                                <li>
                                    <Image
                                        className="rounded-full"
                                        src={Avatar05}
                                        width={32}
                                        height={32}
                                        alt="Avatar 05"
                                    />
                                </li>
                                <li>
                                    <p
                                        className="rounded-full h-8 w-8 flex items-center justify-center text-white bg-slate-700 text-sm"
                                    >
                                        +200
                                    </p>
                                </li>
                            </ul>
                            <p className="text-sm text-gray-500">
                                Over {" "}
                                <span className="text-indigo-700 dark:text-gray-200 font-semibold text-xl">
                                    200+
                                </span>{" "}
                                Creator have been Chanted
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
