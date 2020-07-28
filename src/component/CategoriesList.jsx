import React from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: '',
      loading: true,
      categoryId: '',
    };
    this.updateState = this.updateState.bind(this);
    // this.handleRadio = this.handleRadio.bind(this);
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.updateState(categories);
  }

  updateState(param) {
    this.setState({ categorias: param, loading: false });
  }

  // async handleRadio() {
  //   const { categoryId } = this.state;
  //   const data = await getProductsFromCategoryAndQuery(categoryId, '');
  //   // this.updateState(data.results);
  // }

  render() {
    const { categorias, loading } = this.state;
    if (loading) return <span>loading...</span>;
    return (
      <div>
        {categorias.map((categoria) => (
          <div key={categoria.id}>
            <label htmlFor={categoria.id}>{categoria.name}</label>
            <input id={categoria.id} type="radio" data-testid="category" name="eachCategory" onClick={this.handleRadio} />
          </div>
        ))}
      </div>
    );
  }
}

export default CategoriesList;
