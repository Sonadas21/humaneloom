import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Cpu, 
  Cloud, 
  LineChart, 
  MessageSquare, 
  Globe, 
  Users,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "AI Automation",
    description: "Streamline your workflows with intelligent automation that learns and adapts in real-time.",
    icon: Bot,
    color: "from-blue-600 to-cyan-400",
    shadow: "shadow-blue-500/50"
  },
  {
    title: "AI Agents",
    description: "Deploy autonomous agents to handle complex, multi-step tasks efficiently with zero supervision.",
    icon: Cpu,
    color: "from-purple-600 to-pink-500",
    shadow: "shadow-purple-500/50"
  },
  {
    title: "Cloud Services",
    description: "Scalable, secure, and highly performant serverless cloud architecture tailored for your enterprise.",
    icon: Cloud,
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/50"
  },
  {
    title: "Automated Data",
    description: "Transform raw data into actionable analytics and deep insights instantly with AI-driven pipelines.",
    icon: LineChart,
    color: "from-amber-500 to-orange-400",
    shadow: "shadow-amber-500/50"
  },
  {
    title: "AI Chatbots",
    description: "Engage users 24/7 with deep conversational AI that intrinsically understands context and intent.",
    icon: MessageSquare,
    color: "from-indigo-600 to-blue-500",
    shadow: "shadow-indigo-500/50"
  },
  {
    title: "Web Development",
    description: "Next-gen web applications natively powered by machine learning for personalized user experiences.",
    icon: Globe,
    color: "from-rose-500 to-red-500",
    shadow: "shadow-rose-500/50"
  },
  {
    title: "CRM Solutions",
    description: "Predictive customer relationship management to massively boost retention, sales, and satisfaction.",
    icon: Users,
    color: "from-fuchsia-600 to-purple-500",
    shadow: "shadow-fuchsia-500/50"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="bg-[#EB6A2A] py-16 sm:py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] mix-blend-overlay animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] mix-blend-overlay animate-pulse delay-1000"></div>
        {/* Subtle grid pattern for technical feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-5xl text-white font-black tracking-tighter mb-4 filter drop-shadow-md"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Press Start 2P", monospace', lineHeight: "1.8", fontSize: "0.85rem" }}
          >
            Redefining technical limits with next-generation autonomous systems.
          </motion.p>
        </div>

        {/* Interactive Accordion Layout */}
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 w-full h-[900px] lg:h-[600px] p-2 sm:p-4 rounded-3xl sm:rounded-[2.5rem] bg-black/20 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                layout
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className={`group relative rounded-2xl sm:rounded-3xl cursor-pointer overflow-hidden flex flex-col justify-end lg:justify-start transition-colors duration-500 ease-in-out ${
                  isActive 
                    ? 'bg-[#0f172a]' 
                    : 'bg-[#1e293b]/50 hover:bg-[#1e293b]/80'
                }`}
                style={{
                  flexGrow: isActive ? 5 : 1,
                  flexBasis: 0,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 25 }}
              >
                {/* Active Glowing Background gradient inside panel */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-br ${service.color} transition-opacity duration-700 pointer-events-none ${
                    isActive ? 'opacity-20' : 'opacity-0'
                  }`}
                />

                <div className="p-4 sm:p-6 lg:p-8 relative z-10 w-full h-full flex flex-col items-start lg:justify-between">
                  {/* Top section with Icon */}
                  <div className={`flex w-full ${isActive ? 'flex-col items-start' : 'flex-row lg:flex-col items-center'} gap-4 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                    <div 
                      className={`flex items-center justify-center rounded-2xl transition-all duration-500 flex-shrink-0 ${
                        isActive 
                          ? `w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} text-white shadow-lg ${service.shadow}` 
                          : 'w-10 h-10 lg:w-14 lg:h-14 bg-white/10 text-white group-hover:bg-white/20'
                      }`}
                    >
                      <Icon className={isActive ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-5 h-5 lg:w-6 lg:h-6'} strokeWidth={isActive ? 2 : 1.5} />
                    </div>

                    {/* Mobile Title (visible when inactive) */}
                    {!isActive && (
                      <h3 className="lg:hidden text-white/80 font-bold text-xs sm:text-sm whitespace-nowrap truncate tracking-wider">
                        {service.title}
                      </h3>
                    )}
                  </div>

                  {/* Desktop Vertical Title (visible only on desktop when inactive) */}
                  {!isActive && (
                    <div className="hidden lg:flex flex-1 w-full items-center justify-center relative">
                      <span className="absolute -rotate-90 whitespace-nowrap text-white/50 font-bold tracking-[0.2em] uppercase text-xs transition-colors group-hover:text-white">
                        {service.title}
                      </span>
                    </div>
                  )}

                  {/* Expanded Content Section */}
                  <div 
                    className={`flex flex-col justify-end overflow-hidden transition-all duration-500 ${
                      isActive ? 'opacity-100 relative z-20 h-auto mt-4' : 'opacity-0 absolute -bottom-20 h-0 pointer-events-none'
                    }`}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                        >
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-4 tracking-tight leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8 font-medium max-w-sm">
                            {service.description}
                          </p>
                          
                          <button className="flex items-center gap-2 group/btn px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-semibold transition-all duration-300 backdrop-blur-sm border border-white/10 w-fit text-sm sm:text-base">
                            <span>Explore</span>
                            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
