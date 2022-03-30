import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

import { SOCIAL_URLS } from "../constants";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  margin-bottom: 10px;
`;

const size = 60;
const margin = 7;

const Footer = () => {
  const style = {
    height: size,
    width: size,
    marginLeft: margin,
    marginRight: margin,
  };
  return (
    <StyledFooter>
      {Object.values(SOCIAL_URLS).map((url) => (
        <SocialIcon key={url} style={style} url={url} />
      ))}
    </StyledFooter>
  );
};

export default Footer;
