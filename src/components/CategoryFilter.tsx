
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onSelectCategory,
  selectedCategory,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = direction === 'left' ? -300 : 300;
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
    <div className="relative w-full mb-8">
      {/* Left scroll button */}
      {showLeftArrow && (
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-md rounded-full p-2 border border-gray-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
      )}

      {/* Categories */}
      <div 
        ref={scrollContainerRef}
        className="flex space-x-3 overflow-x-auto scrollbar-hide py-2 px-2 -mx-2 scroll-smooth"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`category-pill whitespace-nowrap ${selectedCategory === category ? 'active' : 'inactive'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right scroll button */}
      {showRightArrow && (
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-md rounded-full p-2 border border-gray-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;
