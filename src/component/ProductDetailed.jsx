import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

class ProductDetailed extends React.Component {
  render() {
    const { addToCart, carrinho } = this.props;
    // console.log('ver addtocart', addToCart);
    // console.log('state do location:', this.props.location.state);
    const { produto } = this.props.location.state;
    // console.log('produto desestruturado', produto);
    const { title, thumbnail, price } = produto;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={thumbnail} alt="produto" />
        <h2>{`Preço: $${price}`}</h2>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={() => addToCart(produto)}>
          Adicionar ao carrinho
        </button>
        <Link
          to={{
            pathname: '/cart',
            state: { carrinho },
          }}
        >
          <CartIcon />
        </Link>
        <label htmlFor="comment">Comentários: </label>
        <textarea id="comment" data-testid="product-detail-evaluation" />
      </div>
    );
  }
}

export default ProductDetailed;
