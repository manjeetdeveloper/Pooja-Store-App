import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[25vw] p-5 h-full bg-white shadow-lg ${
          activeCart ? "translate-x-0 " : "translate-x-full"
        } transition-all duration-500  z-50`}
      >
        {/* Header */}
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-300 cursor-pointer"
          />
        </div>

        {/* Item Card */}
        <div className="overflow-y-auto max-h-[75%] pr-2">
          {cartItems.length > 0 ? (
            cartItems.map((pooja) => {
              return (
                <ItemCard
                  key={pooja.id}
                  id={pooja.id}
                  name={pooja.name}
                  price={pooja.price}
                  img={pooja.img}
                  qty={pooja.qty}
                />
              );
            })
          ) : (
            <h2 className="text-center text-xl font-bold text-red-600">
              Your cart is empty
            </h2>
          )}

          {/* Add more <ItemCard /> components here if necessary */}
        </div>

        {/* Footer */}
        <div className="absolute bottom-5 w-full">
          <h3 className="font-semibold text-gray-800 mb-2">
            Items: {totalQty}{" "}
          </h3>
          <h3 className="font-semibold text-gray-800 mb-2">
            Total Amount: ₹ {totalPrice}
          </h3>
          <hr className="mb-3" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full lg:w-[90%]"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
