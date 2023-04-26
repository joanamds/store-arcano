import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestUser, requestCartHistory, requestProducts } from '../services/storeAPI';
import CartItemCard from '../components/CartItemCard';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

function Home() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [cartHistory, setCartHistory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await requestUser('/user', id);
      setUser(userData);
      const cartHistoryData = await requestCartHistory('/cart-history', id);
      setCartHistory(cartHistoryData);
      const productsData = await requestProducts('/products');
      setProducts(productsData);
    };
    fetchData();
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
    <div>
      <h1>{`Bem vindo(a) ${ user ? user.username : '' }`}</h1>
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
    <h2>Faça uma nova compra!</h2>
    <div className="products-list">
      {
        products ?
        products.map((product) => {
          return(
            <ProductCard
              title={ product.title }
              price={ product.price }
              description={ product.description }
              category={ product.category }
              image={ product.image }
              rating={ product.rating }
            />
          )
        })
        : ''
      }
    </div>
    </div>
  );
}

export default Home;
