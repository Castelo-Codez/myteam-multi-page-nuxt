<script lang="ts" setup>
const props = defineProps<{
    subject: string;
    additionalStyleForPattern: string;
    additionalStylesForPara: string;
}>();
</script>
<template>
    <article
        class="text-color-white font-[700] grid grid-cols-1 relative leading-[-2px]"
    >
        <div
            aria-hidden="true"
            class="w-10 h-1 "
            :class="additionalStyleForPattern"
        ></div>
        <p class="leading-[1.8rem] livvic-black" :class="additionalStylesForPara">
            {{ props.subject }}
        </p>
    </article>
</template>
