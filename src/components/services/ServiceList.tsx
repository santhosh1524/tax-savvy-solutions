
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';

interface ServiceListProps {
  searchTerm: string;
  category: 'all' | 'individual' | 'corporate' | 'gst' | 'specialized';
}

const ServiceList: React.FC<ServiceListProps> = ({ searchTerm, category }) => {
  const filteredServices = services.filter(service => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = category === 'all' || service.category === category;
    
    return matchesSearch && matchesCategory;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredServices.map((service, index) => (
        <ServiceCard 
          key={service.id}
          service={service}
          index={index}
        />
      ))}
      {filteredServices.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-xl text-gray-500">No services found matching your criteria.</p>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceList;
