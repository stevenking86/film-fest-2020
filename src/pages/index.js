import React from "react"
import Image from "../components/image"
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
  font-family: 'courier';
  text-align: center;
`;

const LinkWrapper = styled.div`
  color: #C2FFFF;
  font-family: 'courier';
  text-align: center;

  a {
   color: white;
  }
  `;

const IndexPage = () => (
  <Wrapper>
    <Headline>Quarantine Film Fest 2020</Headline>
    <Para>The best short films to get you through your stay-at-home order.</Para>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <Para>Screenings, Q&A's, and more begin May 22.</Para>
    <LinkWrapper>
      <Link>Home</Link> | <Link to='/submit'>Submit Now</Link> | <Link to='/what-is-this'>About</Link> | <Link to='/donate'>Donate</Link>
    </LinkWrapper>
  </Wrapper>
);

export default IndexPage
