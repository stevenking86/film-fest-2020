import React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: black;
  height: 200vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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

const IndexPage = () => (
  <Wrapper>
    <Headline>Quarantine Film Fest 2020</Headline>
    <Para>To submit: </Para>
    <Para>1. Make a <Link to='/donate'>donation</Link> to one of the charities we recommend (or another of your choice!) Take a screenshot!</Para>
    <Para>
      2. Send us an e-mail to threeworkerfilms@gmail.com with the following:
      <ul>
        <li>The names of the film makers who worked on the project</li>
        <li>A link where we can view your short film</li>
        <li>A screenshot showing that you made a donation to a charity</li>
        <li>Whether or not you're interested in doing a zoom Q & A</li>
        <li>...anything else you'd like to tell us about your film!</li>
      </ul>
    </Para>
    <Para></Para>
    <Para>
      Rules:
    </Para>
    <Para>
      <ul>
        <li>Films must be 30 minutes or less.</li>
        <li>Submissions must be sent by May 15 at midnight.</li>
      </ul>
    </Para>
    <LinkWrapper>
      <Link>Home</Link> | <Link to='/submit'>Submit Now</Link> | <Link to='/what-is-this'>About</Link> | <Link to='/donate'>Donate</Link>
    </LinkWrapper>
  </Wrapper>
);

export default IndexPage
