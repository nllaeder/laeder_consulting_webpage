
export default function Hero() {
    return (
        <section className="relative bg-blueprint min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {/* Technical SVG Overlay / Grid Lines */}
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-green" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6 tracking-tight">
                    Structural & Forensic <br />
                    <span className="text-brand-green/80">Engineering</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    Engineering Clarity. Structural Certainty.<br />
                    Licensed Professional Engineering for residential design, forensics, and sustainable compliance.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    {/* Primary Mobile CTA */}
                    <a
                        href="sms:+12232210710"
                        className="w-full md:w-auto bg-brand-lime hover:bg-lime-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 block md:hidden text-center"
                    >
                        Text Engineer Now
                    </a>

                    <a
                        href="tel:+12232210710"
                        className="w-full md:w-auto bg-brand-green hover:bg-emerald-900 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
                    >
                        Call Now
                    </a>

                    <a
                        href="#contact"
                        className="w-full md:w-auto bg-white border-2 border-brand-green text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all text-center"
                    >
                        Get a Quote
                    </a>
                </div>
            </div>
        </section>
    );
}
