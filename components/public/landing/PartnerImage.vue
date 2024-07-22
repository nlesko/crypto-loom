<template>
    <div>
        <img :src="`_nuxt/assets/img/partner/${img}`" class="sm:w-1/2 lg:w-72 mx-auto" alt="" />
    </div>
</template>
<script setup>
const props = defineProps({
    img: {
        type: String,
        default: '',
    },
})
</script>