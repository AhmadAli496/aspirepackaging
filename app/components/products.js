import React from 'react';
import {products} from "../data"
import Image from "next/image"
import {Product} from "@/app/components/index";
const Products = () => {
    return (
        <div className={''}>
            <div className="container">
                <div className="info py-5 mb-8">
                    <h2 className="h2 text-center font-bold">Our Products</h2>
                    <div className="mt-1 h-1 w-20 bg-blue-600 mx-auto"></div>
                    <p className={'text-center mt-12'}>Discover our range of premium packaging solutions designed to meet your specific needs.
                    </p>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-12 pb-12">
                    {products.map((product) => (
                        <Product product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;