import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    const { listaProdutos, addToCart } = this.props;
    if (listaProdutos !== undefined) {
      return (
        <div>
          {listaProdutos.map((item) => (
            <Product key={item.id} produto={item} addToCart={addToCart} />
          ))}
        </div>
      );
    }
    return (
      <div>lala</div>
    );
  }
}

export default ProductList;
