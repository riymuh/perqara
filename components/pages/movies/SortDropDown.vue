<template>
    <option :value="sort.value">{{ sort.name }}</option>      
</template>

<script>
export default{
    props: ["sort"]
}
</script>