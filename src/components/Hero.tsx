
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, ArrowRight, Layers, Palette } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Animation for sliders
    const interval = setInterval(() => {
      sliderRefs.current.forEach((slider, index) => {
        if (!slider) return;
        const newValue = Math.floor(Math.random() * 50) + 25; // Random value between 25-75
        slider.style.width = `${newValue}%`;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - text content */}
          <div className={`transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
              <Sparkles size={14} className="mr-1" />
              <span>Next-gen Design Tool</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Design <span className="text-purple-600 font-bold">Without Limits</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Create stunning designs and animations with our intuitive platform. Professional-grade tools made simple.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="h-12 px-6 bg-purple-600 hover:bg-purple-700 text-white">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 group border-purple-200 hover:border-purple-400">
                <span>Watch Demo</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br ${
                    i === 1 ? 'from-pink-500 to-purple-600' : 
                    i === 2 ? 'from-blue-500 to-teal-400' : 
                    i === 3 ? 'from-orange-400 to-yellow-300' : 
                    'from-green-400 to-emerald-500'
                  }`}></div>
                ))}
              </div>
              <span>Trusted by 10,000+ designers</span>
            </div>
          </div>
          
          {/* Right column - UI mockup */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-300`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl transform rotate-1 scale-105"></div>
              <div className="glass-card p-5 rounded-xl backdrop-blur-md bg-white/80 relative shadow-xl overflow-hidden border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-sm text-gray-500">Flow Designer</div>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {/* Left toolbar */}
                  <div className="col-span-1 bg-gray-50 rounded-lg p-3 flex flex-col gap-3">
                    {['purple', 'blue', 'green', 'orange', 'red'].map((color, i) => (
                      <div key={i} className={`w-8 h-8 rounded-lg bg-${color}-100 border border-${color}-200 ${i === 0 ? 'ring-2 ring-purple-400' : ''}`}></div>
                    ))}
                  </div>
                  
                  {/* Main canvas */}
                  <div className="col-span-4 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-inner h-60 relative overflow-hidden">
                    <img 
                      src="/lovable-uploads/9c78178c-3ee4-45a6-8122-0861526dbe8c.png" 
                      alt="Design Canvas" 
                      className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                    
                    {/* Floating elements */}
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-400 rounded-lg opacity-50 animate-float"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-blue-400 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Layers size={16} className="text-purple-600 mr-2" />
                      <span className="text-sm font-medium">Layers</span>
                    </div>
                    <div className="text-xs text-gray-500">5 items</div>
                  </div>
                  
                  <div className="space-y-2">
                    {['Opacity', 'Blur radius', 'Scale'].map((label, i) => (
                      <div key={i} className="mb-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>{label}</span>
                          <span>{i === 0 ? '75%' : i === 1 ? '4.2px' : '1.2x'}</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            ref={el => sliderRefs.current[i] = el}
                            className="h-full bg-purple-500 rounded-full transition-all duration-1000 ease-in-out"
                            style={{ width: '50%' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
