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
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [users, setUsers] = useContext(UserContext);
    // add data to localStorage
    useEffect(()=>{
        localStorage.setItem('lists', JSON.stringify(users))
    },[users])

    const updateId = (e) => {
        setId(e.target.value);
        console.log(id)
      };
    
      const updateTitle = (e) => {
        setTitle(e.target.value);
      };
    
      const updateDescription = (e) => {
        setDescription(e.target.value);
      };
    
      const updateName = (e) => {
        setName(e.target.value);
      };
      const addUser = (e) => {
        
        e.preventDefault();
      setUsers([...users, {id:id, title:title, description:description, name:name}])
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
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={title}
                        onChange={updateTitle}
                        placeholder="Enter Post Title"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={description}
                        onChange={updateDescription}
                        placeholder="Write Description"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                        placeholder="Author Name"
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