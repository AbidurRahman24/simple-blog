import React from 'react';
import styled from 'styled-components';

const Button = () => {
    const Button = styled.button`
  background: ${props => props.primary ? "#54AA29" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.50em 1em;
  border: none;
  border-radius: 3px;
  width:70%
  `
    return (
        <>
            <Button>Submit</Button>
        </>
    );
};

export default Button;