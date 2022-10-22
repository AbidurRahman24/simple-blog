import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.css'
const Project = [
    {
        id: 1,
        des: 'Lorem ipsum dolor sit amet turpis in neque. Praesent consequat. Aliquam nulla. Aenean feugiat fermentum leo nec dui. In nec malesuada elit tincidunt at, nibh. Morbi et turpis. Duis ut diam. Aliquam tempus dignissim. Nunc condimentum magna ante, tincidunt in.',
        catagory: 'lorem',
    },
    {
        id: 2,
        des: 'Maecenas ut quam ut nonummy at, posuere cubilia Curae, Cras non orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam wisi eu lorem. Sed malesuada dolor. Morbi accumsan at, elit. Integer egestas, nunc.',
        catagory: 'hendreit',
    },
    {
        id: 3,
        des: 'Morbi id mi quam sed erat. Proin vulputate imperdiet, urna luctus sagittis. Vestibulum turpis in sollicitudin ac, laoreet hendrerit vitae, pellentesque auctor quis, justo. Aenean massa non placerat id, turpis. Duis eget elit ac turpis egestas. Cras congue, velit vitae.',
        catagory: 'buis',
    }
]
const ContactInfo = () => {
    const [text, setText] = useState(Project)


    const textFilter = (catagorytext) =>{
        const updateText = Project.filter((curElem)=>{
            return curElem.catagory === catagorytext
        })
        setText(updateText)
    }
    return (
        <Row>
            <Col sm={4}>
                <h3><b>Useful information</b></h3>
                <p>Mauris auctor eu nibh eget sagittis. Nam dignissim libero volutpat dignissim ornare.</p>
                <p>Cras eu ex ut arcu blandit bibendum. Mauris vel ipsum in nisl pellentesque ultrices sit amet et neque. Vivamus ornare massa sit amet dolor.</p>
            </Col>
            <Col sm={8}>
                <div className="contactinfo">
                    <div className="project-btn ">
                    <a className="m-2 p-2 btn btn-success" onClick={() => textFilter('lorem')}>Lorem ipsum</a>
                    <a className="m-2 p-2 btn btn-success" onClick={() => textFilter('hendreit')}>Hendreit due</a>
                    <a className="m-2 p-2 btn btn-success" onClick={() => textFilter('buis')}> Quam sed</a>
                </div>
                <div className="row ">
                    {
                        text.map(data => <>
                        <p>{data.des}</p>
                        </>)
                    }
                </div>
                </div>
            </Col>
        </Row>
    );
};

export default ContactInfo;