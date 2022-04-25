import Head from "next/head";
import Image from "next/image";
import productSection from "../components/productSection";
import ProductSection from "../components/productSection";
export default function Home() {
  const products = "produtos";
  return (
    <div>
      <Head>
        <title>Poá Pink</title>
        <meta name="poapink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="p-12 font-bold z-10 drop-shadow-[0_5px_3px_rbga(0,0,0,0.4)] text-center">
          <h1 className="mb-6 text-4xl xl:text-5xl">Poá Pink</h1>
          <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
            Real hand made
          </h2>
        </div>
      </main>
      <ProductSection products={products} />
    </div>
  );
}
