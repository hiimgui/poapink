import react from "react";
import Image from "next/image";
import ProductCard from "../components/productCard";

//TODO - pensar no card, section layout

const productSection = ({products}) => {
  return (
    <>
      <section className="min-h-screen grid grid-cols-2 md:grid-cols-3 items-center bg-black">
        
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </section>
    </>
  );
};

export default productSection;
