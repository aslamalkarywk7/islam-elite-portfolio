import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, Printer, CheckCircle, ShoppingBag, ShieldCheck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 12.00 : 0.00;
  const tax = Math.round(subtotal * 0.0825 * 100) / 100;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    const num = 'AA-' + Math.floor(100000 + Math.random() * 900000);
    setReceiptNumber(num);
    setShowReceipt(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex justify-end">
      <div className="bg-[#E8D9C5] border-l-4 border-[#1A1A1A] max-w-md w-full h-full shadow-retro-lg flex flex-col justify-between film-grain relative">
        
        {/* Cart Header */}
        <div className="bg-[#1A1A1A] text-[#E8D9C5] p-4 flex justify-between items-center border-b-2 border-[#D4A017]">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-[#D4A017]" />
            <h3 className="slab text-lg uppercase tracking-wider text-[#E8D9C5]">
              YOUR VAULT CART
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#E8D9C5] hover:text-[#BF5B30] font-mono-retro font-bold text-xs bg-[#2A2A2A] px-2 py-1 border border-[#E8D9C5] cursor-pointer"
          >
            [X CLOSE]
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 overflow-y-auto flex-1 font-mono-retro space-y-4">
          
          {showReceipt ? (
            /* Vintage Dot-Matrix Receipt */
            <div className="bg-[#FFFDF7] p-6 border-2 border-dashed border-[#1A1A1A] space-y-4 font-typewriter text-xs shadow-inner">
              <div className="text-center space-y-1 border-b-2 border-dashed border-[#1A1A1A] pb-4">
                <p className="font-bold text-sm text-[#1A1A1A]">ANALOG ANTIQUES SHOP</p>
                <p className="text-[10px] text-[#6D5E50]">1968 Haight St, San Francisco, CA</p>
                <p className="text-[10px] text-[#6D5E50]">RECEIPT #: {receiptNumber}</p>
                <p className="text-[10px] text-[#6D5E50]">DATE: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="space-y-2 py-2">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-start text-[11px]">
                    <div>
                      <p className="font-bold text-[#1A1A1A]">{item.product.title}</p>
                      <p className="text-[9px] text-[#6D5E50]">QTY: {item.quantity} x ${item.product.price}</p>
                    </div>
                    <span className="font-bold text-[#BF5B30]">${item.quantity * item.product.price}.00</span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-dashed border-[#1A1A1A] pt-3 space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span>SUBTOTAL:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>CA TAX (8.25%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>FLAT SHIPPING:</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#1A1A1A] border-t border-[#1A1A1A] pt-2">
                  <span>TOTAL PAID:</span>
                  <span className="text-[#BF5B30]">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-[#D8C7B0] p-2 text-[10px] text-center border border-[#1A1A1A] text-[#5F6F52] font-bold">
                <CheckCircle className="w-4 h-4 mx-auto mb-1 text-[#5F6F52]" />
                ORDER CONFIRMED & CALIBRATED
              </div>

              <button
                onClick={() => {
                  onClearCart();
                  setShowReceipt(false);
                  onClose();
                }}
                className="w-full bg-[#1A1A1A] text-[#E8D9C5] font-sans-retro text-xs font-bold py-2 border-2 border-[#1A1A1A] shadow-retro hover:bg-[#BF5B30] cursor-pointer"
              >
                DONE / RETURN TO SHOP
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-12 space-y-3 font-sans-retro">
              <ShoppingBag className="w-12 h-12 text-[#BF5B30] mx-auto opacity-60" />
              <p className="font-bold text-[#1A1A1A]">Your vault cart is empty.</p>
              <p className="text-xs text-[#6D5E50]">Browse our catalog and add vintage audio pieces!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-[#D8C7B0] border-2 border-[#1A1A1A] p-3 shadow-[2px_2px_0px_0px_#1A1A1A] flex gap-3 items-center"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover border border-[#1A1A1A] bg-[#1A1A1A]"
                  />

                  <div className="flex-1 space-y-1">
                    <h4 className="slab text-xs text-[#1A1A1A] leading-tight line-clamp-1">
                      {item.product.title}
                    </h4>
                    <p className="text-[10px] text-[#BF5B30] font-bold">
                      ${item.product.price}.00 USD
                    </p>

                    <div className="flex items-center space-x-2 pt-1">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="w-5 h-5 bg-[#1A1A1A] text-[#E8D9C5] flex items-center justify-center text-xs font-bold cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-1 text-[#1A1A1A]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="w-5 h-5 bg-[#1A1A1A] text-[#E8D9C5] flex items-center justify-center text-xs font-bold cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-[#BF5B30] hover:text-[#1A1A1A] p-1 cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer Checkout Summary */}
        {!showReceipt && cartItems.length > 0 && (
          <div className="p-4 bg-[#D8C7B0] border-t-2 border-[#1A1A1A] space-y-3 font-mono-retro">
            <div className="space-y-1 text-xs text-[#1A1A1A]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-[#6D5E50]">
                <span>Flat Worldwide Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#1A1A1A] border-t border-[#1A1A1A] pt-2">
                <span>Total:</span>
                <span className="text-[#BF5B30]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="retro-btn w-full bg-[#BF5B30] hover:bg-[#1A1A1A] text-[#E8D9C5] slab text-base py-3 border-2 border-[#1A1A1A] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              CHECKOUT & PRINT RECEIPT
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
