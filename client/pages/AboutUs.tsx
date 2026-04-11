import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUs() {
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
        <h1 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-8"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          About Us
        </h1>
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl border border-white/50 space-y-6 mb-16">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
            At HumaneLoom, our mission is to redefine how industries operate by blending artificial intelligence with human-centric solutions. 
            We believe that technology should empower, not replace, human ingenuity.
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Founded by a team of visionary engineers and designers, we strive to create products that make a tangible difference in the world. 
            From predictive analytics to intelligent workflow automation, our solutions are trusted by industry leaders globally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div className="p-4 bg-white/50 rounded-xl">
              <h3 className="font-bold text-emerald-600 mb-2 font-mono text-sm tracking-widest uppercase">Innovation</h3>
              <p className="text-sm text-slate-600">Pushing the boundaries of what is possible with scalable architecture.</p>
            </div>
            <div className="p-4 bg-white/50 rounded-xl">
              <h3 className="font-bold text-blue-600 mb-2 font-mono text-sm tracking-widest uppercase">Inclusion</h3>
              <p className="text-sm text-slate-600">Designing solutions that are accessible and easy for anyone to adopt.</p>
            </div>
            <div className="p-4 bg-white/50 rounded-xl">
              <h3 className="font-bold text-purple-600 mb-2 font-mono text-sm tracking-widest uppercase">Impact</h3>
              <p className="text-sm text-slate-600">Delivering measurable results that enhance both productivity and well-being.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-12">
          <div className="text-center mb-16">
            <p className="text-blue-800 font-medium mb-3 text-sm tracking-wide">The People Behind Our Success</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: '"Press Start 2P", monospace' }}>Our Team</h2>
            <p className="text-slate-600">Meet the talented individuals who make our success possible</p>
          </div>

          {/* Founders Row (3 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center mb-8">
            
            {/* Team Member: Arpan */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-24 h-1 bg-indigo-300"></div>
              <div className="p-8 pb-10 flex flex-col items-center text-center mt-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white object-cover group-hover:shadow-lg transition-all duration-300">
                  <img src="/members/arpan.png" alt="Arpan" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Arpan</h3>
                <p className="text-indigo-700 font-medium mb-4 text-sm">Co-founder</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Driving strategic growth and system architecture.
                </p>
              </div>
            </div>
            
            
            {/* Team Member : shivam */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-24 h-1 bg-indigo-300"></div>
              <div className="p-8 pb-10 flex flex-col items-center text-center mt-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white object-cover group-hover:shadow-lg transition-all duration-300">
                  <img src="/members/shivam.jpg" alt="Shivam Kumar" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Shivam Kumar</h3>
                <p className="text-indigo-700 font-medium mb-4 text-sm">Co-founder (AI)</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Tech Visionary
                </p>
              </div>
            </div>

            {/* Team Member : Raman */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-24 h-1 bg-indigo-300"></div>
              <div className="p-8 pb-10 flex flex-col items-center text-center mt-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white object-cover group-hover:shadow-lg transition-all duration-300">
                  <img src="/members/raman.jpg" alt="Raman Kumar" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Raman Kumar</h3>
                <p className="text-indigo-700 font-medium mb-4 text-sm">Co-founder (AI)</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Expert in educational technology and system architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Founding Engineers Row (4 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto justify-center">
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-24 h-1 bg-indigo-300"></div>
              <div className="p-8 pb-10 flex flex-col items-center text-center mt-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white object-cover group-hover:shadow-lg transition-all duration-300">
                  <img src="/members/sona.jpg" alt="Sona Das" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Sona Das</h3>
                <p className="text-indigo-700 font-medium mb-4 text-sm">Founding Engineer</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Full-Stack AI Engineer with a passion for innovation.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-24 h-1 bg-indigo-300"></div>
              <div className="p-8 pb-10 flex flex-col items-center text-center mt-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white object-cover group-hover:shadow-lg transition-all duration-300">
                  <img src="/members/Anu.jpg" alt="Anu" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Anu</h3>
                <p className="text-indigo-700 font-medium mb-4 text-sm">Founding Engineer</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Dedicated professional driving our success forward.
                </p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-24 h-1 bg-indigo-300"></div>
              <div className="p-8 pb-10 flex flex-col items-center text-center mt-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white object-cover group-hover:shadow-lg transition-all duration-300">
                  <img src="/members/chandan.jpg" alt="Chandan" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Chandan</h3>
                <p className="text-indigo-700 font-medium mb-4 text-sm">Founding Engineer</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Skilled expert bringing creative solutions to reality.
                </p>
              </div>
            </div>

            {/* Team Member: Anuj */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-24 h-1 bg-indigo-300"></div>
              <div className="p-8 pb-10 flex flex-col items-center text-center mt-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white object-cover group-hover:shadow-lg transition-all duration-300">
                  <img src="/members/anuj.png" alt="Anuj" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Anuj</h3>
                <p className="text-indigo-700 font-medium mb-4 text-sm">Founding Engineer</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Building highly scalable and robust system backends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
