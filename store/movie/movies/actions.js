export default {
  fetchMovies({ commit }, param = null) {
    return new Promise((resolve, reject) => {
      let sort = "popular";
      let page = 1;
      if (param) {
        sort = param.sort;
        page = param.page;
      }
      this.$axios
        .$get(
          "https://api.themoviedb.org/3/movie/" +
            sort +
            "?page=" +
            page +
            "&api_key=84592cf2007007a499b04d12d281c100"
        )
        .then((res) => {
          setTimeout(function () {
            commit("setMovies", res.results);
            resolve("success");
          }, 2000);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
