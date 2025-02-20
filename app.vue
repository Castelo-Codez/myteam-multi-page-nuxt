<script lang="ts" setup>
provide("title", "myteam multipage website");
useHead({
    title: "myteam multipage website",
    meta: [
        {
            name: "charset",
            content: "utf-8",
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        },
        {
            name: "description",
            content:
                "myteam multi page website front end mentor challenges advanced level",
        },
    ],
});
</script>

<template>
    <div id="app">
        <NuxtLoadingIndicator :throttle="0" :height="4" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
