import react from "react";
import Image from "next/image";
import ProductCard from "../pages/api/products/productCard";

//TODO - pensar no card, section layout

const productSection = () => {
  const products = [
    {
      id: 1,
      nome: "Produto 1",
      imagem: "produtoimagem",
    },
    {
      id: 2,
      nome: "Produto 2",
      imagem: "produtoimagem2",
    },
    {
        id: 3,
        nome: "Produto 3",
        imagem: "produtoimagem3",
      },
      {
        id: 4,
        nome: "Produto 4",
        imagem: "produtoimagem4",
      },
      {
        id: 5,
        nome: "Produto 5",
        imagem: "produtoimagem5",
      },
      {
        id: 6,
        nome: "Produto 6",
        imagem: "produtoimagem6",
      },
  ];
  return (
    <>
      <section className="min-h-screen grid grid-cols-2   bg-yellow">
        <ProductCard  products={products} />
      </section>
    </>
  );
};

export default productSection;
