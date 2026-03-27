import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "edeloom",
    title: "Enterprise agents", // Mapping for the sidebar look
    realTitle: "Education Management System - EdeLoom",
    description: "Automate tasks with AI agents connected to your apps and libraries.",
    bgColor: "#3D74B6",
    textColor: "#FFF",
    image: "/edu_ui.png"
  },
  {
    id: "conversational-ai",
    title: "AI Chatbots",
    realTitle: "Conversational AI Solution",
    description: "Intelligent conversational interfaces that drive engagement and automate interactions.",
    bgColor: "#FA9483",
    textColor: "#FFF",
    image: "/chatbot_ui.png"
  },
  {
    id: "loomdata-engine",
    title: "Text to SQL",
    realTitle: "LoomData Engine",
    description: "Advanced Text-to-SQL system that translates natural language into database queries effortlessly.",
    bgColor: "#EAC8A6",
    textColor: "#FFF",
    image: "/text_sql_ui.png"
  },
  {
    id: "workflow-automation",
    title: "Task Automation",
    realTitle: "Workflow Automation Solution",
    description: "Streamline your business operations by automating repetitive tasks and orchestrating workflows.",
    bgColor: "#48D1CC",
    textColor: "#FFF",
    image: "/workflow_ui.png"
  }
];

export default function OurProducts() {
  const [activeId, setActiveId] = useState(products[0].id);

  const ProductCard = ({ product }: { product: typeof products[0] }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" }); // Active when in center of viewport

    useEffect(() => {
      if (isInView) {
        setActiveId(product.id);
      }
    }, [isInView, product.id]);

    return (
      <div 
        ref={ref}
        id={product.id}
        className="min-h-[80vh] flex flex-col justify-center py-10"
      >
        <div className="space-y-6">
          {/* Card Content - Matching the Mistral Right Side Look */}
          <div className="bg-[#FDFBF7] border border-[#E5E0D0] p-8 md:p-12 rounded-none md:rounded-lg">
             <div className="mb-6">
                <p className="text-xl md:text-2xl font-light text-black mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                 {product.realTitle}
                </p>
                <div style={{ backgroundColor: product.bgColor, height: '4px', width: '60px' }} className="mb-4"></div>
                <p className="text-[#666] text-sm md:text-base max-w-lg leading-relaxed">
                  {product.description}
                </p>
             </div>
             
             {/* Product Image Placeholder Area */}
             <div 
               className="aspect-video bg-[#FDF6E3] relative rounded-md overflow-hidden border border-[#EDE8D6] flex items-center justify-center"
               style={{
                 backgroundImage: 'radial-gradient(#C8C4B7 1px, transparent 1px)',
                 backgroundSize: '24px 24px'
               }}
             >
                 <img 
                   src={product.image} 
                   alt={product.realTitle}
                   className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                 />
             </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#FFFCF0] py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="sticky top-28 z-40 bg-[#FFFCF0] py-6 sm:py-10 mb-10 transition-all duration-300 shadow-sm border-b border-black/5">
          <h2 
            className="text-2xl md:text-4xl text-center text-black"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            Our Products
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Sidebar - Sticky Navigation */}
          <div className="lg:w-1/3 shrink-0 hidden lg:block">
             <div className="sticky top-60 space-y-0 border border-black">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      document.getElementById(product.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={cn(
                      "w-full text-left px-6 py-4 border-b border-black last:border-b-0 transition-all duration-300 flex justify-between items-center group",
                      activeId === product.id 
                        ? "bg-[#1A1A1A] text-white" 
                        : "bg-transparent text-black hover:bg-[#1A1A1A]/5"
                    )}
                  >
                    <span className="text-sm md:text-base font-medium font-mono tracking-tight">
                      {product.realTitle.split('-')[0].trim()}
                    </span>
                    
                    {/* Arrow Icon */}
                    <motion.span
                      initial={false}
                      animate={{ 
                         x: activeId === product.id ? 0 : -5,
                         opacity: activeId === product.id ? 1 : 0 
                      }}
                       className={cn(
                        "text-[#FF5733] transform", 
                         activeId !== product.id && "group-hover:opacity-50 group-hover:translate-x-0"
                       )}
                    >
                      →
                    </motion.span>
                  </button>
                ))}
             </div>
          </div>

          {/* Right Content - Scrollable Cards */}
          <div className="lg:w-2/3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
