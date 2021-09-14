import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Mushroom = ({ mushroom }) => (
  <Col sm={12} md={6} lg={4} className="mb-4">
    <Card className="h-100">
      <Card.Img variant="top" className="mushroomList-card-img" src={mushroom.img_url} />
      <Card.Title className="font-weight-bold text-center mt-4">
        <Link className="card-title cardTitle" to={`/${mushroom.id}`}>
          {mushroom.name}
        </Link>
        <p>{mushroom.scientific_name}</p>
      </Card.Title>
      <Card.Body className="d-flex flex-column justify-content-end ">
        <Card.Text>
          <span>
            {mushroom.edibility}
          </span>
        </Card.Text>
        <Card.Text>
          <span>
            {mushroom.description}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

Mushroom.propTypes = {
  mushroom: PropTypes.shape({
    /* id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]), */
    id: PropTypes.number,
    name: PropTypes.string,
    img_url: PropTypes.string,
    edibility: PropTypes.string,
    description: PropTypes.string,
    scientific_name: PropTypes.string,
  }).isRequired,
};

export default Mushroom;
