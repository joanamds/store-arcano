import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestUser } from '../services/storeAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Profile.css';

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
        name={`${user.name.firstName} ${user.name.lastName}`}
        linkHome={`/home/${id}`}
        linkCartHistory={`/cart-history/${id}`}
        linkProfile={`/profile/${id}`}
      />
    <div className="profile-content">
    <div className="profile">
    <div className="avatar-container">
      <Avatar sx={{ width: 60, height: 60 }}>
        <AccountCircleIcon sx={{ fontSize: 80 }} />
      </Avatar>
    </div>
      { user !== undefined ?
      <div className="profile-data">
      <h1>{ user.username }</h1>
      <p>{ `Name: ${user.name.firstname} ${user.name.lastname}` }</p>
      <p>{ `Email: ${user.email}` }</p>
      <p>{ `Phone: ${user.phone}` }</p>
      <p>{`Address: ${user.address.street}, ${user.address.number}, ${user.address.city}`}</p>
      </div>
      : ''}
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default Profile;