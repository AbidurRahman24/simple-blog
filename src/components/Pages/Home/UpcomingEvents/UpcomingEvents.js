import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { UserContext } from '../../../UseContext/UseContext';
import imges from './county-blogpost1.jpg'
const UpcomingEvents = () => {
    const [users, setUsers] = useContext(UserContext)
    return (
        <div style={{ backgroundColor: '#F5F1E9' }}>
            <div className="container">
                <div className="row" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="col-md-4 sm" style={{ textAlign: "left" }}>
                        <h3><FaMapMarkerAlt /></h3>
                        <h2 style={{ paddingTop: '20px', paddingBottom: '20px' }} >See the upcoming events now</h2>
                        <Button style={{ backgroundColor: '#a18e72', color: '#fff', border: 'none', borderRadius: '0px', padding: '10px 15px' }}>View more details</Button>
                    </div>
                    <div className="col-md-4 sm">
                        <img src={imges} alt="" style={{ width: '100%' }} />
                        <h3>Cras efficitur nisl vel</h3>
                        <div style={{ display: 'flex' }}>
                            <p><FaRegClock /></p>
                            <p style={{ padding: '0px 15px' }}>{(new Date().getFullYear())}</p>
                        </div>
                    </div>
                    <div className="col-md-4 sm">
                        {users.slice(0, 3).map((user) => (
                            <div style={{ textAlign: 'left', display: 'flex', padding: '10px 5px' }} >
                                <img style={{ height: '100px', width: '100px', border: '1px solid #F5F1E9' }} src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg' alt="" />
                                <div style={{ padding: '5px 15px' }}>
                                    <h3 >{user.title}</h3>
                                    <div style={{ display: 'flex' }}>
                                        <p><FaRegClock /></p>
                                        <p style={{ padding: '0px 15px' }}>{new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate()}</p>
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

export default UpcomingEvents;