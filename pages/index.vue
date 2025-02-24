<script lang="ts" setup>
const title = inject("title");
useHead({
    title: `Home - ${title}`,
});
</script>

<template>
    <HomeSec1 />
</template>
