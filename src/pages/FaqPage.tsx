
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FaqAccordion from '@/components/faq/FaqAccordion';
import AiAssistant from '@/components/faq/AiAssistant';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const FaqPage: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: refContent, isVisible: isVisibleContent } = useScrollAnimation({ threshold: 0.1 });
  
  const personalTaxFaqs = [
    {
      question: "When is the deadline to file my personal tax return?",
      answer: "For most individuals, tax returns are due on April 15th each year. If the 15th falls on a weekend or holiday, the deadline is extended to the next business day. You can request an extension to file until October 15th, but any taxes owed are still due by the April deadline to avoid penalties and interest."
    },
    {
      question: "What documents do I need to prepare my tax return?",
      answer: "You'll need personal information (Social Security numbers, dates of birth), income documents (W-2s, 1099s), deduction and credit information (mortgage interest, charitable donations, education expenses, medical expenses), investment income statements, and your prior year's tax return. Our tax preparation checklist can help you gather all necessary documents."
    },
    {
      question: "How long should I keep my tax records?",
      answer: "The IRS recommends keeping tax returns and supporting documents for at least 3 years from the date you filed, as this is the general statute of limitations for audits. However, we recommend keeping records for 7 years, and some documents like property records should be kept until 7 years after you dispose of the property."
    },
    {
      question: "What's the difference between a tax deduction and a tax credit?",
      answer: "A tax deduction reduces your taxable income, which then reduces your tax liability based on your tax bracket. A tax credit directly reduces your tax liability dollar-for-dollar. For example, a $1,000 deduction in the 24% tax bracket saves you $240, while a $1,000 credit saves you the full $1,000 regardless of your tax bracket."
    }
  ];
  
  const businessTaxFaqs = [
    {
      question: "What business expenses are tax-deductible?",
      answer: "Common deductible business expenses include rent, utilities, employee salaries, business travel, marketing costs, insurance, professional services, office supplies, and depreciation of business assets. The key requirement is that expenses must be both ordinary and necessary for your business operations."
    },
    {
      question: "How do I choose the right business structure for tax purposes?",
      answer: "The best business structure depends on several factors including liability considerations, number of owners, capital needs, and taxation preferences. Sole proprietorships and pass-through entities like LLCs and S-Corporations offer simplicity, while C-Corporations provide more flexibility for larger businesses despite potential double taxation issues. We recommend consulting with one of our tax professionals to determine the best structure for your specific situation."
    },
    {
      question: "What are the tax implications of hiring employees versus independent contractors?",
      answer: "With employees, you're responsible for withholding income taxes, paying half of their Social Security and Medicare taxes, unemployment tax, and potentially providing benefits. With independent contractors, you generally don't withhold taxes or provide benefits, making them initially less expensive. However, misclassifying workers can result in significant penalties, so it's important to understand and follow the IRS guidelines for proper classification."
    },
    {
      question: "Do I need to make estimated tax payments for my business?",
      answer: "If you expect to owe $1,000 or more in taxes when you file your return, you generally need to make quarterly estimated tax payments. This applies to sole proprietors, partners, and S-corporation shareholders. The due dates are typically April 15, June 15, September 15, and January 15 of the following year. Underpaying estimated taxes can result in penalties, so it's important to calculate them correctly."
    }
  ];
  
  const estateInvestmentFaqs = [
    {
      question: "What is estate tax and who needs to pay it?",
      answer: "Estate tax is a tax on the transfer of property at death. For 2023, federal estate tax applies only to estates exceeding $12.92 million per individual or $25.84 million per married couple. Many states also impose their own estate or inheritance taxes, often with lower exemption thresholds. Proper estate planning can help minimize these taxes through strategies like gifting, trusts, and charitable donations."
    },
    {
      question: "How can I minimize taxes on my investments?",
      answer: "Strategies include holding investments long-term to qualify for lower capital gains rates, tax-loss harvesting, utilizing tax-advantaged accounts like 401(k)s and IRAs, considering municipal bonds for tax-free income, timing your capital gains and dividends, and strategic asset location across different account types."
    },
    {
      question: "What is a trust and how can it help with tax planning?",
      answer: "A trust is a legal entity that holds assets for beneficiaries. Trusts can help minimize estate taxes, protect assets, avoid probate, and provide greater control over how your assets are distributed. Certain types of trusts can remove assets from your taxable estate while allowing you to specify how and when beneficiaries receive distributions."
    },
    {
      question: "How are retirement account withdrawals taxed?",
      answer: "Traditional IRA and 401(k) withdrawals are taxed as ordinary income. Roth IRA and Roth 401(k) qualified withdrawals are tax-free. Early withdrawals before age 59½ may incur a 10% penalty on top of applicable taxes, though certain exceptions exist. After age 73 (as of 2023), required minimum distributions (RMDs) must be taken from traditional accounts to avoid substantial penalties."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 mb-4">
              Find answers to common tax questions or ask our AI assistant for personalized information.
            </p>
            <p className="text-gray-200 text-lg">
              Can't find what you're looking for? Our AI assistant is here to help!
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section 
        ref={refContent as React.RefObject<HTMLDivElement>}
        className={`py-16 transition-all duration-700 ${isVisibleContent ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="mb-8 flex flex-wrap">
                  <TabsTrigger value="personal">Personal Tax</TabsTrigger>
                  <TabsTrigger value="business">Business Tax</TabsTrigger>
                  <TabsTrigger value="estate">Estate & Investments</TabsTrigger>
                </TabsList>
                <TabsContent value="personal">
                  <FaqAccordion faqs={personalTaxFaqs} />
                </TabsContent>
                <TabsContent value="business">
                  <FaqAccordion faqs={businessTaxFaqs} />
                </TabsContent>
                <TabsContent value="estate">
                  <FaqAccordion faqs={estateInvestmentFaqs} />
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24">
                <h3 className="font-bold text-lg mb-4">Ask Our AI Assistant</h3>
                <AiAssistant />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
