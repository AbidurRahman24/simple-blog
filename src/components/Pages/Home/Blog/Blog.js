import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../UseContext/UseContext';
import BlogCard from '../BlogCard/BlogCard';


const Blog = () => {
  const [users, setUsers] = useContext(UserContext)
  const ComponetBtn = styled.button`
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
    <div className='container'>
      <div className='row'>
        <div className="home-text" style={{padding: '50px 0px', textAlign:'center'}}>
          <h1 style={{color:'#409843', fontFamily: '"Merriweather", Helvetica, Arial, sans-serif'}}>Fusce rutrum volutpat faucibus</h1>
          <p>Onceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus 
            condimentum sit amet a augue. Sed non neque elit. 
            Sed ut imperdiet nisi. Proin condimentum fermentum nunc. 
            Etiam pharetra, erat sed fermentum feugiat, velit mauris 
            egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
        </div>
        {users.slice(0, 6).map((user) => (
          <div className='col-md-4 d-flex align-items-stretch'>
            <BlogCard user={user}></BlogCard>
          </div>
        ))}
        <div style={{textAlign:'center', padding:'15px'}}>
        <p >Fusce ac porttitor elit. In sed feugiat turpis, dictum semper ante. <br /> Phasellus luctus, sapien sit amet ullamcorper ultrices, tortor odio hendrerit ante, ut amet.</p>
        <ComponetBtn primary>Read more blog</ComponetBtn>
        </div>
      </div>
    </div>
  );
};

export default Blog;