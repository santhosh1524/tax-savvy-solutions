
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutPage: React.FC = () => {
  const { ref: refHero, isVisible: isVisibleHero } = useScrollAnimation();
  const { ref: refMission, isVisible: isVisibleMission } = useScrollAnimation();
  const { ref: refTeam, isVisible: isVisibleTeam } = useScrollAnimation();
  const { ref: refHistory, isVisible: isVisibleHistory } = useScrollAnimation();
  
  const teamMembers = [
    {
      name: "David Anderson",
      position: "CEO & Tax Strategist",
      bio: "David has over 20 years of experience in tax planning and financial strategy. He founded TaxSavvy Solutions with the mission to make expert tax services accessible to all.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Jessica Martinez",
      position: "Director of Tax Services",
      bio: "Jessica is a certified CPA with expertise in both personal and business taxation. She leads our team of tax professionals and ensures the highest quality of service.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Robert Chen",
      position: "Corporate Tax Specialist",
      bio: "Robert specializes in corporate tax strategy and has helped numerous businesses optimize their tax positions. He holds an MBA and is a certified tax professional.",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      name: "Amanda Lewis",
      position: "Personal Finance Advisor",
      bio: "Amanda combines tax expertise with financial planning to deliver comprehensive advice to our individual clients, helping them build wealth while minimizing tax burdens.",
      image: "https://randomuser.me/api/portraits/women/35.jpg"
    }
  ];
  
  const timelineEvents = [
    {
      year: "2010",
      title: "Foundation",
      description: "TaxSavvy Solutions was founded with the mission to provide expert tax services to individuals and small businesses."
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Expanded our services to include corporate tax planning and opened our second office location."
    },
    {
      year: "2016",
      title: "Digital Transformation",
      description: "Launched our digital platform to make tax services more accessible to clients nationwide."
    },
    {
      year: "2019",
      title: "Award Recognition",
      description: "Named "Top Tax Consulting Firm" by Business Weekly and expanded to 50+ tax professionals."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Integrated advanced AI technology to enhance our tax planning strategies and client service."
    }
  ];
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={refHero as React.RefObject<HTMLDivElement>}
        className={`py-20 bg-primary text-white transition-opacity duration-1000 ${isVisibleHero ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TaxSavvy Solutions</h1>
            <p className="text-xl text-gray-200 mb-8">
              We're dedicated to helping individuals and businesses navigate the complex world of taxes, 
              maximizing savings while ensuring compliance with ever-changing tax laws.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section 
        ref={refMission as React.RefObject<HTMLDivElement>}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisibleMission ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-sm uppercase text-accent font-semibold tracking-wider mb-2">Our Mission & Vision</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Empowering Financial Freedom Through Strategic Tax Planning</h3>
              
              <div className="space-y-6 text-gray-700">
                <div className="typewriter-text">
                  <p className="font-medium text-lg mb-2">Our Mission</p>
                  <p>
                    To provide expert tax solutions that empower our clients to build wealth, achieve financial security, 
                    and realize their dreams by minimizing tax burdens through ethical, legal strategies.
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-lg mb-2">Our Vision</p>
                  <p>
                    To become the most trusted tax advisory firm by delivering unparalleled expertise, personalized service, 
                    and innovative solutions that consistently exceed client expectations.
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-lg mb-2">Our Values</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Integrity in all our dealings</li>
                    <li>Excellence in service delivery</li>
                    <li>Innovation in problem-solving</li>
                    <li>Client-centered approach</li>
                    <li>Continuous learning and improvement</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-500 ${isVisibleMission ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Tax planning team" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-medium">"We believe in turning tax challenges into opportunities for growth."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section 
        ref={refTeam as React.RefObject<HTMLDivElement>}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisibleTeam ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-sm uppercase text-accent font-semibold tracking-wider mb-2">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Tax Experts</h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our team of experienced professionals is dedicated to providing personalized tax strategies 
              and solutions tailored to your unique financial situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 hover:shadow-lg ${isVisibleTeam ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-accent mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/contact">
                Get in Touch With Our Team
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* History / Timeline */}
      <section 
        ref={refHistory as React.RefObject<HTMLDivElement>}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisibleHistory ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-sm uppercase text-accent font-semibold tracking-wider mb-2">Our History</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Journey So Far</h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              From our humble beginnings to becoming a leading tax solutions provider, here's the story of our growth and evolution.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className={`flex flex-col md:flex-row items-center transition-all duration-1000 ${isVisibleHistory ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-full md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-bold text-accent mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center relative z-10 flex-shrink-0">
                    {event.year}
                  </div>
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
