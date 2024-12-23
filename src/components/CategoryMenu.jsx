import React, { useState, useEffect } from "react";
import "./CategoryMenu.css";
import poojaData from "../data/poojaData";
import { setCategory } from "../redux/slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(poojaData.map((pooja) => pooja.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.category);

  const logos = [
    "logo.png",
    "Camphor.png",
    "Wax_Melt.png",
    "Smudge_Candles.png",
    "Sambrani_Cup.png",
    "oil.png",
    "Air_Freshener.png",
    "agarbati.png",
    "Samagri.png",
    "logo.png",
    "Camphor.png",
    "Ghee_Diya.png",
    "Fragrance_Sachet.png",
    "Essential_Oil.png",
    "Dhoop_Sticks.png",
    "Ceramic_Oil_Burners.png",
    "Camphor.png",
    "Backfl.png",
    "Incense_Holde.png",
  ];

  return (
    <div className="mx-6">
      <div className="category-menu my-5">
        <div className="logo-carousel">
          {/* Repeat the logos twice to create a seamless scroll */}
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={`/src/assets/${logo}`}
              alt="Logo"
              className="logo"
            />
          ))}
        </div>
      </div>

      <div className="">
        <h3 className="text-xl font-semibold">Find the best PoojaSamgri</h3>
        <div>
          <div className="my-5 flex gap-2 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ">
          <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
            {categories.map((category, index) => {
              return (
                <button
                onClick={() => dispatch(setCategory(category))}
                key={index}
                className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                  selectedCategory === category && "bg-green-500 text-white"
                } `}
              >
                {category}
              </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
