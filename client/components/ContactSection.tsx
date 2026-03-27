import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptPolicy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, acceptPolicy: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      <div className="relative lg:min-h-[704px] overflow-hidden">
        {/* Blue Background Shape */}
        <div className="absolute inset-0">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1281 602" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path d="M0 554C0 570.802 0 579.202 3.2698 585.62C6.14601 591.265 10.7354 595.854 16.3803 598.73C22.7976 602 31.1984 602 48 602H1218.51C1246.46 602 1260.43 602 1268.37 596.143C1275.3 591.036 1279.7 583.203 1280.45 574.634C1281.32 564.805 1274.04 552.872 1259.49 529.008L1009.95 119.824C1005.4 112.369 1003.13 108.642 1000.07 105.809C997.36 103.3 994.21 101.312 990.778 99.9469C986.903 98.4055 982.56 97.9593 973.875 97.0668L52.9063 2.43616C34.5789 0.55304 25.4151 -0.38855 18.3295 2.60358C12.1057 5.23175 6.95127 9.88373 3.70071 15.8062C0 22.549 0 31.7609 0 50.1848V554Z" fill="#3D74B6"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="flex-1 text-white order-last lg:order-first pt-0 sm:pt-0 md:pt-0 lg:pt-28 xl:pt-36">
              <h3 
                className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-0"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Give us a call for more information
              </h3>
              <p 
                className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed px-2 sm:px-0"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                The future of your Industry starts here.
              </p>
            </div>

            {/* Right Content - Contact Form */}
            <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
              <div className="bg-[#FBF5DE] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border-2 border-slate-800/40 rounded-sm sm:rounded-md bg-white text-slate-800 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border border-slate-800/30 rounded-sm sm:rounded-md bg-white text-slate-800/60 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telephone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border border-slate-800/30 rounded-sm sm:rounded-md bg-white text-slate-800/60 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border border-slate-800/30 rounded-sm sm:rounded-md bg-white text-slate-800/60 resize-none text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[80px] sm:min-h-[90px] md:min-h-[100px]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.acceptPolicy}
                      onChange={handleCheckboxChange}
                      className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 border-gray-400 rounded cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                    />
                    <label 
                      htmlFor="privacy" 
                      className="text-xs sm:text-sm md:text-base text-gray-600 cursor-pointer leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      I have read and accept the privacy policy.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-[#3D74B6] hover:bg-[#3D74B6]/90 active:bg-[#3D74B6]/80 text-[#FBF5DE] px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-all duration-200 min-h-[44px] sm:min-h-[48px] md:min-h-[52px] touch-manipulation"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Send message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
