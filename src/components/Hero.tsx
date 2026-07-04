
import React, { useState, useEffect } from 'react';
import { ArrowRight, Search } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Adding a slight delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full bg-gradient-to-br from-food-light via-white to-food-light overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOGY4ZjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzAgMEMxMy40 MCAwIDAgMTMuNCAwIDMwczEzLjQgMzAgMzAgMzAgMzAtMTMuNCAzMC0zMFM0Ni42IDAgMzAgMHptMCA1QzE2LjIgNSA1IDE2LjIgNSAzMHMxMS4yIDI1IDI1IDI1IDI1LTExLjIgMjUtMjVTNDMuOCA1IDMwIDV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Content container */}
      <div className="container-custom h-full flex flex-col justify-center relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Main heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-food-dark">Delicious Food</span>
            <br />
            <span className="text-food-primary">Delivered to your Door</span>
          </h1>
          
          {/* Subheading */}
          <p 
            className={`text-lg md:text-xl text-gray-600 mb-8 max-w-xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Order from your favorite restaurants and track your delivery in real-time. Fast, reliable, and delicious.
          </p>
          
          {/* Search box */}
          <div 
            className={`relative max-w-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center overflow-hidden bg-white rounded-full shadow-lg border border-gray-100 focus-within:border-food-primary focus-within:ring-2 focus-within:ring-food-primary focus-within:ring-opacity-20 transition-all">
              <Search className="h-5 w-5 ml-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for restaurants or food..." 
                className="w-full py-4 pl-3 pr-4 outline-none text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-food-primary text-white font-medium py-4 px-6 whitespace-nowrap hover:bg-food-accent transition-colors duration-300">
                Find Food
              </button>
            </div>
          </div>
          
          {/* Features */}
          <div 
            className={`flex flex-wrap gap-6 mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {['Wide selection', 'Fast delivery', 'Live tracking', 'Easy payment'].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-food-primary"></div>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Food image */}
      <div 
        className={`absolute bottom-0 right-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} hidden lg:block`}
        style={{ maxWidth: '45%' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Delicious food platter" 
          className="object-contain rounded-tl-3xl"
          style={{ filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.15))' }}
        />
      </div>
    </div>
  );
};

export default Hero;
