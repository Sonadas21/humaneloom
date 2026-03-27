export default function Footer() {
  return (
    <footer className="relative">
      {/* Bottom Section */}
      <div className="bg-[#FBF5DE] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative min-h-[300px]">
        {/* Large Background Text - positioned to touch the ground */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none overflow-hidden">
          <h4
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-800/20 whitespace-nowrap leading-none mb-0"
            style={{ fontFamily: '"Press Start 2P", monospace', marginBottom: '0px', lineHeight: '0.7' }}
          >
            HumaneLoom
          </h4>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Company Logo and Footer Navigation */}
          <div className="flex flex-col items-center gap-8 sm:gap-12">
            {/* Company Logo */}
            {/* <div className="flex justify-center">
              <svg 
                width="60" 
                height="60" 
                viewBox="0 0 51 50" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M29.7931 0H21.542V14.6965C22.816 14.1757 24.2086 13.8889 25.6675 13.8889C27.1265 13.8889 28.5191 14.1757 29.7931 14.6966V0ZM21.542 35.3035V50H29.7931V35.3034C28.5191 35.8243 27.1265 36.1111 25.6675 36.1111C24.2086 36.1111 22.816 35.8243 21.542 35.3035Z" fill="#0A2540"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.6658 25.0003C14.6658 23.5269 14.9498 22.1204 15.4655 20.8337H0.914062V29.167H15.4655C14.9498 27.8803 14.6658 26.4738 14.6658 25.0003ZM36.6687 25.0003C36.6687 26.4738 36.3847 27.8803 35.869 29.167L50.4205 29.167V20.8337L35.869 20.8337C36.3847 22.1204 36.6687 23.5269 36.6687 25.0003Z" fill="#0A2540"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M11.0815 4.376L5.24707 10.2686L15.5366 20.6606C16.6495 18.0135 18.7499 15.8921 21.371 14.7681L11.0815 4.376ZM35.7983 29.3392C34.6853 31.9864 32.5849 34.1077 29.9639 35.2318L40.2534 45.6239L46.0878 39.7313L35.7983 29.3392Z" fill="#0A2540"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.24715 39.7315L11.0815 45.624L21.371 35.2319C18.75 34.1079 16.6496 31.9865 15.5366 29.3394L5.24715 39.7315ZM29.964 14.7682C32.585 15.8923 34.6854 18.0136 35.7984 20.6608L46.0879 10.2687L40.2535 4.37613L29.964 14.7682Z" fill="#0A2540"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M35.7979 29.339C35.822 29.2817 35.8457 29.2242 35.8688 29.1664H35.627L35.7979 29.339ZM29.9636 35.2316L29.7926 35.059V35.3032C29.8498 35.2798 29.9068 35.2559 29.9636 35.2316ZM21.5416 35.3032V35.059L21.3706 35.2316C21.4274 35.2559 21.4843 35.2798 21.5416 35.3032ZM15.5362 29.3391C15.5121 29.2818 15.4885 29.2242 15.4653 29.1664H15.7072L15.5362 29.3391ZM15.5362 20.6604C15.5121 20.7177 15.4885 20.7753 15.4653 20.8331H15.7072L15.5362 20.6604ZM21.3706 14.7679L21.5416 14.9405V14.6963C21.4843 14.7197 21.4274 14.7435 21.3706 14.7679ZM29.7926 14.6963V14.9405L29.9636 14.7679C29.9068 14.7436 29.8498 14.7197 29.7926 14.6963ZM35.7979 20.6605L35.627 20.8331H35.8688C35.8457 20.7753 35.822 20.7178 35.7979 20.6605Z" fill="white"/>
              </svg>
            </div> */}
            
            {/* Footer Navigation */}
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
              <a 
                href="about" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm sm:text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                About us
              </a>
              <a 
                href="products" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm sm:text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Products
              </a>
              <a 
                href="career" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm sm:text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Career
              </a>
              <a 
                href="blogs" 
                className="text-slate-800 hover:text-slate-600 transition-colors text-sm sm:text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Blogs
              </a>
              </div>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mt-8 md:mt-0">
            <img 
                src="/logo_main.svg" 
                alt="HumaneLoom Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              />
            {/* Copyright */}
            <p 
              className="text-xs sm:text-sm text-slate-800 text-center order-2 md:order-1 ml-0 md:ml-8 sm:ml-12 lg:ml-16"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              © 2025 HumaneLoom. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 sm:gap-4 order-1 md:order-2">
              {/* Facebook */}
              <a href="#" className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                  <path d="M36.6663 20C36.6663 10.8 29.1997 3.33337 19.9997 3.33337C10.7997 3.33337 3.33301 10.8 3.33301 20C3.33301 28.0667 9.06634 34.7834 16.6663 36.3334V25H13.333V20H16.6663V15.8334C16.6663 12.6167 19.283 10 22.4997 10H26.6663V15H23.333C22.4163 15 21.6663 15.75 21.6663 16.6667V20H26.6663V25H21.6663V36.5834C30.083 35.75 36.6663 28.65 36.6663 20Z" fill="#0A2540"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow">
                <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                  <path d="M11.7 3H24.3C29.1 3 33 6.9 33 11.7V24.3C33 26.6074 32.0834 28.8203 30.4518 30.4518C28.8203 32.0834 26.6074 33 24.3 33H11.7C6.9 33 3 29.1 3 24.3V11.7C3 9.39262 3.9166 7.17974 5.54817 5.54817C7.17974 3.9166 9.39262 3 11.7 3ZM11.4 6C9.96783 6 8.59432 6.56893 7.58162 7.58162C6.56893 8.59432 6 9.96783 6 11.4V24.6C6 27.585 8.415 30 11.4 30H24.6C26.0322 30 27.4057 29.4311 28.4184 28.4184C29.4311 27.4057 30 26.0322 30 24.6V11.4C30 8.415 27.585 6 24.6 6H11.4ZM25.875 8.25C26.3723 8.25 26.8492 8.44754 27.2008 8.79918C27.5525 9.15081 27.75 9.62772 27.75 10.125C27.75 10.6223 27.5525 11.0992 27.2008 11.4508C26.8492 11.8025 26.3723 12 25.875 12C25.3777 12 24.9008 11.8025 24.5492 11.4508C24.1975 11.0992 24 10.6223 24 10.125C24 9.62772 24.1975 9.15081 24.5492 8.79918C24.9008 8.44754 25.3777 8.25 25.875 8.25ZM18 10.5C19.9891 10.5 21.8968 11.2902 23.3033 12.6967C24.7098 14.1032 25.5 16.0109 25.5 18C25.5 19.9891 24.7098 21.8968 23.3033 23.3033C21.8968 24.7098 19.9891 25.5 18 25.5C16.0109 25.5 14.1032 24.7098 12.6967 23.3033C11.2902 21.8968 10.5 19.9891 10.5 18C10.5 16.0109 11.2902 14.1032 12.6967 12.6967C14.1032 11.2902 16.0109 10.5 18 10.5ZM18 13.5C16.8065 13.5 15.6619 13.9741 14.818 14.818C13.9741 15.6619 13.5 16.8065 13.5 18C13.5 19.1935 13.9741 20.3381 14.818 21.182C15.6619 22.0259 16.8065 22.5 18 22.5C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18C22.5 16.8065 22.0259 15.6619 21.182 14.818C20.3381 13.9741 19.1935 13.5 18 13.5Z" fill="#0A2540"/>
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                  <path d="M29.947 8.00004C28.9204 8.46671 27.8137 8.77337 26.667 8.92004C27.8404 8.21337 28.747 7.09337 29.1737 5.74671C28.067 6.41337 26.8404 6.88004 25.547 7.14671C24.4937 6.00004 23.0137 5.33337 21.3337 5.33337C18.2004 5.33337 15.6404 7.89337 15.6404 11.0534C15.6404 11.5067 15.6937 11.9467 15.787 12.36C11.0404 12.12 6.81371 9.84004 4.00038 6.38671C3.50704 7.22671 3.22704 8.21337 3.22704 9.25337C3.22704 11.24 4.22704 13 5.77371 14C4.82704 14 3.94704 13.7334 3.17371 13.3334V13.3734C3.17371 16.1467 5.14704 18.4667 7.76038 18.9867C6.92135 19.2163 6.0405 19.2483 5.18704 19.08C5.54919 20.2167 6.25843 21.2113 7.21507 21.9239C8.17171 22.6366 9.32764 23.0316 10.5204 23.0534C8.49855 24.654 5.99237 25.5191 3.41371 25.5067C2.96038 25.5067 2.50704 25.48 2.05371 25.4267C4.58704 27.0534 7.60038 28 10.827 28C21.3337 28 27.107 19.28 27.107 11.72C27.107 11.4667 27.107 11.2267 27.0937 10.9734C28.2137 10.1734 29.1737 9.16004 29.947 8.00004Z" fill="#0A2540"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
