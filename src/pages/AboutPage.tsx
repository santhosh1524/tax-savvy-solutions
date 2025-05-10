
import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutPage: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: refContent, isVisible: isVisibleContent } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`py-20 bg-primary text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TaxSavvy</h1>
            <p className="text-xl text-gray-200 mb-8">
              We're a team of tax experts dedicated to helping individuals and businesses 
              navigate complex tax regulations and maximize their financial potential.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section
        ref={refContent as React.RefObject<HTMLDivElement>}
        className={`py-16 transition-all duration-700 ${isVisibleContent ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At TaxSavvy, our mission is to empower our clients with expert tax knowledge and personalized 
                strategies that help them achieve financial success while maintaining full compliance with all 
                applicable tax laws and regulations.
              </p>
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Integrity:</strong> We uphold the highest ethical standards in all of our client relationships.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Excellence:</strong> We strive for excellence in our service delivery and professional expertise.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Innovation:</strong> We continuously adapt to changing tax laws to provide cutting-edge strategies.</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Tax planning team meeting" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
