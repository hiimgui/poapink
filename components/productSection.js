import react from "react";
import Image from "next/image";
import ProductCard from "./productCard";
import produtos from "../data/produtos";

//TODO - passar apenas o next Link e o parametro é o ID

const productSection = () => {
  return (
    <>
      <section className="min-h-screen grid grid-cols-2   bg-yellow">
        {produtos.map((produto) => {
          return (
            <div key={produto.id}>
              <ProductCard {...produto} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default productSection;
