import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
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
  color: #d6d8de;
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

const Submit = () => (
  <>
    <Headline style={{marginTop: '16px', paddingTop: '0px'}}>Quarantine Film Fest 2020</Headline>
    <Para>To submit: </Para>
    <Para>1. Make a <Link to='/donate'>donation</Link> (minimum $5) to one of the charities we recommend (or another of your choice!) Take a screenshot or send us a copy of the receipt!</Para>
    <Para>
      2. Send us an e-mail to threeworkerfilms@gmail.com with the following:
      <ul>
        <li>The names of the filmmakers who worked on the project</li>
        <li>A link where we can view your short film</li>
        <li>A screenshot showing that you made a donation to a charity</li>
        <li>Whether or not you're interested in doing a zoom Q & A</li>
        <li>...anything else you'd like to tell us about your film!</li>
      </ul>
    </Para>
    <Para>
      3. OPTIONAL: Support the organizers. We're not profiting from this fest in any way. Shoot 3 Worker Films a donation if you feel so inclined.
    </Para>
    <Para style={{textAlign: 'center'}}>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="4RKVH54K45S92" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
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
    <Para
      style={{fontSize: '24px', fontFamily: 'courier', textAlign: 'center', marginBottom: '24px'}}
    >
      Know a filmmaker who's made a great short film? Please spread the word!
    </Para>
    <Nav />
  </>
);

export default Submit
