import React from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: '',
      loading: true,
    };
    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.updateState(categories);
  }

  updateState(param) {
    this.setState({ categorias: param, loading: false });
  }

  render() {
    const { categorias, loading } = this.state;
    if (loading) return (<span>loading...</span>);
    return (
      <div>
        {categorias.map((categoria) => (<p data-testid="category" key={categoria.id}>{categoria.name}</p>))}
      </div>
    );
  }
}

export default CategoriesList;
