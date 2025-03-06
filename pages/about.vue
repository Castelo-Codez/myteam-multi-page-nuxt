<script lang="ts" setup>
const title = inject("title");
useHead({
    title: `About - ${title}`,
});
</script>

<template>
    <AboutSec1 />
    <AboutSec2 />
    <AboutSec3 /> 
    <ReadyToGetStarted />
</template>
