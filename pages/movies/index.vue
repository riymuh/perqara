<template>
    <div class="bg-gray-900 pb-12">
        <div class="bg-gray-800 w-full h-64 absolute z-0"></div>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-20">
            <div class="flex justify-between mb-12 pt-20 relative">
                <div class=" border-t-4 border-red-700 pt-4">
                    <h1 class="text-white text-2xl">Movies</h1>
                </div>
            </div>
            <div class="flex gap-8 relative">
                <div class=" shrink w-1/4">
                    <div class="max-w-sm py-6 bg-gray-900 rounded-lg shadow-md grid grid-cols-1">
                        <a href="#" class="mb-2.5 mx-6">
                            <h5 class="mb-2 text-1xl font-bold tracking-tight text-white">Sort Result By</h5>
                        </a>
                        <select id="countries"
                            class="bg-gray-700 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 my-2.5 mx-6">
                            <option selected>Popularity</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                        <a href="#" class="my-2.5 mx-6">
                            <h5 class="mb-2 text-1xl font-bold tracking-tight text-white">Genres</h5>
                        </a>
                        <ul class="text-sm text-gray-700 dark:text-gray-200 my-2.5 mx-6"
                            aria-labelledby="dropdownSearchButton">
                            <li class="pb-1.5">
                                <div class="flex">
                                    <label for="checkbox-item-11"
                                        class="w-full text-sm font-medium text-gray-100">Action</label>
                                    <input id="checkbox-item-11" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                </div>
                            </li>
                            <li class="py-1.5">
                                <div class="flex">
                                    <label for="checkbox-item-11"
                                        class="w-full text-sm font-medium text-gray-100">Animation</label>
                                    <input id="checkbox-item-11" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="
                relative
                
                w-full
            ">
                    <div class="grid grid-cols-4
                gap-5
                items-center
                justify-between">
                        <div class="max-w-sm relative" v-for="n in 6" :key="n">
                            <a href="#">
                                <img class="" src="https://upload.wikimedia.org/wikipedia/id/4/46/Deadpool_poster.jpg"
                                    alt="" />
                            </a>
                            <div class="py-2">
                                <a href="#">
                                    <h5 class="
                        text-2l
                        font-bold
                        tracking-tight
                        text-white
                    ">
                                        Deadpool
                                    </h5>
                                    <span class="text-2l font-thin text-gray-500">2016</span>
                                </a>
                            </div>
                            <div
                                class="bg-opacity-90 bg-gray-500 w-12 h-6 absolute top-0 right-0 text-white text-center">
                                7.8
                            </div>
                            <div class="
                    hidden
                    focus:block
                    bg-black
                    w-full
                    h-full
                    absolute
                    top-0
                "></div>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <button type="button" class="
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
            ">
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
};
</script>
  