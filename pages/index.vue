<template>
  <div class="bg-gray-900">
    <!-- banner -->
    <div class="flex flex-col h-screen bg-gray-900 overflow-hidden pb-10">
      <div class="m-auto flex gap-14 overflow-hidden justify-center">
        <div
          :class="
            banner_active == 1
              ? 'flex shrink-0 max-w-2xl rounded-lg items-center order-2 transition-all delay-300'
              : banner_active == 2
              ? 'flex shrink-0 max-w-2xl rounded-lg items-center order-1 transition-all delay-300'
              : 'flex shrink-0 max-w-2xl rounded-lg items-center order-3 transition-all delay-300'
          "
        >
          <a href="#">
            <img
              class="flex-none max-w-xs"
              src="https://image.tmdb.org/t/p/original//rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg"
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
        <div
          :class="
            banner_active == 2
              ? 'flex shrink-0 max-w-2xl rounded-lg items-center order-2 transition-all'
              : banner_active == 3
              ? 'flex shrink-0 max-w-2xl rounded-lg items-center order-1 transition-all'
              : 'flex shrink-0 max-w-2xl rounded-lg items-center order-3 transition-all'
          "
        >
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
        <div
          :class="
            banner_active == 3
              ? 'flex shrink-0 max-w-2xl rounded-lg items-center order-2 transition-all'
              : banner_active == 2
              ? 'flex shrink-0 max-w-2xl rounded-lg items-center order-3 transition-all'
              : 'flex shrink-0 max-w-2xl rounded-lg items-center order-1 transition-all'
          "
        >
          <a href="#">
            <img
              class="flex-none max-w-xs"
              src="https://image.tmdb.org/t/p/original//rFljUdOozFEv6HDHIFpFvcYW0ec.jpg"
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
        <div
          :class="
            banner_active == 1
              ? 'w-20 h-3 rounded-full bg-red-600 order-1 cursor-pointer'
              : 'w-3 h-3 rounded-full bg-gray-200 order-2 cursor-pointer'
          "
          @click="handlerBanner(1)"
        ></div>
        <div
          :class="
            banner_active == 2
              ? 'w-20 h-3 rounded-full bg-red-600 order-2 cursor-pointer'
              : 'w-3 h-3 rounded-full bg-gray-200 order-2 cursor-pointer'
          "
          @click="handlerBanner(2)"
        ></div>
        <div
          :class="
            banner_active == 3
              ? 'w-20 h-3 rounded-full bg-red-600 order-3 cursor-pointer'
              : 'w-3 h-3 rounded-full bg-gray-200 order-3 cursor-pointer'
          "
          @click="handlerBanner(3)"
        ></div>
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
            :class="
              sort_selected == 'popular'
                ? `
              text-white
              bg-red-700
              hover:bg-red-800
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2`
                : ` text-white
              bg-gray-700
              hover:bg-gray-800
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2`
            "
            @click="filterMovies('popular')"
          >
            Popularity
          </button>
          <button
            type="button"
            :class="
              sort_selected == 'upcoming'
                ? `
              text-white
              bg-red-700
              hover:bg-red-800
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2`
                : ` text-white
              bg-gray-700
              hover:bg-gray-800
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2`
            "
            @click="filterMovies('upcoming')"
          >
            Release Date
          </button>
        </div>
      </div>
      <div
        class="relative grid grid-cols-5 gap-5 items-center justify-between"
        v-if="movies"
      >
        <template v-for="(movie, index) in movies">
          <PagesMoviesMovieCard v-if="index <= 9" :key="index" :movie="movie"
        /></template>
      </div>
      <div class="text-center" v-else>
        <ReuseableSpinner />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {
    this.getMovies();
    this.autoSlider();
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies.discover_movies;
    },
  },
  data() {
    return {
      pages: null,
      banner_active: 1,
      sort_selected: "popular", //default
      discover_status: false,
    };
  },
  methods: {
    getMovies() {
      this.$store.dispatch("movie/movies/fetchDiscoverMovies", {
        sort: this.sort_selected,
      });
    },
    handlerBanner(param) {
      this.banner_active = param;
    },
    autoSlider() {
      setInterval(() => {
        if (this.banner_active == 3) {
          this.banner_active = 1;
        } else {
          this.banner_active += 1;
        }
      }, 3000);
    },
    filterMovies(val) {
      this.sort_selected = val;
      this.discover_status = true;
      this.getMovies();
    },
  },
};
</script>
