import React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: black;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

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

  a {
    color: white;
   }
`;

const LinkWrapper = styled.div`
  color: #C2FFFF;
  font-family: 'courier';
  text-align: center;

  a {
   color: white;
  }
  `;

const Donate = () => (
  <Wrapper>
    <Headline>Quarantine Film Fest 2020</Headline>
    <Para>
      We're encouraging all who enjoy any part of this festival to donate to an organization helping out with Covid-19 relief.  Please consider making a donation to one of the following organizaitons:
    </Para>
    <Para>
      <ul>
        <li><a target="_blank" href="https://secure.nokidhungry.org/site/Donation">No Hungry Kids</a></li>
        <li><a target="_blank" href="https://www.unicefusa.org/?utm_campaign=20200323_Emergencies">Unicef</a></li>
        <li><a target="_blank" href="https://give.salvationarmyusa.org/give/276832">Salvation Army</a></li>
      </ul>
    </Para>
    <LinkWrapper>
      <Link>Home</Link> | <Link to='/submit'>Submit Now</Link> | <Link to='/what-is-this'>About</Link> | <Link to='/donate'>Donate</Link>
    </LinkWrapper>
  </Wrapper>
);

export default Donate