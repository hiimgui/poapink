import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ products }) => {
  // console.log(products[0].imagem);
  return (
    <>
      {products.map((product) => (
        <>
          <div>
            <Link href={"/product/"+ product.id}>
            <a>Link</a>
            </Link>
            <h1>{product.nome}</h1>
            <p key={product.id}>{product.imagem}</p>
          </div>
        </>
      ))}
    </>
  );
};
export default ProductCard;
