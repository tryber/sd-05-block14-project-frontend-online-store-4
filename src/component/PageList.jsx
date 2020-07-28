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
      // userCategory: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  //aqui monitoramento do click do button e da selecao da categoria
  //interligar monitoramento aqui com function dos outros
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
        {/* <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        /> */}
        <Link to="/cart">
          <CartIcon />
        </Link>
        <ProductList listaProdutos={products} />
        <CategoriesList />
      </div>
    );
  }
}

export default PageList;
