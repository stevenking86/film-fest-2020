import React from "react"
import styled from 'styled-components';
import Nav from "../components/nav"

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
  font-size: 20px;

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
  <>
    <Headline style={{marginTop: '16px', paddingTop: '0px'}}>Quarantine Film Fest 2020</Headline>
    <Para>
      We're encouraging all who enjoy this festival to donate to an organization helping out with Covid-19 relief.  Please consider making a donation to one of the following organizations:
    </Para>
    <Para>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.nokidhungry.org/coronavirus">No Hungry Kids</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.unicefusa.org/?utm_campaign=20200323_Emergencies">Unicef</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://give.salvationarmyusa.org/give/276832">Salvation Army</a></li>
      </ul>
    </Para>

    <Nav />
  </>
);

export default Donate
