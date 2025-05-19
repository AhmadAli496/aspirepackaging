// import React from 'react';
// import Image from "next/image";
//
// const Product = ({product}) => {
//     return (
//         <div key={product.id}
//              className="w-[23rem] shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-400/30 bg-gray-50/10">
//             <div className={`w-full h-[12rem]`}>
//                 <Image className={`w-full object-cover h-full  rounded-tr-xl rounded-t-xl`} src={product.image}
//                        alt={product.name} width={300} height={200}/>
//             </div>
//             <div className={`px-5`}>
//                 <h4 className="h5 py-5 font-semibold">{product.title}</h4>
//                 <p className={'pb-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A excepturi nihil
//                     saepe?</p>
//                 <button className="btn py-4 text-blue-600 font-bold">Learn More</button>
//             </div>
//         </div>
//     );
// }
//
// export default Product;


// components/ProductCard.jsx

import Image from "next/image";

export default function Product({ product}) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm group cursor-pointer">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}
