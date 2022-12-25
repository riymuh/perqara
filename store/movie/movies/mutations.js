export default {
  setMovies(state, data) {
    if (data.load_more) {
      state.data = [...state.data, ...data.movies];
    } else {
      state.data = data.movies;
    }
  },
  setMovie(state, data) {
    state.movie_detail = data;
  },
  setReviews(state, data) {
    state.reviews = data;
  },
  setMoviesRecommendation(state, data) {
    state.recommendations = data.movies;
  },
  setDiscoverMovies(state, data) {
    state.discover_movies = data.movies;
  },
};
