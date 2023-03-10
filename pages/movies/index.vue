<template>
  <div class="bg-gray-900">
    <!-- background highlight -->
    <div class="bg-gray-800 w-full h-64 absolute z-0"></div>
    <!-- background highlight -->
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20">
      <div class="flex justify-between mb-12 relative">
        <div class="border-t-4 border-red-700 pt-4">
          <h1 class="text-white text-3xl font-bold">{{ title_page }}</h1>
        </div>
      </div>
      <div class="flex gap-8 relative">
        <div class="shrink w-1/4">
          <div
            class="
              max-w-sm
              py-6
              bg-gray-900
              rounded-lg
              shadow-md
              grid grid-cols-1
            "
          >
            <a href="#" class="mb-2.5 mx-6">
              <h5 class="mb-2 text-1xl font-bold tracking-tight text-white">
                Sort Result By
              </h5>
            </a>
            <select
              id="countries"
              class="
                bg-gray-700
                text-gray-100 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                p-2.5
                my-2.5
                mx-6
              "
              @change="filterMovies"
            >
              <PagesMoviesSortDropDown
                v-for="(sort, index) in sorts_dropdown"
                :key="index"
                :sort="sort"
              />
            </select>
            <a href="#" class="my-2.5 mx-6">
              <h5 class="mb-2 text-1xl font-bold tracking-tight text-white">
                Genres
              </h5>
            </a>

            <ul
              class="text-sm text-gray-700 dark:text-gray-200 my-2.5 mx-6"
              aria-labelledby="dropdownSearchButton"
              v-if="genres.length !== 0"
            >
              <PagesMoviesGenreCard
                v-for="(genre, index) in genres"
                :key="index"
                :genre="genre"
              />
            </ul>
            <div class="text-center" v-else>
              <ReuseableSpinner />
            </div>
          </div>
        </div>
        <div class="relative w-full">
          <div
            class="grid grid-cols-4 gap-5 items-center justify-between"
            v-if="movies.length !== 0"
          >
            <PagesMoviesMovieCard
              v-for="(movie, index) in movies"
              :key="index"
              :movie="movie"
            />
          </div>
          <div class="text-center" v-else>
            <ReuseableSpinner />
          </div>
          <div class="text-center mt-8" v-if="movies.length !== 0">
            <button
              type="button"
              @click="loadMore()"
              class="
                text-white
                bg-red-700
                hover:bg-red-800
                font-medium
                rounded-full
                text-sm
                px-5
                py-1
                text-center
                flex
                mx-auto
              "
            >
              <ReuseableSpinner v-if="load_more_spinner" />
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "MoviesPage",
  mounted() {
    this.getMovies();
    this.getGenres();
  },
  data() {
    return {
      title_page: "Movies",
      movies: [],
      genres: [],
      pages: 1,
      sorts_dropdown: this.$store.state.movie.sort.data,
      sort_selected: "popular", //default
      load_more: true,
      load_more_spinner: false,
    };
  },
  methods: {
    getMovies() {
      this.$store
        .dispatch("movie/movies/fetchMovies", {
          sort: this.sort_selected,
          page: this.pages,
          load_more: this.load_more,
        })
        .then((res) => {
          this.movies = this.$store.state.movie.movies.data;
          this.load_more_spinner = false;
          this.load_more = true;
          this.pages += 1;
        })
        .catch((error) => {
          //show alert
          console.log("something went wrong" + error);
        });
    },
    getGenres() {
      this.$store
        .dispatch("movie/genres/fetchGenres")
        .then((res) => {
          this.genres = this.$store.state.movie.genres.data;
        })
        .catch((error) => {
          //show alert
          console.log("something went wrong" + error);
        });
    },
    loadMore() {
      this.load_more_spinner = true;
      this.getMovies();
    },
    filterMovies(e) {
      this.sort_selected = e.target.value;
      this.pages = 1;
      this.load_more = false;
      this.getMovies();
    },
  },
};
</script>
  