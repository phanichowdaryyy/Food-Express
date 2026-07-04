
import React from 'react';
import { Star, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface RestaurantProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  discount?: string;
  isPromoted?: boolean;
  veg?: boolean;
}

const RestaurantCard: React.FC<RestaurantProps> = ({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  priceRange,
  discount,
  isPromoted = false,
  veg = false,
}) => {
  return (
    <Link to={`/restaurant/${id}`} className="block group">
      <div className="food-card group h-full flex flex-col">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Discount tag */}
          {discount && (
            <div className="absolute top-3 left-3 bg-food-primary text-white text-xs font-medium px-2 py-1 rounded">
              {discount}
            </div>
          )}
          
          {/* Promoted tag */}
          {isPromoted && (
            <div className="absolute top-3 right-3 bg-food-secondary text-white text-xs font-medium px-2 py-1 rounded">
              Promoted
            </div>
          )}
          
          {/* Veg indicator */}
          {veg && (
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-green-500 p-1 rounded">
              <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-food-primary transition-colors">{name}</h3>
          <p className="text-sm text-gray-500 mb-3">{cuisine}</p>
          
          <div className="flex items-center justify-between mt-auto">
            {/* Rating */}
            <div className="flex items-center">
              <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                <Star fill="#10B981" className="h-3.5 w-3.5 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-700">{rating}</span>
              </div>
            </div>
            
            {/* Delivery time */}
            <div className="flex items-center text-gray-500">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span className="text-xs">{deliveryTime}</span>
            </div>
            
            {/* Price range */}
            <div className="flex items-center text-gray-500">
              <Tag className="h-3.5 w-3.5 mr-1" />
              <span className="text-xs">{priceRange}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
