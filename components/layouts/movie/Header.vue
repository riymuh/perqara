<template>
  <nav class="bg-gray-800 w-full absolute top-0 z-10 bg-opacity-30">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              rounded-md
              p-2
              text-gray-400
              hover:bg-gray-700 hover:text-white
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex flex-1
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex flex-shrink-0 items-center">
            <LayoutsLogo />
          </div>
          <div class="relative ml-6 md:mr-0 hidden md:block shrink w-full">
            <div
              class="
                absolute
                inset-y-0
                left-0
                pl-3
                flex
                items-center
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-adress-icon"
              class="
                bg-gray-900 bg-opacity-50
                text-gray-100
                sm:text-sm
                rounded-md
                block
                w-full
                pl-10
                p-2
                dropdown-toggle
              "
              @focusin="searchHandler"
              @keyup="searchMovie"
              placeholder="Search..."
            />
            <ul
              :class="
                search_status
                  ? 'dropdown-menu min-w-max absolute bg-gray-900 text-base z-50 py-2 list-none rounded-md w-full shadow-lg mt-1 m-0 bg-clip-padding border-none'
                  : 'dropdown-menu hidden min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none'
              "
              aria-labelledby="dropdownMenuButton1"
              v-if="filter_movies.length > 0"
            >
              <li v-for="movie in filter_movies" :key="movie.original_title">
                <NuxtLink
                  :to="{ path: '/movies/' + movie.id }"
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-100
                    hover:bg-gray-800
                  "
                  >{{ movie.original_title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                  <div class="dropdown relative">
                    <button
                      class="
                        dropdown-toggle
                        px-3
                        py-2
                        bg-gray-900 bg-opacity-50
                        text-white
                        font-medium
                        text-sm
                        uppercase
                        rounded-md
                        transition
                        duration-150
                        ease-in-out
                        flex
                        items-center
                        whitespace-nowrap
                      "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      @click="dropdownHandler"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        class="w-2 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                      CATEGORIES
                    </button>
                    <ul
                      :class="
                        dropdown_status
                          ? 'dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none'
                          : 'dropdown-menu hidden min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none'
                      "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li v-for="category in categories" :key="category.id">
                        <a
                          class="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                          href="#"
                          >{{ category.name }}</a
                        >
                      </li>
                    </ul>
                  </div>

                  <template v-for="(navbar_menu, index) in menu">
                    <NuxtLink
                      :to="navbar_menu.route"
                      :key="index"
                      class="
                        text-gray-300
                        hover:bg-gray-700 hover:text-white
                        px-3
                        py-2
                        rounded-md
                        text-sm
                        font-medium
                        uppercase
                      "
                    >
                      {{ navbar_menu.name }}
                    </NuxtLink>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <template v-for="(navbar_menu, index) in menu">
          <NuxtLink
            :to="navbar_menu.route"
            :key="index"
            class="
              bg-gray-900
              text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            aria-current="page"
            >Dashboard</NuxtLink
          >
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.getGenres();
    this.getMovies();
  },
  data() {
    return {
      categories: [],
      movies: [],
      filter_movies: [],
      dropdown_status: false,
      search_status: false,
      menu: [
        {
          id: 2,
          name: "MOVIES",
          route: "/movies",
          dropdown: false,
        },
        {
          id: 3,
          name: "tv shows",
          route: "/",
          dropdown: false,
        },
        {
          id: 4,
          name: "login",
          route: "/",
          dropdown: false,
        },
      ],
    };
  },
  methods: {
    getGenres() {
      this.$store
        .dispatch("movie/genres/fetchGenres")
        .then((res) => {
          this.categories = this.$store.state.movie.genres.data;
        })
        .catch((error) => {
          //show alert
          console.log("something went wrong" + error);
        });
    },
    getMovies() {
      this.$store
        .dispatch("movie/movies/fetchMovies")
        .then((res) => {
          this.movies = this.$store.state.movie.movies.data;
        })
        .catch((error) => {
          //show alert
          console.log("something went wrong" + error);
        });
    },
    dropdownHandler() {
      this.dropdown_status = !this.dropdown_status;
    },
    searchHandler() {
      this.search_status = !this.search_status;
    },
    searchMovie(e) {
      let keyword = e.target.value;
      if (keyword.length > 0) {
        this.filter_movies = this.movies.filter(function (obj) {
          let data = obj.original_title.toLowerCase();
          return data.indexOf(keyword) >= 0 ? true : false;
        });
      } else {
        this.filter_movies = [];
      }
    },
  },
};
</script>
