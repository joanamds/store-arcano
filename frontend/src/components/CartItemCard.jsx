import React from 'react';
import '../styles/CartItemCard.css';

function CartItemCard({quantity, title, price, image}) {
  return(
    <div className="cart-item-card">
      <h3>{ title }</h3>
      <h4>{ price }</h4>
      <img src={ image } width="50" alt={ title } />
      <p>{ quantity } </p>
    </div>
  );
}

export default CartItemCard;