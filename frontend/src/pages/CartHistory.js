import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestCartHistory, requestUser } from '../services/storeAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/CartHistory.css';
import CartItemCard from '../components/CarItemCard';

function CartHistory() {
  const { id } = useParams();
  const [cartHistory, setCartHistory] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCartHistory = async () => {
      const cartHistoryData = await requestCartHistory('/cart-history', id);
      setCartHistory(cartHistoryData);
    };
    fetchCartHistory();
    const fetchUser = async () => {
      const userData = await requestUser('/user', id);
      setUser(userData);
    };
    fetchUser();
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
        name={`${user.name.firstName} ${user.name.lastName}` }
        linkHome={`/home/${id}`}
        linkCartHistory={`/cart-history/${id}`}
        linkProfile={`/profile/${id}`}
      />
    <h2 className="welcome-message">Cart history</h2>
    <div className="cart-history">
      { cartHistory ?
        cartHistory.map((cart) => {
          return (
            <CartItemCard
              total={ calculateTotal(cart.cartItems).toFixed(2) }
              date={ formatDate(cart.date) }
              cartItems={ cart.cartItems }
            />
          );
        }) 
        : ''
      }
    </div>
    <Footer />
    </div>
  );
}

export default CartHistory;