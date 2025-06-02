"use client";

import { motion } from "framer-motion";

export default function PricingCard({ plan }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative flex-1 rounded-2xl border p-6 bg-white transition-transform duration-300 ${plan.highlight
                    ? "border-yellow-500 shadow-xl scale-105"
                    : "border-gray-200"
                }`}
        >
            {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                </div>
            )}

            <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>

            <p className="text-4xl font-bold">
                {plan.price}
                <span className="text-base font-normal">/{plan.description}</span>
            </p>

            <ul className="my-6 text-sm text-gray-700 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-500 font-bold">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                className={`w-full mt-4 py-2 rounded-lg font-semibold transition ${plan.highlight
                        ? "bg-yellow-500 text-white hover:bg-yellow-600"
                        : "border border-gray-400 hover:bg-gray-100"
                    }`}
            >
                Sign Up
            </button>
        </motion.div>
    );
}
