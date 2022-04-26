import Head from "next/head";
import Image from "next/image";
import ProductSection from "../components/productSection";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Poá Pink</title>
        <meta name="poapink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="p-12 font-bold z-10 bg-pink drop-shadow-[0_5px_3px_rbga(0,0,0,0.4)] text-center">
          <h1 className="mb-6 text-4xl xl:text-5xl">Poá Pink</h1>
          <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
            Real, handmade
          </h2>
        </div>
      </main>
      <ProductSection />
    </div>
  );
}
