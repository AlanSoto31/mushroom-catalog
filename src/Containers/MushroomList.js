import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Mushroom from '../Components/Mushroom';
import { fetchMushroomList } from '../Redux/Actions/index';

const MushroomList = () => {
  const dispatch = useDispatch();
  const mushroomList = useSelector((state) => state.mushrooms.list);
  const mushrooms = mushroomList.map(
    (mushroom) => <Mushroom key={mushroom.name} mushroom={mushroom} />,
  );
  const error = useSelector((state) => state.mushrooms.error);
  const loading = useSelector((state) => state.mushrooms.loading);

  useEffect(() => {
    dispatch(fetchMushroomList());
  }, []);

  if (!error) {
    return (
      <>
        <Container className="mt-4">
          <Row className="g-4">
            { loading ? mushrooms : (
              <Col className="d-flex justify-content-center spinner">
                <Spinner
                  animation="border"
                  role="status"
                />
              </Col>
            ) }
          </Row>
        </Container>
      </>
    );
  }
  return <h1 className="mt-5 d-flex justify-content-center">{error}</h1>;
};

export default MushroomList;
