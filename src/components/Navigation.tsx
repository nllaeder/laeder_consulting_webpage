
export default function Navigation() {
    return (
        <nav className="bg-brand-green text-white py-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center h-28">
                <div className="flex items-center h-full">
                    <img
                        src="/assets/Laeder-Consulting-Logo-Vertical-RGB.png"
                        alt="Laeder Consulting"
                        className="h-24 object-contain bg-slate-50 p-1 rounded-sm"
                    />
                </div>
                <div className="hidden md:flex space-x-8 font-medium">
                    <a href="#services" className="hover:text-brand-lime transition-colors">Services</a>
                    <a href="#about" className="hover:text-brand-lime transition-colors">About</a>
                    <a href="#contact" className="hover:text-brand-lime transition-colors">Contact</a>
                </div>
                <div className="md:hidden">
                    {/* Mobile Menu Icon Placeholder */}
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
