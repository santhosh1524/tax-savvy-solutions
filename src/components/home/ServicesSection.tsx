
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} 
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="service-card h-full bg-white/50 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/10 border border-gray-100">
        <CardHeader>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
            <img src={icon} alt={title} className="w-8 h-8" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-gray-600">
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Customized strategies tailored to your needs</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Expert guidance from certified professionals</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Ongoing support throughout the year</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto">
            <Link to={link} className="flex items-center font-medium">
              Learn more
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      title: "Personal Tax Planning",
      description: "Optimize your personal tax situation and maximize deductions",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364FFDA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' /%3E%3C/svg%3E",
      link: "/services/personal-tax"
    },
    {
      title: "Business Tax Solutions",
      description: "Comprehensive tax strategies for businesses of all sizes",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364FFDA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /%3E%3C/svg%3E",
      link: "/services/business-tax"
    },
    {
      title: "Estate Planning",
      description: "Secure your legacy and minimize estate taxes",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364FFDA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' /%3E%3C/svg%3E",
      link: "/services/estate-planning"
    },
    {
      title: "Investment Tax Strategy",
      description: "Tax-efficient investment strategies to grow your wealth",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364FFDA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E",
      link: "/services/investment-tax"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-sm uppercase text-accent font-semibold tracking-wider mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Tax Solutions</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer expert tax planning and preparation services to help individuals and businesses 
            navigate the complex tax system and minimize their tax burden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
