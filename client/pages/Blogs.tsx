import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blogs() {
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-slate-800 leading-tight"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            Blogs
          </h1>
          <p className="text-slate-600 font-medium font-mono text-sm max-w-xs">
            Insights, updates, and news from the HumaneLoom team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((blog) => (
            <div key={blog} className="group bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/50 hover:bg-white/60 transition-all cursor-pointer">
              <div className="h-48 bg-gray-200/80 animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/40 to-purple-300/40 mix-blend-overlay"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2 items-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 bg-emerald-100/50 px-2 py-1 rounded-md">Technology</span>
                  <span className="text-xs text-slate-500 font-mono">Oct 24, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  The Future of AI Integration in Modern Enterprise Architecture
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3">
                  Discover how next-generation artificial intelligence patterns are reshaping the way enterprises architect and deploy large-scale, mission-critical infrastructure in 2026 and beyond.
                </p>
                <div className="pt-2">
                  <span className="text-sm font-bold text-slate-800 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Read More <span className="text-blue-600">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
