<script lang="ts" setup>
defineProps<{
    isLight: boolean;
}>();
</script>
<template>
    <button
        class="py-[8px] px-[40px] rounded-3xl font-[700] text-[1.2rem] border-[2px] cursor-pointer border-white"
        aria-label="contact us"
        title="contact us"
        role="link"
        v-if="isLight"
    >
        contact us
    </button>
    <button
        v-else
        class="py-[8px] px-[40px] rounded-3xl font-[700] text-[1.2rem] border-[2px] cursor-pointer border-color-dark-green"
        aria-label="contact us"
        title="contact us"
        role="link"
    >
        contact us
    </button>
</template>
