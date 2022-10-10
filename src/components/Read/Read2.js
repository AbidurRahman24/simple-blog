import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UseContext/UseContext';
import './Read.css'

const Read = () => {
    const [users, setUsers] = useContext(UserContext)
    const { id } = useParams()
    const user = users.filter((user) => user.id == id)
    console.log(user);
    return (
        <div>
            <div className="read">
                <h1>ID: {user[0].id}</h1>
                <h1>Name: {user[0].name}</h1>
                <h1>Title: {user[0].title}</h1>
                <h1>Description: {user[0].description}</h1>
                <Link to="/">
                    <Button variant="info">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Read;