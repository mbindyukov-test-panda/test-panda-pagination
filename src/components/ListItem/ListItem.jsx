import './ListItem.css';
import { Col, Row } from 'react-bootstrap';

export const ListItem = ({ item }) => {
  const time = new Date(item.duration);

  return (
    <Row className="list-item" key={`${item.name}${item.album}${item.artist}`}>
      <Col md={1}>
        <img src={item.cover} alt="cover" />
      </Col>
      <Col md={3}>
        <span>{item.name}</span>
      </Col>
      <Col md={3}>
        <span>{item.album}</span>
      </Col>
      <Col md={3}>
        <span>{item.artist}</span>
      </Col>
      <Col md={2}>
        <span>
          {time.getUTCMinutes()} : {time.getUTCSeconds()}
        </span>
      </Col>
    </Row>
  );
};
