import './ListHeader.css';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../actions/ListActions';
import { HeaderLabel } from '../../components/HeaderLabel/HeaderLabel';
import { getSort, getSortAsc } from '../../selectors/ListSelectors';

export const ListHeader = () => {
  const dispatch = useDispatch();

  const sort = useSelector(getSort);
  const sortAsc = useSelector(getSortAsc);

  const handleColumnClick = (event) => {
    dispatch(setSort(event.target.innerText));
  };

  return (
    <Row className="header bg-primary">
      <Col md={1}>
        <HeaderLabel label="Cover" handleCLick={handleColumnClick} />
        {/*<span onClick={handleColumnClick}>Cover</span>
        <img src={ArrowUp} alt="Sort" width="16" height="16" />*/}
      </Col>
      <Col md={3}>
        <HeaderLabel
          label="Track Name"
          handleCLick={handleColumnClick}
          sort={sort}
          sortAsc={sortAsc}
        />
      </Col>
      <Col md={3}>
        <HeaderLabel
          label="Album"
          handleCLick={handleColumnClick}
          sort={sort}
          sortAsc={sortAsc}
        />
      </Col>
      <Col md={3}>
        <HeaderLabel
          label="Artist"
          handleCLick={handleColumnClick}
          sort={sort}
          sortAsc={sortAsc}
        />
      </Col>
      <Col md={2}>
        <HeaderLabel
          label="Duration"
          handleCLick={handleColumnClick}
          sort={sort}
          sortAsc={sortAsc}
        />
      </Col>
    </Row>
  );
};
