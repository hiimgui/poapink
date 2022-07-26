import Link from "next/link";
import NextLink from "next/link";
import Image from "next/image";

//TODO: classes tailwind
const ProductCard = (props) => {
  return (
    <Link href={`products/${props.id}`} passHref>
      <div>
        <img src={props.imagem} alt={props.nome} />
        <span>{props.nome}</span>
      </div>
    </Link>
  );
};
export default ProductCard;
