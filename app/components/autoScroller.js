// components/AutoScroller.js
"use client";
import { motion } from "framer-motion";

const logos = [
    "/home/client/1.webp",
    "/home/client/2.webp",
    "/home/client/3.webp",
    "/home/client/4.webp",
    "/home/client/5.webp",
    "/home/client/6.webp",
    "/home/client/7.webp",
    "/home/client/8.webp",
    "/home/client/9.webp",
]; // replace with your image URLs

export default function AutoScroller({toRight = true}) {
    const animation = {
        animate: {
             x: toRight ? ["0%", "-100%"] : ["-100%" , "0%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                },
            },
        },
    };

    // Duplicate list to make looping look seamless
    const allLogos = [...logos, ...logos];

    return (
        <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-4">
            <motion.div
                className="flex gap-8"
                {...animation}
            >
                {allLogos.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className="h-28 md:h-40 w-auto object-contain"
                        alt={`Logo ${index}`}
                    />
                ))}
            </motion.div>
        </div>
    );
}
