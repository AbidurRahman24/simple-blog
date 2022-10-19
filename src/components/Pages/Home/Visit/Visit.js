import { Button } from 'react-bootstrap';
import classes from './Visit.modules.css'
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { useContext } from 'react';
import image from './county-blogpost8.jpg'
import { UserContext } from '../../../UseContext/UseContext';

const Visit = () => {
    const [users, setUsers] = useContext(UserContext)
    return (
        <div style={{ backgroundColor: '#F5F1E9' }}>
            <div className="container">
                <div className="row" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                        <h3><FaMapMarkerAlt /></h3>
                        <h2 style={{ paddingTop: '20px', paddingBottom: '20px' }} >Places worth visiting <br /> Lorem ipsum dolor sit amet, consectetur</h2>
                        <Button style={{ backgroundColor: '#a18e72', color: '#fff', border: 'none', borderRadius: '0px', padding: '10px 15px' }}>View more details</Button>
                    </div>
                    <div className="col-md-6">
                        {users.slice(0, 3).map((user) => (
                            <div style={{textAlign: 'left', display:'flex', padding:'10px 5px'}} >
                            <img style={{height:'100px', width:'100px', border:'1px solid #F5F1E9'}} src={image} alt="" />
                                <div style={{padding:'5px 15px'}}>
                                <h3 >{user.title}</h3>
                                <div style={{display:'flex'}}>
                                <p><FaRegClock /></p>
                                <p style={{ padding:'0px 15px'}}>{(new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate())}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;