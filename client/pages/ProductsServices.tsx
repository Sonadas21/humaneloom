import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductsServices() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden flex flex-col">
      {/* Background blur effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-20 w-96 h-64 bg-red-400/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-32 right-32 w-72 h-52 bg-emerald-400/30 rounded-full blur-[50px] animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-80 h-72 bg-blue-500/30 rounded-full blur-[80px] animate-pulse delay-2000"></div>
        <div className="absolute top-40 -left-20 w-80 h-96 bg-red-400/20 rounded-full blur-[120px] transform rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 -left-32 w-72 h-80 bg-blue-500/20 rounded-full blur-[100px] transform rotate-12 animate-pulse delay-1500"></div>
      </div>
      
      <Header />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 w-full">
        <div className="text-center mb-16 lg:mb-24">
          <h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-8"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            Products &<br/> Services
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Explore our state-of-the-art suite of AI solutions designed to modernize legacy workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
           <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-xl border border-white/50 hover:-translate-y-2 transition-transform duration-300">
             <div className="h-16 w-16 bg-blue-100/80 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
             </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-4 font-mono">HumaneBot AI</h3>
             <p className="text-slate-600 leading-relaxed mb-6">
                Our flagship AI agent that integrates directly into your business processes to automate scheduling, email routing, and first-line customer support.
             </p>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                 <span className="text-emerald-500">✓</span> 24/7 Availability
               </li>
               <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                 <span className="text-emerald-500">✓</span> Multi-language NLP
               </li>
               <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                 <span className="text-emerald-500">✓</span> Real-time analytics API
               </li>
             </ul>
             <a href="#" className="font-bold text-blue-600 font-mono text-sm tracking-widest uppercase hover:underline">Learn more →</a>
           </div>

           {/* Card 2 */}
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-xl border border-white/50 hover:-translate-y-2 transition-transform duration-300">
             <div className="h-16 w-16 bg-emerald-100/80 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8.5"/><path d="M3 12A9 3 0 0 0 11.59 14.87"/><path d="M21 12l-3 5h4l-3 5"/></svg>
             </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-4 font-mono">LoomData Engine</h3>
             <p className="text-slate-600 leading-relaxed mb-6">
                A massive-scale data processing engine that cleans, classifies, and encrypts enterprise data on the fly ensuring compliance without sacrificing speed.
             </p>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                 <span className="text-emerald-500">✓</span> End-to-end encryption
               </li>
               <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                 <span className="text-emerald-500">✓</span> Zero-downtime migrations
               </li>
               <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                 <span className="text-emerald-500">✓</span> Auto-scaling architecture
               </li>
             </ul>
             <a href="#" className="font-bold text-emerald-600 font-mono text-sm tracking-widest uppercase hover:underline">Learn more →</a>
           </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
