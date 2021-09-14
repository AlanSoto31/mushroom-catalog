import React from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mushroomList from '../Components/mushrooms';

const MushroomDet = () => {
  const { id } = useParams();
  const mushDet = mushroomList.find((mushroom) => mushroom.id === parseInt(id, 10));

  return (
    <>
      <Container>
        <Card className="mt-5">
          <Row className="g-0">
            <Col md={5}>
              <Card.Img className="mushroomDet-card-img" variant="top" src={mushDet.img_url} />
            </Col>
            <Col md={7}>
              <div className="text-center">
                <p className="card-title cardDetailTitle">{mushDet.name}</p>
                <span className="fw-bold">{mushDet.scientific_name}</span>
              </div>

              <Card.Body>
                <Card.Text>
                  {mushDet.description}
                </Card.Text>
                <Card.Text>
                  {mushDet.edibility}
                </Card.Text>
                <Card.Text>
                  {mushDet.location}
                </Card.Text>
                <Card.Text>
                  {mushDet.dimensions}
                </Card.Text>
                <a href={mushDet.wiki_url} target="_blank" rel="noreferrer">More details...</a>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default MushroomDet;
