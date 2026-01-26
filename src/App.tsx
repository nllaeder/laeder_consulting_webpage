import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import MobileContactFab from './components/MobileContactFab';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Services />

        {/* About / Credentials Section Inline */}
        <section id="about" className="py-20 bg-slate-100 border-t border-slate-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-brand-green mb-8">Technical Authority</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Why choose a P.E.?</h3>
                  <p className="text-gray-600 mb-4">
                    Structural issues require more than just a contractor's opinion. They demand engineering precision and legal accountability.
                  </p>
                  <p className="text-gray-600">
                    We provide the stamped specifications and forensic analysis needed for real estate transactions, insurance claims, and safety compliance.
                  </p>
                </div>
                <div className="bg-blueprint p-6 rounded-xl border border-brand-green/10">
                  <h4 className="font-bold text-brand-green mb-4 border-b border-brand-green/20 pb-2">Credentials</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-medium text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                      Licensed Professional Engineer (PE)
                    </li>
                    <li className="flex items-center text-sm font-medium text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                      Certified Green Building Engineer
                    </li>
                    <li className="flex items-center text-sm font-medium text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                      Certified Energy Manager
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileContactFab />
    </div>
  );
}

export default App;
