
export default function MobileContactFab() {
    return (
        <div className="fixed bottom-6 right-6 md:hidden z-50 flex flex-col gap-3">
            <a
                href="sms:+12232210710"
                className="bg-brand-lime hover:bg-lime-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all border-2 border-white"
                aria-label="Text Engineer Now"
            >
                <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </a>
            <a
                href="tel:+12232210710"
                className="bg-brand-green hover:bg-emerald-900 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all border-2 border-white"
                aria-label="Call Engineer Now"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </a>
        </div>
    );
}
