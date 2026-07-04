import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react';

const faqs = [
  { q: 'How do I place an order?', a: 'Browse restaurants, add items to your cart, and proceed to checkout. You will receive an order confirmation via SMS/WhatsApp.' },
  { q: 'What are the delivery charges?', a: 'Delivery is free for orders above ₹300. A small delivery fee of ₹40 applies otherwise.' },
  { q: 'How long does delivery take?', a: 'Most orders arrive within 25-45 minutes depending on your location and restaurant.' },
  { q: 'Can I cancel my order?', a: 'You can cancel within 2 minutes of placing the order from the order confirmation page.' },
  { q: 'What payment methods are accepted?', a: 'We accept UPI, Credit/Debit cards, Net Banking, and Cash on Delivery.' },
  { q: 'How do discounts work?', a: 'Orders above ₹1000 get 10% off, orders ₹500-999 get 5% off, and orders ₹200-499 receive a complimentary family pack ice cream.' },
];

const Help = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">How can we help?</h1>
            <p className="text-gray-600">We're here to help you 24/7</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-food-primary/5 text-center">
              <Phone className="h-8 w-8 mx-auto mb-3 text-food-primary" />
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-sm text-gray-600">+91 1800-123-4567</p>
            </div>
            <div className="p-6 rounded-2xl bg-food-secondary/5 text-center">
              <Mail className="h-8 w-8 mx-auto mb-3 text-food-secondary" />
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-sm text-gray-600">support@foodexpress.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-food-accent/10 text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-3 text-food-accent" />
              <h3 className="font-semibold mb-1">Live Chat</h3>
              <p className="text-sm text-gray-600">Available 24/7</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && (
                  <div className="px-5 pb-4 text-gray-600 text-sm">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
