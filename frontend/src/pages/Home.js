import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestUser, requestCartHistory } from '../services/storeAPI';
import CartItemCard from '../components/CartItemCard';

function Home() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [cartHistory, setCartHistory] = useState([]);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await requestUser('/user', id);
      setUser(userData);
      const cartHistoryData = await requestCartHistory('/cart-history', id);
      setCartHistory(cartHistoryData);
      // const productsData = await requestProducts('/products');
      // setProducts(productsData);
    };
    fetchData();
  }, [id]);

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("T")[0].split("-");
    return `Compra efetuada no dia: ${day}/${month}/${year}`;
  }
  
  return (
    <div>
      <h1>{`Bem vindo(a) ${ user ? user.username : '' }`}</h1>
    <div className="cart-history">
      <h2>Seu histórico de compras:</h2>
      { cartHistory ?
        cartHistory.map((cart) => {
          return (
            <div key={ cart.id }>
              <h2>{ formatDate(cart.date) }</h2>
              {cart.cartItems.map((item) => (
                <CartItemCard
                  quantity={ item.quantity }
                  title={ item.product.title }
                  price={ item.product.price }
                  image={ item.product.image }
                />
              ))}
            </div>
          );
        }) 
        : ''
      }
    </div>
    </div>
  );
}

export default Home;
