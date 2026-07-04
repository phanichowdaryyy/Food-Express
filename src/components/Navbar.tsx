
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { User as SupaUser } from '@supabase/supabase-js';
import { useCart } from '@/context/CartContext';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<SupaUser | null>(null);
  const navigate = useNavigate();
  const { totalQuantity } = useCart();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-food-primary">
              Food<span className="text-food-secondary">Express</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-food-primary transition-colors">
              Home
            </Link>
            <Link to="/restaurants" className="text-sm font-medium hover:text-food-primary transition-colors">
              Restaurants
            </Link>
            <Link to="/offers" className="text-sm font-medium hover:text-food-primary transition-colors">
              Offers
            </Link>
            <Link to="/help" className="text-sm font-medium hover:text-food-primary transition-colors">
              Help
            </Link>
          </nav>

          {/* Search Icon */}
          <div className="hidden md:flex items-center ml-auto">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* User and Cart */}
          <div className="hidden md:flex items-center space-x-4 ml-4">
            {user ? (
              <>
                <span className="text-sm font-medium hidden lg:inline">
                  {user.email}
                </span>
                <button onClick={handleSignOut} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Sign out">
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <Link to="/auth" className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Account">
                <User className="h-5 w-5" />
              </Link>
            )}

            <Link to="/checkout" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-food-primary rounded-full">
                {totalQuantity}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container-custom mx-auto space-y-3">
            <Link to="/" className="block py-2 text-sm font-medium hover:text-food-primary transition-colors">Home</Link>
            <Link to="/restaurants" className="block py-2 text-sm font-medium hover:text-food-primary transition-colors">Restaurants</Link>
            <Link to="/offers" className="block py-2 text-sm font-medium hover:text-food-primary transition-colors">Offers</Link>
            <Link to="/help" className="block py-2 text-sm font-medium hover:text-food-primary transition-colors">Help</Link>

            <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
              <Link to="/auth" className="flex items-center space-x-2 py-2 text-sm font-medium hover:text-food-primary transition-colors">
                <User className="h-5 w-5" />
                <span>Account</span>
              </Link>
              <Link to="/checkout" className="flex items-center space-x-2 py-2 text-sm font-medium hover:text-food-primary transition-colors">
                <ShoppingBag className="h-5 w-5" />
                <span>Cart ({totalQuantity})</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
