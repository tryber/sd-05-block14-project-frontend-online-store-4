import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import * as api from './services/api';
import PageList from './component/PageList';
import PageCart from './component/PageCart';
import ProductDetailed from './component/ProductDetailed';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carrinho: [] };
    this.addToCart = this.addToCart.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  addToCart(newCartElement) {
    const { carrinho } = this.state;
    this.setState({
      carrinho: carrinho.some((item) => item.id === newCartElement.id)
        ? carrinho.map((item) => {
          if (item.id === newCartElement.id) {
            return {
              ...item,
              quantidade: item.quantidade + 1,
            };
          }
          return item;
        })
        : [...carrinho, { ...newCartElement, quantidade: 1 }],
    });
  }
  increaseQuantity(id) {
    const { carrinho } = this.state;
    const indice = carrinho.findIndex((item) => item.id === id);
    const novoCarrinho = carrinho;
    novoCarrinho[indice].quantidade += 1;
    this.setState({ carrinho: novoCarrinho });
  }
  decreaseQuantity(id) {
    const { carrinho } = this.state;
    const indice = carrinho.findIndex((item) => item.id === id);
    const novoCarrinho = carrinho;
    if (novoCarrinho[indice].quantidade > 1) {
      novoCarrinho[indice].quantidade -= 1;
      this.setState({ carrinho: novoCarrinho });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <PageList {...props} addToCart={this.addToCart} carrinho={this.state.carrinho} />
            )}
          />
          <Route
            path="/cart"
            render={(props) => (
              <PageCart
                {...props}
                increaseQuantity={this.increaseQuantity}
                decreaseQuantity={this.decreaseQuantity}
              />
            )}
          />
          <Route
            render={(props) => (
              <ProductDetailed
                {...props}
                addToCart={this.addToCart}
                carrinho={this.state.carrinho}
              />
            )}
            exact
            path="/product/:productId"
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
