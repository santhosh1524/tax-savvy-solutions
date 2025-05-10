
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ServiceType } from './serviceData';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={item}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 border border-gray-100 hover:border-accent/20">
        <CardHeader className="relative">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
            <service.icon size={24} />
          </div>
          <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-gray-600">
          {service.features && service.features.length > 0 && (
            <ul className="space-y-1">
              {service.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm">
                  <svg className="w-4 h-4 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Pricing
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Pricing Information</h4>
                <p className="text-sm text-muted-foreground">{service.pricing || 'Custom pricing based on individual requirements. Contact us for a personalized quote.'}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <Button asChild variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 group">
            <Link to={`/services/${service.slug}`} className="flex items-center font-medium">
              Learn more
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
