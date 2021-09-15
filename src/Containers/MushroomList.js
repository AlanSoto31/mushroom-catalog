import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import Mushroom from '../Components/Mushroom';

const MushroomList = () => {
  const mushroomList = useSelector((state) => state.mushrooms.list);
  const mushrooms = mushroomList.map(
    (mushroom) => <Mushroom key={mushroom.name} mushroom={mushroom} />,
  );

  return (
    <>
      <Container className="mt-4">
        <Row className="g-4">
          { mushrooms }
        </Row>
      </Container>
    </>
  );
};

export default MushroomList;
