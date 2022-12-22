<template>
  <div class="bg-gray-900 pb-12">
    <!-- recomendation movies -->
    <!-- bg-[url('http://images6.fanpop.com/image/photos/38700000/First-Official-Deadpool-2016-Promotional-Banner-deadpool-2016-38737061-1800-600.jpg')] -->
    <div class="relative bg-cover h-96 bg-[url('http://images6.fanpop.com/image/photos/38700000/First-Official-Deadpool-2016-Promotional-Banner-deadpool-2016-38737061-1800-600.jpg')]">
      <div
        class="absolute left-0 bottom-0 w-full h-16 bg-gray-900 bg-opacity-70"
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
            <h1 class="text-red-600 text-2l">REVIEWS</h1>
          </div>
        </div>
        <div class="flex gap-5 relative">
          <div class="relative w-full">
            <div class="grid grid-cols-2 gap-5 items-center justify-between">
              <div
                class="p-6 bg-gray-200 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div class="flex justify-between">
                  <div class="relative">
                    <h1 class="text-white text-1xl">Discover Movies</h1>
                  </div>
                  <div class="mb-12 pt-4 relative">
                    <button
                      type="button"
                      class="text-white bg-gray-400 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      9.0
                    </button>
                  </div>
                </div>
                <p class="mb-3 text-1l text-gray-900">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe deleniti quia itaque mollitia aspernatur maiores
                  reprehenderit reiciendis assumenda tempore ullam ex suscipit,
                  accusamus optio. Sequi quae quasi libero dolor. Expedita!
                </p>
              </div>
              <div
                class="p-6 bg-gray-200 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div class="flex justify-between">
                  <div class="relative">
                    <h1 class="text-white text-1xl">Discover Movies</h1>
                  </div>
                  <div class="mb-12 pt-4 relative">
                    <button
                      type="button"
                      class="text-white bg-gray-400 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      9.0
                    </button>
                  </div>
                </div>
                <p class="mb-3 text-1l text-gray-900">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe deleniti quia itaque mollitia aspernatur maiores
                  reprehenderit reiciendis assumenda tempore ullam ex suscipit,
                  accusamus optio. Sequi quae quasi libero dolor. Expedita!
                </p>
              </div>
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
            <div class="max-w-sm relative" v-for="n in 5" :key="n">
              <a href="#">
                <img
                  class=""
                  src="https://upload.wikimedia.org/wikipedia/id/4/46/Deadpool_poster.jpg"
                  alt=""
                />
              </a>
              <div class="py-2">
                <a href="#">
                  <h5 class="text-2l font-bold tracking-tight text-white">
                    Deadpool
                  </h5>
                  <span class="text-2l font-thin text-gray-500">2016</span>
                </a>
              </div>
              <div
                class="bg-opacity-90 bg-gray-500 w-12 h-6 absolute top-0 right-0 text-white text-center"
              >
                7.8
              </div>
              <div
                class="hidden focus:block bg-black w-full h-full absolute top-0"
              ></div>
            </div>
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
};
</script>
