import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Footer = () => {
    const Title = styled.h5`
  font-size: 1em;
  text-align: center;
  color: #fff;
`;

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
  padding: 1em;
  background: #0D6526;
`;

    return (
        <Wrapper>
            <Row>
        <Col xs={{ order: 'last' }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: 'first' }}>Third, but first</Col>
        <Col xs={{ order: 'first' }}>Third, but first</Col>
      </Row>
                <Title>
                    © {(new Date().getFullYear())} Travel Blog and Event by Abidur Rahman | All Rights Reserved | Powered by React
                </Title>
        </Wrapper>
    );
};

export default Footer;