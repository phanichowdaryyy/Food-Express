
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FoodItem {
  id: string;
  name: string;
  image: string;
  price: string;
  restaurant: string;
  rating: number;
}

interface PopularItemsProps {
  title: string;
  items: FoodItem[];
}

const PopularItems: React.FC<PopularItemsProps> = ({ title, items }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };
  
  const showLeftArrow = scrollPosition > 20;
  const showRightArrow = scrollContainerRef.current
    ? scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth &&
      scrollPosition < scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 20
    : true;
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const handleScrollEvent = () => {
      setScrollPosition(container.scrollLeft);
    };
    
    container.addEventListener('scroll', handleScrollEvent);
    return () => container.removeEventListener('scroll', handleScrollEvent);
  }, []);
  
  return (
    <div className="relative w-full mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        
        <div className="flex space-x-2">
          <button
            onClick={() => handleScroll('left')}
            className={`p-2 rounded-full transition-all duration-300 ${showLeftArrow ? 'bg-gray-100 text-gray-700' : 'bg-gray-50 text-gray-400 cursor-not-allowed'}`}
            disabled={!showLeftArrow}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className={`p-2 rounded-full transition-all duration-300 ${showRightArrow ? 'bg-gray-100 text-gray-700' : 'bg-gray-50 text-gray-400 cursor-not-allowed'}`}
            disabled={!showRightArrow}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-64">
            <div className="food-card h-full">
              <div className="relative overflow-hidden rounded-t-lg h-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.restaurant}</p>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{item.price}</span>
                  <span className="text-sm bg-green-50 text-green-700 px-2 py-0.5 rounded">
                    ★ {item.rating}
                  </span>
                </div>
                
                <button className="w-full mt-3 py-2 text-sm font-medium text-food-primary border border-food-primary rounded-lg hover:bg-food-primary hover:text-white transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
