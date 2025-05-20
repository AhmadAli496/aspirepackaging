'use client'
import { motion } from 'framer-motion';
import {AboutPageSection, AboutHero, Contact} from "@/app/components";

import { aboutData } from "@/app/data";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <AboutHero />

            <div className="space-y-4">
                {aboutData.map((section, index) => (
                    <AboutPageSection
                        key={section.id}
                        title={section.title}
                        content={section.content}
                        image={section.image}
                        alt={section.alt}
                        reverse={index % 2 !== 0} // Alternate layout
                    />
                ))}
            </div>

            {/* Commitment Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white py-20 px-4"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Commitment</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '♻️', title: "100% Recyclable", text: "All materials recyclable by 2025" },
                            { icon: '🌱', title: "Carbon Neutral", text: "Net-zero operations by 2027" },
                            { icon: '💡', title: "Continuous Innovation", text: "15% annual R&D investment" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-8 bg-gray-50 rounded-xl shadow-md"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-green-600 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <Contact />
        </div>
    );
}