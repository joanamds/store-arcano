import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestUser } from '../services/storeAPI';
import Header from '../components/Header';

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

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
      { user ?
      <h1>{ user.username }</h1>
      : ''}
    </div>
    </div>
  );
}

export default Profile;