
import { useEffect } from 'react';
import { Upload, Wand2, Share, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-6 w-6 text-white" />,
    bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
    title: "Upload Your Content",
    description: "Import images, videos, or start with a blank canvas — our platform supports all major file formats."
  },
  {
    icon: <Wand2 className="h-6 w-6 text-white" />,
    bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
    title: "Transform with AI",
    description: "Apply intelligent effects and enhancements with our AI-powered tools that learn your style preferences."
  },
  {
    icon: <Share className="h-6 w-6 text-white" />,
    bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
    title: "Share & Collaborate",
    description: "Export in multiple formats and share directly to your team or social platforms with a single click."
  }
];

const HowItWorks = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto reveal-on-scroll">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="text-purple-600">Flow</span> Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to transform your creative vision into stunning reality.
            No steep learning curve, just intuitive design.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gray-100 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative reveal-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-8 mx-auto relative z-10">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl shadow-lg flex items-center justify-center transform -rotate-6 mx-auto`}>
                    {step.icon}
                  </div>
                  <div className="absolute -right-2 -top-2 w-6 h-6 bg-white rounded-full border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
                    {index + 1}
                  </div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="text-gray-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll">
          <div className="inline-block p-6 rounded-xl bg-purple-50 border border-purple-100">
            <div className="text-gray-900 font-medium mb-2">Ready to transform your design workflow?</div>
            <a href="#pricing" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
              Explore pricing options
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
