export const metadata = {
    title: "Terms of Service | Awadh Interior Designer",
    description: "Review the Terms of Service for Awadh Interior Designer. Guidelines for using our website and engaging our interior design services.",
    alternates: {
        canonical: 'https://awadhinteriordesigner.com/terms-of-service',
    }
};

export default function TermsOfService() {
    return (
        <main className="pt-32 pb-20 px-[8%] lg:px-[12%] bg-white text-[var(--text-color)]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold font-bricolage text-[var(--primary-color)] mb-8">
                    Terms of Service
                </h1>
                <p className="text-sm text-gray-500 mb-12">Last Updated: January 2026</p>

                <div className="space-y-8 font-jost text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the website of <strong>Awadh Interior Designer</strong>, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using our services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">2. Service Description</h2>
                        <p>
                            Awadh Interior Designer provides residential and commercial interior design services in Azamgarh and surrounding areas. While we strive for accuracy, we do not warrant that product descriptions or other content on this site is entirely accurate, complete, current, or error-free.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">3. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, images, and project designs, is the property of Awadh Interior Designer and is protected by international copyright laws. Unauthorized use or reproduction of our design concepts or website content is strictly prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">4. Limitation of Liability</h2>
                        <p>
                            In no event shall Awadh Interior Designer be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">5. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of India and the state of Uttar Pradesh, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">6. Contact Information</h2>
                        <p>
                            For any questions regarding these Terms of Service, please contact us at <a href="mailto:MohdKamal63@gmail.com" className="text-[var(--primary-color)] hover:underline">MohdKamal63@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
