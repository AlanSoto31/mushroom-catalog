import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Mushroom from '../Components/Mushroom';
import { fetchMushroomList } from '../Redux/Actions/index';
import Filter from '../Components/Filter';

const MushroomList = () => {
  const dispatch = useDispatch();
  const mushroomList = useSelector((state) => state.mushrooms.list);
  const error = useSelector((state) => state.mushrooms.error);
  const loading = useSelector((state) => state.mushrooms.loading);
  const [edibility, setEdibility] = useState('ALL');

  useEffect(() => {
    dispatch(fetchMushroomList());
  }, []);

  const handleChangeFilter = (value) => {
    setEdibility(value);
  };

  const mushrooms = mushroomList.filter((mushroom) => mushroom.edibility === edibility || edibility === 'ALL').map(
    (mushroom) => <Mushroom key={mushroom.name} mushroom={mushroom} />,
  );

  if (!error) {
    return (
      <>
        <Container className="mt-4">
          { loading ? (
            <div className="d-flex justify-content-between align-content-center">
              <Filter onChangeFilter={handleChangeFilter} />
            </div>
          ) : '' }
          <Row className="g-4 mt-2">
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
