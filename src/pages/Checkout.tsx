import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, updateQty, removeItem, subtotal, clear, totalQuantity } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('cod');
  const [placing, setPlacing] = useState(false);

  const cartList = Object.values(items);

  // Discount rules (bill amount in ₹)
  let discountPct = 0;
  let freeIceCream = false;
  if (subtotal >= 1000) discountPct = 10;
  else if (subtotal >= 500) discountPct = 5;
  else if (subtotal >= 200) freeIceCream = true;

  const discount = +(subtotal * (discountPct / 100)).toFixed(2);
  const deliveryFee = subtotal >= 300 || subtotal === 0 ? 0 : 40;
  const tax = +((subtotal - discount) * 0.05).toFixed(2);
  const total = +(subtotal - discount + deliveryFee + tax).toFixed(2);

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      toast.error('Please enter your delivery address');
      return;
    }
    setPlacing(true);
    setTimeout(() => {
      const order = {
        orderId: 'FE-' + Math.floor(100000 + Math.random() * 900000),
        items: cartList,
        subtotal,
        discount,
        discountPct,
        freeIceCream,
        deliveryFee,
        tax,
        total,
        address,
        payment,
      };
      clear();
      navigate('/order-confirmation', { state: order });
    }, 600);
  };

  if (cartList.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-custom py-16 text-center">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">Browse restaurants and add delicious food to get started.</p>
            <Link to="/" className="btn-primary inline-block">Browse Restaurants</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-food-primary mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" /> Continue shopping
          </Link>
          <h1 className="text-3xl font-bold mb-6">Checkout ({totalQuantity} items)</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: items + delivery */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="font-bold mb-4">Your Items</h2>
                <div className="divide-y divide-gray-100">
                  {cartList.map((item) => (
                    <div key={item.id} className="py-4 flex items-center gap-4">
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                      )}
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">₹{item.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button onClick={() => updateQty(item.id, -1)} className="px-2 py-1 hover:bg-gray-100">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 font-medium">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="px-2 py-1 hover:bg-gray-100">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="w-20 text-right font-semibold">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="font-bold mb-4">Delivery Address</h2>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full delivery address..."
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-food-primary min-h-[90px]"
                />
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="font-bold mb-4">Payment Method</h2>
                <div className="space-y-2">
                  {[
                    { id: 'cod', label: 'Cash on Delivery' },
                    { id: 'upi', label: 'UPI' },
                    { id: 'card', label: 'Credit / Debit Card' },
                  ].map((p) => (
                    <label key={p.id} className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${payment === p.id ? 'border-food-primary bg-food-primary/5' : 'border-gray-200'}`}>
                      <input
                        type="radio"
                        name="payment"
                        checked={payment === p.id}
                        onChange={() => setPayment(p.id)}
                        className="accent-food-primary"
                      />
                      <span className="text-sm font-medium">{p.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: bill summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
                <h2 className="font-bold mb-4">Bill Details</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Item Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  {discountPct > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({discountPct}%)</span>
                      <span>- ₹{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Taxes (5%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                {freeIceCream && (
                  <div className="mt-4 p-3 bg-pink-50 border border-pink-200 text-pink-700 text-xs rounded-lg">
                    🎉 You've unlocked a FREE Family Pack Ice Cream (worth ₹100)!
                  </div>
                )}
                {discountPct === 5 && (
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-lg">
                    Add ₹{(1000 - subtotal).toFixed(0)} more to unlock 10% off!
                  </div>
                )}

                <button
                  onClick={handlePlaceOrder}
                  disabled={placing}
                  className="w-full mt-6 bg-food-primary text-white font-medium py-3 rounded-lg hover:bg-food-accent transition-colors disabled:opacity-50"
                >
                  {placing ? 'Placing Order...' : `Place Order · ₹${total.toFixed(2)}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
