import Link from "next/link";
import NextLink from "next/link";
import Image from "next/image";

const ProductCard = ({ products }) => {
  // console.log(products[0].imagem);
  return (
    <>
      {products.map((product) => (
        <>
          <div>
            <NextLink
              as={`/products/${product.id}`}
              href={`/products/[id]`}
              passHref
              key={`/products/${product.id}`}
            >
              <Link>
                <a>Link</a>
              </Link>
            </NextLink>
            <h1>{product.nome}</h1>
            <p key={product.id}>{product.imagem}</p>
          </div>
        </>
      ))}
    </>
  );
};
export default ProductCard;
