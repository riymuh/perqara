<template>
  <div class="bg-gray-900">
    <!-- recomendation movies -->
    <!-- bg-[url('http://images6.fanpop.com/image/photos/38700000/First-Official-Deadpool-2016-Promotional-Banner-deadpool-2016-38737061-1800-600.jpg')] -->

    <!-- background highlight -->
    <div
      class="bg-gray-800 w-full h-screen absolute"
      :style="
        'background-image:url(https://image.tmdb.org/t/p/original/' +
        movie.backdrop_path +
        ')'
      "
      v-if="movie"
    ></div>
    <!-- background highlight -->

    <div
      class="
        flex
        h-screen
        bg-gradient-to-t
        from-indigo-500
        bg-opacity-50
        relative
        pb-20
      "
      v-if="movie"
    >
      <div class="mx-auto mt-auto">
        <div
          class="
            absolute
            left-0
            bottom-0
            w-full
            h-screen
            bg-gradient-to-t
            from-gray-900
            bg-opacity-50
          "
        ></div>
        <div
          class="
            flex
            gap-5
            mt-24
            mx-auto
            max-w-7xl
            px-2
            sm:px-6
            lg:px-8
            relative
          "
        >
          <div class="relative">
            <div class="flex gap-14 items-end">
              <div class="flex-none w-64 relative">
                <img
                  :src="
                    'https://image.tmdb.org/t/p/original/' + movie.poster_path
                  "
                  alt="pic"
                  class="transform -translate-y-"
                />
              </div>
              <div class="flex-col text-gray-100">
                <div class="flex flex-col">
                  <span class="text-sm">{{
                    movie.release_date | onlyYear
                  }}</span>
                  <h1 class="text-5xl text-ellipsis">
                    {{ movie.original_title }}
                  </h1>
                  <span class="text-sm text-ellipsis">{{ movie.tagline }}</span>
                </div>
                <div class="flex gap-2">
                  <div class="pt-8 pr-8 pb-8">
                    <div class="flex flex-col text-sm">
                      <span class="text-gray-400">USER SCORE</span>
                      <p>{{ movie.vote_count }} VOTES</p>
                    </div>
                  </div>
                  <div class="p-8">
                    <div class="flex flex-col text-sm">
                      <span class="text-gray-400">STATUS</span>
                      <p class="uppercase">{{ movie.status }}</p>
                    </div>
                  </div>
                  <div class="p-8">
                    <div class="flex flex-col text-sm">
                      <span class="text-gray-400">LANGUAGE</span>
                      <p class="uppercase">{{ movie.original_language }}</p>
                    </div>
                  </div>
                  <div class="p-8">
                    <div class="flex flex-col text-sm">
                      <span class="text-gray-400">BUDGET</span>
                      <p>{{ movie.budget | dollarCurrency }}</p>
                    </div>
                  </div>
                  <div class="p-8">
                    <div class="flex flex-col text-sm">
                      <span class="text-gray-400">PRODUCTION</span>
                      <p>DC ENTERTAIMENT</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <span class="text-sm text-red-600 font-bold">OVERVIEW</span>
                  <span class="text-sm text-gray-100 line-clamp-4">{{
                    movie.overview
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex h-screen bg-opacity-50 relative pb-20" v-else>
      <div class="mx-auto mt-auto">
        <ReuseableSpinner />
      </div>
    </div>
    <!-- recomendation movies -->
    <!-- reviews movie -->
    <div class="bg-gray-100 py-20">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex justify-between mb-12 relative">
          <div class="pt-4">
            <h1 class="text-red-600 text-2l font-bold">REVIEWS</h1>
          </div>
        </div>
        <div class="flex gap-5 relative">
          <div class="relative w-full">
            <div
              class="grid grid-cols-2 gap-5 justify-between"
              v-if="reviews.length > 0"
            >
              <template v-for="(review, index) in reviews">
                <PagesMoviesReviewCard
                  :review="review"
                  :key="index"
                  v-if="index <= 1"
                />
              </template>
            </div>
            <div v-else class="text-center">
              <ReuseableSpinner />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- reviews movie -->
    <!-- recomendation movies -->
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20">
      <div class="flex justify-between mb-12 relative">
        <div class="pt-4">
          <h1 class="text-white text-2l">RECOMENDATION MOVIES</h1>
        </div>
      </div>
      <div class="flex gap-5 relative">
        <div class="relative w-full">
          <div class="grid grid-cols-5 gap-5 items-center justify-between">
            <template v-for="(movie, index) in recommendations">
              <PagesMoviesMovieCard
                :key="index"
                :movie="movie"
                v-if="index <= 4"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
    <!-- recomendation movies -->
  </div>
</template>

<script>
export default {
  name: "MoviesPage",
  layout: "movie",
  mounted() {
    this.getMovie();
    this.getMoviesRecommendation();
    this.getReviews();
  },
  filters: {
    dollarCurrency: function (val) {
      return "haha";
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return "hallo";
      return formatter.format(val);
    },
  },
  computed: {
    movie() {
      return this.$store.state.movie.movies.movie_detail;
    },
    reviews() {
      return this.$store.state.movie.movies.reviews;
    },
    recommendations() {
      return this.$store.state.movie.movies.recommendations;
    },
  },
  data() {
    return {
      movies: null,
      pages: null,
    };
  },
  filters: {
    onlyYear: function (value) {
      const d = new Date(value);
      let year = d.getFullYear();
      return year;
    },
  },
  methods: {
    getMovie() {
      this.$store.dispatch("movie/movies/fetchMovie", {
        movie_id: this.$route.params.id,
      });
    },
    getMoviesRecommendation() {
      this.$store.dispatch("movie/movies/fetchMoviesRecommendation", {
        movie_id: this.$route.params.id,
      });
    },
    getReviews() {
      this.$store.dispatch("movie/movies/fetchReviews", {
        movie_id: this.$route.params.id,
      });
    },
  },
};
</script>
