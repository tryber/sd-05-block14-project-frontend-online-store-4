import React from 'react';
class InputSearch extends React.Component {

  render() {
    const {
      handleChange,
      handleClick,
    } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={handleChange}
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={handleClick}
        >
          PESQUISAR
        </button>
      </div>
    );
  }
}

export default InputSearch;
