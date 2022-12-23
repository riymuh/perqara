<template>
  <div class="max-w-sm relative">
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
    <div class="hidden focus:block bg-black w-full h-full absolute top-0"></div>
  </div>
</template>

<script>
export default {
  props: ["movie"],

  filters: {
    onlyYear: function (value) {
      const d = new Date(value);
      let year = d.getFullYear();
      return year;
    },
  },
};
</script>
