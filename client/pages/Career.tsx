import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Career() {
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

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 w-full text-center lg:text-left">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-6"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            Careers
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Join the team at HumaneLoom and help shape the intelligent systems of tomorrow. 
            We are always looking for passionate, curious minds to tackle big challenges.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 max-w-4xl">
          {/* Job Opening 1 */}
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 flex flex-col md:flex-row items-start md:items-center justify-between group hover:bg-white/60 transition-all">
            <div className="space-y-2 mb-4 md:mb-0">
               <h3 className="text-xl md:text-2xl font-bold text-slate-800">Software Engineer Intern</h3>
               <p className="text-slate-500 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                 <span>Bangalore</span> • <span>Internship</span> • <span>Engineering</span>
               </p>
            </div>
            <Button 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 w-full md:w-auto py-3 rounded-xl font-mono text-[10px] md:text-xs font-bold shadow-lg flex-shrink-0"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Apply Now
            </Button>
          </div>

          {/* Job Opening 2 */}
           <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 flex flex-col md:flex-row items-start md:items-center justify-between group hover:bg-white/60 transition-all">
            <div className="space-y-2 mb-4 md:mb-0">
               <h3 className="text-xl md:text-2xl font-bold text-slate-800">Product Manager Intern</h3>
               <p className="text-slate-500 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                 <span>Bangalore</span> • <span>Internship</span> • <span>Design</span>
               </p>
            </div>
            <Button 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 w-full md:w-auto py-3 rounded-xl font-mono text-[10px] md:text-xs font-bold shadow-lg flex-shrink-0"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Apply Now
            </Button>
          </div>

          {/* Job Opening 3 */}
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 flex flex-col md:flex-row items-start md:items-center justify-between group hover:bg-white/60 transition-all">
            <div className="space-y-2 mb-4 md:mb-0">
               <h3 className="text-xl md:text-2xl font-bold text-slate-800">AI Intern</h3>
               <p className="text-slate-500 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                 <span>Bangalore</span> • <span>Internship</span> • <span>GenAI</span>
               </p>
            </div>
            <Button 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 w-full md:w-auto py-3 rounded-xl font-mono text-[10px] md:text-xs font-bold shadow-lg flex-shrink-0"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
