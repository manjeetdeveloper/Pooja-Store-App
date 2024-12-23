import React from "react";
import PoojaCards from "./PoojaCards";
import poojaData from "../data/poojaData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Poojaitems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(` Added ${name}`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {poojaData.filter((pooja) => {
          if (category === "All") {
            return pooja.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === pooja.category &&
              pooja.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        })
          .map((pooja) => (
            <PoojaCards
              key={pooja.id}
              id={pooja.id}
              name={pooja.name}
              price={pooja.price}
              desc={pooja.desc}
              category={pooja.category}
              rating={pooja.rating}
              img={pooja.img}
              handleToast={handleToast}
            />
          ))}
      </div>
    </>
  );
};

export default Poojaitems;
