import React, { useState, useEffect } from 'react'
import { Artifika } from 'next/font/google'
import { Sparkles, Clock, CreditCard } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Initialize Artifika font
const artifika = Artifika({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

interface EmailModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (email: string) => void
}

const PurchaseModal: React.FC<EmailModalProps> = ({
    isOpen,
    onClose,
    onSubmit
}) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false)

    // Email validation function
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Update email validation when email changes
    useEffect(() => {
        setIsValidEmail(validateEmail(email))
    }, [email])

    // Focus the email input when modal opens
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                const emailInput = document.getElementById('email-input')
                if (emailInput) emailInput.focus()
            }, 100)

            return () => clearTimeout(timer)
        }
    }, [isOpen])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (isValidEmail) {
            onSubmit(email)
            setEmail('') // Reset email after submission
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    onKeyDown={handleKeyDown}
                >
                    <motion.div
                        className={`bg-white rounded-lg shadow-xl w-full max-w-lg`}
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <div className="p-8">
                            {/* Header */}
                            <h2 className="text-3xl font-bold mb-6">Get ChantedArt!</h2>

                            {/* Description */}
                            <p className="text-lg mb-5">
                                Enter your email and we&apos;ll send you the ChantedArt version of your image once it&apos;s ready.
                            </p>

                            {/* Info message */}
                            {/* <p className="text-lg mb-8">
                                We&apos;re experiencing high volume right now!
                            </p> */}

                            {/* Price and time info */}
                            <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-center">
                                    <CreditCard className="text-gray-500 mr-3 h-5 w-5" />
                                    <p className="text-lg">Price: $3.00 per image</p>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="text-gray-500 mr-3 h-5 w-5" />
                                    <p className="text-lg">Estimated time: 10-15 minutes</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <input
                                    id="email-input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />

                                {/* Buttons */}
                                <div className="flex space-x-4 justify-center">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-6 py-3 border-2 border-black rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <motion.button
                                        type="submit"
                                        disabled={!isValidEmail}
                                        className={`px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center shadow-md transition-colors ${
                                            isValidEmail 
                                                ? 'bg-indigo-300 hover:bg-indigo-400 cursor-pointer' 
                                                : 'bg-gray-300 cursor-not-allowed'
                                        }`}
                                        whileHover={isValidEmail ? { scale: 1.03 } : {}}
                                        whileTap={isValidEmail ? { scale: 0.98 } : {}}
                                    >
                                        <Sparkles className="mr-2 h-5 w-5" />
                                        Get ChantedArt
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default PurchaseModal