
import {
  User, Briefcase, Receipt, Calculator, ChartBar, Building, Percent,
  FileText, Landmark, PiggyBank, FileSearch, FileMinus, FilePlus, 
  ShoppingCart, FileX, Shield, Banknote, Users, Gavel, Mail, Phone
} from 'lucide-react';

export interface ServiceType {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'individual' | 'corporate' | 'gst' | 'specialized';
  icon: any;
  features?: string[];
  pricing?: string;
  popular?: boolean;
}

export const services: ServiceType[] = [
  // Individual Tax Services
  {
    id: 'ind-1',
    title: 'Income Tax Filing for Individuals',
    slug: 'individual-tax-filing',
    description: 'Comprehensive income tax return preparation and filing services for individuals.',
    category: 'individual',
    icon: User,
    features: [
      'Personal income tax return preparation',
      'Maximum deduction identification',
      'Electronic filing with faster refunds',
      'Year-round tax support'
    ],
    pricing: 'Starting from $150 for basic returns',
    popular: true
  },
  {
    id: 'ind-2',
    title: 'Tax Filing for Freelancers',
    slug: 'freelancer-taxes',
    description: 'Specialized tax filing services for freelancers, contractors, and gig workers.',
    category: 'individual',
    icon: Calculator,
    features: [
      'Self-employment tax calculations',
      'Business expense deductions',
      'Quarterly estimated tax planning',
      'Home office deduction guidance'
    ]
  },
  {
    id: 'ind-3',
    title: 'Tax Planning & Optimization',
    slug: 'tax-planning',
    description: 'Strategic tax planning to minimize your tax burden and maximize savings.',
    category: 'individual',
    icon: ChartBar,
    features: [
      'Year-round tax strategy development',
      'Life event tax planning',
      'Investment tax analysis',
      'Retirement tax optimization'
    ],
    pricing: 'Starting from $300 for basic planning sessions',
    popular: true
  },
  {
    id: 'ind-4',
    title: 'Capital Gains Tax Filing',
    slug: 'capital-gains',
    description: 'Expert handling of capital gains tax calculations and filing requirements.',
    category: 'individual',
    icon: ChartBar,
    features: [
      'Investment sale tax implications',
      'Property sale capital gains calculations',
      'Tax-loss harvesting strategies',
      'Capital gains minimization techniques'
    ]
  },
  {
    id: 'ind-5',
    title: 'Tax Filing for NRIs',
    slug: 'nri-tax-filing',
    description: 'Specialized tax services for Non-Resident Indians with international tax considerations.',
    category: 'individual',
    icon: User,
    features: [
      'Foreign income reporting',
      'FBAR compliance',
      'Tax treaty benefit application',
      'Foreign tax credit optimization'
    ]
  },
  {
    id: 'ind-6',
    title: 'Tax Deductions & Exemptions Guidance',
    slug: 'tax-deductions-exemptions',
    description: 'Maximizing your eligible tax deductions and exemptions to reduce tax liability.',
    category: 'individual',
    icon: Shield,
    features: [
      'Comprehensive deduction identification',
      'Documentation organization',
      'Exemption qualification assessment',
      'Audit-proof documentation guidance'
    ]
  },
  {
    id: 'ind-7',
    title: 'Tax Filing for Senior Citizens',
    slug: 'senior-tax-filing',
    description: 'Specialized tax preparation services designed for retirees and senior citizens.',
    category: 'individual',
    icon: User,
    features: [
      'Retirement income tax planning',
      'Social security benefit taxation',
      'Required minimum distribution planning',
      'Medical expense deduction maximization'
    ]
  },
  {
    id: 'ind-8',
    title: 'Tax Saving Strategies',
    slug: 'tax-saving-strategies',
    description: 'Proactive approaches to legally reduce your tax burden through strategic planning.',
    category: 'individual',
    icon: PiggyBank,
    features: [
      'Tax-advantaged investment guidance',
      'Retirement account optimization',
      'Education savings strategies',
      'Charitable giving tax benefits'
    ],
    popular: true
  },
  {
    id: 'ind-9',
    title: 'Retirement & Pension Tax Planning',
    slug: 'retirement-tax-planning',
    description: 'Specialized tax planning for retirement accounts and pension distributions.',
    category: 'individual',
    icon: PiggyBank,
    features: [
      'Retirement account distribution strategies',
      'Pension taxation optimization',
      'Social security taxation planning',
      'Required minimum distribution management'
    ]
  },
  {
    id: 'ind-10',
    title: 'Tax Refund Filing',
    slug: 'tax-refund',
    description: 'Expert assistance with tax refund claims and expedited processing.',
    category: 'individual',
    icon: Receipt,
    features: [
      'Refund maximization strategies',
      'Electronic filing for faster refunds',
      'Direct deposit arrangement',
      'Refund status tracking'
    ]
  },
  {
    id: 'ind-11',
    title: 'Filing for Agricultural Income',
    slug: 'agricultural-income',
    description: 'Specialized tax filing services for farmers and agricultural business owners.',
    category: 'individual',
    icon: Landmark,
    features: [
      'Farm income and expense categorization',
      'Agricultural tax credit identification',
      'Depreciation of farm assets',
      'Schedule F preparation'
    ]
  },
  {
    id: 'ind-12',
    title: 'Tax Planning for Investment Income',
    slug: 'investment-income-tax',
    description: 'Strategic tax planning for dividends, interest, capital gains, and other investment income.',
    category: 'individual',
    icon: ChartBar,
    features: [
      'Investment tax classification optimization',
      'Tax-efficient investment structure advice',
      'Capital loss utilization strategies',
      'Alternative investment tax implications'
    ]
  },
  
  // Corporate Tax Services
  {
    id: 'corp-1',
    title: 'Corporate Income Tax Filing',
    slug: 'corporate-tax-filing',
    description: 'Comprehensive corporate tax return preparation and filing services.',
    category: 'corporate',
    icon: Briefcase,
    features: [
      'Corporate tax return preparation',
      'Quarterly estimated tax planning',
      'Tax liability minimization',
      'Audit support and representation'
    ],
    pricing: 'Starting from $500 for basic corporate returns',
    popular: true
  },
  {
    id: 'corp-2',
    title: 'Company Incorporation & Formation',
    slug: 'company-incorporation',
    description: 'Guidance on the most tax-efficient business structure and incorporation assistance.',
    category: 'corporate',
    icon: Building,
    features: [
      'Entity selection consultation',
      'Formation document preparation',
      'Initial tax ID and registration assistance',
      'Post-incorporation compliance guidance'
    ]
  },
  {
    id: 'corp-3',
    title: 'Transfer Pricing Advisory',
    slug: 'transfer-pricing',
    description: 'Expert guidance on transfer pricing policies and documentation requirements.',
    category: 'corporate',
    icon: Briefcase,
    features: [
      'Transfer pricing policy development',
      'Documentation preparation',
      'Risk assessment and mitigation',
      'Audit defense support'
    ]
  },
  {
    id: 'corp-4',
    title: 'Corporate Tax Consulting',
    slug: 'corporate-tax-consulting',
    description: 'Strategic tax consulting services for businesses of all sizes.',
    category: 'corporate',
    icon: Shield,
    features: [
      'Tax strategy development',
      'Risk assessment and mitigation',
      'Tax compliance review',
      'Special project tax consultation'
    ],
    popular: true
  },
  {
    id: 'corp-5',
    title: 'Tax Audit Services for Corporates',
    slug: 'corporate-tax-audit',
    description: 'Comprehensive tax audit preparation and representation services.',
    category: 'corporate',
    icon: FileSearch,
    features: [
      'Pre-audit preparation',
      'Audit representation',
      'Documentation organization and defense',
      'Negotiation with tax authorities'
    ]
  },
  {
    id: 'corp-6',
    title: 'Mergers & Acquisitions Tax Consulting',
    slug: 'm-and-a-tax',
    description: 'Tax planning and compliance for mergers, acquisitions, and business restructurings.',
    category: 'corporate',
    icon: Building,
    features: [
      'Transaction structure tax optimization',
      'Due diligence review',
      'Post-transaction integration planning',
      'Tax attribute preservation strategies'
    ]
  },
  {
    id: 'corp-7',
    title: 'Filing TDS Returns',
    slug: 'tds-returns',
    description: 'Comprehensive TDS (Tax Deducted at Source) return preparation and filing.',
    category: 'corporate',
    icon: FileMinus,
    features: [
      'TDS calculation verification',
      'Return preparation and filing',
      'Correction statement handling',
      'TDS certificate issuance management'
    ]
  },
  {
    id: 'corp-8',
    title: 'Corporate Tax Planning & Structuring',
    slug: 'corporate-tax-planning',
    description: 'Strategic tax planning and entity structuring to minimize corporate tax burden.',
    category: 'corporate',
    icon: Briefcase,
    features: [
      'Entity structure optimization',
      'International tax planning',
      'Tax incentive utilization',
      'Year-round tax strategy development'
    ]
  },
  {
    id: 'corp-9',
    title: 'Tax Advice for Startups',
    slug: 'startup-tax',
    description: 'Specialized tax planning and compliance services for startup companies.',
    category: 'corporate',
    icon: Building,
    features: [
      'Startup entity selection',
      'Founder tax planning',
      'Stock option and equity compensation',
      'R&D tax credit qualification'
    ],
    popular: true
  },
  {
    id: 'corp-10',
    title: 'Tax Exemptions for Corporate Entities',
    slug: 'corporate-exemptions',
    description: 'Identification and application for available corporate tax exemptions and incentives.',
    category: 'corporate',
    icon: Percent,
    features: [
      'Industry-specific exemption identification',
      'Exemption application assistance',
      'Compliance requirement guidance',
      'Renewal management'
    ]
  },
  
  // GST & Indirect Tax Services
  {
    id: 'gst-1',
    title: 'GST Registration & Filing',
    slug: 'gst-registration-filing',
    description: 'Comprehensive GST registration and return filing services.',
    category: 'gst',
    icon: FilePlus,
    features: [
      'GST registration assistance',
      'Monthly/quarterly return preparation',
      'Input tax credit reconciliation',
      'Compliance monitoring'
    ],
    pricing: 'Starting from $200 per month for basic filing',
    popular: true
  },
  {
    id: 'gst-2',
    title: 'GST Audit & Compliance',
    slug: 'gst-audit',
    description: 'Thorough GST audit preparation and compliance verification services.',
    category: 'gst',
    icon: FileSearch,
    features: [
      'GST records review and reconciliation',
      'Audit preparation assistance',
      'Representation during audits',
      'Non-compliance risk mitigation'
    ]
  },
  {
    id: 'gst-3',
    title: 'GST for Small Businesses',
    slug: 'small-business-gst',
    description: 'Simplified GST compliance solutions designed for small business owners.',
    category: 'gst',
    icon: Building,
    features: [
      'Composition scheme evaluation',
      'Simplified record-keeping systems',
      'Return filing assistance',
      'Compliance training'
    ]
  },
  {
    id: 'gst-4',
    title: 'GST Filing for E-Commerce',
    slug: 'ecommerce-gst',
    description: 'Specialized GST compliance services for e-commerce businesses.',
    category: 'gst',
    icon: ShoppingCart,
    features: [
      'Marketplace vs. direct seller requirements',
      'Multi-state compliance management',
      'TCS compliance',
      'Cross-border transaction handling'
    ],
    popular: true
  },
  {
    id: 'gst-5',
    title: 'GST Refund Services',
    slug: 'gst-refund',
    description: 'Expert assistance with GST refund claims and processing.',
    category: 'gst',
    icon: Receipt,
    features: [
      'Refund eligibility assessment',
      'Documentation preparation',
      'Claim filing assistance',
      'Follow-up and tracking'
    ]
  },
  {
    id: 'gst-6',
    title: 'GST Consultation for Real Estate',
    slug: 'real-estate-gst',
    description: 'Specialized GST consultation services for real estate transactions and developments.',
    category: 'gst',
    icon: Building,
    features: [
      'ITC eligibility for construction',
      'Joint development agreement handling',
      'Residential vs. commercial implications',
      'Transitional credit assistance'
    ]
  },
  {
    id: 'gst-7',
    title: 'GST Training & Workshops',
    slug: 'gst-training',
    description: 'Customized GST training programs for businesses and accounting staff.',
    category: 'gst',
    icon: Users,
    features: [
      'Basics to advanced GST concepts',
      'Industry-specific compliance training',
      'Software training for GST filing',
      'Regular updates on law changes'
    ]
  },
  
  // Tax Litigation & Dispute Resolution
  {
    id: 'lit-1',
    title: 'Tax Filing Dispute Resolution',
    slug: 'filing-disputes',
    description: 'Expert assistance with resolving tax filing discrepancies and disputes.',
    category: 'specialized',
    icon: FileX,
    features: [
      'Assessment order analysis',
      'Response preparation',
      'Negotiation with tax authorities',
      'Appeal preparation if necessary'
    ]
  },
  {
    id: 'lit-2',
    title: 'Appeals Support',
    slug: 'tax-appeals',
    description: 'Comprehensive support for appeals against tax assessments and penalties.',
    category: 'specialized',
    icon: FileX,
    features: [
      'Appeal documentation preparation',
      'Legal argument development',
      'Representation at appellate proceedings',
      'Settlement negotiation'
    ]
  },
  {
    id: 'lit-3',
    title: 'Income Tax & GST Litigation Services',
    slug: 'tax-litigation',
    description: 'Professional representation in tax litigation matters before various forums.',
    category: 'specialized',
    icon: Gavel,
    features: [
      'Case strategy development',
      'Documentation and evidence preparation',
      'Legal representation',
      'Settlement negotiation'
    ],
    popular: true
  },
  {
    id: 'lit-4',
    title: 'Representation Before Tax Authorities',
    slug: 'tax-authority-representation',
    description: 'Expert representation before tax authorities for audits, assessments, and disputes.',
    category: 'specialized',
    icon: Briefcase,
    features: [
      'Communication management',
      'Documentation preparation',
      'In-person representation',
      'Follow-up correspondence'
    ]
  },
  
  // Specialized Tax Services
  {
    id: 'spec-1',
    title: 'NRI Taxation & Advisory',
    slug: 'nri-taxation',
    description: 'Specialized tax services for Non-Resident Indians with international tax considerations.',
    category: 'specialized',
    icon: User,
    features: [
      'Residency status determination',
      'Foreign income reporting',
      'Tax treaty benefit application',
      'Foreign asset disclosure compliance'
    ]
  },
  {
    id: 'spec-2',
    title: 'Taxation for Cryptocurrency & Digital Assets',
    slug: 'crypto-taxation',
    description: 'Expert guidance on tax compliance for cryptocurrency and digital asset transactions.',
    category: 'specialized',
    icon: Calculator,
    features: [
      'Transaction tracking and basis calculation',
      'Mining and staking income reporting',
      'NFT transaction tax guidance',
      'Cross-border crypto compliance'
    ],
    popular: true
  },
  {
    id: 'spec-3',
    title: 'Estate Tax Planning',
    slug: 'estate-tax-planning',
    description: 'Comprehensive estate tax planning services to preserve wealth for future generations.',
    category: 'specialized',
    icon: Landmark,
    features: [
      'Estate tax minimization strategies',
      'Trust planning and implementation',
      'Gift tax planning',
      'Legacy preservation consultation'
    ]
  },
  {
    id: 'spec-4',
    title: 'Tax Advice for Intellectual Property',
    slug: 'ip-taxation',
    description: 'Specialized tax consultation for intellectual property development, licensing, and sales.',
    category: 'specialized',
    icon: Shield,
    features: [
      'IP holding structure optimization',
      'Licensing arrangement tax planning',
      'R&D tax incentives utilization',
      'Cross-border IP transaction consultation'
    ]
  },
  {
    id: 'spec-5',
    title: 'Wealth & Estate Tax Planning for HNWI',
    slug: 'hnwi-tax-planning',
    description: 'Customized tax planning services for high-net-worth individuals and families.',
    category: 'specialized',
    icon: Banknote,
    features: [
      'Comprehensive wealth preservation strategies',
      'Multi-generational tax planning',
      'Asset protection consulting',
      'Philanthropic planning'
    ]
  },
  {
    id: 'spec-6',
    title: 'Tax Planning for Agricultural Income',
    slug: 'agricultural-tax-planning',
    description: 'Specialized tax planning services for farmers and agricultural business owners.',
    category: 'specialized',
    icon: Landmark,
    features: [
      'Agricultural exemption qualification',
      'Farm business structure optimization',
      'Succession planning for farms',
      'Subsidy and grant tax implications'
    ]
  },
  {
    id: 'spec-7',
    title: 'Taxation for Professional Practices',
    slug: 'professional-practice-taxation',
    description: 'Tailored tax services for doctors, lawyers, and other professional practices.',
    category: 'specialized',
    icon: Briefcase,
    features: [
      'Entity structure optimization',
      'Retirement plan tax strategies',
      'Income smoothing techniques',
      'Practice transition planning'
    ]
  },
  {
    id: 'spec-8',
    title: 'Offshore Taxation Services',
    slug: 'offshore-taxation',
    description: 'Compliant international tax planning and reporting for offshore assets and income.',
    category: 'specialized',
    icon: Briefcase,
    features: [
      'FBAR and FATCA compliance',
      'Foreign entity structure consultation',
      'Offshore voluntary disclosure assistance',
      'International tax treaty application'
    ]
  },
];
