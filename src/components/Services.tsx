
const services = [
    {
        title: "Structural & Architectural",
        description: "Residential design, load-bearing wall removal, floorplan modifications, and settling additions.",
        icon: (
            <svg className="w-12 h-12 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        title: "Special Inspections & Structural Inspections",
        description: "Licensed Special Inspector for reinforced concrete, structural stability of existing buildings, underpinning, and wood construction. Make-safe permit inspections and structural assessments in Philadelphia.",
        icon: (
            <svg className="w-12 h-12 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4" />
            </svg>
        )
    },
    {
        title: "Forensic Analysis",
        description: "Professional sign-offs for unpermitted work, foundation movement analysis, and structural failure remediation.",
        icon: (
            <svg className="w-12 h-12 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    {
        title: "Accessibility & Lifts",
        description: "Structural engineering and support for residential elevators, wheelchair lifts, and chair lifts.",
        icon: (
            <svg className="w-12 h-12 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        )
    },
    {
        title: "PA DEP SPEED Program",
        description: "Qualified Person services for BMP/PCSM SCM construction observation and critical stage inspections.",
        icon: (
            <svg className="w-12 h-12 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-brand-green mb-4">Core Engineering Services</h2>
                <div className="w-24 h-1 bg-brand-lime mx-auto mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:shadow-xl transition-shadow text-center group">
                            <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
