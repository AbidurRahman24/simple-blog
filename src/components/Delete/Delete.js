import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UseContext/UseContext';
import { Button, Modal } from "react-bootstrap";

const Delete = () => {
    const [users, setUsers] = useContext(UserContext)
    // console.log(users);
    const {id} = useParams()
    const deleteUser =(id)=>{
        const user = users.filter((user)=> user.id !== id)
        // user.JSON.parse(localStorage.getItem('lists'))
        setUsers([...user])
        localStorage.setItem("lists", JSON.stringify(user));
    }
    // console.log(id);
    return (
        <div>
           <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="delete__btn" variant="info">Cancel</Button>
            <Button onClick={() => deleteUser(id)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
        </div>
    );
};

export default Delete;