import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      userInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  updateState(param) {
    this.setState({ products: param });
  }

  async handleClick() {
    const { userInput } = this.state;
    const data = await getProductsFromCategoryAndQuery('', userInput);
    this.updateState(data.results);
  }

  render() {
    const { products } = this.state;
    console.log('aaa', products);
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={this.handleChange}
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={this.handleClick}
        >
          PESQUISAR
        </button>
        <ProductList listaProdutos={products} />
      </div>
    );
  }
}

export default InputSearch;
