import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../UseContext/UseContext';
import './Create.css'
// const getLocalItems = ()=>{
//     let list = localStorage.getItem('lists')
//     console.log(list);
//     if(list){
//         return JSON.parse(localStorage.getItem('lists'))
//     }
//     else{
//         return [];
//     }
//   }
const Create = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [users, setUsers] = useContext(UserContext);
    // add data to localStorage
    useEffect(()=>{
        localStorage.setItem('lists', JSON.stringify(users))
    },[users])

    const updateId = (e) => {
        setId(e.target.value);
        console.log(id)
      };
    
      const updateName = (e) => {
        setName(e.target.value);
      };
    
      const updatePosition = (e) => {
        setPosition(e.target.value);
      };
    
      const updateSalary = (e) => {
        setSalary(e.target.value);
      };
      const addUser = (e) => {
        
        e.preventDefault();
      setUsers([...users, {id:id, name:name, position:position, salary:salary}])
      alert("created")
     }
    return (
        <div className="create">
            <Form onSubmit={addUser}>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        value={id}
                        onChange={updateId}
                        placeholder="Enter ID"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                        placeholder="Enter Name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                        type="text"
                        name="position"
                        value={position}
                        onChange={updatePosition}
                        placeholder="Enter Position"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                        type="text"
                        name="salary"
                        value={salary}
                        onChange={updateSalary}
                        placeholder="Enter Salary"
                    />
                </Form.Group>
                <Button className="action_btn" variant="primary" type="submit">
                    Create User
                </Button>
                <Link to="/">
                    <Button className="action_btn" variant="info">
                        Back to Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Create;