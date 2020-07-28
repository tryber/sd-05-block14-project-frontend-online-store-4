import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartIcon from './CartIcon';
import CategoriesList from './CategoriesList';
import InputSearch from './InputSearch';
import ProductList from './ProductList';


class PageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      userInput: '',
      userCategory: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  updateState(param) {
    this.setState({ products: param });
  }

  async handleClick() {
    const { userInput, userCategory } = this.state;
    const data = await getProductsFromCategoryAndQuery(userCategory, userInput);
    this.updateState(data.results);
  }

  handleRadio(event) {
    this.setState({ userCategory: event.target.value });
    this.handleClick();
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <InputSearch
          products={this.state.products}
          userInput={this.state.userInput}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
        <Link to="/cart">
          <CartIcon />
        </Link>
        <ProductList listaProdutos={products} />
        <CategoriesList
          userCategory={this.state.userCategory}
          handleRadio={this.handleRadio}
        />
      </div>
    );
  }
}

export default PageList;
