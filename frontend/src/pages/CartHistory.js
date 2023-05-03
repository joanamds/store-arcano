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
    return `Purchase completed on: ${month}/${day}/${year}`;
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
        avatar={ user ? `${user.name.firstname} ${user.name.lastname}` : '' }
        linkHome={`/home/${id}`}
        linkCartHistory={`/cart-history/${id}`}
        linkProfile={`/profile/${id}`}
        linkLogin={'/'}
      />
    <h2 className="welcome-message">Cart history</h2>
    <div className="cart-history">
      { cartHistory.length > 0 ?
        cartHistory.map((cart) => {
          return (
            <CartItemCard
              total={ calculateTotal(cart.cartItems).toFixed(2) }
              date={ formatDate(cart.date) }
              cartItems={ cart.cartItems }
            />
          );
        }) 
        : `You haven't made a purchase in our store yet`
      }
    </div>
    <Footer />
    </div>
  );
}

export default CartHistory;