<script setup lang="ts">
interface Props {
    goTo: string;
}
const props = defineProps<Props>();
</script>
<template>
    <NuxtLink
        :to="props.goTo === 'home' ? '/' : '/about'"
        class="text-color-white text-[1.2rem] font-[600]"
    >
        {{ props.goTo}}</NuxtLink
    >
</template>
