
export default function Footer() {
    return (
        <footer className="bg-brand-green text-white py-12 border-t-8 border-brand-lime">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Laeder Consulting</h3>
                    <p className="opacity-80 text-sm leading-relaxed">
                        Professional Engineering services dedicated to structural integrity, safety, and sustainable design.
                    </p>
                    <div className="mt-6 flex space-x-4">
                        {/* Simple Social or contact icons could go here */}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Credentials</h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-brand-lime rounded-full mr-2"></span>
                            Licensed Professional Engineer (PE)
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-brand-lime rounded-full mr-2"></span>
                            Certified Green Building Engineer (CGBE)
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-brand-lime rounded-full mr-2"></span>
                            Certified Energy Manager (CEM)
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-brand-lime rounded-full mr-2"></span>
                            Master’s in Data Science &mdash; <a href="https://laederdata.com" target="_blank" rel="noopener noreferrer" className="ml-1 underline hover:text-brand-lime">Visit LaederData.com</a>
                        </li>
                    </ul>
                </div>

                <div id="contact">
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="tel:+12232210710" className="flex items-center hover:text-brand-lime transition-colors">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                (223) 221-0710
                            </a>
                        </li>
                        <li>
                            <a href="mailto:nicholas@laederconsulting.com" className="flex items-center hover:text-brand-lime transition-colors">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                nicholas@laederconsulting.com
                            </a>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <a
                            href="sms:+12232210710"
                            className="inline-block bg-brand-lime hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-full text-sm transition-colors"
                        >
                            Text Us Now
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm opacity-50">
                &copy; {new Date().getFullYear()} Laeder Consulting. All rights reserved.
            </div>
        </footer>
    );
}
