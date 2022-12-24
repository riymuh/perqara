<template>
  <div class="bg-gray-900">
    <!-- banner -->
    <div class="flex flex-col h-screen bg-gray-900 overflow-hidden pb-10">
      <div class="m-auto flex gap-14 overflow-hidden justify-center">
        <div class="flex shrink-0 max-w-2xl rounded-lg items-center">
          <a href="#">
            <img
              class="flex-none max-w-xs"
              src="https://image.tmdb.org/t/p/original//1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg"
              alt=""
            />
          </a>
          <div class="p-5 h-96 bg-gray-800">
            <a href="#">
              <h5
                class="
                  mb-2
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                "
              >
                The Woman King
              </h5>
            </a>
            <span class="text-gray-400">2021</span>
            <p class="mb-3 font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div class="flex shrink-0 max-w-2xl rounded-lg items-center">
          <a href="#">
            <img
              class="flex-none max-w-xs"
              src="https://image.tmdb.org/t/p/original//1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg"
              alt=""
            />
          </a>
          <div class="p-5 h-96 bg-black">
            <a href="#">
              <h5
                class="
                  mb-2
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                "
              >
                The Woman King
              </h5>
            </a>
            <span class="text-gray-400">2021</span>
            <p class="mb-3 font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div class="flex shrink-0 max-w-2xl rounded-lg items-center">
          <a href="#">
            <img
              class="flex-none max-w-xs"
              src="https://image.tmdb.org/t/p/original//1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg"
              alt=""
            />
          </a>
          <div class="p-5 h-96 bg-black">
            <a href="#">
              <h5
                class="
                  mb-2
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                "
              >
                The Woman King
              </h5>
            </a>
            <span class="text-gray-400">2021</span>
            <p class="mb-3 font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
      <div class="flex gap-8 mx-auto">
        <div class="w-20 h-3 rounded-full bg-red-600"></div>
        <div class="w-3 h-3 rounded-full bg-gray-200"></div>
        <div class="w-3 h-3 rounded-full bg-gray-200"></div>
      </div>
    </div>
    <!-- banner -->
    <div class="bg-gray-800 w-full h-96 absolute z-0"></div>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20">
      <div class="flex justify-between">
        <div class="border-t-4 border-red-700 pt-4 relative">
          <h1 class="text-white text-3xl font-bold">Discover Movies</h1>
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
