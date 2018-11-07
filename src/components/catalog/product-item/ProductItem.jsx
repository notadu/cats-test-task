import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ctaConstants from '../../../constants/cta';

import './ProductItem.scss';

class ProductItem extends PureComponent {
  constructor() {
    super();
    this.state = {
      selected: false,
      hovered: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleClick() {
    this.setState((state, props) => {
      if (props.product.inStock) {
        return {
          selected: !state.selected,
          hovered: !!state.selected,
        };
      }
      return state;
    });
  }

  handleMouseOver() {
    this.setState((state, props) => {
      if (props.product.inStock) {
        return { hovered: !state.selected };
      }
      return state;
    });
  }

  handleMouseOut() {
    this.setState((state, props) => {
      if (props.product.inStock) {
        return { hovered: !!state.selected };
      }
      return state;
    });
  }

  renderTopText() {
    const { selected, hovered } = this.state;
    const { product, category } = this.props;

    return (
      <p className="product-item--text product-item--top-text">
        {(selected && hovered) ? ctaConstants[category].question : product.description}
      </p>
    );
  }

  renderFootText() {
    const { product, category } = this.props;
    const { selected } = this.state;

    if (!product.inStock) {
      return (
        <p>{`Печалька, ${product.type} закончился.`}</p>
      );
    }

    return (
      selected
        ? <p>{product.ingredients}</p>
        : (
          <p>
            {ctaConstants[category].cta}
            <button type="button" onClick={this.handleClick}>купи.</button>
          </p>
        )
    );
  }

  render() {
    const { product, category } = this.props;
    const { selected, hovered } = this.state;

    const productItemClass = classNames({
      'product-item': true,
      selected,
      hovered,
      disabled: !product.inStock,
      [`${category}`]: true,
    });

    return (
      <div className={productItemClass}>
        <div className="product-item--border" />
        { /* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */ }
        <div
          className="product-item--content"
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          role="presentation"
        >
          {this.renderTopText()}
          <h2 className="product-item--text product-item--title">{product.title}</h2>
          <span className="product-item--text product-item--type">{product.type}</span>
          <ul className="product-item--text product-item--details">
            {product.details.map(item => <li>{item}</li>)}
          </ul>
          <span className="product-item--weight">
            {product.weight}
            <small>кг</small>
          </span>
        </div>
        <div className="product-item--foot-text">{this.renderFootText()}</div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  category: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    ingredients: PropTypes.string,
    weight: PropTypes.string,
    inStock: PropTypes.bool,
    details: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

ProductItem.defaultProps = {
  category: '',
};

export default ProductItem;
