import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [cubeAnimation, setCubeAnimation] = useState(null);

  useEffect(() => {
    fetch('/cube_ani.json')
      .then(response => response.json())
      .then(data => setCubeAnimation(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0">
        {/* Red blur effect */}
        <div className="absolute top-10 right-20 w-96 h-64 bg-red-400/30 rounded-full blur-[100px] animate-pulse"></div>
        {/* Green blur effect */}
        <div className="absolute top-32 right-32 w-72 h-52 bg-emerald-400/30 rounded-full blur-[50px] animate-pulse delay-1000"></div>
        {/* Blue blur effect */}
        <div className="absolute bottom-20 right-10 w-80 h-72 bg-blue-500/30 rounded-full blur-[80px] animate-pulse delay-2000"></div>

        {/* Left side blur effects */}
        <div className="absolute top-40 -left-20 w-80 h-96 bg-red-400/20 rounded-full blur-[120px] transform rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 -left-32 w-72 h-80 bg-blue-500/20 rounded-full blur-[100px] transform rotate-12 animate-pulse delay-1500"></div>
      </div>

      {/* Header with logo and navigation */}
      <Header />



      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[calc(100vh-200px)]">
          {/* Left content */}
          <div className="flex-1 max-w-2xl space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-800 leading-tight"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                HumaneLoom
              </h1>
              <p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-lg mx-auto lg:mx-0"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Transforming Industries Through Intelligent Innovation
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-mono text-xs font-bold shadow-lg flex-shrink-0 w-full sm:w-auto"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Book a Demo...
              </Button>
              <Button 
                variant="secondary"
                className="bg-gray-300/80 hover:bg-gray-400/80 text-slate-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-mono text-xs font-bold shadow-lg flex-shrink-0 w-full sm:w-auto"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Explore Products
              </Button>
            </div>
          </div>

          {/* Right content - 3D Cube */}
          <div className="flex-1 flex flex-col items-center justify-center lg:justify-end mt-8 lg:mt-0 max-w-lg lg:max-w-none">
            <div className="relative mb-8 lg:mb-0">
              {cubeAnimation ? (
                <Lottie 
                  animationData={cubeAnimation}
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] animate-float"
                  loop={true}
                  autoplay={true}
                />
              ) : (
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-xs sm:text-sm">Loading animation...</span>
                </div>
              )}
            </div>

            {/* CTA Buttons - Mobile Only Position */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full lg:hidden">
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-mono text-xs font-bold shadow-lg flex-shrink-0 w-full sm:w-auto"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Book a Demo...
              </Button>
              <Button 
                variant="secondary"
                className="bg-gray-300/80 hover:bg-gray-400/80 text-slate-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-mono text-xs font-bold shadow-lg flex-shrink-0 w-full sm:w-auto"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
