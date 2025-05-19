'use client'

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const items = [
    '/home/hero/hp_3.avif',
    '/home/hero/hp_8.avif',
    '/home/hero/hp_9.avif',
    '/home/hero/hp_10.avif',
    '/home/hero/hp_12.avif',
];

export default function VerticalAutoScroller({toBottom = true}) {
    const containerRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Calculate total scroll height (items length × each item's height + margin)
        const itemHeight = 260; // height(150) + marginBottom(10)
        const totalHeight = itemHeight * items.length;

        // Animation loop
        async function loop() {
            await controls.start(
                { y: toBottom ? [-totalHeight, 0] : [0, -totalHeight] },
                { duration: 20, ease: 'linear' }
            );
            loop();
        }

        loop();
    }, [controls, toBottom]);

    return (
        <div
            ref={containerRef}
            // style={{ height: '600px', overflow: 'hidden', position: 'relative' }}
            className={`h-[24rem] md:h-[600px] overflow-hidden relative`}
        >
            <motion.div
                style={{ display: 'flex', flexDirection: 'column' }}
                animate={controls}
            >
                {[...items, ...items].map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`scroll-img-${idx}`}
                        style={{ width: '300px', height: '250px', objectFit: 'cover', marginBottom: '10px' }}
                        className={`w-[300px]  h-[250px] object-cover mb-[10px]`}
                    />
                ))}
            </motion.div>
        </div>
    );
}
