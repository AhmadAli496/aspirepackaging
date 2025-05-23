import Head from "next/head";
import Image from "next/image";
import { productsDetails } from "@/app/data";
import { Contact } from "@/app/components";

const ProductPage = ({ params }) => {
  //   const router = useRouter();
  const { slug } = params;
  const product = productsDetails.find((p) => p.slug === slug);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <>
      <Head>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
      </Head>

      <div className="max-w-6xl mt-32 mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            priority
            className="rounded-xl shadow-md object-cover w-full"
          />

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="mb-4 text-gray-700">{product.description}</p>

            <h2 className="text-xl font-semibold mt-6">Features</h2>
            <ul className="list-disc list-inside text-gray-600">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6">Applications</h2>
            <ul className="list-disc list-inside text-gray-600">
              {product.applications.map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6">Specifications</h2>
            <ul className="text-gray-600">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/_/g, " ")}:</strong> {value}
                </li>
              ))}
            </ul>

              <a
                href="https://wa.me/923072262269?text=%F0%9F%91%8B%20Hi,%20how%20can%20I%20get%20help?%20URL:%20https://aspirepackaging.pk"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white cursor-pointer"
              >
            <button className="mt-6 cursor-pointer bg-[#015379] text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition">
              Request a Quote
            </button>
              </a>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ProductPage;
