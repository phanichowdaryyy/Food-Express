
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Star, Percent, Info, ShoppingBag, Plus, Minus, Heart } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, '')) || 0;

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isVeg: boolean;
  isPopular: boolean;
  category: string;
}

interface RestaurantData {
  id: string;
  name: string;
  coverImage: string;
  logo: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  distance: string;
  priceRange: string;
  discount?: string;
  address: string;
}

const RestaurantDetails = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const { items: cartItems, addItem, updateQty, totalQuantity, subtotal } = useCart();
  const [restaurant, setRestaurant] = useState<RestaurantData | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: parsePrice(item.price),
      image: item.image,
      restaurant: restaurant?.name,
    }, 1);
    toast.success(`${item.name} added to cart`);
  };

  const getItemQuantity = (itemId: string) => cartItems[itemId]?.quantity || 0;
  
  // Scroll to category
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveCategory(categoryId);
  };
  
  // Fetch restaurant data
  useEffect(() => {
    // Simulate API call to fetch restaurant details
    setTimeout(() => {
      // Restaurant data
      const restaurantData: RestaurantData = {
        id: id || '1',
        name: 'Pizza Palace',
        coverImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        logo: 'https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        cuisine: 'Italian, Pizza, Pasta',
        rating: 4.7,
        reviewCount: 728,
        deliveryTime: '25-35 min',
        distance: '1.5 km',
        priceRange: '$$',
        discount: '50% OFF up to $10',
        address: '123 Main Street, Foodville, NY 10001'
      };
      
      // Menu items
      const menuData: MenuItem[] = [
        // Starters
        {
          id: 's1',
          name: 'Garlic Bread',
          description: 'Freshly baked bread with garlic butter and herbs',
          price: '$4.99',
          image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: true,
          category: 'Starters'
        },
        {
          id: 's2',
          name: 'Cheese Sticks',
          description: 'Mozzarella sticks with marinara sauce',
          price: '$6.99',
          image: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: false,
          category: 'Starters'
        },
        {
          id: 's3',
          name: 'Chicken Wings',
          description: 'Spicy chicken wings with blue cheese dip',
          price: '$8.99',
          image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: false,
          isPopular: true,
          category: 'Starters'
        },
        
        // Pizzas
        {
          id: 'p1',
          name: 'Margherita Pizza',
          description: 'Classic pizza with tomato sauce, mozzarella, and basil',
          price: '$12.99',
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: true,
          category: 'Pizzas'
        },
        {
          id: 'p2',
          name: 'Pepperoni Pizza',
          description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
          price: '$14.99',
          image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: false,
          isPopular: true,
          category: 'Pizzas'
        },
        {
          id: 'p3',
          name: 'Vegetarian Pizza',
          description: 'Pizza with tomato sauce, mozzarella, and assorted vegetables',
          price: '$13.99',
          image: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: false,
          category: 'Pizzas'
        },
        {
          id: 'p4',
          name: 'BBQ Chicken Pizza',
          description: 'Pizza with BBQ sauce, chicken, red onions, and cilantro',
          price: '$15.99',
          image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: false,
          isPopular: false,
          category: 'Pizzas'
        },
        
        // Pasta
        {
          id: 'pa1',
          name: 'Spaghetti Bolognese',
          description: 'Spaghetti with beef and tomato sauce',
          price: '$11.99',
          image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: false,
          isPopular: true,
          category: 'Pasta'
        },
        {
          id: 'pa2',
          name: 'Fettuccine Alfredo',
          description: 'Fettuccine with creamy Alfredo sauce',
          price: '$12.99',
          image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023882c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: false,
          category: 'Pasta'
        },
        
        // Desserts
        {
          id: 'd1',
          name: 'Tiramisu',
          description: 'Italian coffee-flavored dessert',
          price: '$6.99',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: true,
          category: 'Desserts'
        },
        {
          id: 'd2',
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with a molten center',
          price: '$7.99',
          image: 'https://images.unsplash.com/photo-1606313564200-e75d8e3ddc1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: false,
          category: 'Desserts'
        },
        
        // Drinks
        {
          id: 'dr1',
          name: 'Coke',
          description: 'Regular or Diet Coke',
          price: '$2.49',
          image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: false,
          category: 'Drinks'
        },
        {
          id: 'dr2',
          name: 'Italian Soda',
          description: 'Sparkling water with your choice of flavor',
          price: '$3.49',
          image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          isVeg: true,
          isPopular: false,
          category: 'Drinks'
        },
      ];
      
      // Get unique categories
      const uniqueCategories = Array.from(new Set(menuData.map(item => item.category)));
      
      setRestaurant(restaurantData);
      setMenuItems(menuData);
      setCategories(uniqueCategories);
      setActiveCategory(uniqueCategories[0]);
      setIsLoading(false);
    }, 1000);
  }, [id]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {isLoading ? (
          // Loading state
          <div className="container-custom py-8">
            <div className="h-60 bg-gray-200 rounded-xl shimmer mb-8"></div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <div className="h-10 bg-gray-200 rounded shimmer mb-4 w-1/3"></div>
                <div className="h-6 bg-gray-200 rounded shimmer mb-6 w-2/3"></div>
                <div className="h-8 bg-gray-200 rounded shimmer mb-6 w-1/4"></div>
                
                <div className="grid gap-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 flex">
                      <div className="w-24 h-24 bg-gray-200 rounded shimmer"></div>
                      <div className="ml-4 flex-grow">
                        <div className="h-6 bg-gray-200 rounded shimmer mb-2 w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded shimmer mb-2 w-3/4"></div>
                        <div className="h-5 bg-gray-200 rounded shimmer w-1/4 mt-auto"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-1/3">
                <div className="bg-gray-200 h-40 rounded-lg shimmer mb-6"></div>
                <div className="bg-gray-200 h-60 rounded-lg shimmer"></div>
              </div>
            </div>
          </div>
        ) : (
          // Restaurant details
          <>
            {/* Cover Image */}
            <div className="relative h-60 md:h-80 w-full">
              <img 
                src={restaurant?.coverImage} 
                alt={restaurant?.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Back button */}
              <Link to="/" className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              
              {/* Favorite button */}
              <button 
                className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors ${isFavorite ? 'bg-food-primary text-white' : 'bg-white/90 backdrop-blur-sm hover:bg-white'}`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-white' : ''}`} />
              </button>
              
              {/* Restaurant logo */}
              <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-xl overflow-hidden border-4 border-white bg-white shadow-md">
                <img 
                  src={restaurant?.logo} 
                  alt={`${restaurant?.name} logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="container-custom py-8">
              <div className="flex flex-col md:flex-row gap-6 pt-12 md:pt-0">
                {/* Menu section */}
                <div className="w-full md:w-2/3">
                  {/* Restaurant info */}
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">{restaurant?.name}</h1>
                    <p className="text-gray-600 mb-4">{restaurant?.cuisine}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center">
                        <Star fill="#10B981" className="h-4 w-4 text-green-500 mr-1" />
                        <span className="font-medium mr-1">{restaurant?.rating}</span>
                        <span className="text-gray-500">({restaurant?.reviewCount} reviews)</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{restaurant?.deliveryTime}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{restaurant?.distance}</span>
                      </div>
                    </div>
                    
                    {restaurant?.discount && (
                      <div className="flex items-center p-3 bg-food-primary/10 text-food-primary rounded-lg mb-6">
                        <Percent className="h-5 w-5 mr-2" />
                        <span className="font-medium">{restaurant?.discount}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center text-sm text-gray-600 mb-8">
                      <Info className="h-4 w-4 mr-2" />
                      <span>People are ordering a lot from this restaurant.</span>
                    </div>
                  </div>
                  
                  {/* Categories nav */}
                  <div className="mb-6 border-b border-gray-200 sticky top-[80px] bg-white z-20 py-2">
                    <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className={`whitespace-nowrap font-medium pb-2 px-1 border-b-2 transition-colors ${activeCategory === category ? 'border-food-primary text-food-primary' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                          onClick={() => scrollToCategory(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Menu items */}
                  <div className="space-y-10">
                    {categories.map((category) => (
                      <div key={category} id={`category-${category}`} className="scroll-mt-32">
                        <h2 className="text-xl font-bold mb-4">{category}</h2>
                        
                        <div className="space-y-4">
                          {menuItems
                            .filter(item => item.category === category)
                            .map((item) => (
                              <div key={item.id} className="border border-gray-200 rounded-lg p-4 flex hover:border-gray-300 transition-colors">
                                {/* Item image */}
                                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                  <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                  />
                                </div>
                                
                                {/* Item details */}
                                <div className="ml-4 flex-grow">
                                  <div className="flex items-center mb-1">
                                    <h3 className="font-medium">{item.name}</h3>
                                    {item.isVeg && (
                                      <div className="ml-2 w-4 h-4 border border-green-500 p-0.5 rounded-sm">
                                        <div className="bg-green-500 w-full h-full rounded-sm"></div>
                                      </div>
                                    )}
                                    {item.isPopular && (
                                      <span className="ml-2 text-xs text-white bg-food-accent px-2 py-0.5 rounded-full">
                                        Popular
                                      </span>
                                    )}
                                  </div>
                                  
                                  <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                                  
                                  <div className="flex items-center justify-between mt-auto">
                                    <span className="font-bold">{item.price}</span>
                                    
                                    {/* Add to cart */}
                                    {getItemQuantity(item.id) === 0 ? (
                                      <button 
                                        className="text-food-primary font-medium border border-food-primary rounded-lg px-4 py-1 hover:bg-food-primary hover:text-white transition-colors"
                                        onClick={() => addToCart(item)}
                                      >
                                        Add
                                      </button>
                                    ) : (
                                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                        <button 
                                          className="bg-gray-100 px-2 py-1 hover:bg-gray-200 transition-colors"
                                          onClick={() => updateQty(item.id, -1)}
                                        >
                                          <Minus className="h-4 w-4" />
                                        </button>
                                        <span className="px-3 py-1 font-medium">{getItemQuantity(item.id)}</span>
                                        <button 
                                          className="bg-gray-100 px-2 py-1 hover:bg-gray-200 transition-colors"
                                          onClick={() => addToCart(item)}
                                        >
                                          <Plus className="h-4 w-4" />
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="w-full md:w-1/3">
                  {/* Restaurant info card */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
                    <h3 className="font-bold mb-4">Restaurant Info</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Address</h4>
                        <p className="text-sm">{restaurant?.address}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Delivery Hours</h4>
                        <p className="text-sm">10:00 AM - 10:00 PM</p>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-100">
                        <Link to="#" className="text-food-primary text-sm font-medium">
                          View more details
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cart */}
                  {totalQuantity > 0 && (
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold">Your Cart</h3>
                        <span className="bg-food-primary text-white text-xs px-2 py-1 rounded-full">
                          {totalQuantity} items
                        </span>
                      </div>

                      <div className="space-y-3 mb-4">
                        {Object.values(cartItems).map((ci) => (
                          <div key={ci.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                            <div className="flex items-center">
                              <span className="text-sm font-medium">{ci.quantity}x</span>
                              <span className="ml-2 text-sm">{ci.name}</span>
                            </div>
                            <span className="text-sm font-medium">₹{(ci.price * ci.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between font-semibold mb-4">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                      </div>

                      <button
                        onClick={() => navigate('/checkout')}
                        className="w-full bg-food-primary text-white font-medium py-3 rounded-lg flex items-center justify-center hover:bg-food-accent transition-colors"
                      >
                        <ShoppingBag className="h-5 w-5 mr-2" />
                        Checkout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
