import Head from "next/head";
import { productsDetails } from "@/app/data";

const ProductPage = ({params}) => {
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

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={product.image}
            alt={product.title}
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

            {product.brochurePDF && (
              <a
                href={product.brochurePDF}
                target="_blank"
                className="inline-block mt-6 text-blue-600 underline"
              >
                Download Brochure
              </a>
            )}

            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              {product.ctaText || "Contact Us"}
            </button>
          </div>
        </div>

        {product.galleryImages && product.galleryImages.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.galleryImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="rounded-lg object-cover shadow-sm"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductPage