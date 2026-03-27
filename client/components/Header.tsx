import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-white/30">
      <div className="flex items-center justify-between lg:justify-start w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 xl:py-10 lg:gap-12">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img 
              src="/logo_main.svg" 
              alt="HumaneLoom Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <div className="bg-gray-300/50 backdrop-blur-sm rounded-2xl px-6 xl:px-11 py-3 xl:py-4">
            <div className="flex items-center gap-6 xl:gap-8 2xl:gap-12">
              <Link 
                to="/products" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-xs xl:text-sm font-bold whitespace-nowrap"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Products
              </Link>
              <Link 
                to="/products" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-xs xl:text-sm font-bold whitespace-nowrap"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                AI Solutions
              </Link>
              <Link 
                to="/about" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-xs xl:text-sm font-bold whitespace-nowrap"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                About Us
              </Link>
              <Link 
                to="/blogs" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-xs xl:text-sm font-bold whitespace-nowrap"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Blogs
              </Link>
              <Link 
                to="/career" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-xs xl:text-sm font-bold whitespace-nowrap"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Career
              </Link>
            </div>
          </div>
        </nav>

        {/* Desktop Action buttons */}
        <div className="hidden lg:flex gap-4 flex-shrink-0">
          <Link to="/contact">
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-2xl font-mono text-xs font-bold shadow-lg"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Book a Demo
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              className="bg-slate-800 hover:bg-slate-900 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-2xl font-mono text-xs font-bold shadow-lg"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 flex-shrink-0 text-slate-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-xl transition-all duration-300">
          <div className="flex flex-col p-6 space-y-6 max-h-[calc(100vh-100px)] overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/products" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm font-bold py-2 border-b border-slate-100"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/products" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm font-bold py-2 border-b border-slate-100"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
                onClick={() => setIsMenuOpen(false)}
              >
                AI Solutions
              </Link>
              <Link 
                to="/about" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm font-bold py-2 border-b border-slate-100"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/blogs" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm font-bold py-2 border-b border-slate-100"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                to="/career" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm font-bold py-2 border-b border-slate-100"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
            </nav>
            
            <div className="flex flex-col gap-4 mt-4">
              <Link to="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="bg-emerald-500 hover:bg-emerald-600 text-white w-full py-4 rounded-xl font-mono text-xs font-bold shadow-lg"
                  style={{ fontFamily: '"Press Start 2P", monospace' }}
                >
                  Book a Demo
                </Button>
              </Link>
              <Link to="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="bg-slate-800 hover:bg-slate-900 text-white w-full py-4 rounded-xl font-mono text-xs font-bold shadow-lg"
                  style={{ fontFamily: '"Press Start 2P", monospace' }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
