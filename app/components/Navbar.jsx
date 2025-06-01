'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = ['Home', 'Upload', 'History', 'Settings', 'Pricing'];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full shadow-sm border-b">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold">
                    AutoClarity
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 text-sm font-medium text-black">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <Link href={`/${link.toLowerCase()}`} className="hover:text-yellow-600 transition">
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Login Button */}
                <Link
                    href="/login"
                    className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg font-medium transition"
                >
                    Login
                </Link>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white px-4 pb-4 space-y-3"
                    >
                        {navLinks.map((link) => (
                            <li key={link}>
                                <Link
                                    href={`/${link.toLowerCase()}`}
                                    className="block text-black hover:text-yellow-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/login"
                                className="inline-block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg font-medium transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}
