'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPageSection = ({ title, content, image, alt, reverse = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`py-16 px-4 ${reverse ? 'bg-gray-50' : ''}`}
        >
            <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="md:w-1/2">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className="overflow-hidden rounded-xl shadow-xl"
                    >
                        <Image
                            src={image}
                            alt={alt}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {content}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPageSection;