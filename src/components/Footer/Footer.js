import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaGooglePlus, FaLinkedin, FaPinterest, FaRegClock, FaTwitter, } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../UseContext/UseContext';
import './Footer.css'
const Footer = () => {
  const [users, setUsers] = useContext(UserContext)
  const FooterDescription = styled.h5`
  font-size: 1em;
  text-align: center;
  color: #fff;
`;
  const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 30px;
  background: #0D6526;
  color: #fff
`;


  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={{ order: 'first' }}>
            <h4>Travel</h4>
            <p>Duis dictum eleifend tortor at scelerisque. Sed elementum augue eu.</p>
            <div >
              <span className='social-icon'><FaFacebook /> </span>
              <span className='social-icon'><FaGooglePlus /> </span>
              <span className='social-icon'><FaTwitter /> </span>
              <span className='social-icon'><FaPinterest /> </span>
              <span className='social-icon'><FaLinkedin /> </span>
            </div>
            <div style={{padding:'10px 0px'}}>
              Contact us: +61 (0) 3 8376 6284
              Write us: noreply@envato.com
            </div>
          </Col>
          <Col xs>
            <h4>Recent posts</h4>
            {users.slice(0, 2).map((user) => (
                            <div style={{textAlign: 'left', display:'flex', padding:'10px 5px'}} >
                            <img style={{height:'100px', width:'100px', border:'1px solid #F5F1E9'}} src=' ' alt="" />
                                <div style={{padding:'5px 15px'}}>
                                <h6 >{user.title}</h6>
                                <div style={{display:'flex'}}>
                                <p><FaRegClock /></p>
                                <p style={{ padding:'0px 15px'}}>{(new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate())}</p>
                                </div>
                                </div>
                            </div>
                        ))}
          </Col>
          <Col xs={{ order: 'first' }}>
            <h4>Programs</h4>
            <p>Vitae adipiscing turpis. Aenean ligula nibh in, molestie id viverra a, dapibus at dolor elit lectus felis.</p>
            <p><Link  style={{textDecoration:'underline', color:'#fff'}} to={'/'} >Our Blog</Link> <br /> <Link style={{textDecoration:'underline', color:'#fff'}} to={'/'} >About US</Link> <br /><Link style={{textDecoration:'underline', color:'#fff'}} to={'/'} >Contact US</Link></p>
           
          </Col>
          <Col xs={{ order: 'last' }}>
            <h4>The company</h4>
            <p>Nulla risus ante, luctus et placerat quis, efficitur nec nisl. Cras iaculis tristique.</p>
            <p>Etiam at nibh turpis! Vestibulum mattis risus eget dolor finibus, ut luctus est congue. Ut sit amet interdum erat; quis malesuada lacus. Sed mauris diam, sodales a imperdiet ut.</p>
          </Col>

        </Row>
        
      </Container>
<hr />
        <FooterDescription>
          © {(new Date().getFullYear())} Travel Blog and Event by Abidur Rahman | All Rights Reserved | Powered by React
        </FooterDescription>
    </Wrapper>
  );
};

export default Footer;