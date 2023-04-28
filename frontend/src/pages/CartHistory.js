import React, { useEffect, useState } from 'react';
import CartItemCard from '../components/CartItemCard';
import { useParams } from 'react-router-dom';
import { requestCartHistory } from '../services/storeAPI';
import Header from '../components/Header';

function CartHistory() {
  const { id } = useParams();
  const [cartHistory, setCartHistory] = useState([]);

  useEffect(() => {
    const fetchCartHistory = async () => {
      const cartHistoryData = await requestCartHistory('/cart-history', id);
      console.log(cartHistoryData);
      setCartHistory(cartHistoryData);
    };
    fetchCartHistory();
  }, [id]);

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("T")[0].split("-");
    return `Compra efetuada no dia: ${day}/${month}/${year}`;
  }
  
  function calculateTotal(cartItems) {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.product.price;
    });
    return total;
  }

  return (
    <div className="page-cart">
      <Header
        linkHome={`/home/${id}`}
        linkCartHistory={`/cart-history/${id}`}
        linkProfile={`/profile/${id}`}
      />
    <div className="cart-history">
      <h2>Seu histórico de compras:</h2>
      { cartHistory ?
        cartHistory.map((cart) => {
          return (
            <div key={ cart.id } className="cart-list">
              <h2>{ formatDate(cart.date) }</h2>
              {cart.cartItems.map((item) => (
                <CartItemCard
                  quantity={ item.quantity }
                  title={ item.product.title }
                  price={ item.product.price }
                  image={ item.product.image }
                />
              ))}
              <h2>Total da compra: ${calculateTotal(cart.cartItems).toFixed(2)}</h2>
            </div>
          );
        }) 
        : ''
      }
    </div>
    </div>
  );
}

export default CartHistory;