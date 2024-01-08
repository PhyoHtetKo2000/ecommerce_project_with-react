import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Hero from '../components/Hero'

// import Component
import Product from '../components/Product'

const Home = () => {
  // get product form productcpntext
  const {products} =useContext(ProductContext)
  const filterproducts = products.filter((item) => item.category ==="men's clothing" || item.category === "women's clothing");
// console.log(filterproducts)

  return (
    <div>
      <Hero />
      <section>
        <div className=" container mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filterproducts.map((product) => {
              return (
               <Product product={product} key={product.id} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
