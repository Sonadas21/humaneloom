export default function ProblemWesolve() {
  return (
    <section className="bg-[#EB6A2A] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EB6A2A] via-[#E85D04] to-[#D35400] opacity-90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            Problems We Solve
          </h2>
        </div>

        {/* Brand Logos Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-16">
            {/* First set of logos */}
            <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 flex-shrink-0">
              <img src="/api/placeholder/120/60" alt="Apple" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Google" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Microsoft" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Amazon" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Meta" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Tesla" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 flex-shrink-0">
              <img src="/api/placeholder/120/60" alt="Apple" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Google" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Microsoft" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Amazon" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Meta" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
              <img src="/api/placeholder/120/60" alt="Tesla" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" />
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-16 sm:w-20 h-full bg-gradient-to-r from-[#EB6A2A] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-20 h-full bg-gradient-to-l from-[#EB6A2A] to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
