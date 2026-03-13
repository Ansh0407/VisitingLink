"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
// import CartDrawer from "@/components/ui/CartDrawer";

import normalCard from "@/assets/normalcard.png";
import premiumCard from "@/assets/premiumcard.png";
import fullKit from "@/assets/full_kit.png";

const products = [
  {
    id: 1,
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    title: "Classic Visiting Card",
    description: "Minimal matte finish visiting cards for a professional impression.",
    price: 499.99,
    image: normalCard.src,
  },
  {
    id: 2,
    badge: "NFC Ready",
    badgeColor: "bg-blue-500",
    title: "VisitingLink NFC Card",
    description: "Tap your card to instantly share your digital profile.",
    price: 999.99,
    image: premiumCard.src,
  },
  {
    id: 3,
    badge: "Premium",
    badgeColor: "bg-indigo-600",
    title: "Metal NFC Visiting Card",
    description: "Premium metal NFC card with engraved branding.",
    price: 1119.99,
    image: premiumCard.src,
  },
  {
    id: 4,
    badge: "Best Value",
    badgeColor: "bg-green-500",
    title: "VisitingLink Starter Kit",
    description: "NFC card + keychain tag + premium VisitingLink box.",
    price: 4999.99  ,
    image: fullKit.src,
  },
];

export default function ShopSection() {

  const { addToCart } = useCart();
  // const [cartOpen, setCartOpen] = useState(false);

  return (

    <section  id="shop" className="py-28 bg-[#05060B] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            VisitingLink Shop
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Upgrade your networking with smart NFC visiting cards and premium sharing kits.
          </p>

        </div>

        <div className="grid gap-10 sm:grid-cols-4 lg:grid-cols-3">

          {products.map(product => (

            <div
              key={product.id}
              className="bg-[#0f1118] rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-500 transition"
            >

              <div className="relative">

                <img
                  src={product.image}
                  className="w-full h-48 object-cover"
                />

                <span
                  className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${product.badgeColor}`}
                >
                  {product.badge}
                </span>

              </div>

              <div className="p-6 flex flex-col h-full gap-4">

                <h3 className="text-lg font-semibold">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {product.description}
                </p>
 
                <div className="flex items-center justify-between mt-2">

                  <span className="text-xl font-bold text-indigo-400">
                    ₹{product.price}
                  </span>

                  <button
                    onClick={() => {

                      addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image
                      })

                      // setCartOpen(true)

                    }}
                    className="flex items-center gap- bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm transition"
                  >

                    <ShoppingCart size={16} />

                    Add to Cart

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* CART DRAWER */}

     {/* {cartOpen && (
  // <CartDrawer open={cartOpen} setOpen={setCartOpen} />
)} */}

    </section>

  );
}