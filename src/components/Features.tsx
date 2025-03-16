import { useEffect, useState } from 'react';
import { Sliders, Layers, Palette, Wand2, Clock, Users, Check } from 'lucide-react';

const features = [
  {
    icon: <Sliders className="w-6 h-6 text-purple-600" />,
    title: "Intuitive Controls",
    description: "Fine-tune every aspect of your designs with pixel-perfect precision and real-time feedback."
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    title: "Smart Layering",
    description: "Organize complex compositions with an intelligent layer system that adapts to your workflow."
  },
  {
    icon: <Palette className="w-6 h-6 text-purple-600" />,
    title: "AI Color Suggestions",
    description: "Get harmonious color schemes powered by our machine learning algorithms tailored to your brand."
  },
  {
    icon: <Wand2 className="w-6 h-6 text-purple-600" />,
    title: "Instant Effects",
    description: "Apply stunning visual effects and animations with a single click, fully customizable to your needs."
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    title: "Time-Saving Automation",
    description: "Automate repetitive tasks with smart assistants that learn and adapt to your design process."
  },
  {
    icon: <Users className="w-6 h-6 text-purple-600" />,
    title: "Real-time Collaboration",
    description: "Work seamlessly with your team through built-in comments, version control, and live editing."
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

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
    <section id="features" className="relative py-24 overflow-hidden bg-gray-50">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full filter blur-3xl opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto reveal-on-scroll">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to Create <span className="text-purple-600">Amazing Designs</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our platform combines powerful features with an intuitive interface,
            making professional design accessible to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features list column */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl reveal-on-scroll transition-all duration-300 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-white shadow-lg border-l-4 border-purple-500' 
                    : 'bg-gray-50 hover:bg-white hover:shadow-md'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start">
                  <div className={`mr-4 p-2 rounded-lg ${
                    activeFeature === index ? 'bg-purple-100' : 'bg-gray-100'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      {feature.title}
                      {activeFeature === index && (
                        <Check size={16} className="ml-2 text-green-500" />
                      )}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual representation column */}
          <div className="lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl transform -rotate-2 scale-105"></div>
              <div className="relative glass-card bg-white/90 p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="aspect-video rounded-lg bg-gradient-to-tr from-gray-50 to-white shadow-inner overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4">
                        {features[activeFeature].icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{features[activeFeature].title}</h3>
                    </div>
                  </div>
                  {/* Visual elements based on active feature */}
                  <div className="absolute inset-0 opacity-20">
                    {activeFeature === 0 && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-3/4 h-1 bg-gray-200 rounded-full relative">
                          <div className="absolute top-0 left-0 h-full w-2/3 bg-purple-500 rounded-full animate-pulse"></div>
                          <div className="absolute -top-2 left-2/3 h-5 w-5 bg-white rounded-full border-2 border-purple-500"></div>
                        </div>
                      </div>
                    )}
                    {activeFeature === 1 && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-lg"></div>
                          <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-200 rounded-lg"></div>
                          <div className="absolute bottom-8 left-8 w-24 h-24 bg-pink-200 rounded-lg"></div>
                        </div>
                      </div>
                    )}
                    {activeFeature === 2 && (
                      <div className="w-full h-full flex items-center justify-center gap-4">
                        {['bg-purple-400', 'bg-pink-400', 'bg-blue-400', 'bg-indigo-400', 'bg-violet-400'].map((color, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full ${color}`}></div>
                        ))}
                      </div>
                    )}
                    {/* Other feature visuals would go here */}
                  </div>
                </div>
                
                {/* Feature highlight details */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">HIGHLIGHT</h4>
                  <p className="text-gray-700">{features[activeFeature].description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span>Feature {activeFeature + 1} of {features.length}</span>
                      <button 
                        className="text-purple-600 hover:text-purple-700"
                        onClick={() => setActiveFeature((prev) => (prev + 1) % features.length)}
                      >
                        Next feature →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
