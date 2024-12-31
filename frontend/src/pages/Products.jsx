import React from 'react';
import ProductList from '../components/Product/ProductList';

const Products = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="xl:w-[900px] mx-auto">
                        <h2 className="heading text-center">Our Products</h2>
                        <p className="text__para text-center">
                            Discover our wide range of products. Quality and affordability in one place.
                        </p>
                    </div>
                </div>
            </section>
            
            <div className="container">
                <ProductList />
            </div>
        </>
    );
};

export default Products;