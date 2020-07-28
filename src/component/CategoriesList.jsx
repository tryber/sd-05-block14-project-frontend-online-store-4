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
    const { handleRadio } = this.props;
    const { categorias, loading } = this.state;
    if (loading) return <span>loading...</span>;
    return (
      <div>
        {categorias.map((categoria) => (
          <div key={categoria.id}>
            <label htmlFor={categoria.id}>{categoria.name}</label>
            <input id={categoria.id} type="radio" data-testid="category" name="eachCategory" value={categoria.id} onChange={handleRadio} />
          </div>
        ))}
      </div>
    );
  }
}

export default CategoriesList;
