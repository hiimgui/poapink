import Link from "next/link";
import Image from "next/image";

const ProductCard = ({product}) => {
  return (
    // <>
    //   <Link href="/product/[id]" as={`/product/${product.id}`}>
    //     <a className="flex flex-col items-center justify-center">
    //       <Image
    //         src={product.image}
    //         alt={product.name}
    //         width={300}
    //         height={300}
    //         className="rounded-lg"
    //       />
    //       <h1 className="text-center">{product.name}</h1>
    //       <h1 className="text-center">{product.price}</h1>
    //     </a>
    //   </Link>
    // </>
    <>
    <p className="text-white m-10 text-center">Produtos aqui</p>
    </>
  );
}

export default ProductCard