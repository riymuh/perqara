export default {
  fetchMovies({ commit }, param = null) {
    return new Promise((resolve, reject) => {
      let sort = "popular";
      let page = 1;
      let load_more = false;
      if (param) {
        sort = param.sort;
        page = param.page;
        load_more = param.load_more;
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
            let data = {
              movies: res.results,
              load_more: load_more,
            };
            commit("setMovies", data);
            resolve("success");
          }, 2000);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  fetchReviews({ commit }, param) {
    console.log(param);
    this.$axios
      .$get(
        "https://api.themoviedb.org/3/movie/" +
          param.movie_id +
          "/reviews?api_key=84592cf2007007a499b04d12d281c100"
      )
      .then((res) => {
        console.log(res.results);
        setTimeout(function () {
          commit("setReviews", res.results);
          resolve("success");
        }, 2000);
      })
      .catch((error) => {
        //reject(error);
      });
  },
};
