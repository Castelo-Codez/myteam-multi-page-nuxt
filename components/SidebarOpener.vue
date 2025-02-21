<script setup lang="ts">
import sidebarOpenState from "~/store/store";
</script>

<template>
    <button
        type="button"
        role="button"
   
        aria-label="open sidebar"
        class="md:hidden cursor-pointer"
        title="open sidebar"
        @click="sidebarOpenState = !sidebarOpenState"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
            <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
            </g>
        </svg>
    </button>
</template>
