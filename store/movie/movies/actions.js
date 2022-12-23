export default {
  fetchMovies({commit}, param) {
      return new Promise((resolve, reject) => {
        this.$axios
              .$get(
                "https://api.themoviedb.org/3/movie/" + param.sort + "?page=" + param.page + "&api_key=84592cf2007007a499b04d12d281c100"
              )
              .then((res) => {
                console.log(res)
                commit('setMovies', res.results)
                resolve("success")
              })
              .catch((error) => {
                reject(error)
              });
      })
  }
}