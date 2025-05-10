
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      position: "Small Business Owner",
      company: "Bloom Boutique",
      text: "Tax Savvy Solutions completely transformed how we handle our business taxes. Their expertise saved us thousands of dollars and hours of stress. They're incredibly responsive and always looking out for our best interests.",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Freelance Developer",
      company: "Independent Contractor",
      text: "As a self-employed professional, my taxes used to be a nightmare. The team at Tax Savvy not only simplified the process but found deductions I never knew existed. They've become an essential part of my business planning.",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Real Estate Investor",
      company: "Rodriguez Properties",
      text: "The estate planning services at Tax Savvy Solutions are truly exceptional. They created a comprehensive strategy that protects my investments and minimizes tax implications for my heirs. I couldn't be more satisfied.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "Retired Executive",
      company: "Former VP at Global Tech",
      text: "I approached Tax Savvy for retirement tax planning, and they exceeded all expectations. Their personalized approach and deep knowledge of tax laws have helped me maximize my retirement income. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    }
  ];
  
  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => {
      if (prev === 0) return testimonials.length - 1;
      return prev - 1;
    });
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [nextTestimonial]);
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 bg-navy text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm uppercase text-teal font-semibold tracking-wider mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h3>
          <p className="max-w-2xl mx-auto text-gray-300">
            Don't just take our word for it. Here's what our valued clients have to say about working with Tax Savvy Solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="min-w-full px-6"
                >
                  <div className="bg-navy-light/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-teal/10 shadow-xl">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-teal">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-lg md:text-xl italic text-gray-200 mb-4">"{testimonial.text}"</blockquote>
                        <div className="flex flex-wrap items-center">
                          <div className="mr-4">
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-teal/80">{testimonial.position}</p>
                          </div>
                          <p className="text-gray-400">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button 
              onClick={prevTestimonial} 
              size="icon" 
              variant="outline" 
              className="rounded-full p-2 bg-transparent border border-teal/30 text-teal hover:bg-teal/10 hover:text-teal"
            >
              <ArrowLeft size={20} />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index ? 'bg-teal w-10' : 'bg-teal/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              onClick={nextTestimonial} 
              size="icon" 
              variant="outline" 
              className="rounded-full p-2 bg-transparent border border-teal/30 text-teal hover:bg-teal/10 hover:text-teal"
            >
              <ArrowRight size={20} />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
