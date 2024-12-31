import React from 'react';
import products from "../../Assets/data/products";
import ProductCard from './ProductCard';

const ProductList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] text-justify">
            {products.map((item, index) => (
                <ProductCard item={item} index={index} key={index} />
            ))}
        </div>
    );
};

export default ProductList;