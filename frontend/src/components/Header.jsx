import React from 'react';
import { Link } from 'react-router-dom';

function Header({ linkHome, linkCartHistory, linkProfile }) {
  return (
    <header>
      <Link to={ linkHome }>Home</Link>
      <Link to={ linkCartHistory }>Cart History</Link>
      <Link to={ linkProfile }>Profile</Link>
      <a href="https://www.linkedin.com/in/dev-joanamds/">LinkeDin</a>
      <a href="https://github.com/joanamds">Github</a>
      <a href="https://fakestoreapi.com/">FakeStoreAPI</a>
    </header>
  );
}

export default Header;