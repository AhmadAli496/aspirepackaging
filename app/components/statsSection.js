'use client'

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useInView } from "framer-motion";

const Counter = ({ from = 0, to, duration = 2, start = false }) => {
    const spring = useSpring(from, { stiffness: 100, damping: 20 });
    const [displayNumber, setDisplayNumber] = useState(from);

    useEffect(() => {
        if (start) {
            spring.set(to);
            const unsubscribe = spring.on("change", (latest) => {
                setDisplayNumber(Math.floor(latest));
            });
            return () => unsubscribe();
        }
    }, [start]);

    return (
        <motion.span>
            {displayNumber}
        </motion.span>
    );
};

const StatCard = ({ label, value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="p-6 bg-white w-full  rounded-2xl  border border-gray-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 className="text-3xl font-bold text-blue-600">
                <Counter to={value} duration={2} start={isInView} />+
            </h3>
            <p className="mt-2 text-lg text-gray-700">{label}</p>
        </motion.div>
    );
};

const StatsSection = ({stats}) => {

    return (
        <div className="flex flex-col items-center gap-6 p-8">
            {stats.map((stat, idx) => (
                <StatCard key={idx} label={stat.label} value={stat.value} />
            ))}
        </div>
    );
};

export default StatsSection;
