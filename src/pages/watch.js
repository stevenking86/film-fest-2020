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
  margin-bottom: 44px;
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


const Watch = () => {
  let iframeWidth = 300
  // tell gatsby not to run this during build
  if (typeof window !== `undefined`) {
     iframeWidth = window.innerWidth > 650 ? 640 : window.innerWidth  - 32
  }

  return (
    <>
      <Headline style={{marginTop: '16px', paddingTop: '0px'}}>Quarantine Film Fest 2020</Headline>

      <Para>
        <p>We'll be donating $100 to the winner's charity of choice in their name.</p>
        <p><span style={voteStyle}>How to Vote: </span></p>
        <ol>
          <li>Make a donation to a covid-19 related charity.  We recommend several on <Link to='/donate' style={linkStyle}>our donation page</Link>.</li>
          <li>Take a screenshot of the receipt of your donation</li>
          <li>Include that screenshot and the name of your favorite QFF2020 Film in an email to threeworkerfilms@gmail.com</li>
          <li>Stay tuned for the announcement of our winner during the 2nd week of June!</li>
        </ol>
      </Para>

      <SubHeadline>Official Selections</SubHeadline>
      <FilmList>
        <FilmWrapper>
          <p><FilmLink href="https://vimeo.com/373628618">Pozole</FilmLink></p>
          <Filmmakers>Written and directed by Jessica Mendez Siqueiros</Filmmakers>
          <iframe src="https://player.vimeo.com/video/373628618" width="640" height="268" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </FilmWrapper>

        <FilmWrapper>
          <p><FilmLink href="https://vimeo.com/364519805/c3368f840c">BOGO</FilmLink></p>
          <Filmmakers>Directed by: Josh Copeland | Written by: Rebecca Haden</Filmmakers>
          <iframe src="https://player.vimeo.com/video/364519805?title=0&byline=0&portrait=0" width={iframeWidth} height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </FilmWrapper>

        <FilmWrapper>
          <p><FilmLink href="https://vimeo.com/145921182">EMMA INSPIRED</FilmLink></p>
          <Filmmakers>Co-Writers: Jamie Rice & Nicole Machon | Director: Nicole Machon | DP: Jamie Rice</Filmmakers>
          <iframe src="https://player.vimeo.com/video/145921182?title=0&byline=0&portrait=0" width={iframeWidth} height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </FilmWrapper>

        <FilmWrapper>
          <p><FilmLink href="https://vimeo.com/306707419">Receding</FilmLink></p>
          <Filmmakers>Writer/Director: Dario Caudana</Filmmakers>
        <iframe src="https://player.vimeo.com/video/306707419?color=efe200" width={iframeWidth} height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </FilmWrapper>

        <FilmWrapper>
          <p><FilmLink href="https://vimeo.com/283819984">Wait it Out - A Gay Romantic Comedy</FilmLink></p>
          <Filmmakers>Alexandra Seal (Director/Producer/Story by) | Armistead Johnson (Writer/Producer) | Robbie Tann (DP/Editor)</Filmmakers>
          <iframe src="https://player.vimeo.com/video/283819984" width={iframeWidth} height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </FilmWrapper>

        <FilmWrapper>
          <p><FilmLink href="https://vimeo.com/238169072">Death &amp; Disco Fries</FilmLink></p>
          <Filmmakers>Dennis Cahlo / Cary Allen Productions</Filmmakers>
          <iframe src="https://player.vimeo.com/video/238169072?title=0&byline=0&portrait=0" width={iframeWidth} height="291" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </FilmWrapper>

        <FilmWrapper>
          <p><FilmLink href="https://www.youtube.com/watch?v=JVP4bri7sWw&t=">The Selfish Ones</FilmLink></p>
          <Filmmakers>Directed by Dharius Zulkefli | Written by Robert Mosca &amp; Eric Grisanti</Filmmakers>
          <iframe width={iframeWidth} height="315" src="https://www.youtube.com/embed/JVP4bri7sWw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </FilmWrapper>

        <FilmWrapper>
          <p><FilmLink href="https://vimeo.com/405046554">A PORTRAIT IN HEROISM</FilmLink></p>
          <Filmmakers>Mark Gallagher &amp; Brendan Boogie</Filmmakers>
          <iframe src="https://player.vimeo.com/video/405046554" width={iframeWidth} height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </FilmWrapper>

        <SubHeadline>Exhibition</SubHeadline>
        <Para>We hope you'll enjoy this film that we at 3 Worker Films worked on.  This one is not eligible for voting.</Para>
        <FilmWrapper>
          <p><FilmLink href="https://vimeo.com/396317414">Niles Dean lives in a parking space under the bridge.</FilmLink></p>
          <Filmmakers>Written and Directed by Robbie Tann</Filmmakers>
          <iframe src="https://player.vimeo.com/video/396317414" width={iframeWidth} height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </FilmWrapper>
      </FilmList>


      <Nav />
    </>
  )
};

export default Watch
