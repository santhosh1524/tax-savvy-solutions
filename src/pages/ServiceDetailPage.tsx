
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { services } from '@/components/services/serviceData';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // Here would go actual form submission logic
      console.log('Form submitted:', data);
      
      // Show success toast
      toast({
        title: "Inquiry Sent",
        description: "We've received your inquiry and will contact you soon.",
      });
      
      // Reset form
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your inquiry couldn't be sent. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Service Details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Service</h2>
                  <p className="text-gray-600">
                    Our {service.title} service is designed to provide comprehensive support for all aspects of your tax needs in this area. Our experts bring years of experience to ensure you receive the most accurate advice and optimal outcomes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + (idx * 0.1) }}
                          className="flex items-start"
                        >
                          <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Process</h2>
                  <ol className="space-y-4">
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold mr-3">1</span>
                      <div>
                        <h3 className="font-semibold">Initial Consultation</h3>
                        <p className="text-gray-600">We begin with a thorough assessment of your specific situation and requirements.</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold mr-3">2</span>
                      <div>
                        <h3 className="font-semibold">Strategy Development</h3>
                        <p className="text-gray-600">Our experts create a customized plan tailored to your specific needs and goals.</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold mr-3">3</span>
                      <div>
                        <h3 className="font-semibold">Implementation</h3>
                        <p className="text-gray-600">We execute the strategy with precision and attention to detail.</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold mr-3">4</span>
                      <div>
                        <h3 className="font-semibold">Ongoing Support</h3>
                        <p className="text-gray-600">We provide continued assistance and adjustments as your situation evolves.</p>
                      </div>
                    </motion.li>
                  </ol>
                </div>

                {/* Client Testimonials */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-gray-50 border-none shadow-sm">
                      <p className="italic text-gray-600 mb-4">"The team provided exceptional guidance with my {service.title.toLowerCase()} needs. Their expertise saved me significant money while ensuring full compliance."</p>
                      <p className="font-medium">— David P.</p>
                    </Card>
                    <Card className="p-6 bg-gray-50 border-none shadow-sm">
                      <p className="italic text-gray-600 mb-4">"I was impressed by their attention to detail and knowledge of the latest tax regulations. Highly recommend their services."</p>
                      <p className="font-medium">— Sarah M.</p>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="p-6 border sticky top-20">
                  <h3 className="text-xl font-bold mb-6">Interested in this Service?</h3>
                  <p className="text-gray-600 mb-6">Fill out the form below and one of our experts will contact you shortly to discuss your needs.</p>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name" 
                        {...register("name", { required: "Name is required" })} 
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message as string}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email address" 
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })} 
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message as string}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="Your phone number" 
                        {...register("phone", { required: "Phone number is required" })} 
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">{errors.phone.message as string}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your specific needs" 
                        className="min-h-[100px]" 
                        {...register("message", { required: "Message is required" })} 
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 mt-1">{errors.message.message as string}</p>
                      )}
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Request a Consultation"}
                    </Button>
                  </form>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <Phone size={20} className="text-accent mr-3" />
                      <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={20} className="text-accent mr-3" />
                      <span>contact@taxsavvy.com</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={20} className="text-accent mr-3" />
                      <span>Mon-Fri: 9am - 5pm</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter(s => s.category === service.category && s.id !== service.id)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                    <div className="p-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
                        <relatedService.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{relatedService.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{relatedService.description}</p>
                      <Button asChild variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto">
                        <Link to={`/services/${relatedService.slug}`} className="flex items-center font-medium">
                          Learn more
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">Contact us today to schedule a consultation with one of our tax experts.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="transition-all duration-300 hover:scale-105">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Explore More Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetailPage;
