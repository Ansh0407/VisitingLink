"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer({ open, setOpen }: any) {

  const { cart, increase, decrease, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (

    <div
      className={`fixed top-0 right-0 h-screen w-[380px] bg-white text-black shadow-2xl z-[100]
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >

      {/* HEADER */}

      <div className="flex items-center justify-between p-6 border-b">

        <h2 className="text-lg font-semibold">
          Your Cart
        </h2>

        <button
          onClick={() => setOpen(false)}
          className="text-xl"
        >
          ✕
        </button>

      </div>

      {/* CART ITEMS */}

      <div className="flex-1 overflow-y-auto p-6 space-y-6 h-[calc(100vh-220px)]">

        {cart.length === 0 ? (

          <div className="text-center text-gray-500 mt-20">
            Your cart is empty
          </div>

        ) : (

          cart.map(item => (

            <div key={item.id} className="flex gap-4">

              <img
                src={item.image}
                className="w-16 h-16 rounded-md object-cover"
              />

              <div className="flex-1">

                <p className="font-medium text-sm">
                  {item.title}
                </p>

                {/* QUANTITY */}

                <div className="flex items-center gap-2 mt-2">

                  <button
                    onClick={() => decrease(item.id)}
                    className="w-7 h-7 border rounded"
                  >
                    -
                  </button>

                  <span className="text-sm">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increase(item.id)}
                    className="w-7 h-7 border rounded"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* PRICE */}

              <div className="flex flex-col items-end gap-2">

                <span className="text-sm font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>

              </div>

            </div>

          ))

        )}

      </div>

      {/* FOOTER */}

      <div className="border-t p-6">

        <div className="flex justify-between mb-4">

          <span className="font-medium">
            Subtotal
          </span>

          <span className="font-semibold">
            ₹{subtotal.toFixed(2)}
          </span>

        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-3">
          Proceed to Checkout
        </button>

        <button
          onClick={() => setOpen(false)}
          className="w-full bg-gray-200 py-3 rounded-lg"
        >
          Continue Shopping
        </button>

      </div>

    </div>

  );
}