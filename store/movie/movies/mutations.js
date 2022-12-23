export default {
  setMovies(state, movies) {
    state.data = [...state.data, ...movies];
  }
}