import React, { useContext } from 'react';
import {Button, Table} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { UserContext } from '../UseContext/UseContext';
import './Home.css'


const Home = () => {
  const [users, setUsers] = useContext(UserContext)
  
  console.log(users);
    return (
        <div>
          
            <Link to="/create">
        <Button className="create__btn" variant="primary">
          Create User
        </Button>
      </Link>
            <Table striped bordered hover>
      <thead>
        <tr>
        <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.title}</td>
              <td>{user.description}</td>
              <td>
                <Link to={"/details/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Details
                  </Button>
                </Link>
                <Link to={"/edit/"+user.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>
                <Link to={"/delete/"+user.id}>
                <Button className="action__btn" variant="danger">
                  Delete
                </Button>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
        </div>
    );
};

export default Home;