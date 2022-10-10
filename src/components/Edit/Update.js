import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UseContext/UseContext';

const Edit = () => {
    const [users, setUser] = useContext(UserContext);
    const { id } = useParams();
    let user = users.filter((user) => user.id == id);

    const [name, setName] = useState(user[0].name);
    const [title, setTitle] = useState(user[0].title);
    const [description, setDescription] = useState(user[0].salary);

    const editName = (e) => {
        setName(e.target.value);
        const edited_name = name;
        user[0].name = edited_name;
    };

    const editTitle = (e) => {
        setTitle(e.target.value);
        const edited_title = title;
        user[0].title = edited_title;
    };

    const editDescription = (e) => {
        setDescription(e.target.value);
        const edited_description = description;
        user[0].description = edited_description;
    };

    const editUser = (e) => {
        e.preventDefault();
        setUser([...users]);
        // localStorage.setItem("lists", JSON.stringify(users));
        // window.location.reload();
    };
    return (
        <div className="edit">
            <Form>
                <Form.Group>
                    <Form.Label>
                        <h1>ID NO: {user[0].id}</h1>
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={editName}
                        placeholder={user[0].name}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="position"
                        // value={position}
                        onChange={editTitle}
                        placeholder={user[0].title}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="salary"
                        // value={salary}
                        onChange={editDescription}
                        placeholder={user[0].description}
                    />
                </Form.Group>
                <Link to="/">
                    <Button onSubmit={() => editUser} variant="primary" type="submit">
                        Edit User
                    </Button>
                    <Button className="action_btn" variant="info">
                        Back to Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Edit;