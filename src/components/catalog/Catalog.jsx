import React from 'react';

import CatalogHeader from './header/CatalogHeader';
import CatalogTable from './table/CatalogTable';
import data from '../../config/data.json';

const Catalog = () => (
  <div className="catalog">
    <CatalogHeader title={data.title} />
    <CatalogTable
      category={data.category}
      products={data.products}
    />
  </div>
);

export default Catalog;
