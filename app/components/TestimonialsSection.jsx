'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const initialTestimonialsData = [
    {
        quote: "Awadh Interior transformed our living room completely. The 3D visualization was spot-on — what we saw in the render is exactly what got delivered. Transparent pricing throughout, no surprises at handover.",
        author: "Nikhat Azmi",
        stars: 5,
        title: "Homeowner, Azamgarh",
    },
    {
        quote: "Got my modular kitchen done by Awadh Interior. Excellent cabinet quality, work finished on schedule, and the team cleaned up after completion. The itemised quote was clear and there were zero hidden charges.",
        author: "Saif Sheikh",
        stars: 5,
        title: "Business Owner, Mau",
    },
    {
        quote: "Reasonable pricing and solid workmanship. The false ceiling with LED cove lighting looks exactly like the reference I shared. Response time was quick and the team was courteous on site throughout.",
        author: "Fuzail Ahmad",
        stars: 4,
        title: "Client, Varanasi",
    },
];

const AVATAR_COLORS = ['#2D6A4F', '#1B4332', '#40916C', '#1A3C34', '#386641'];

const InitialsAvatar = ({ name }) => {
    const colorIndex = (name.charCodeAt(0) + (name.charCodeAt(1) || 0)) % AVATAR_COLORS.length;
    return (
        <div
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl font-bricolage border-2 border-white/20 shadow-sm"
            style={{ backgroundColor: AVATAR_COLORS[colorIndex] }}
        >
            {name.charAt(0).toUpperCase()}
        </div>
    );
};

const EASE_CUBIC_OUT = [0.33, 1, 0.68, 1];

export default function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState(initialTestimonialsData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form States
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');

    const resetForm = () => {
        setName('');
        setRating(0);
        setReview('');
        setSubmitStatus('idle');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!rating) return;
        setSubmitStatus('submitting');

        try {
            const emailjs = (await import('@emailjs/browser')).default;
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    project_type: 'Client Review Submission',
                    from_name: name,
                    from_email: 'review@awadhinteriordesigner.in',
                    phone_number: 'N/A',
                    message: `New Review\n\nRating: ${rating}/5 stars\nClient: ${name}\n\nReview:\n${review}`,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setTestimonials(prev => [{
                quote: review,
                author: name,
                title: 'Valued Client',
                image: '/testimonial/Default.jpg',
                stars: rating,
            }, ...prev]);

            setSubmitStatus('success');
            setSubmitted(true);

            setTimeout(() => {
                setIsModalOpen(false);
                setTimeout(() => {
                    setSubmitted(false);
                    resetForm();
                }, 500);
            }, 2000);

        } catch {
            setSubmitStatus('error');
        }
    };

    return (
        <section className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto max-w-[1920px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Heading & CTA */}
                    <div className="text-left lg:sticky lg:top-32 px-2 sm:px-4">
                        <span className="font-jost text-[var(--accent-gold)] font-semibold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-bricolage leading-[1.1] text-[var(--primary-color)] mb-8">
                            Hear What Our<br />Clients Say <span className="text-red-500">♥</span>
                        </h2>
                        <p className="font-jost text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
                            We take pride in building lasting relationships. Here's feedback from some of the people we've had the pleasure of working with.
                        </p>

                        <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden mb-10">
                            <Image src="/ID1.jpg" alt="Beautiful interior showcase" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover transition-transform hover:scale-105 duration-700" />
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/50">
                                <h3 className="text-4xl font-bricolage font-bold text-[var(--primary-color)]">180+</h3>
                                <p className="font-jost text-gray-600 text-sm font-medium">Happy Clients</p>
                            </div>
                        </div>

                        {/* Google Reviews Badge */}
                        <a
                            href="https://www.google.com/maps/search/Awadh+Interior+Designer+Azamgarh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow mb-6 group w-fit"
                            aria-label="See our reviews on Google"
                        >
                            {/* Google G logo */}
                            <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                            </svg>

                            <div>
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="font-bricolage font-bold text-xl text-gray-900 leading-none">4.8</span>
                                    <div className="flex items-center gap-0.5" aria-label="4.8 out of 5 stars">
                                        {[1, 2, 3, 4].map(i => (
                                            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                            </svg>
                                        ))}
                                        {/* Partial star for 0.8 */}
                                        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                                            <defs>
                                                <linearGradient id="partial">
                                                    <stop offset="80%" stopColor="#FBBC05"/>
                                                    <stop offset="80%" stopColor="#e5e7eb"/>
                                                </linearGradient>
                                            </defs>
                                            <path fill="url(#partial)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="font-jost text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                                    47 reviews on <span className="font-semibold text-gray-500">Google</span>
                                </p>
                            </div>
                        </a>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="font-jost font-semibold text-base bg-[var(--primary-color)] text-white px-8 py-3.5 rounded-full hover:bg-[#2a4542] transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            <i className="ri-chat-smile-2-line text-xl"></i> Leave a Review
                        </button>
                    </div>

                    {/* Right Column: Scrolling Testimonials */}
                    <div
                        className="relative w-full space-y-8 h-[500px] lg:h-[700px] overflow-y-auto pr-4 custom-scrollbar scroll-smooth"
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: 'var(--accent-gold) #f3f4f6'
                        }}
                    >
                        <style jsx>{`
                            .custom-scrollbar::-webkit-scrollbar {
                                width: 6px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-track {
                                background: #f3f4f6;
                                border-radius: 4px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb {
                                background-color: var(--primary-color);
                                border-radius: 4px;
                                opacity: 0.8;
                            }
                        `}</style>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className={`relative w-full rounded-3xl p-8 md:p-10 transition-all hover:shadow-xl border ${index % 2 === 0
                                    ? 'bg-[#1e3432] text-white border-transparent'
                                    : 'bg-gray-50 text-gray-800 border-gray-100'
                                    }`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.1 }} // Reduced amount for smoother scroll reveal
                                transition={{ duration: 0.5, delay: 0.05 }} // Faster transition for scroll feel
                            >
                                {/* Star Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={`ri-star-fill text-xl ${i < testimonial.stars
                                                ? 'text-yellow-400'
                                                : 'text-gray-300 opacity-30'
                                                }`}
                                        ></i>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className={`font-jost text-lg md:text-xl mb-8 leading-relaxed font-medium ${index % 2 === 0 ? 'text-gray-100' : 'text-gray-700'}`}>
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-5 border-t pt-6 border-white/10">
                                    <InitialsAvatar name={testimonial.author} />
                                    <div>
                                        <h4 className={`text-lg font-bricolage font-bold ${index % 2 === 0 ? 'text-white' : 'text-gray-900'}`}>
                                            {testimonial.author}
                                        </h4>
                                        <p className={`font-jost text-sm uppercase tracking-wide ${index % 2 === 0 ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {testimonial.title || "Client"}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* REVIEW FORM MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-lg relative"
                            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} transition={{ duration: 0.3, type: "spring", damping: 25 }}>

                            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors" aria-label="Close review modal">
                                <i className="ri-close-line text-2xl"></i>
                            </button>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 15 }} className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <i className="ri-checkbox-circle-line text-5xl text-green-600"></i>
                                    </motion.div>
                                    <h2 className="text-3xl font-bricolage font-bold text-gray-900 mb-2">Thank You!</h2>
                                    <p className="font-jost text-lg text-gray-600">Your review plays a huge role in our journey.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bricolage font-bold text-gray-900 mb-2">Share Experience</h2>
                                        <p className="text-gray-500 font-jost">How was your journey with Awadh Interior?</p>
                                    </div>

                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider font-jost">Rating</label>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <motion.button
                                                        type="button"
                                                        key={star}
                                                        className={`text-4xl transition-colors duration-200 focus:outline-none ${(hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-200'}`}
                                                        onClick={() => setRating(star)}
                                                        onMouseEnter={() => setHoverRating(star)}
                                                        onMouseLeave={() => setHoverRating(0)}
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <i className="ri-star-fill"></i>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider font-jost">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost placeholder:text-gray-400"
                                                placeholder="e.g. Adarsh Singh"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="review" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider font-jost">Your Review</label>
                                            <textarea
                                                id="review"
                                                rows="4"
                                                value={review}
                                                onChange={(e) => setReview(e.target.value)}
                                                required
                                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost placeholder:text-gray-400 resize-none"
                                                placeholder="Tell us about your project..."
                                            ></textarea>
                                        </div>

                                        {submitStatus === 'error' && (
                                            <p className="text-sm text-red-500 font-jost text-center -mb-2">
                                                Failed to submit. Please try again.
                                            </p>
                                        )}
                                        <motion.button
                                            type="submit"
                                            disabled={submitStatus === 'submitting'}
                                            className="w-full bg-[var(--primary-color)] text-white font-jost font-bold py-4 rounded-xl hover:bg-[#2a4542] transition-colors shadow-lg text-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {submitStatus === 'submitting' ? (
                                                <><i className="ri-loader-4-line animate-spin"></i> Submitting...</>
                                            ) : 'Publish Review'}
                                        </motion.button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
