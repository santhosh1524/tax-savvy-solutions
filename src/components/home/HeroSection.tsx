
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="min-h-screen relative flex items-center bg-gradient-to-br from-navy to-navy-dark pt-16"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <span className="text-teal inline-block px-4 py-1 border border-teal rounded-full text-sm font-medium mb-6">
                #1 Rated Tax Consultation Service
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Maximize Your Tax Savings with <span className="text-teal">Expert Guidance</span>
            </h1>
            
            <p className={`text-lg text-gray-300 max-w-lg transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Our team of tax professionals combines industry expertise with personalized strategies to help you save money and achieve your financial goals.
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <Button asChild className="bg-teal text-navy-dark hover:bg-teal-light hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-base px-8 py-6">
                <Link to="/contact">
                  Free Consultation 
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/10 hover:text-teal-light transition-all duration-300 text-base px-8 py-6">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div className={`pt-8 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-gray-200 overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                        alt="Client" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">Trusted by 1,000+ clients nationwide</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              <div className="bg-gradient-to-tr from-teal/20 to-teal/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                  alt="Tax Professional" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal text-navy-dark font-bold px-6 py-3 rounded-lg shadow-lg transform rotate-3">
                  Save up to 35% on taxes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#f8fafc" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
