
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ServiceProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
  reverse?: boolean;
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, features, image, slug, reverse = false, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`py-12 md:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Key Benefits:</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button asChild>
            <Link to={`/services/${slug}`} className="inline-flex items-center">
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      title: "Personal Tax Planning",
      description: "Comprehensive tax planning for individuals that maximizes deductions, credits, and other tax-saving opportunities while ensuring compliance with current tax laws.",
      features: [
        "Personalized tax strategies tailored to your financial goals",
        "Identification of all applicable deductions and credits",
        "Tax-efficient investment recommendations",
        "Year-round tax planning and consultation",
        "Expert preparation and filing of tax returns"
      ],
      image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "personal-tax"
    },
    {
      title: "Business Tax Solutions",
      description: "Strategic tax planning and compliance services designed specifically for businesses of all sizes, from startups to established corporations.",
      features: [
        "Comprehensive business tax planning and preparation",
        "Entity structure optimization for tax efficiency",
        "Sales tax compliance and management",
        "Business expense tracking and categorization",
        "Strategic planning for tax credits and incentives"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "business-tax",
      reverse: true
    },
    {
      title: "Estate Planning",
      description: "Comprehensive estate planning services to protect your assets, minimize estate taxes, and ensure your legacy is preserved according to your wishes.",
      features: [
        "Development of comprehensive estate plans",
        "Strategic planning to minimize estate taxes",
        "Trust creation and management",
        "Wealth transfer strategies",
        "Coordination with attorneys and financial advisors"
      ],
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "estate-planning"
    },
    {
      title: "Investment Tax Strategy",
      description: "Expert guidance on tax-efficient investment strategies to help you maximize returns while minimizing tax implications.",
      features: [
        "Tax-loss harvesting strategies",
        "Capital gains management",
        "Retirement account optimization",
        "Investment portfolio analysis for tax efficiency",
        "Alternative investment tax planning"
      ],
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "investment-tax",
      reverse: true
    }
  ];
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`py-20 bg-primary text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 mb-8">
              We offer a comprehensive range of tax planning and advisory services designed to help individuals and businesses 
              navigate the complex tax landscape and achieve their financial goals.
            </p>
            <Button asChild className="bg-teal text-navy hover:bg-teal-light">
              <Link to="/contact">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="space-y-8 md:space-y-0 md:divide-y divide-gray-200">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.slug}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                slug={service.slug}
                reverse={service.reverse}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Tax Strategy?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of tax experts is ready to help you develop a personalized tax plan that aligns with your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Schedule a Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/faq">
                  View Common Questions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
