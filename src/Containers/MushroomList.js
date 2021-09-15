import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux';
import Mushroom from '../Components/Mushroom';
import { fetchMushroomList } from '../Redux/Actions/index';

const MushroomList = () => {
  const dispatch = useDispatch();
  const mushroomList = useSelector((state) => state.mushrooms.list);
  const mushrooms = mushroomList.map(
    (mushroom) => <Mushroom key={mushroom.name} mushroom={mushroom} />,
  );

  useEffect(() => {
    dispatch(fetchMushroomList());
  }, []);

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
