import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import CategoriesList from './CategoriesList';
import InputSearch from './InputSearch';


class PageList extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <InputSearch />
        <Link to="/cart">
          <CartIcon />
        </Link>
        <CategoriesList />
      </div>
    );
  }
}

export default PageList;
