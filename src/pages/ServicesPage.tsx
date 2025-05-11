
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import ServiceList from '@/components/services/ServiceList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`py-16 md:py-20 bg-primary text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              We offer comprehensive tax planning, preparation, and advisory services designed to help individuals 
              and businesses navigate the complex tax landscape and achieve their financial goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button asChild className="bg-accent text-primary hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
                <Link to="/contact">
                  Schedule a Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <a href="#service-categories">
                  Explore Services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search for services..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-auto flex gap-2">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="individual">Individual</TabsTrigger>
                  <TabsTrigger value="corporate">Corporate</TabsTrigger>
                  <TabsTrigger value="gst">GST</TabsTrigger>
                  <TabsTrigger value="specialized">Specialized</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="service-categories" className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsContent value="all">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">All Tax Services</h2>
              <ServiceList searchTerm={searchTerm} category="all" />
            </TabsContent>
            
            <TabsContent value="individual">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Individual Tax Services</h2>
              <ServiceList searchTerm={searchTerm} category="individual" />
            </TabsContent>
            
            <TabsContent value="corporate">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Corporate Tax Services</h2>
              <ServiceList searchTerm={searchTerm} category="corporate" />
            </TabsContent>
            
            <TabsContent value="gst">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">GST & Indirect Tax Services</h2>
              <ServiceList searchTerm={searchTerm} category="gst" />
            </TabsContent>
            
            <TabsContent value="specialized">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Specialized Tax Services</h2>
              <ServiceList searchTerm={searchTerm} category="specialized" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Optimize Your Tax Strategy?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of tax experts is ready to help you develop a personalized tax plan that aligns with your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="transition-all duration-300 transform hover:scale-105">
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
    </motion.div>
  );
};

export default ServicesPage;
