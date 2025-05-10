
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  category?: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs, category }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`w-full transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
    >
      {category && (
        <h3 className="text-xl font-semibold mb-4">{category}</h3>
      )}
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={`faq-${index}`} 
            value={`item-${index}`}
            className={`transition-all duration-500 bg-white shadow-sm rounded-lg mb-4 border overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
              <span className="text-left font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
