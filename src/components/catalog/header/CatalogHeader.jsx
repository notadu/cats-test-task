import React from 'react';
import PropTypes from 'prop-types';

const CatalogHeader = ({ title }) => (
  <header className="catalog-header">
    <h1>{title}</h1>
  </header>
);

CatalogHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CatalogHeader;
