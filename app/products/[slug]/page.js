import Image from "next/image";
import { productsDetails } from "@/app/data";
import ProductDetails from "@/app/components/ProductDetails";
import { Contact } from "@/app/components";
import Head from "next/head";

export async function generateStaticParams() {
  return productsDetails.map(product => ({
    slug: product.slug,
  }));
}

function ProductPage({ params }) {
  const { slug } = params;
  const product = productsDetails.find((p) => p.slug === slug);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <>
      <Head>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
      </Head>

      <ProductDetails product={product} />
      <Contact />
    </>
  );
}

export default ProductPage