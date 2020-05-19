import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"


const LinkWrapper = styled.div`
  color: #C2FFFF;
  font-family: 'courier';
  text-align: center;

  a {
   color: white;
  }
`;

const Nav = () => {
  return (
    <LinkWrapper>
      <Link>Home</Link> | <Link to='/submit'>Submit Now</Link> | <Link to='/what-is-this'>About</Link> | <Link to='/donate'>Donate</Link>
    </LinkWrapper>
  );
}

export default Nav
