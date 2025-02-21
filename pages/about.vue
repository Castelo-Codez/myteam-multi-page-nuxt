<script lang="ts" setup>
const title = inject("title");
useHead({
    title: `About - ${title}`,
});
</script>

<template>
    about page

    <NuxtLink to="/" class="text-"> home </NuxtLink>
    <span>this is home page</span>
</template>
