'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/*
  Simplified Eastern UP projection.
  Formula: x = (lon - 79.5) / 5.5 * 480,  y = (27.5 - lat) / 3 * 280
  Cities plotted:
    Lucknow   80.95°E 26.85°N  → x≈128  y≈60
    Gorakhpur 83.37°E 26.76°N  → x≈340  y≈68
    Azamgarh  83.19°E 26.07°N  → x≈324  y≈132
    Mau       83.56°E 25.94°N  → x≈356  y≈144
    Varanasi  82.97°E 25.32°N  → x≈310  y≈202
*/

const cities = [
    { name: 'Lucknow',   x: 128, y: 62,  isHQ: false },
    { name: 'Gorakhpur', x: 338, y: 70,  isHQ: false },
    { name: 'Azamgarh',  x: 322, y: 134, isHQ: true  },
    { name: 'Mau',       x: 356, y: 146, isHQ: false },
    { name: 'Varanasi',  x: 308, y: 202, isHQ: false },
];

export default function LocationMap() {
    return (
        <section className="bg-[#FAF9F6] px-[8%] lg:px-[12%] py-20 lg:py-28">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="font-jost text-[var(--primary-color)] uppercase tracking-[0.25em] text-xs mb-5 font-semibold">
                            Where We Work
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold font-bricolage text-[var(--primary-color)] tracking-tighter leading-[1.05] mb-6">
                            Serving Eastern UP,<br />
                            <span className="italic font-serif font-light opacity-55">City by City</span>
                        </h2>
                        <p className="font-jost text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
                            From our base in Azamgarh, we deliver complete interior design projects across five cities — with the same team, the same standards, and the same on-time commitment.
                        </p>

                        {/* City list */}
                        <ul className="space-y-3 mb-10">
                            {cities.map((city) => (
                                <li key={city.name} className="flex items-center gap-3 font-jost text-sm text-gray-600">
                                    <span
                                        className="w-2 h-2 rounded-full shrink-0"
                                        style={{ backgroundColor: city.isHQ ? 'var(--primary-color)' : 'var(--text-light)' }}
                                    />
                                    {city.name}
                                    {city.isHQ && (
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--primary-color)] bg-[var(--primary-color)]/8 px-2 py-0.5 rounded-full">
                                            HQ
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <Link href="/contact">
                            <motion.button
                                className="px-7 py-3.5 bg-[var(--primary-color)] text-white font-jost font-semibold text-sm rounded-full shadow-lg hover:bg-[#2a4542] transition-colors"
                                whileHover={{ y: -2, boxShadow: '0 14px 30px rgba(30,52,50,0.22)' }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Check Your City
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right: SVG Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
                            <svg
                                viewBox="0 0 480 280"
                                className="w-full h-auto"
                                aria-label="Map of Eastern Uttar Pradesh showing Awadh Interior project locations"
                                role="img"
                            >
                                {/* Grid lines */}
                                {[80, 160, 240, 320, 400].map(x => (
                                    <line key={x} x1={x} y1="0" x2={x} y2="280"
                                        stroke="#f0f0f0" strokeWidth="1" />
                                ))}
                                {[56, 112, 168, 224].map(y => (
                                    <line key={y} x1="0" y1={y} x2="480" y2={y}
                                        stroke="#f0f0f0" strokeWidth="1" />
                                ))}

                                {/* Region shape — simplified Eastern UP */}
                                <path
                                    d="M 80,30 L 420,20 L 440,60 L 430,240 L 340,260 L 200,250 L 90,230 L 60,150 Z"
                                    fill="#f0f5f4"
                                    stroke="#d4e4e0"
                                    strokeWidth="1.5"
                                />

                                {/* Connection lines between cities */}
                                {cities.slice(1).map((city) => (
                                    <line
                                        key={city.name}
                                        x1={cities[0].x} y1={cities[0].y}
                                        x2={city.x} y2={city.y}
                                        stroke="#a1cca5"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                        opacity="0.5"
                                    />
                                ))}

                                {/* City dots */}
                                {cities.map((city, i) => (
                                    <g key={city.name}>
                                        {/* Pulse ring (CSS animation via class) */}
                                        <circle
                                            cx={city.x}
                                            cy={city.y}
                                            r={city.isHQ ? 14 : 10}
                                            fill={city.isHQ ? '#1e3432' : '#a1cca5'}
                                            opacity="0.15"
                                        >
                                            <animate
                                                attributeName="r"
                                                values={city.isHQ ? '12;20;12' : '8;14;8'}
                                                dur={`${2 + i * 0.4}s`}
                                                repeatCount="indefinite"
                                            />
                                            <animate
                                                attributeName="opacity"
                                                values="0.2;0;0.2"
                                                dur={`${2 + i * 0.4}s`}
                                                repeatCount="indefinite"
                                            />
                                        </circle>

                                        {/* Solid dot */}
                                        <circle
                                            cx={city.x}
                                            cy={city.y}
                                            r={city.isHQ ? 6 : 4}
                                            fill={city.isHQ ? '#1e3432' : '#40916C'}
                                        />

                                        {/* Label */}
                                        <text
                                            x={city.x}
                                            y={city.y - (city.isHQ ? 12 : 10)}
                                            textAnchor="middle"
                                            fontSize={city.isHQ ? '10' : '9'}
                                            fontFamily="sans-serif"
                                            fontWeight={city.isHQ ? '700' : '600'}
                                            fill={city.isHQ ? '#1e3432' : '#415d43'}
                                        >
                                            {city.name}
                                        </text>

                                        {/* HQ label */}
                                        {city.isHQ && (
                                            <text
                                                x={city.x}
                                                y={city.y + 20}
                                                textAnchor="middle"
                                                fontSize="7"
                                                fontFamily="sans-serif"
                                                fontWeight="700"
                                                fill="#1e3432"
                                                opacity="0.6"
                                                letterSpacing="1"
                                            >
                                                HEADQUARTERS
                                            </text>
                                        )}
                                    </g>
                                ))}
                            </svg>

                            {/* Legend */}
                            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[var(--primary-color)]" />
                                    <span className="font-jost text-xs text-gray-400">Headquarters</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#40916C]" />
                                    <span className="font-jost text-xs text-gray-400">Service Cities</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
