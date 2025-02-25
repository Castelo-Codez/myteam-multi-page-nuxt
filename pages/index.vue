<script lang="ts" setup>
const title = inject("title");
useHead({
    title: `Home - ${title}`,
});
</script>

<template>
    <HomeSec1 />
    <HomeSec2 />
    <HomeSec3 />
</template>
