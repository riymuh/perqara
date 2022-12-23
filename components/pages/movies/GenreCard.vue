<template>
    <li class="py-1.5">
        <div class="flex">
            <label for="checkbox-item-11" class="w-full text-sm font-medium text-gray-100">{{ genre.name }}</label>
            <input id="checkbox-item-11" type="checkbox" :value="genre.id" class="
                      w-4
                      h-4
                      text-red-600
                      bg-red-700
                      rounded
                      border-gray-300
                      focus:ring-red-500
                      focus:ring-2
                    " />
        </div>
    </li>
</template>

<script>
export default{
    props:["genre"]
}
</script>