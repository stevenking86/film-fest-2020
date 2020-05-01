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
  padding: 8px 32px 8px 32px;
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
    <Para>
      Quarantine Film Fest is an idea born out of a thirst for a way to share art with others while maintaining safe social distancing precautions.
      We wanted to watch some short films and learn a bit about how they were made.  In other words, we wanted to go to a short film festival but couldn't.
      So we're throwing our own!
    </Para>
    <Para>
      Our Mission: Watch some short films with our friends, donate some money to a good cause, and have a good time. Join us!
    </Para>
    <LinkWrapper>
      <Link>Home</Link> | <Link>Submit Now</Link> | <Link to='/what-is-this'>Mission</Link> | <Link>Contact</Link>
    </LinkWrapper>
  </Wrapper>
);

export default IndexPage
