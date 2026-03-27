import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
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

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Side: Info */}
        <div className="flex-1 space-y-8">
           <h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-slate-800 leading-tight"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            Contact Us
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed font-medium max-w-md">
            Have questions about our solutions? Experiencing technical issues? Or just want to say hi? We'd love to hear from you.
          </p>

          <div className="space-y-6 pt-4">
             <div className="flex items-center gap-4 group">
               <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner group-hover:scale-110 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
               </div>
               <div>
                  <h4 className="font-bold text-slate-800">Email</h4>
                  <p className="text-slate-600 font-mono text-sm">info@humaneloom.com</p>
               </div>
             </div>

             <div className="flex items-center gap-4 group">
               <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-inner group-hover:scale-110 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               </div>
               <div>
                  <h4 className="font-bold text-slate-800">Office</h4>
                  <p className="text-slate-600 font-mono text-sm">Defence enclave, Dodabannahalli, behind Sobha avenue, Bangalore, Karnataka-560067</p>
               </div>
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
          <form className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">First Name</label>
                  <input type="text" className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all font-mono text-sm" placeholder="Sample" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Last Name</label>
                  <input type="text" className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all font-mono text-sm" placeholder="User" />
                </div>
             </div>
             <div className="space-y-2">
               <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
               <input type="email" className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all font-mono text-sm" placeholder="sample@example.com" />
             </div>
             <div className="space-y-2">
               <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Message</label>
               <textarea className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all font-mono text-sm h-32 resize-none" placeholder="How can we help you?"></textarea>
             </div>
             <Button 
                type="button"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-mono text-sm font-bold shadow-lg w-full"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Send Message
              </Button>
          </form>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
