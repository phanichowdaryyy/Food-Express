
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import RestaurantCard, { RestaurantProps } from '../components/RestaurantCard';
import PopularItems from '../components/PopularItems';
import Footer from '../components/Footer';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Categories
  const categories = [
    'All', 'Pizza', 'Burger', 'Chinese', 'Italian', 'Indian', 
    'Mexican', 'Thai', 'Sushi', 'Dessert', 'Healthy', 'Vegetarian'
  ];
  
  // Popular food items data
  const popularItems = [
    {
      id: '1',
      name: 'Margherita Pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '$12.99',
      restaurant: 'Pizza Palace',
      rating: 4.7
    },
    {
      id: '2',
      name: 'Classic Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '$9.99',
      restaurant: 'Burger House',
      rating: 4.5
    },
    {
      id: '3',
      name: 'Pad Thai',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '$14.50',
      restaurant: 'Thai Delight',
      rating: 4.8
    },
    {
      id: '4',
      name: 'Chicken Biryani',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '$15.99',
      restaurant: 'Spice Garden',
      rating: 4.6
    },
    {
      id: '5',
      name: 'Chocolate Cake',
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '$8.50',
      restaurant: 'Sweet Treats',
      rating: 4.9
    },
    {
      id: '6',
      name: 'Sushi Platter',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '$24.99',
      restaurant: 'Sushi Bar',
      rating: 4.7
    },
  ];
  
  // Restaurant data
  useEffect(() => {
    // Simulate API call to fetch restaurants
    setTimeout(() => {
      const mockData: RestaurantProps[] = [
        {
          id: '1',
          name: 'Pizza Palace',
          image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Italian, Pizza',
          rating: 4.7,
          deliveryTime: '25-35 min',
          priceRange: '$$',
          discount: '50% OFF',
          isPromoted: true,
        },
        {
          id: '2',
          name: 'Burger House',
          image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'American, Burgers',
          rating: 4.5,
          deliveryTime: '15-25 min',
          priceRange: '$$',
          discount: '30% OFF',
        },
        {
          id: '3',
          name: 'Thai Delight',
          image: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Thai, Asian',
          rating: 4.8,
          deliveryTime: '30-40 min',
          priceRange: '$$$',
          isPromoted: true,
          veg: true,
        },
        {
          id: '4',
          name: 'Spice Garden',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Indian, Curry',
          rating: 4.6,
          deliveryTime: '35-45 min',
          priceRange: '$$',
          veg: true,
        },
        {
          id: '5',
          name: 'Sweet Treats',
          image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Desserts, Bakery',
          rating: 4.9,
          deliveryTime: '20-30 min',
          priceRange: '$$',
          discount: '15% OFF',
        },
        {
          id: '6',
          name: 'Sushi Bar',
          image: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Japanese, Sushi',
          rating: 4.7,
          deliveryTime: '25-35 min',
          priceRange: '$$$',
          isPromoted: true,
        },
        {
          id: '7',
          name: 'Taco Fiesta',
          image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Mexican, Tacos',
          rating: 4.3,
          deliveryTime: '20-30 min',
          priceRange: '$',
          discount: '20% OFF',
        },
        {
          id: '8',
          name: 'Green Bowl',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Salads, Healthy',
          rating: 4.5,
          deliveryTime: '15-25 min',
          priceRange: '$$',
          veg: true,
        },
        {
          id: '9',
          name: 'Dragon Wok',
          image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Chinese, Asian',
          rating: 4.4,
          deliveryTime: '25-35 min',
          priceRange: '$$',
          discount: '40% OFF',
        },
        {
          id: '10',
          name: 'Bella Italia',
          image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Italian, Pasta',
          rating: 4.6,
          deliveryTime: '30-40 min',
          priceRange: '$$$',
          isPromoted: true,
        },
        {
          id: '11',
          name: 'Curry Leaf',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Indian, Vegetarian',
          rating: 4.7,
          deliveryTime: '25-35 min',
          priceRange: '$$',
          veg: true,
          discount: '25% OFF',
        },
        {
          id: '12',
          name: 'Le Petit Cafe',
          image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Cafe, Continental',
          rating: 4.3,
          deliveryTime: '20-30 min',
          priceRange: '$$',
        },
        {
          id: '13',
          name: 'BBQ Nation',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'BBQ, Grill',
          rating: 4.8,
          deliveryTime: '35-45 min',
          priceRange: '$$$',
          isPromoted: true,
          discount: '15% OFF',
        },
        {
          id: '14',
          name: 'Wrap It Up',
          image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Mexican, Wraps',
          rating: 4.2,
          deliveryTime: '15-25 min',
          priceRange: '$',
        },
        {
          id: '15',
          name: 'Ocean Catch',
          image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          cuisine: 'Seafood, Grill',
          rating: 4.6,
          deliveryTime: '30-40 min',
          priceRange: '$$$',
          discount: '20% OFF',
        },
      ];
      
      setRestaurants(mockData);
      setFilteredRestaurants(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Filter restaurants based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(restaurant => 
        restaurant.cuisine.toLowerCase().includes(selectedCategory.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  }, [selectedCategory, restaurants]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Main Content */}
        <div className="container-custom py-12">
          {/* Popular Items Section */}
          <div className="mb-16 animate-fade-in">
            <PopularItems title="Popular Dishes" items={popularItems} />
          </div>
          
          {/* Restaurants Section */}
          <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Restaurants Near You</h2>
            
            {/* Categories */}
            <CategoryFilter 
              categories={categories} 
              onSelectCategory={setSelectedCategory} 
              selectedCategory={selectedCategory} 
            />
            
            {/* Restaurant Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="food-card animate-pulse-soft">
                    <div className="rounded-t-lg aspect-[4/3] bg-gray-200"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                      <div className="flex justify-between items-center">
                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} {...restaurant} />
                ))}
              </div>
            )}
          </div>
          
          {/* Featured Sections */}
          <div className="mt-16 space-y-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {/* Join as Restaurant */}
            <div className="bg-gradient-to-r from-food-primary/10 to-food-secondary/10 p-10 rounded-2xl relative overflow-hidden">
              <div className="max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Partner with Food Express</h2>
                <p className="text-gray-700 mb-6">
                  Grow your business and reach new customers by partnering with us. Our platform helps you manage deliveries and increase your sales.
                </p>
                <button className="btn-primary">
                  Register as Partner
                </button>
              </div>
              <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Restaurant Partners" 
                  className="rounded-lg shadow-lg"
                  style={{ width: '250px', height: '180px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Become a Driver */}
            <div className="bg-gradient-to-r from-food-accent/10 to-food-primary/10 p-10 rounded-2xl relative overflow-hidden">
              <div className="max-w-lg ml-auto">
                <h2 className="text-2xl font-bold mb-4">Become a Delivery Driver</h2>
                <p className="text-gray-700 mb-6">
                  Earn money on your schedule. Choose when and how much you want to work and get paid.
                </p>
                <button className="btn-secondary">
                  Apply Now
                </button>
              </div>
              <div className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1582782647927-9e4f095a8d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Delivery Driver" 
                  className="rounded-lg shadow-lg"
                  style={{ width: '250px', height: '180px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
