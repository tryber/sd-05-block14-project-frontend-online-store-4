import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { produto, addToCart } = this.props;
    const { title, thumbnail, price } = produto;

   // console.log('props addTocart dentro do Product.jsx', addToCart);
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={thumbnail} alt="produto" />
        <h2>{`Preço: $${price}`}</h2>
        <Link
          data-testid="product-detail-link"
          to={{
            pathname: `/product/${produto.id}`,
            state: { produto },
          }}
        >
          VER DETALHES
        </Link><br />
        <button
          onClick={() => addToCart(produto)} data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default Product;
