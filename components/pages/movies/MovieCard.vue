<template>
  <div
    class="max-w-sm relative"
    @mouseenter="highlightHandler"
    @mouseleave="highlightHandler"
  >
    <a href="#">
      <img
        class=""
        :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
        alt=""
      />
    </a>
    <div class="py-2">
      <a href="#" class="flex flex-col">
        <h5 class="text-2l font-bold tracking-tight text-white truncate">
          {{ movie.original_title }}
        </h5>
        <span class="text-2l font-thin text-gray-500">{{
          movie.release_date | onlyYear
        }}</span>
      </a>
    </div>
    <div
      class="
        bg-opacity-90 bg-gray-500
        w-12
        h-6
        absolute
        top-0
        right-0
        text-white text-center
      "
    >
      {{ movie.vote_average }}
    </div>
    <div
      :class="
        movie_highlight
          ? 'focus:block bg-gray-800 flex w-full h-full absolute top-0'
          : 'hidden'
      "
    >
      <div class="text-gray-100 text-center m-auto flex flex-col gap-5">
        <p>{{ movie.vote_average }}</p>
        <p>Action</p>
        <button
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
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
          "
        >
          view
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  data() {
    return {
      movie_highlight: false,
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
    highlightHandler() {
      this.movie_highlight = !this.movie_highlight;
    },
  },
};
</script>
