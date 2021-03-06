import React from "react"
import styled from 'styled-components';
import Nav from "../components/nav"
import { Link } from "gatsby"

const Headline = styled.h1`
  text-align: center;
  font-family: 'courier';
  font-weight: 200;
  padding-top: 15vh;
  color: #C2FFFF;
  font-size: 60px;
`;

const Para = styled.p`
  color: #d6d8de;
  padding: 8px 32px 8px 32px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 20px;
`;

const linkStyle = {
  color: '#C2FFFF',
  fontWeight: 'bold',
  textDecoration: 'none'
}

const WhatIsThis = () => (
  <>
    <Headline style={{marginTop: '16px', paddingTop: '0px'}}>Quarantine Film Fest 2020</Headline>
    <Para>
      QUARANTINE FILM FEST is born from our thirst to share art with others while maintaining social distance.
      We miss going to short film festivals so we're throwing our own.
      We're extremely proud to present the official selections to Quarantine Film Fest 2020.
      We were overwhelmed by submissions and couldn't be happier with the films we're presenting.
      <Link to="/watch" style={linkStyle}> Watch Now!</Link>
    </Para>
    <Para>
      Our Mission: Watch some short films with our friends, donate some money to a good cause, and have a good time getting independent work out there. Join us!
    </Para>

    <Nav />
  </>
);

export default WhatIsThis
