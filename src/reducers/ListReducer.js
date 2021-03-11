import {
  FILTER,
  SET_PAGE,
  SET_SORT,
  SONGS_LIST_LOADED,
} from '../actions/ListActions';

const initialState = {
  songs: [],
  activeSongs: [],
  pages: [],
  selectedPage: 0,
  songsToShow: [],
  sort: '',
  sortAsc: false,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SONGS_LIST_LOADED:
      const pages = getPages(action.payload);

      return {
        ...state,
        songs: action.payload,
        activeSongs: action.payload,
        pages,
        selectedPage: 1,
        songsToShow: getSongsToShow(action.payload, 1),
      };
    case SET_PAGE:
      return {
        ...state,
        selectedPage: action.payload,
        songsToShow: getSongsToShow(state.activeSongs, action.payload),
      };
    case SET_SORT:
      let newSort = action.payload;

      // to sort again asc next time
      let sortAsc;
      if (newSort === state.sort) {
        sortAsc = !state.sortAsc;
      } else {
        sortAsc = true;
      }

      const sortedSongs = sortSongs(state.activeSongs, action.payload, sortAsc);

      return {
        ...state,
        selectedPage: 1,
        songs: sortedSongs,
        sort: newSort,
        sortAsc: sortAsc,
        songsToShow: getSongsToShow(sortedSongs, 1),
      };
    case FILTER:
      if (!action.payload) {
        return {
          ...state,
          activeSongs: [...state.songs],
          selectedPage: 1,
          pages: getPages(state.songs),
          songsToShow: getSongsToShow(state.songs, 1),
        };
      } else {
        const filtered = filterSongs(state.songs, action.payload.toLowerCase());
        return {
          ...state,
          activeSongs: filtered,
          selectedPage: 1,
          pages: getPages(filtered),
          songsToShow: getSongsToShow(filtered, 1),
        };
      }
    default:
      return state;
  }
};

const getPages = (items) => {
  const count = Math.ceil(items.length / 50);
  const pages = [];
  for (let number = 1; number <= count; number++) {
    pages.push(number);
  }
  return pages;
};

const getSongsToShow = (songs, page) => {
  const start = (page - 1) * 50;
  return songs.slice(start, start + 50);
};

const sortSongs = (songs, column, asccending) => {
  let field = '';
  switch (column) {
    case 'Artist':
      field = 'artist';
      break;
    case 'Track Name':
      field = 'name';
      break;
    case 'Album':
      field = 'album';
      break;
    case 'Duration':
      field = 'duration';
      break;
    default:
      return songs;
  }

  let sorted;
  if (field === 'duration') {
    sorted = songs.sort((a, b) => (a[field] >= b[field] ? 1 : -1));
  } else {
    sorted = songs.sort((a, b) =>
      a[field].toLowerCase() >= b[field].toLowerCase() ? 1 : -1
    );
  }
  return asccending ? sorted : sorted.reverse();
};

const filterSongs = (songs, query) => {
  return songs.filter((song) => {
    const time = new Date(song.duration);
    const timeStr = `${time.getUTCMinutes()} : ${time.getUTCSeconds()}`;

    return (
      song.name.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      song.album.toLowerCase().includes(query) ||
      timeStr.toString().toLowerCase().includes(query)
    );
  });
};
