
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, ChevronLeft, MessageCircle, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { CartItem } from '../context/CartContext';

interface OrderState {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  discountPct: number;
  freeIceCream: boolean;
  deliveryFee: number;
  tax: number;
  total: number;
  address: string;
  payment: string;
}

const paymentLabel: Record<string, string> = {
  cod: 'Cash on Delivery',
  upi: 'UPI',
  card: 'Credit / Debit Card',
};

const OrderConfirmation = () => {
  const location = useLocation();
  const order = location.state as OrderState | null;

  if (!order) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-8 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <Link to="/" className="inline-flex items-center text-food-dark hover:text-food-primary mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>

            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-food-dark mb-2">Order Confirmed!</h1>
              <p className="text-gray-600">Your order #{order.orderId} has been placed successfully</p>
            </div>

            <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-green-800">
                A confirmation SMS / WhatsApp message has been sent with your order details and estimated delivery time.
              </p>
            </div>

            {order.freeIceCream && (
              <div className="mb-6 p-4 rounded-lg bg-pink-50 border border-pink-200 flex items-start gap-3">
                <Gift className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-pink-800">
                  🎉 Complimentary Family Pack Ice Cream (worth ₹100) is on the way with your order!
                </p>
              </div>
            )}

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Estimated delivery: 30-45 min</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                      <span>{order.address}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 bg-gray-50 px-4 py-2 rounded-md">
                    <p className="text-sm text-gray-600">Payment Method</p>
                    <p className="font-medium">{paymentLabel[order.payment] ?? order.payment}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">Qty</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {order.items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell className="text-right">₹{(item.quantity * item.price).toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹{order.subtotal.toFixed(2)}</span>
                    </div>
                    {order.discountPct > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount ({order.discountPct}%)</span>
                        <span>- ₹{order.discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>{order.deliveryFee === 0 ? 'FREE' : `₹${order.deliveryFee}`}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Taxes</span>
                      <span>₹{order.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>₹{order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/">Browse More Restaurants</Link>
              </Button>
              <Button className="flex-1 bg-food-primary hover:bg-food-primary/90" asChild>
                <Link to="/">Track Order</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
