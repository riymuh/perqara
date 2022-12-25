export default {
  setGenres(state, genres) {
    state.data = genres;
  },
  setGenresForNavbar(state, genres) {
    state.navbar_genres = genres;
  },
};
