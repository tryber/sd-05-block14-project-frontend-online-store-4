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
    // this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  addToCart(newCartElement) {
    const { carrinho } = this.state;
    // console.log('ver o que tem dentro do carrinho', carrinho);
    console.log('o que eh o NewCartElement?', newCartElement);
    //  this.setState({carrinho: [...carrinho, newCartElement]});
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
    console.log("ver carrinho do increase", carrinho);
    console.log("ver param item.id", id);
    this.setState((prevState) => {
      carrinho : prevState.carrinho.find((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantidade: item.quantidade = item.quantidade + 1,
        };
      }
      return item;
      })
    });

    //   carrinho: carrinho.find((item) => {
    //       if (item.id === id) {
    //         return {
    //           quantidade: item.quantidade + 1,
    //       }
    //   }
    //     })
    //   // percorrer array para ver em que indice està o id
    // })
}


  // decreaseQuantity() {
    
  // }

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
          <Route path="/cart" render={(props) => <PageCart {...props} increaseQuantity={this.increaseQuantity} />} />
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
