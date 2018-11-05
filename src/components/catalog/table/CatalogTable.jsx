import React from 'react';
import PropTypes from 'prop-types';

import './CatalogTable.scss';
import ProductItem from '../product-item/ProductItem';

const CatalogTable = ({ products, category }) => (
  <div className="catalog-table">
    {products.map(product => (
      <div
        key={product.id}
        className="catalog-table--cell"
      >
        <ProductItem
          category={category}
          product={product}
        />
      </div>
    ))}
  </div>
);

CatalogTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string,
};

CatalogTable.defaultProps = {
  products: [],
  category: '',
};

export default CatalogTable;
