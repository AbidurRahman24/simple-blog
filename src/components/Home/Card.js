import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const BlogCard = ({user}) => {
    // const {id, title, description, name} = props.user

    return (
        <div>
            <Card border="secondary" style={{ width: '18rem' }} className="h-100">
      <Card.Header>Post ID : {user.id}</Card.Header>
      <Card.Body>
        <Card.Title>{user.title}</Card.Title>
        <Card.Text>
          {user.description.slice(0, 100)+'...'}
        </Card.Text>
        <Card.Text> Author Name : {` `}
          {user.name}
        </Card.Text>
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
      </Card.Body>
    </Card>
        </div>
    );
};

export default BlogCard;