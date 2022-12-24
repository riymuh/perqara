<template>
  <div class="bg-gray-900 pb-12">
    <!-- corousel banner -->
    <div class="carousel">
      <div class="carousel-inner">
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="carousel-item">
          <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" />
        </div>
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item">
          <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />
        </div>
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item">
          <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel" />
        </div>
        <label for="carousel-3" class="carousel-control prev control-1"
          >‹</label
        >
        <label for="carousel-2" class="carousel-control next control-1"
          >›</label
        >
        <label for="carousel-1" class="carousel-control prev control-2"
          >‹</label
        >
        <label for="carousel-3" class="carousel-control next control-2"
          >›</label
        >
        <label for="carousel-2" class="carousel-control prev control-3"
          >‹</label
        >
        <label for="carousel-1" class="carousel-control next control-3"
          >›</label
        >
        <ol class="carousel-indicators">
          <li>
            <label for="carousel-1" class="carousel-bullet">•</label>
          </li>
          <li>
            <label for="carousel-2" class="carousel-bullet">•</label>
          </li>
          <li>
            <label for="carousel-3" class="carousel-bullet">•</label>
          </li>
        </ol>
      </div>
    </div>
    <!-- corousel banner -->
    <div class="bg-gray-800 w-full h-96 absolute z-0"></div>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 mb-20">
      <div class="flex justify-between">
        <div class="border-t-4 border-red-700 pt-4 relative">
          <h1 class="text-white text-2xl">Discover Movies</h1>
        </div>
        <div class="mb-12 pt-4 relative">
          <button
            type="button"
            class="
              text-white
              bg-red-700
              hover:bg-red-800
              focus:outline-none focus:ring-4 focus:ring-red-300
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2
              dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
            "
          >
            Popularity
          </button>
          <button
            type="button"
            class="
              text-white
              bg-gray-700
              hover:bg-gray-800
              focus:outline-none focus:ring-4 focus:ring-gray-300
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2
              dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900
            "
          >
            Release Date
          </button>
        </div>
      </div>
      <div class="relative grid grid-cols-5 gap-5 items-center justify-between">
        <template v-for="(movie, index) in movies">
          <PagesMoviesMovieCard v-if="index <= 9" :key="index" :movie="movie"
        /></template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",

  mounted() {
    this.getMovies();
  },
  data() {
    return {
      movies: null,
      pages: null,
    };
  },
  methods: {
    getMovies() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=84592cf2007007a499b04d12d281c100"
        )
        .then((res) => {
          console.log(res);
          this.movies = res.data.results;
          this.pages = res.data.page;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
