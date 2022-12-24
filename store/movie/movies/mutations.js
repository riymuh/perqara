export default {
  setMovies(state, data) {
    if (data.load_more) {
      state.data = [...state.data, ...data.movies];
    } else {
      state.data = data.movies;
    }
  },
};
