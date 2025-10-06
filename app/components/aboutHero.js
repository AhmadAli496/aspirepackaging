'use client';
import { motion } from 'framer-motion';

 const AboutHero = () => {
    return (
        <section className="relative h-[70vh] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[url('/about/about.webp')] opacity-50 bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-black/70" />
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="relative z-10 text-center text-white px-4"
            >
                <h1 className="text-5xl font-bold mb-6">Packaging with Purpose</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Innovating sustainable solutions that protect your products and our planet
                </p>
            </motion.div>
        </section>
    );
};

 export  default AboutHero