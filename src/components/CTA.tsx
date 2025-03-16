
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left content area */}
              <div className="lg:col-span-3 p-8 md:p-12 reveal-on-scroll">
                <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
                  <Sparkles size={14} className="mr-1" />
                  <span>Start Creating Today</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your <br/>
                  <span className="text-purple-600">Creative Workflow?</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 max-w-md">
                  Join thousands of designers who have already elevated their creative process with our platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="h-12 px-6 bg-purple-600 hover:bg-purple-700 text-white">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-6 group border-purple-200 hover:border-purple-400">
                    <span>Schedule a Demo</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  No credit card required. 14-day free trial.
                </p>
              </div>
              
              {/* Right decorative area */}
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 md:p-12 flex items-center justify-center reveal-on-scroll">
                <div className="text-center">
                  <div className="rounded-full bg-white/10 p-6 inline-block mb-6">
                    <Sparkles size={32} className="text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="h-0.5 flex-1 bg-white/20"></div>
                      <span className="px-3 text-lg font-medium">What You Get</span>
                      <div className="h-0.5 flex-1 bg-white/20"></div>
                    </div>
                    
                    <ul className="space-y-2 text-sm md:text-base">
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                        <span>Unlimited design projects</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                        <span>Custom export formats</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                        <span>AI-powered suggestions</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                        <span>Premium support</span>
                      </li>
                    </ul>
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

export default CTA;
