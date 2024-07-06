import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Admin Panel</div>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/admin">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/dealsofday">Products</Nav.Link>
        <Nav.Link as={Link} to="/users">Users</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
