"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"

export default function Loader() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-950/80 flex flex-col items-center justify-center relative overflow-hidden px-4">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Main loader animation */}
            <div className="relative z-10 text-center">
                {/* Central heart with rings */}
                <motion.div
                    className="relative mb-8 mx-auto w-40 h-40 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Outer ring */}
                    <motion.div
                        className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    {/* Middle ring */}
                    <motion.div
                        className="absolute inset-4 border-4 border-pink-500/50 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    {/* Inner ring */}
                    <motion.div
                        className="absolute inset-8 border-2 border-purple-400/40 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    {/* Center heart */}
                    <motion.div
                        className="relative z-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                        animate={{
                            scale: [1, 1.1, 1],
                            boxShadow: [
                                "0 0 20px rgba(6, 182, 212, 0.3)",
                                "0 0 40px rgba(236, 72, 153, 0.5)",
                                "0 0 20px rgba(6, 182, 212, 0.3)",
                            ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                        <Heart className="w-8 h-8 text-white" fill="currentColor" />
                    </motion.div>
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="space-y-4"
                >
                    <h1 className="text-3xl md:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Welcome to your surprise</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Welcome to your surprise</p>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    className="w-72 h-1 bg-gray-800 rounded-full mx-auto mt-8 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.4, duration: 2, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </div>
    )
}
