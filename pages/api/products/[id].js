import { GetStaticPaths } from "next";
//TODO: FAZER O FETCH PARA RENDERIZAR OS PRODUTOS
export const getStaticPaths = async () => {
  const res = await fetch("endpoint");
  const data = await res.json();
  const paths = data.map((produto) => {
    return {
      params: { id: produto.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
const Details = () => {
  return (
    <>
      <h1>Nome produto</h1>
      <p>Subtitulo produto</p>
      <p>Descricao</p>
    </>
  );
};

export default Details;
