import { Container, Navbar } from "react-bootstrap";
import React from "react";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <a>Shopping Cart</a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
