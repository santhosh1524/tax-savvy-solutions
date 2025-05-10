
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MessageCircle, Search } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversation, setConversation] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your TaxSavvy AI assistant. How can I help you with tax-related questions today?' 
    }
  ]);
  const [suggestedQuestions] = useState([
    "What tax deductions are available for small businesses?",
    "How can I reduce my taxable income?",
    "What documents do I need for tax filing?",
    "When is the tax filing deadline this year?"
  ]);

  const simulateResponse = (userQuery: string) => {
    const responses = {
      "What tax deductions are available for small businesses?": 
        "Small businesses can deduct operational expenses, home office expenses, vehicle expenses, health insurance premiums, retirement plan contributions, business travel, and more. Each deduction has specific requirements, so it's best to consult with one of our tax professionals for your specific situation.",
      
      "How can I reduce my taxable income?": 
        "You can reduce taxable income through retirement contributions, HSA contributions, tax loss harvesting, charitable donations, business expense deductions, education credits, and more. Our tax experts can create a personalized strategy based on your financial situation.",
      
      "What documents do I need for tax filing?": 
        "You'll need personal information (SSN, ID), income documents (W-2s, 1099s), deduction and credit documents (mortgage statements, charitable donations, education expenses), healthcare forms, and last year's tax returns. Our checklist tool can help you gather everything needed for your specific situation.",
      
      "When is the tax filing deadline this year?": 
        "The standard deadline for individual tax returns is April 15th. If that falls on a weekend or holiday, it's moved to the next business day. You can file for an extension until October 15th, though any taxes owed are still due by the April deadline.",
        
      "default": "That's a great question. This is a complex area that depends on your specific financial situation. I'd recommend scheduling a free consultation with one of our tax experts who can provide personalized advice tailored to your circumstances. Would you like me to help you schedule that?"
    };
    
    const lowerQuery = userQuery.toLowerCase();
    let responseText = "";
    
    if (lowerQuery.includes("deductions") && lowerQuery.includes("small business")) {
      responseText = responses["What tax deductions are available for small businesses?"];
    } else if (lowerQuery.includes("reduce") && lowerQuery.includes("taxable income")) {
      responseText = responses["How can I reduce my taxable income?"];
    } else if (lowerQuery.includes("document") && lowerQuery.includes("tax")) {
      responseText = responses["What documents do I need for tax filing?"];
    } else if ((lowerQuery.includes("deadline") || lowerQuery.includes("due date")) && lowerQuery.includes("tax")) {
      responseText = responses["When is the tax filing deadline this year?"];
    } else {
      responseText = responses["default"];
    }
    
    setIsTyping(true);
    
    // Simulate typing
    setTimeout(() => {
      setConversation(prev => [...prev, { role: 'assistant', content: responseText }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // Add user message to conversation
    setConversation(prev => [...prev, { role: 'user', content: query }]);
    
    // Clear input
    const userQuery = query;
    setQuery('');
    
    // Get AI response
    simulateResponse(userQuery);
  };

  const handleSuggestedQuestion = (question: string) => {
    setConversation(prev => [...prev, { role: 'user', content: question }]);
    simulateResponse(question);
  };

  return (
    <Card className="w-full border shadow-lg transition-all bg-white">
      <CardHeader className="bg-primary text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <MessageCircle className="mr-2" />
          TaxSavvy AI Assistant
        </CardTitle>
        <CardDescription className="text-gray-100">
          Ask me anything about taxes and financial planning
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-96 overflow-y-auto p-4 bg-gray-50">
          {conversation.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 ${message.role === 'user' ? 'text-right' : ''}`}
            >
              <div 
                className={`inline-block max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border rounded-tl-none shadow-sm'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="mb-4">
              <div className="inline-block max-w-[80%] p-3 rounded-lg bg-white text-gray-800 border rounded-tl-none shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {conversation.length === 1 && (
          <div className="p-4 border-t">
            <p className="text-sm text-gray-500 mb-3">Suggested questions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="text-left justify-start h-auto py-2 text-sm"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            className="flex-grow"
            placeholder="Type your question here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" disabled={!query.trim() || isTyping}>
            <ArrowRight size={16} />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default AiAssistant;
