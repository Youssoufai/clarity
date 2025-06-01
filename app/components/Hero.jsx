'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
                        Turn chaos into clarity – voice to structured actions in seconds
                    </h1>
                    <p className="mt-4 text-gray-700 text-sm md:text-base max-w-md">
                        AutoClarity converts your voice notes into organized tasks, summaries, and action items. Ready to share with your favorite tools.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link
                            href="/demo"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
                        >
                            Try Demo
                        </Link>
                        <Link
                            href="/pricing"
                            className="border border-gray-300 hover:border-black text-black px-5 py-2 rounded-lg text-sm font-medium transition"
                        >
                            See Pricing
                        </Link>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="bg-white shadow-lg p-4 rounded-xl">
                        <Image
                            src="/images/banner.png" // Replace with your image path
                            alt="Voice to action visual"
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
