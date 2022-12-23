<template>
    <button :type="type" :class="classes">
        {{ name }}
    </button>
</template>

<script>
export default {
    props: [
        "type",
        "classes",
        "name"
    ]
}
</script>