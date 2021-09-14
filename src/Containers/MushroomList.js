import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Mushroom from '../Components/Mushroom';
import mushroomList from '../Components/mushrooms';

const MushroomList = () => {
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
