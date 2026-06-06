'use client';

const items = [
    'RESIDENTIAL',
    'COMMERCIAL',
    'MODULAR KITCHEN',
    '3D VISUALIZATION',
    'FALSE CEILING',
    'WALL PANELING',
    'AZAMGARH',
    'VARANASI',
    'LUCKNOW',
    'MAU',
];

const Separator = () => (
    <span className="mx-6 text-[var(--accent-gold)] text-xs" aria-hidden="true">◆</span>
);

const MarqueeContent = () => (
    <>
        {items.map((item, i) => (
            <span key={i} className="inline-flex items-center shrink-0">
                <span className="font-jost font-semibold text-sm tracking-[0.2em] text-[var(--primary-color)] uppercase">
                    {item}
                </span>
                <Separator />
            </span>
        ))}
    </>
);

export default function MarqueeStrip() {
    return (
        <div
            className="w-full bg-[var(--bg-warm)] border-y border-[var(--accent-gold)]/15 py-4 overflow-hidden"
            aria-hidden="true"
        >
            <div className="flex animate-marquee whitespace-nowrap">
                {/* Duplicate content for seamless loop */}
                <MarqueeContent />
                <MarqueeContent />
            </div>
        </div>
    );
}
