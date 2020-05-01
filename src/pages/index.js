import React from "react"
import Image from "../components/image"
import styled from 'styled-components';

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
  padding-top: 20vh;
  color: #C2FFFF;
  font-size: 60px;
`;

const Para = styled.p`
color: #C2FFFF;
font-family: 'courier';
`

const IndexPage = () => (
  <Wrapper>
    <Headline>Quarantine Film Fest 2020</Headline>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <p>The best short films to get you through your stay-at-home order.</p>
    <p>Submissions open soon.</p>
  </Wrapper>
);

export default IndexPage
