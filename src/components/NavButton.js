import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  width: 10vh;
  font-size: 2.5vh;
  cursor: pointer;
`;

const NavButton = ({ value = '', onClick = () => {} }) => {
  return (
    <StyledButton>
      <div value={value} onClick={onClick}>
        {value}
      </div>
    </StyledButton>
  );
};

export default NavButton;
