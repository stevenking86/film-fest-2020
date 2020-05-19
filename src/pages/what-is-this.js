import React from "react"
import styled from 'styled-components';
import Nav from "../components/nav"

const Headline = styled.h1`
  text-align: center;
  font-family: 'courier';
  font-weight: 200;
  padding-top: 15vh;
  color: #C2FFFF;
  font-size: 60px;
`;

const Para = styled.p`
  color: #C2FFFF;
  padding: 8px 32px 8px 32px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 20px;
`;

const LinkWrapper = styled.div`
  color: #C2FFFF;
  font-family: 'courier';
  text-align: center;

  a {
   color: white;
  }
  `;

const WhatIsThis = () => (
  <>
    <Headline style={{marginTop: '16px', paddingTop: '0px'}}>Quarantine Film Fest 2020</Headline>
    <Para>
      QUARANTINE FILM FEST is born from our thirst to share art with others while maintaining social distance.
      We miss going to short film festivals so we're throwing our own. Starting May 22, we'll be sharing our official selections, Q&A's with filmmakers, and more!
    </Para>
    <Para>
      Our Mission: Watch some short films with our friends, donate some money to a good cause, and have a good time getting independent work out there. Join us!
    </Para>

    <Nav />
  </>
);

export default WhatIsThis
