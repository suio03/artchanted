'use client'
import { useState } from 'react'
import PurchaseModal from './purchase-modal'

interface CustomButtonProps {
    disabled?: boolean;
}

export default function CustomButton({ disabled = false }: CustomButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = (email: string) => {
        setIsModalOpen(false)
    }

    return (
        <>
            <button
                onClick={() => !disabled && setIsModalOpen(true)}
                disabled={disabled}
                className={`relative group border-none bg-transparent p-0 outline-none ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'} font-mono font-light uppercase text-base`}
            >
                <span
                    className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] ${!disabled && 'group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px'}`}
                ></span>

                <span
                    className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
                ></span>

                <div
                    className={`relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#7297ed] via-[#668de6] to-[#7297ed] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] ${!disabled && 'group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110'}`}
                >
                    <span className="select-none">Create Chanted Art</span>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wand-sparkles-icon lucide-wand-sparkles"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" /><path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M19 14v4" /><path d="M10 2v2" /><path d="M7 8H3" /><path d="M21 16h-4" /><path d="M11 3H9" /></svg>
                </div>
            </button>

            <PurchaseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
            />
        </>
    )
}