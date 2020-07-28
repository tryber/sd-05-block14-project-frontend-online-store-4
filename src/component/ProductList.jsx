import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    const { listaProdutos } = this.props;
    if (listaProdutos !== undefined) {
      return (
        <div>
          {listaProdutos.map((item) => (
            <Product key={item.id} produto={item} />
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
