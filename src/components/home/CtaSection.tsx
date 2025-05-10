
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const CtaSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background with overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-95 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/30 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Ready to Maximize Your Tax Savings?</h3>
              <p className="text-lg text-white/90 mb-6 max-w-xl">
                Schedule a free consultation with one of our tax experts and discover how we can help you save money and achieve your financial goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-teal text-navy-dark hover:bg-teal-light hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Link to="/contact">
                    Schedule a Free Consultation
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:border-teal">
                  <Link to="/services">
                    Browse Services
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-teal text-5xl font-bold mb-2">35%</div>
                <p className="text-white text-lg font-medium mb-4">Average Tax Savings</p>
                <p className="text-white/80 text-sm max-w-xs">
                  Our clients save an average of 35% on their tax liability through our strategic planning and optimization services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
