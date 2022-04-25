import react from "react";
import Image from "next/image";

//TODO - pensar no card, section layout

const productSection = ({products}) => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-white text-center">{products}</h1>
        <h1 className="text-white text-center">{products}</h1>
        <h1 className="text-white text-center">{products}</h1>
      </section>
    </>
  );
};

export default productSection;
