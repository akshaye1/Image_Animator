
import { useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Flow has completely transformed our design workflow. What used to take hours now takes minutes, and the results are even better.",
    author: "Sarah Johnson",
    role: "Creative Director, DesignStudio",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "As a freelancer, efficiency is everything. Flow gives me professional-grade tools without the complexity. Couldn't recommend it more.",
    author: "Michael Chen",
    role: "Independent Designer",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    content: "The automation features alone are worth it. Our team's productivity increased by 40% in the first month of using Flow.",
    author: "Jessica Rivera",
    role: "Product Manager, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const Testimonials = () => {
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Loved by Creators Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied designers who have upgraded their creative process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll">
          <div className="inline-block">
            <span className="block text-gray-600 mb-2">Trusted by 10,000+ customers worldwide</span>
            <div className="flex justify-center space-x-8">
              <img src="https://via.placeholder.com/100x30?text=Logo1" alt="Company logo" className="h-6 grayscale opacity-70" />
              <img src="https://via.placeholder.com/100x30?text=Logo2" alt="Company logo" className="h-6 grayscale opacity-70" />
              <img src="https://via.placeholder.com/100x30?text=Logo3" alt="Company logo" className="h-6 grayscale opacity-70" />
              <img src="https://via.placeholder.com/100x30?text=Logo4" alt="Company logo" className="h-6 grayscale opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
