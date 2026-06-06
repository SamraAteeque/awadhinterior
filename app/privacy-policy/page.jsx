export const metadata = {
    title: "Privacy Policy | Awadh Interior Designer Azamgarh",
    description: "Read our Privacy Policy to understand how Awadh Interior Designer collects, uses, and protects your personal information.",
    alternates: {
        canonical: 'https://awadhinteriordesigner.com/privacy-policy',
    }
};

export default function PrivacyPolicy() {
    return (
        <main className="pt-32 pb-20 px-[8%] lg:px-[12%] bg-white text-[var(--text-color)]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold font-bricolage text-[var(--primary-color)] mb-8">
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-500 mb-12">Last Updated: January 2026</p>

                <div className="space-y-8 font-jost text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">1. Introduction</h2>
                        <p>
                            Welcome to <strong>Awadh Interior Designer</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect your data when you visit our website or engage our interior design services in Azamgarh, Uttar Pradesh.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">2. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and project details you provide via our contact forms.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our website to improve user experience.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">3. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>To respond to your inquiries and schedule consultations.</li>
                            <li>To provide and manage our interior design services.</li>
                            <li>To improve our website functionality and customer service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">4. Data Protection</h2>
                        <p>
                            We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <p><strong>Awadh Interior Designer</strong></p>
                            <p>Email: <a href="mailto:MohdKamal63@gmail.com" className="text-[var(--primary-color)] hover:underline">MohdKamal63@gmail.com</a></p>
                            <p>Address: Harra ki chungi, Polytechnic Rd, chauraha, Pura Jodhi, Azamgarh, Uttar Pradesh 276001</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
