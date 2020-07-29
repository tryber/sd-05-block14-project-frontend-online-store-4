import React from 'react';

class ProductDetailed extends React.Component {
  render() {
    console.log('state do location:', this.props.location.state);
    const { produto } = this.props.location.state;
    console.log('produto desestruturado', produto);
    const { title, thumbnail, price } = produto;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={thumbnail} alt="produto" />
        <h2>{`Preço: $${price}`}</h2>
      </div>
    );
  }
}

export default ProductDetailed;