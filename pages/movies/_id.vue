<template>
  <div class="bg-gray-900 pb-12">
    <!-- recomendation movies -->
    <!-- bg-[url('http://images6.fanpop.com/image/photos/38700000/First-Official-Deadpool-2016-Promotional-Banner-deadpool-2016-38737061-1800-600.jpg')] -->
    <div
      class="
        relative
        bg-cover
        h-96
        bg-[url('https://anfieldindex.com/wp-content/uploads/2016/09/ew-deadpool-poster-banner.jpg')]
      "
    >
      <div
        class="absolute left-0 bottom-0 w-full h-16 bg-gray-900 bg-opacity-90"
      ></div>
      <div
        class="flex gap-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 relative"
      >
        <div class="relative w-full">
          <div class="flex gap-14 items-end">
            <div class="flex-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/id/4/46/Deadpool_poster.jpg"
                alt="pic"
                class="transform -translate-y-"
              />
            </div>
            <div class="flex-col text-gray-100 mt-24">
              <div class="flex flex-col">
                <span class="text-sm">2016</span>
                <h1 class="text-5xl">Deadpool</h1>
                <span class="text-sm"
                  >Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit.</span
                >
              </div>
              <div class="flex gap-2">
                <div class="pt-8 pr-8 pb-8">
                  <div class="flex flex-col text-sm">
                    <span class="text-gray-400">USER SCORE</span>
                    <p>2125 VOTES</p>
                  </div>
                </div>
                <div class="p-8">
                  <div class="flex flex-col text-sm">
                    <span class="text-gray-400">STATUS</span>
                    <p>RELEASED</p>
                  </div>
                </div>
                <div class="p-8">
                  <div class="flex flex-col text-sm">
                    <span class="text-gray-400">LANGUAGE</span>
                    <p>ENGLISH</p>
                  </div>
                </div>
                <div class="p-8">
                  <div class="flex flex-col text-sm">
                    <span class="text-gray-400">BUDGET</span>
                    <p>$200,000,000</p>
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
                <span class="text-sm text-red-600">OVERVIEW</span>
                <span class="text-sm text-gray-800"
                  >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, rem! Explicabo, fuga! Consequuntur eveniet
                  laudantium, nisi culpa molestiae soluta veniam exercitationem
                  ipsam ea corrupti nostrum, fugit harum velit non
                  placeat.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- recomendation movies -->
    <!-- reviews movie -->
    <div class="bg-gray-100 pb-20 pt-20">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex justify-between mb-12 pt-20 relative">
          <div class="pt-4">
            <h1 class="text-red-600 text-2l font-bold">REVIEWS</h1>
          </div>
        </div>
        <div class="flex gap-5 relative">
          <div class="relative w-full">
            <div class="grid grid-cols-2 gap-5 justify-between">
              <template v-for="(review, index) in reviews">
                <PagesMoviesReviewCard
                  :review="review"
                  :key="index"
                  v-if="index <= 1"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- reviews movie -->
    <!-- recomendation movies -->
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-20">
      <div class="flex justify-between mb-12 pt-20 relative">
        <div class="pt-4">
          <h1 class="text-white text-2l">RECOMENDATION MOVIES</h1>
        </div>
      </div>
      <div class="flex gap-5 relative">
        <div class="relative w-full">
          <div class="grid grid-cols-5 gap-5 items-center justify-between">
            <template v-for="(movie, index) in movies">
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
  mounted() {
    this.getMovies();
    this.getReviews();
  },
  computed: {
    reviews() {
      return this.$store.state.movie.movies.reviews;
    },
  },
  data() {
    return {
      movies: null,
      pages: null,
    };
  },
  methods: {
    getMovies() {
      this.$store
        .dispatch("movie/movies/fetchMovies", {
          sort: "popular",
          page: 1,
          load_more: false,
        })
        .then((res) => {
          this.movies = this.$store.state.movie.movies.data;
          this.pages += 1;
        })
        .catch((error) => {
          //show alert
          console.log("something went wrong" + error);
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
