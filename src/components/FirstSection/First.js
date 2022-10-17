import React from 'react';
import { Button } from 'react-bootstrap';
import './First.css'
const First = () => {
    return (
        <div style={{paddingTop:'50px', paddingBottom:'50px',backgroundColor:'#a18e72'}}>
            <div className='container'>
            <div className='row'>
                <div className="col-md-4">
                <h3 style={{color: "#fff"}}>Some important news here</h3>
                </div>
                <div className="col-md-4">
                    <p className="line-header" ><hr style={{border: "1px solid #fff",opacity: '100'}}/></p>
                </div>
                <div className="col-md-4 text-center">
                    <Button style={{backgroundColor:'#ffffff',color:'#a18e72', border:'none', borderRadius:'0px',padding:'10px 15px'}}>View more details</Button>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default First;