import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Cpu, Cloud, LineChart, MessageSquare, Globe, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    id: 1,
    title: "AI Automation",
    shortTitle: "AI AUTOMATION",
    description: "Streamline your workflows with intelligent automation that learns and adapts in real-time. Boost operational efficiency by replacing repetitive manual tasks with seamlessly connected, self-optimizing digital pipelines.",
    icon: Bot,
  },
  {
    id: 2,
    title: "AI Agents",
    shortTitle: "AI AGENTS",
    description: "Deploy autonomous agents to handle complex tasks with minimal human intervention. Our agents utilize advanced reasoning models to dynamically orchestrate multi-step processes, effectively serving as a tireless digital workforce.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "Cloud Services",
    shortTitle: "CLOUD SERVICES",
    description: "Secure, scalable cloud infrastructure tailored for the modern enterprise ecosystem. We ensure zero-downtime migrations, automated load balancing, and highly resilient architectures that effortlessly grow alongside your business.",
    icon: Cloud,
  },
  {
    id: 4,
    title: "Automated Data",
    shortTitle: "AUTOMATED DATA",
    description: "Turn colossal streams of raw data into actionable insights instantly. Experience real-time data processing, automatic anomaly detection, and predictive analytics without requiring massive in-house engineering overhead.",
    icon: LineChart,
  },
  {
    id: 5,
    title: "AI Chatbots",
    shortTitle: "AI CHATBOTS",
    description: "Next-generation conversational AI that delivers incredibly personalized customer experiences. Capable of understanding nuanced context, our bots seamlessly resolve frontline support tickets and drive engagement 24/7.",
    icon: MessageSquare,
  },
  {
    id: 6,
    title: "Web Development",
    shortTitle: "WEB DEVELOPMENT",
    description: "Fast, responsive, and incredibly robust web applications engineered for peak performance. We craft natively cloud-ready digital interfaces utilizing modern frameworks to guarantee accessibility and stunning UI interactions.",
    icon: Globe,
  },
  {
    id: 7,
    title: "CRM Solutions",
    shortTitle: "CRM SOLUTIONS",
    description: "Data-driven customer relationship lifecycle management designed to organically boost retention. Leverage unified predictive modeling to anticipate user needs, track trends, and dramatically accelerate sales funnel conversions.",
    icon: Users,
  }
];

export default function AISolutions() {
  const [activeTab, setActiveTab] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveTab((prevActive) => {
        const currentIndex = TABS.findIndex((tab) => tab.id === prevActive);
        const nextIndex = (currentIndex + 1) % TABS.length;
        return TABS[nextIndex].id;
      });
    }, 4500); // slightly longer to let animations breathe

    return () => clearInterval(timer);
  }, [isHovered]);

  const activeTabData = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div className="relative min-h-screen bg-[#FDF9F6] overflow-hidden flex flex-col">
      <Header />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 w-full flex flex-col items-center">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-5xl text-slate-800 leading-tight mb-6"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            AI Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Explore our state-of-the-art suite of AI solutions designed to modernize legacy workflows.
          </motion.p>
        </div>

        {/* Brand New Modern Split-Panel Design */}
        <div 
          className="w-full max-w-6xl mx-auto bg-[#D46026] p-4 sm:p-6 lg:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_50px_rgba(212,96,38,0.3)] flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[600px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Side: Interactive Navigation List */}
          <div className="w-full lg:w-[35%] flex flex-col gap-3 sm:gap-4 overflow-y-auto pr-2 custom-scrollbar justify-center">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "group relative flex items-center gap-4 w-full p-4 rounded-2xl sm:rounded-[1.5rem] text-left transition-all duration-300 font-medium overflow-hidden",
                    isActive 
                      ? "bg-[#122e43] border border-white/20 shadow-xl text-white transform scale-[1.02]" 
                      : "bg-[#894630] border border-transparent hover:bg-[#974e35] text-white/90 hover:text-white hover:scale-[1.01]"
                  )}
                >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 relative z-10",
                      isActive 
                        ? "bg-gradient-to-br from-[#1DB8FF] to-[#0A85F2] shadow-[0_0_20px_rgba(29,184,255,0.5)]" 
                        : "bg-white/10 group-hover:bg-white/20"
                    )}>
                      <tab.icon className={cn("w-6 h-6 transition-colors", isActive ? "text-white" : "text-white/70 group-hover:text-white")} />
                    </div>
                    
                    <span className="text-base sm:text-lg tracking-wide flex-grow relative z-10">{tab.title}</span>
                    
                    {/* Active State Indicator Dot */}
                    {isActive && (
                      <motion.div 
                        layoutId="active-indicator" 
                        className="absolute right-6 w-2.5 h-2.5 rounded-full bg-[#1DB8FF] shadow-[0_0_12px_#1DB8FF] z-10" 
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Subtle animated background hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                    )}
                </button>
              )
            })}
          </div>

          {/* Right Side: Vast Premium Animated Display */}
          <div className="w-full lg:w-[65%] relative rounded-3xl bg-[#122e43] shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] overflow-hidden border border-[#1e4868] flex flex-col justify-center min-h-[400px]">
              {/* Background glowing ambient effects */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iMTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-[0.15]" />

              <div className="relative w-full h-full p-8 sm:p-12 lg:p-16 flex items-center z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-start w-full"
                  >
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#1DB8FF] to-[#0A85F2] rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(29,184,255,0.4)] mb-8 sm:mb-10"
                    >
                      <activeTabData.icon className="text-white w-10 h-10 sm:w-12 sm:h-12" />
                    </motion.div>
                    
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]"
                    >
                      {activeTabData.title}
                    </motion.h2>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-[#9EBDD8] text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 font-medium"
                    >
                      {activeTabData.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                    >
                      <button className="group relative flex items-center gap-3 bg-white text-[#122e43] hover:bg-slate-50 rounded-full px-8 py-4 text-base sm:text-lg font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 overflow-hidden">
                        <span className="relative z-10">Explore Solution</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        {/* Shimmer effect on button hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
                      </button>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
          </div>
        </div>
      </main>

      <div className="relative z-10 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
