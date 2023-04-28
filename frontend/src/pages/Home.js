import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestUser, requestProducts } from '../services/storeAPI';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import '../styles/Home.css';
import Footer from '../components/Footer';

function Home() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await requestUser('/user', id);
      setUser(userData);
      const productsData = await requestProducts('/products');
      setProducts(productsData);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Header
        linkHome={`/home/${id}`}
        linkCartHistory={`/cart-history/${id}`}
        linkProfile={`/profile/${id}`}
      />
    <h1 className="welcome-message">{`Bem vindo(a) ${ user ? user.username : '' }`}</h1>
    <h2 className="lets-shop">Faça uma nova compra!</h2>
    <div className="products-list">
      {
        products ?
        products.map((product) => {
          return(
            <ProductCard
              className="product-card"
              title={ product.title }
              price={ product.price }
              description={ product.description }
              category={ product.category }
              image={ product.image }
              rating={ product.rating.rate }
            />
          )
        })
        : ''
      }
    </div>
    <Footer />
    </div>
  );
}

export default Home;
