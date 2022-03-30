/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import { STYLE_CONSTANTS, WORK_DETAILS } from '../constants';

const { mediaMinWidth, baseColor } = STYLE_CONSTANTS;

const StyledWork = styled.div`
  .SampleBox {
    width: 50vw;
    height: auto;
    position: relative;

    @media (max-width: ${mediaMinWidth}) {
      width: 100vw;
    }

    .sample {
      margin-bottom: 30px;
    }

    .iframe {
      @media (max-width: ${mediaMinWidth}) {
        display: inline-block;
      }

      width: 99%;
      height: 60vh;
      position: relative;
      border-style: solid;
      border-color: #838383;
      border-radius: 1rem;
      border-width: 1px;
    }

    .worktext {
      width: 100%;
      word-wrap: break-word;
      height: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: left;
    }

    .hLine {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #000;
      line-height: 1vh;
      margin: 10px 0 20px;
      span {
        color: black;
        background: ${baseColor};
        padding: 0 10px;
        offset: 10px;
      }
    }
  }
`;

export default function Work() {
  return (
    <StyledWork>
      <div className="SampleBox fade-in">
        {WORK_DETAILS.map((e) => (
          <WorkExample key={e.title} params={e} />
        ))}
      </div>
    </StyledWork>
  );
}

const WorkExample = ({ params }) => {
  const { src, href, title, blurb, tech } = params;

  return (
    <div className="sample">
      <div className="hLine">
        <span>{title}</span>
      </div>
      {src ? (
        <iframe className="iframe" type="text/html" src={src} title={title} />
      ) : null}
      <span className="worktext">
        <a href={href}>{title}</a>
        {blurb}
      </span>
      <br />
      <span>
        Technologies: <b>{`${tech}`}</b>
      </span>
    </div>
  );
};
