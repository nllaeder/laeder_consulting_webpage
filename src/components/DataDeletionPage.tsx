import Navigation from './Navigation';
import Footer from './Footer';

export default function DataDeletionPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navigation />
            <main className="flex-grow bg-white">
                <div className="container mx-auto px-4 py-16 max-w-3xl">
                    <h1 className="text-4xl font-bold text-brand-green mb-10">Data Deletion Instructions</h1>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Our social media scheduling tool connects only to Laeder Consulting's own
                        business accounts and does not store data about other Facebook, Instagram,
                        or LinkedIn users.
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        If you believe we hold any data about you and would like it deleted, email{' '}
                        <a href="mailto:nicholas@laederconsulting.com" className="text-brand-green underline hover:text-brand-lime transition-colors">
                            nicholas@laederconsulting.com
                        </a>{' '}
                        with the subject "Data Deletion Request." We will confirm
                        and complete the deletion within 30 days.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        You can also remove this app's access to any Facebook account at any time
                        under Facebook Settings &gt; Security and Login &gt; Business Integrations.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
