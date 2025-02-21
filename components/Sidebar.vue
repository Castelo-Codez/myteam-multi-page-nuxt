<script setup lang="ts">
import sidebarOpenState from "~/store/store";

</script>

<template>
    <aside
        class="fixed w-[260px] md:hidden transition duration-150 bg-color-police-blue h-full z-[1111] top-0 right-0"
        :class="[
            sidebarOpenState
                ? `translate-x-0 visible after:content-['']  after:absolute after:top-0 after:h-full after:md:hidden  after:bg-color-overlay after:w-[1000px] after:right-[260px]`
                : 'translate-x-full invisible',
        ]"
    >
        <ul role="list" class="py-14 p-8">
            <li role="listitem" class="flex justify-end mb-14">
                <button
                    type="button"
                    aria-label="close sidebar"
                    title="close sidebar"
                    class="cursor-pointer"
                    @click="sidebarOpenState = !sidebarOpenState"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="17"
                    >
                        <path
                            fill="#FFF"
                            fill-rule="evenodd"
                            d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                        />
                    </svg>
                </button>
            </li>
            <li role="listitem" class="mb-7">
                <MainLink go-to="home" />
            </li>
            <li role="listitem" class="mb-14">
                <MainLink go-to="about" />
            </li>
            <li role="listitem" class="mb-11 flex justify-center">
                <Button :isLight="true" class="px-[38px]" />
            </li>
        </ul>
        <div
            aria-hidden="true"
            class="absolute -bottom-10 -right-12 md:bottom-44 md:-right-14"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                <g fill="none" fill-rule="evenodd">
                    <path fill="#2C6269" d="M100 100H0V0h100z" />
                    <path
                        fill="#F67E7E"
                        d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
                    />
                    <path
                        fill="#79C8C7"
                        d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"
                    />
                </g>
            </svg>
        </div>
    </aside>
</template>
