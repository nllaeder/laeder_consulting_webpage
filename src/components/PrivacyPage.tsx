import Navigation from './Navigation';
import Footer from './Footer';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navigation />
            <main className="flex-grow bg-white">
                <div className="container mx-auto px-4 py-16 max-w-3xl">
                    <h1 className="text-4xl font-bold text-brand-green mb-2">Privacy Policy</h1>
                    <p className="text-sm text-gray-500 mb-10">Last updated: September 21, 2026</p>

                    <p className="text-gray-700 mb-8 leading-relaxed">
                        Laeder Consulting, LLC ("we," "us") operates laederconsulting.com and an
                        internal social media scheduling tool at social.laederconsulting.com.
                    </p>

                    <h2 className="text-xl font-bold text-brand-green mt-8 mb-3">What the scheduling tool does</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The tool is used only by Laeder Consulting to publish and schedule posts to
                        our own business accounts on Facebook, Instagram, and LinkedIn. It is not
                        offered to the public, and no outside users can sign up.
                    </p>

                    <h2 className="text-xl font-bold text-brand-green mt-8 mb-3">Information we access</h2>
                    <p className="text-gray-700 leading-relaxed">
                        When we connect our own business accounts, the platforms provide access
                        tokens and basic account information (such as page name, profile picture,
                        and account ID), along with post performance metrics for our own content.
                        We do not collect, store, or process personal information about members of
                        the public through this tool.
                    </p>

                    <h2 className="text-xl font-bold text-brand-green mt-8 mb-3">How we use it</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This information is used solely to publish our own content and review how
                        it performs. We do not sell, rent, or share it with third parties.
                    </p>

                    <h2 className="text-xl font-bold text-brand-green mt-8 mb-3">Storage and security</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Data is stored on a private server we control, protected by encryption in
                        transit (HTTPS) and restricted access.
                    </p>

                    <h2 className="text-xl font-bold text-brand-green mt-8 mb-3">Website visitors</h2>
                    <p className="text-gray-700 leading-relaxed">
                        If you contact us through this website or by email, we use your
                        information only to respond to your inquiry.
                    </p>

                    <h2 className="text-xl font-bold text-brand-green mt-8 mb-3">Data deletion</h2>
                    <p className="text-gray-700 leading-relaxed">
                        See our{' '}
                        <a href="/data-deletion" className="text-brand-green underline hover:text-brand-lime transition-colors">
                            Data Deletion Instructions
                        </a>{' '}
                        at laederconsulting.com/data-deletion.
                    </p>

                    <h2 className="text-xl font-bold text-brand-green mt-8 mb-3">Contact</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Laeder Consulting, LLC, Pennsylvania<br />
                        <a href="mailto:nicholas@laederconsulting.com" className="text-brand-green underline hover:text-brand-lime transition-colors">
                            nicholas@laederconsulting.com
                        </a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
