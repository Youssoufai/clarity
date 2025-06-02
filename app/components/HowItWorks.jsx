"use client";
import { motion } from 'framer-motion';
import { FaMicrophone, FaMagic, FaShareAlt } from 'react-icons/fa';
import Image from 'next/image';

const features = [
    {
        icon: <FaMicrophone size={32} />,
        title: 'Record or Upload',
        description:
            'Capture your thoughts with voice notes or upload existing recordings.',
    },
    {
        icon: <FaMagic size={32} />,
        title: 'AI Processing',
        description:
            'Our AI transcribes and organizes your content into actionable items.',
    },
    {
        icon: <FaShareAlt size={32} />,
        title: 'Export & Share',
        description:
            'Send to Notion, Email, or Slack with a single click.',
    },
];

const testimonials = [
    {
        name: 'Michael Chen',
        role: 'Product Manager',
        quote:
            '"AutoClarity has transformed my meeting notes into actionable tasks. I save at least 2 hours of admin work every week."',
        image: '/michael.jpg',
    },
    {
        name: 'Sarah Johnson',
        role: 'Freelance Writer',
        quote:
            '"I record ideas on my walks and by the time I\'m back at my desk, they\'re already organized in Notion. It\'s like magic!"',
        image: '/sarah.jpg',
    },
    {
        name: 'David Rodriguez',
        role: 'Team Lead',
        quote:
            '"The Slack integration has been a game-changer for our remote team. Voice notes to action items instantly."',
        image: '/david.jpg',
    },
];

export default function HowItWorks() {
    return (
        <>
            <section className="py-16 bg-white text-center">
                <h2 className="text-4xl font-bold mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-gray-100 p-6 rounded-full mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 max-w-xs">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-16 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold mb-10">What People Are Saying</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow text-left"
                        >
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-semibold text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">{testimonial.quote}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}
