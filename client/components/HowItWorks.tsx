import { motion } from "framer-motion";
import { PlugZap, BrainCircuit, LineChart, RotateCw } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Integrate & Connect",
    description: "Seamlessly connect your existing tools and data sources. Our platform natively integrates with your ecosystem without disrupting your workflow.",
    icon: <PlugZap className="w-8 h-8 text-blue-600" />,
    color: "from-blue-400/20 to-indigo-500/20",
    iconBg: "bg-blue-100",
    imagePlaceholder: (
      <div className="relative w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 p-6 shadow-xl flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-50/50"></div>
        <PlugZap className="w-32 h-32 text-blue-300 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-md" strokeWidth={1} />
        {/* Animated connecting dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-700"></div>
      </div>
    )
  },
  {
    id: "02",
    title: "Intelligent Processing",
    description: "Our core AI engine analyzes streams of data in real-time, identifying patterns, classifying anomalies, and standardizing inputs effortlessly.",
    icon: <BrainCircuit className="w-8 h-8 text-emerald-600" />,
    color: "from-emerald-400/20 to-teal-500/20",
    iconBg: "bg-emerald-100",
    imagePlaceholder: (
      <div className="relative w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 p-6 shadow-xl flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-teal-50/50"></div>
        <BrainCircuit className="w-32 h-32 text-emerald-300 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-md" strokeWidth={1} />
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent animate-pulse top-1/2 -translate-y-1/2"></div>
      </div>
    )
  },
  {
    id: "03",
    title: "Actionable Insights",
    description: "Transform complex data into understandable, visually rich dashboards. Get predictive recommendations that drive high-impact decisions.",
    icon: <LineChart className="w-8 h-8 text-purple-600" />,
    color: "from-purple-400/20 to-fuchsia-500/20",
    iconBg: "bg-purple-100",
    imagePlaceholder: (
      <div className="relative w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 p-6 shadow-xl flex flex-col items-center justify-end overflow-hidden group gap-2 pb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-fuchsia-50/50"></div>
        <div className="flex items-end gap-3 h-32 z-10 w-full justify-center px-8">
          <motion.div initial={{ height: "20%" }} whileInView={{ height: "60%" }} transition={{ duration: 1 }} className="w-8 bg-purple-300/80 rounded-t-sm"></motion.div>
          <motion.div initial={{ height: "20%" }} whileInView={{ height: "40%" }} transition={{ duration: 1, delay: 0.2 }} className="w-8 bg-purple-400/80 rounded-t-sm"></motion.div>
          <motion.div initial={{ height: "20%" }} whileInView={{ height: "90%" }} transition={{ duration: 1, delay: 0.4 }} className="w-8 bg-fuchsia-400/80 rounded-t-sm"></motion.div>
          <motion.div initial={{ height: "20%" }} whileInView={{ height: "70%" }} transition={{ duration: 1, delay: 0.6 }} className="w-8 bg-purple-500/80 rounded-t-sm"></motion.div>
        </div>
      </div>
    )
  },
  {
    id: "04",
    title: "Continuous Optimization",
    description: "The system learns from past interactions. By continuously optimizing its models, it stays ahead of market changes and ensures peak performance.",
    icon: <RotateCw className="w-8 h-8 text-orange-600" />,
    color: "from-orange-400/20 to-red-500/20",
    iconBg: "bg-orange-100",
    imagePlaceholder: (
      <div className="relative w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 p-6 shadow-xl flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-50/50"></div>
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <RotateCw className="w-32 h-32 text-orange-300 drop-shadow-md" strokeWidth={1} />
        </motion.div>
      </div>
    )
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-[#FBF5DE]/50 to-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-300/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-300/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-800 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Streamlined Process
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-5xl text-slate-900 font-bold mb-6"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Experience the synergy of human expertise and artificial intelligence through our simple, four-step integration pipeline.
          </motion.p>
        </div>

        <div className="relative space-y-24 md:space-y-32">
          {/* Central Connecting Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-200 via-emerald-200 to-purple-200 -translate-x-1/2 rounded-full opacity-50"></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={step.id} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className={`flex-1 w-full ${isEven ? "md:text-right" : "md:order-2 md:text-left"}`}
                >
                  <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                    <div className="mb-4 text-5xl font-black text-slate-100 drop-shadow-sm font-mono tracking-tighter">
                      {step.id}
                    </div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg mb-6 ${step.iconBg}`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Center Node for Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl border-4 border-slate-50 z-20">
                  <div className="w-4 h-4 rounded-full bg-slate-800 animate-pulse"></div>
                </div>

                {/* Visual/Image Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`flex-1 w-full h-64 md:h-80 relative ${isEven ? "md:order-2" : ""}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg`}></div>
                  {step.imagePlaceholder}
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
