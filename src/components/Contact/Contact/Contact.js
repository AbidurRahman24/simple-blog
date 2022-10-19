import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';

const Contact = () => {
    const Wripper = styled.section`
    padding-top: 50px;
    padding-bottom: 50px
    `
    const Button = styled.button`
    background: ${props => props.primary ? "#54AA29" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em 0em;
    padding: 0.25em 1em;
    border: 2px solid #54AA29;
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
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3 mt-3" >
                                    <Form.Control placeholder="Subject" />
                                </Form.Group>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                                <Button primary>Send a message</Button>
                            </Form>

                        </div>
                    </Col>
                </Row>
                {/* 2nd */}
                <ContactInfo />
            </Container>
        </Wripper>
    );
};

export default Contact;