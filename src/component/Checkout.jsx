import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Nome">Nome completo</label>
        <input id="Nome" type="text" data-testid="checkout-fullname" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" data-testid="checkout-email" />
        <label htmlFor="cpf">CPF</label>
        <input id="cpf" type="text" data-testid="checkout-cpf" />
        <label htmlFor="phone">Telefone</label>
        <input id="phone" type="text" data-testid="checkout-phone" />
        <label htmlFor="cep">CEP</label>
        <input id="cep" type="text" data-testid="checkout-cep" />
        <label htmlFor="adress">Endereço</label>
        <input id="adress" type="text" data-testid="checkout-address" />
      </div>
    );
  }
}

export default Checkout;

