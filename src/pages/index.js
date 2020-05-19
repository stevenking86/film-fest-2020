import React from "react"
import Image from "../components/image"
import styled from 'styled-components';
import Nav from "../components/nav"
import "../styles/main.css"

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
  padding: 8px 32px 8px 32px;
  text-align: center;
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

const IndexPage = () => (
  <>
    <Headline style={{marginTop: '16px', paddingTop: '0px'}}>Quarantine Film Fest 2020</Headline>
    <Para>The best short films to get you through your stay-at-home order.</Para>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <Para>Screenings, Q&A's, and more begin May 22.</Para>
    <Nav />
  </>
);

export default IndexPage
