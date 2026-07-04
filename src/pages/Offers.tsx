import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tag, Percent, Gift, Clock } from 'lucide-react';

const offers = [
  { id: 1, title: '50% OFF up to ₹100', code: 'WELCOME50', desc: 'On your first order above ₹199', icon: Percent, color: 'from-food-primary to-food-secondary' },
  { id: 2, title: 'Free Ice Cream', code: 'ICEFREE', desc: 'On orders between ₹200 - ₹499', icon: Gift, color: 'from-pink-500 to-rose-500' },
  { id: 3, title: '5% OFF', code: 'SAVE5', desc: 'On orders between ₹500 - ₹999', icon: Tag, color: 'from-amber-500 to-orange-500' },
  { id: 4, title: '10% OFF', code: 'SAVE10', desc: 'On orders above ₹1000', icon: Percent, color: 'from-emerald-500 to-teal-500' },
  { id: 5, title: 'Free Delivery', code: 'FREEDEL', desc: 'On all orders above ₹300', icon: Clock, color: 'from-indigo-500 to-purple-500' },
  { id: 6, title: 'Flat ₹150 OFF', code: 'FLAT150', desc: 'On weekend orders above ₹750', icon: Tag, color: 'from-cyan-500 to-blue-500' },
];

const Offers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Offers & Promotions</h1>
            <p className="text-gray-600">Save more on every order with these exclusive deals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.id} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className={`bg-gradient-to-r ${o.color} p-6 text-white`}>
                    <Icon className="h-8 w-8 mb-3" />
                    <h3 className="text-2xl font-bold">{o.title}</h3>
                  </div>
                  <div className="p-5 bg-white">
                    <p className="text-gray-600 mb-4 text-sm">{o.desc}</p>
                    <div className="flex items-center justify-between border-t border-dashed border-gray-200 pt-4">
                      <div>
                        <p className="text-xs text-gray-500">Use code</p>
                        <p className="font-bold text-food-primary tracking-wide">{o.code}</p>
                      </div>
                      <button
                        onClick={() => navigator.clipboard.writeText(o.code)}
                        className="text-sm font-medium px-4 py-2 rounded-lg bg-food-primary/10 text-food-primary hover:bg-food-primary hover:text-white transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
