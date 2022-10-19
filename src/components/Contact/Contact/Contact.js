import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Contact = () => {
    const Wripper = styled.section`
    padding-top: 50px;
    padding-bottom: 50px
    `
    const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;
    return (
        <Wripper>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h5>Send us
                            a message</h5>
                        <p>Imperdiet, vel egestas augue pharetra. Vivamus viverra varius porttitor. Aliquam nec purus.</p>
                        <p>In sed libero convallis, finibus turpis ac, mollis quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </Col>
                    <Col sm={8}>
                        <div>
                            <input />
                            <Button primary>Primary</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wripper>
    );
};

export default Contact;