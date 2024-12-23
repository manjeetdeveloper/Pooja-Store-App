import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 shadow-md rounded-lg p-2 mb-3 bg-white">
      
      {/* Delete Icon  */}
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: '🙋‍♂️',
          });
        }}
        className="absolute right-8 mb-10 text-gray-600 cursor-pointer"
      />
      <img
        src={img}
        alt="card img"
        className="w-[50px] h-[50px] object-cover rounded-md"
      />

      {/* Details Section */}
      <div className="flex-1 leading-5">
        <h2 className="font-bold text-gray-800 text-sm">{name}</h2>
        <div className="flex justify-between items-center mt-2">
          {/* Price */}
          <span className="text-green-500 font-bold text-sm">₹{price}</span>

          {/* Plus and Minus Buttons */}
          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-base sm:text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-base sm:text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
