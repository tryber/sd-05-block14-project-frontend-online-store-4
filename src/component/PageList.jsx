import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';


class PageList extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </div>
    );
  }
}

export default PageList;
