import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import About from "./components/About";
import Creative from "./components/Creative";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavButton from "./components/NavButton";
import { VIEWS, STYLE_CONSTANTS } from "./constants";

const { baseColor, mediaMinWidth, imgContainerSize, fade } = STYLE_CONSTANTS;

const StyledApp = styled.div`
  @media (min-width: ${mediaMinWidth}) {
    body {
      background: green;
    }
  }

  * {
    padding: 0;
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    font-size: 5vh;
  }

  h3 {
    font-size: 2.5vh;
  }

  body {
    background: ${baseColor};
    font-family: "Lato", sans-serif;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0;
    overflow-x: hidden;
  }

  .App {
    height: 100vh;
    background: ${baseColor};
    text-align: center;
    font-family: "Lato", sans-serif;
    color: #333642;
  }

  .Header {
    height: 10vh;
  }

  .NavContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 4vh;
    width: 100%;

    @media (min-width: ${mediaMinWidth}) {
      width: 50%;
    }
  }

  .view {
    display: block;
    height: 78vh;
    overflow: scroll;
  }

  #ViewContainer {
    width: 100vw;
    display: block;
    margin: 15px;
  }

  .img-container {
    margin-top: 2vh;
    margin-bottom: 2vh;

    /* Set size of crop area. Setting its location happens bellow. */
    width: ${imgContainerSize};
    height: ${imgContainerSize};
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
  }

  img {
    display: block;
    position: relative;
    left: 0.1vh;
  }

  .fade-in {
    animation: fadeIn ease ${fade};
    -webkit-animation: fadeIn ease ${fade};
    -moz-animation: fadeIn ease ${fade};
    -o-animation: fadeIn ease ${fade};
    -ms-animation: fadeIn ease ${fade};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const App = () => {
  const [view, setView] = useState(VIEWS.about);
  const resetPage = () => {
    setTimeout(() => {
      setView("about");
    }, 2000);
  };

  const curView = () => {
    switch (view) {
      case VIEWS.about:
        return <About />;
      case VIEWS.work:
        return <Work />;
      case VIEWS.creative:
        return <Creative />;
      case VIEWS.contact:
        return <Contact resetPage={resetPage} />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Head>
        <title>Danny Byrne ~ Web Developer</title>
      </Head>
      <StyledApp>
        <div className="App fade-in">
          <div className="Header">
            <h1>Danny Byrne</h1>
            <h3>Web Developer</h3>
          </div>
          <div className="NavContainer fade-in">
            {Object.keys(VIEWS).map((section) => (
              <NavButton
                key={VIEWS[section]}
                value={VIEWS[section]}
                onClick={() => setView(VIEWS[section])}
              />
            ))}
          </div>
          <div className="view">
            <div id="ViewContainer fade-in">{curView()}</div>
          </div>
          <Footer />
        </div>
      </StyledApp>
    </>
  );
};

export default App;
