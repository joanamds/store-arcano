import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestUser } from '../services/storeAPI';
import Header from '../components/Header';

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await requestUser('/user', id);
      setUser(userData);
    };
    fetchData();
  }, [id]);

  return(
    <div className="profile-page">
      <Header
        linkHome={`/home/${id}`}
        linkCartHistory={`/cart-history/${id}`}
        linkProfile={`/profile/${id}`}
      />
    <div className="profile">
      { user !== undefined ?
      <div className="profile-data">
      <h1>{ user.username }</h1>
      <p>{ `Nome: ${user.name.firstname} ${user.name.lastname}` }</p>
      <p>{ `Email: ${user.email}` }</p>
      <p>{ `Telefone: ${user.phone}` }</p>
      <p>{`Endereço: ${user.address.street}, ${user.address.number}, ${user.address.city}`}</p>
      </div>
      : ''}
    </div>
    </div>
  );
}

export default Profile;