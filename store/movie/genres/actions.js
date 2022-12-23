export default {
    fetchGenres({commit}) {
        return new Promise((resolve, reject) => {
            this.$axios
                .$get(
                    "https://api.themoviedb.org/3/genre/movie/list?api_key=84592cf2007007a499b04d12d281c100"
                )
                .then((res) => {
                    commit('setGenres', res.genres)
                    resolve("success")
                })
                .catch((error) => {
                    reject("something went wrong")
            });
        })
    }
  }