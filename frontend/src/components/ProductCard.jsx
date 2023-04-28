import React from 'react';

function ProductCard({ title, price, description, category, image, rating }) {
  return (
    <div className="product-card">
      <h1>{ title }</h1>
      <h2>{ price }</h2>
      <img src={ image } alt={ title } width="100"/>
      <p>{ `Descrição: ${description}` }</p>
      <p>{ `Categoria ${category}` }</p>
      <p>{`Nota: ${rating.rate}`}</p>
    </div>
  );
}

export default ProductCard;