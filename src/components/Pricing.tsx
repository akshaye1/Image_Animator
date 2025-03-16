
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Basic",
    description: "Everything you need to get started with basic design projects.",
    monthlyPrice: "$12",
    yearlyPrice: "$120",
    features: [
      "Essential design tools",
      "Up to 3 projects",
      "Basic templates",
      "2GB cloud storage",
      "Email support"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Pro",
    description: "Advanced features for professionals and growing teams.",
    monthlyPrice: "$29",
    yearlyPrice: "$290",
    features: [
      "All Basic features",
      "Unlimited projects",
      "Advanced effects",
      "10GB cloud storage",
      "Priority support",
      "Team collaboration",
      "Version history"
    ],
    cta: "Get Pro",
    highlight: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for organizations with specific needs.",
    monthlyPrice: "$79",
    yearlyPrice: "$790",
    features: [
      "All Pro features",
      "Unlimited storage",
      "Advanced security",
      "Custom branding",
      "Dedicated support",
      "API access",
      "Analytics dashboard",
      "Training sessions"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Pricing = () => {
  const [billingYearly, setBillingYearly] = useState(true);
  
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center p-1 border border-gray-200 rounded-full bg-white">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  !billingYearly ? 'bg-blue-600 text-white' : 'text-gray-700'
                } transition-all`}
                onClick={() => setBillingYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  billingYearly ? 'bg-blue-600 text-white' : 'text-gray-700'
                } transition-all`}
                onClick={() => setBillingYearly(true)}
              >
                Yearly <span className="text-xs opacity-90">Save 15%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`reveal-on-scroll ${
                plan.highlight 
                  ? 'glass-card bg-white border-blue-100 shadow-lg relative scale-105 z-10' 
                  : 'glass-card'
              } p-6 flex flex-col h-full`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-display font-bold mb-1 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-display font-bold">
                  {billingYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                {billingYearly ? (
                  <span className="text-gray-600 ml-1">/year</span>
                ) : (
                  <span className="text-gray-600 ml-1">/month</span>
                )}
              </div>
              
              <ul className="mb-6 space-y-3 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`mt-auto w-full ${
                  plan.highlight ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
                }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
