const getStaticProps = async () => {
  const res = await fetch("endpoint");
  const data = await res.json();
  return {
    props: { produto: data },
  };
};

export default getStaticProps;
