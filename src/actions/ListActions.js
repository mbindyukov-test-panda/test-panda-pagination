import { getSongs } from '../api/api';
import mock from '../mock.json';

export const SONGS_LIST_LOADED = 'GET_SONGS_LIST';
export const SET_PAGE = 'SET_PAGE';
export const SET_SORT = 'SET_SORT';
export const FILTER = 'FILTER';

export const getSongsList = () => {
  return (dispatch) => {
    // if there are some issues with api (i.e. token not valid anymore -> read mocks)
    fetchSongs()
      .then((songs) => {
        dispatch({
          type: SONGS_LIST_LOADED,
          payload: songs,
        });
      })
      .catch(() => {
        dispatch({
          type: SONGS_LIST_LOADED,
          payload: mock,
        });
      });
    /*.then((details) =>

    );*/
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const setSort = (column) => {
  return {
    type: SET_SORT,
    payload: column,
  };
};

export const filter = (query) => {
  return {
    type: FILTER,
    payload: query,
  };
};

// workaround to avoid spotify restrictions (items limit and requests limits)
const fetchSongs = async () => {
  const queryList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  let songs = [];
  for (let query of queryList) {
    const querySongs = await getSongs(query);
    songs.push(...querySongs.tracks.items);
  }

  songs = songs.map((song) => ({
    cover: song.album.images[2].url,
    name: song.name,
    album: song.album.name,
    artist: song.artists[0].name,
    duration: song.duration_ms,
  }));

  return songs;

  /*  const songsPromises = [
    getSongs('a'),
    getSongs('b'),
    getSongs('c'),
    getSongs('d'),
    getSongs('e'),
    getSongs('f'),
    getSongs('g'),
    getSongs('h'),
  ];

  Promise.all(songsPromises).then((songsLists) => {
    let songs = [];
    songsLists.forEach((list) => {
      songs.push(...list);
    });
  });*/
};
