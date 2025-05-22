import Image from "next/image";
import Link from "next/link";
export default function Product({ product }) {
  return (
    <div
      key={product.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm group cursor-pointer"
    >
      <div className="relative h-64 w-[320px] sm:w-[300px]">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 w-full transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <Link href={`/products/${product.slug}`}>
          <button className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
            View
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
