import React from 'react';

import Product from '../product/Product';
import { products } from '../../data';

import './product-list.css';

const ProductList = () => {
  return (
    <div className="p-list">
      <div className="p-list-texts">
        <div className="p-list-title">Create & Inspire, It's Mad</div>
        <p className="p-list-desc">
          Mad is a creative portofolio that your work has been waiting for Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Dolorum unde, at
          minima vel nesciunt non corrupti eos distinctio eius, laudantium iusto
          dolore atque sunt. Laboriosam quasi unde labore pariatur vel?
        </p>
      </div>
      <div className="p-list-list">
        {products.map((product) => (
          <Product key={product.id} img={product.img} link={product.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
