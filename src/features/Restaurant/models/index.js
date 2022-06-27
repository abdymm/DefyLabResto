import { restaurant } from '@Services';
const { fetch } = restaurant;
export default {
  state: {
    data: null,
    favData: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    request(prevState) {
      return {
        ...prevState,
        data: null,
        isFetching: true,
        error: false,
      };
    },
    success(prevState, payload) {
      return {
        ...prevState,
        data: payload,
        isFetching: false,
        error: true,
      };
    },
    failure(state) {
      return {
        ...state,
        data: null,
        isFetching: false,
        error: true,
      };
    },
    clearState() {
      return {
        data: null,
        isFetching: false,
        error: false,
        favData: [],
      };
    },
    favorite(state, payload) {
      // i need to create new object to store fav list, to persist it
      // since we dont store it in server
      const { favData } = state;
      const foundFavData = favData.find(item => item.id === payload.id);
      return {
        ...state,
        favData: foundFavData
          ? favData.filter(item => item.id !== payload.id)
          : [...favData, payload],
      };
    },
  },
  effects: {
    async fetch(payload) {
      this.request();
      return fetch(payload)
        .then(response => {
          this.success(response?.data?.results?.items);
        })
        .catch(error => {
          this.failure(error);
        });
    },
    toggleFavorite(payload) {
      this.favorite(payload);
    },
    async clear() {
      this.clearState();
    },
  },
};
