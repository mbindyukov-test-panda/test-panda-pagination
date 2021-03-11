import './ListWrapper.css';
import { Row, Col, Pagination } from 'react-bootstrap';
import { ListHeader } from '../ListHeader/ListHeader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, getSongsList, setPage } from '../../actions/ListActions';
import { List } from '../../components/List/List';
import {
  getPages,
  getSelectedPage,
  getSongsToShow,
  getSortAsc,
} from '../../selectors/ListSelectors';

export const ListWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsList());
  }, []);

  const songs = useSelector(getSongsToShow);
  const pages = useSelector(getPages);
  const selectedPage = useSelector(getSelectedPage);

  const handleItemClick = (event) => {
    dispatch(setPage(+event.target.innerText));
  };

  const handleFirstClick = (event) => {
    dispatch(setPage(1));
  };

  const handleLastClick = (event) => {
    dispatch(setPage(pages.length));
  };

  const handleFilter = (event) => {
    dispatch(filter(event.target.value));
  };

  return (
    <Row className="list-wrapper">
      <Col md={{ span: 8, offset: 2 }}>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Type to filter..."
          onInput={handleFilter}
        />
        <ListHeader />
        {songs.length > 0 ? <List items={songs}></List> : <div></div>}
        <div className="d-flex justify-content-center mt-4">
          <Pagination size="lg" className="pagination">
            <Pagination.First onClick={handleFirstClick} />
            {pages.map((number) => (
              <Pagination.Item
                onClick={handleItemClick}
                active={number === selectedPage ? true : false}
                key={number}
              >
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Last onClick={handleLastClick} />
          </Pagination>
        </div>
      </Col>
    </Row>
  );
};
