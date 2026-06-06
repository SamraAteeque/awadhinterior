'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
    const emptyForm = {
        name: '',
        phone: '',
        email: '',
        projectType: 'Interior Design',
        serviceRequired: 'Full Home Interior',
        location: '',
        timeline: 'Immediately',
        budget: 'Prefer not to disclose',
        message: '',
    };

    const [formData, setFormData] = useState(emptyForm);
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            setStatus('error');
            setErrorMessage('Email service is not configured. Please call or WhatsApp us directly.');
            return;
        }

        if (!formData.name || !formData.email || !formData.phone) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields marked with *.');
            return;
        }

        const detailedMessage = `Project Type: ${formData.projectType}
Service Required: ${formData.serviceRequired}
Location: ${formData.location}
Timeline: ${formData.timeline}
Budget: ${formData.budget}

Requirements:
${formData.message}`;

        const templateParams = {
            project_type: formData.projectType,
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.phone,
            message: detailedMessage,
        };

        try {
            const emailjs = (await import('@emailjs/browser')).default;
            const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);

            if (response.status === 200) {
                setStatus('success');
                setFormData(emptyForm);
            } else {
                setStatus('error');
                setErrorMessage('Failed to send message. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Unable to send message. Please call or WhatsApp us directly.');
        }
    };

    return (
        <section className="w-full">

            {/* 1. Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bricolage text-gray-900 mb-4">
                    Ready to Design a <span className="text-[var(--primary-color)]">Better Space?</span>
                </h2>
                <p className="font-jost text-lg text-gray-600">
                    We respond within 24 hours with a detailed project assessment.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                {/* 2. Left Column: Info Card */}
                <div className="lg:col-span-4 h-full">
                    <div className="bg-[var(--primary-color)] text-white p-8 md:p-10 rounded-[2rem] h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div>
                            <h3 className="text-3xl font-bricolage font-bold mb-10">Get In Touch</h3>

                            <div className="space-y-8 font-jost">
                                {/* Office */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xl">
                                        <i className="ri-map-pin-line"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-[var(--text-light)] mb-1">Office (HQ)</h4>
                                        <p className="text-white/80 leading-relaxed text-sm">
                                            Harra ki chungi, Polytechnic Rd, chauraha,<br /> Pura Jodhi, Azamgarh, UP - 276001
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xl">
                                        <i className="ri-phone-line"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-[var(--text-light)] mb-1">Phone</h4>
                                        <p className="text-white/80 text-sm">
                                            <a href="tel:+917905503597" className="hover:text-white transition-colors">+91 7905503597</a> <br />
                                            <a href="tel:+916307782010" className="hover:text-white transition-colors">+91 6307782010</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xl">
                                        <i className="ri-mail-line"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-[var(--text-light)] mb-1">Email</h4>
                                        <p className="text-white/80 text-sm break-all">
                                            <a href="mailto:contact@awadhinteriordesigner.in" className="hover:text-white transition-colors">contact@awadhinteriordesigner.in</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xl">
                                        <i className="ri-time-line"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-[var(--text-light)] mb-1">Business Hours</h4>
                                        <p className="text-white/80 text-sm">
                                            Mon-Sat: 9:00 AM - 8:00 PM <br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Minis */}
                        <div className="mt-12 pt-10 border-t border-white/10">
                            <h4 className="text-[var(--text-light)] font-bricolage font-semibold mb-4">Why Choose Us:</h4>
                            <ul className="space-y-3 text-sm font-jost text-white/80">
                                <li className="flex items-center gap-2">
                                    <i className="ri-checkbox-circle-fill text-[var(--text-light)]"></i> 200+ Projects Delivered
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="ri-checkbox-circle-fill text-[var(--text-light)]"></i> 3D Walkthrough Before Execution
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="ri-checkbox-circle-fill text-[var(--text-light)]"></i> Itemised Costing, No Hidden Charges
                                </li>
                            </ul>

                            <div className="mt-8 grid grid-cols-1 gap-3">
                                <a href="https://wa.me/917905503597" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[var(--text-light)] text-[var(--primary-color)] py-3 px-4 rounded-xl font-bold font-jost hover:bg-white transition-colors">
                                    <i className="ri-whatsapp-line text-xl"></i> WhatsApp Us
                                </a>
                                <a href="tel:+917905503597" className="flex items-center justify-center gap-2 bg-white/10 text-white py-3 px-4 rounded-xl font-bold font-jost hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
                                    <i className="ri-phone-fill"></i> Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Right Column: Form */}
                <div className="lg:col-span-8 bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-20"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <i className="ri-checkbox-circle-line text-4xl text-green-600"></i>
                                </div>
                                <h3 className="text-3xl font-bricolage font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                                <p className="font-jost text-gray-600 mb-8 max-w-md">
                                    Thank you for sharing your details. Our team will analyze your requirements and get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-8 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                                >
                                    Submit Another Project
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {status === 'error' && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm flex items-center gap-2">
                                        <i className="ri-error-warning-line text-lg"></i>
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Row 1: Name & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Full Name *</label>
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost" placeholder="Enter your full name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Phone Number *</label>
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost" placeholder="+91 XXXXXXXXXX" />
                                    </div>
                                </div>

                                {/* Row 2: Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Email Address *</label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost" placeholder="your.email@example.com" />
                                </div>

                                {/* Row 3: Project Type & Service */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Project Type *</label>
                                        <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost text-gray-700 appearance-none">
                                            <option>Interior Design</option>
                                            <option>Renovation</option>
                                            <option>Commercial</option>
                                            <option>Office</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Service Required *</label>
                                        <select name="serviceRequired" value={formData.serviceRequired} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost text-gray-700 appearance-none">
                                            <option>Full Home Interior</option>
                                            <option>Modular Kitchen</option>
                                            <option>Wardrobe & Storage</option>
                                            <option>False Ceiling & Light</option>
                                            <option>Civil Work & Paint</option>
                                            <option>Furniture & Decor</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 4: Location & Timeline */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Project Location</label>
                                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost" placeholder="City, Area" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Timeline</label>
                                        <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost text-gray-700 appearance-none">
                                            <option>Immediately</option>
                                            <option>Within 1 Month</option>
                                            <option>1-3 Months</option>
                                            <option>3+ Months</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 5: Budget */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Budget Range (Optional)</label>
                                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost text-gray-700 appearance-none">
                                        <option>Prefer not to disclose</option>
                                        <option>Under ₹5 Lakh</option>
                                        <option>₹5 Lakh - ₹10 Lakh</option>
                                        <option>₹10 Lakh - ₹20 Lakh</option>
                                        <option>₹20 Lakh+</option>
                                    </select>
                                </div>

                                {/* Row 6: Requirements */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-jost">Project Requirements *</label>
                                    <textarea name="message" required value={formData.message} onChange={handleChange} rows="4" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all font-jost resize-none" placeholder="Please describe your project requirements, specific needs, preferences, etc."></textarea>
                                </div>

                                <button type="submit" disabled={status === 'submitting'} className="w-full bg-[var(--primary-color)] text-white font-jost font-bold text-lg py-4 rounded-xl hover:bg-[#2a4542] transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform disabled:opacity-70 disabled:cursor-not-allowed">
                                    {status === 'submitting' ? 'Sending Request...' : 'Get Free Consultation'}
                                </button>
                            </form>
                        )}
                    </AnimatePresence>
                </div>

            </div>

            {/* 4. What Happens Next Section */}
            <div className="mt-20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bricolage font-bold text-center mb-10 text-gray-900">What happens next:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { time: 'Within 2 hours', text: 'Acknowledgment and initial assessment' },
                        { time: 'Within 24 hours', text: 'Detailed consultation call scheduled' },
                        { time: 'Within 48 hours', text: 'Preliminary layout & feasibility analysis' },
                        { time: 'Within 1 week', text: 'Comprehensive proposal with 3D concepts' }
                    ].map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] mt-2 flex-shrink-0"></div>
                            <div>
                                <span className="block font-bold text-[var(--primary-color)] font-bricolage text-sm">{step.time}</span>
                                <span className="text-gray-600 font-jost text-sm leading-snug">{step.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
