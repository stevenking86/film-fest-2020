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

const SubHeadline = styled.h2`
  text-align: center;
  font-family: 'courier';
  font-weight: 200;
  color: #C2FFFF;
  font-size: 40px;
`;

const Para = styled.p`
  color: #d6d8de;
  padding: 8px 32px 8px 32px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 20px;
`;

const FilmList = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const FilmWrapper = styled.div`
  margin-bottom: 32px;
`;

const FilmLink = styled.a`
  color: #C2FFFF;
  font-size: 18px;
  text-decoration: none;
`;

const Filmmakers = styled.p`
  color: #d6d8de;
`;

const voteStyle = {
  color: '#e57254',
  fontWeight: 'bold'
}

const linkStyle = {
  color: '#C2FFFF',
  fontWeight: 'bold',
  textDecoration: 'none'
}


const Watch = () => (
  <>
    <Headline style={{marginTop: '16px', paddingTop: '0px'}}>Quarantine Film Fest 2020</Headline>
    <Para>We're extremely proud to present the offical selections to Quarantine Film Fest 2020.  We were overwhelmed by submissions and couldn't be happier with the films we're presenting here.
      We hope you enjoy them as much as we do.  Please enjoy the films and bonus content that we've been able to record with some of the filmmakers. More content will be added during the duration of the festival.
      We plan to award one 'Winner' of the festival based totally on online voting.
    </Para>

    <Para>
      <span style={voteStyle}>How to Vote: </span>
      <ul>
        <li>Make a donattion to a charity.  We recommend several on <Link to='/donate' style={linkStyle}>our donation page</Link>.</li>
        <li>Take a screenshot of the receipt of your donation</li>
        <li>Include that screenshot and the name of your favorite QFF2020 Film in an email to threeworkerfilms@gmail.com</li>
        <li>Stay tuned for the announcement of our winner during the 2nd week of June!</li>
      </ul>
    </Para>

    <SubHeadline>Official Selections</SubHeadline>
    <FilmList>
      <FilmWrapper>
        <p><FilmLink href="https://vimeo.com/364519805">BOGO</FilmLink></p>
        <Filmmakers>Directed by: Josh Copeland | Written by: Rebecca Haden</Filmmakers>
        <iframe src="https://player.vimeo.com/video/364519805?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </FilmWrapper>

      <FilmWrapper>
        <p><FilmLink href="https://vimeo.com/145921182">EMMA INSPIRED</FilmLink></p>
        <Filmmakers>Co-Writers: Jamie Rice & Nicole Machon | Director: Nicole Machon | DP: Jamie Rice</Filmmakers>
        <iframe src="https://player.vimeo.com/video/145921182?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </FilmWrapper>
    </FilmList>


    <Nav />
  </>
);

export default Watch
