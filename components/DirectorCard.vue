<script setup lang="ts">
interface Props {
    director: string;
    quote: string;
    position: string;
}

const props = defineProps<Props>();
const state = ref<boolean>(false);
const [firstName, lastName] = props.director.split(" ");
</script>
<template>
    <li class="relative perspective">
        <section
            class="relative min-h-[250px] transform-3d transition-cus"
            :class="[state ? '-rotate-y-180' : '']"
        >
            <section
                class="w-full py-28 px-3 absolute backface-hidden h-full bg-color-very-dark-green flex justify-center items-center flex-col gap-y-3"
            >
                <NuxtImg
                    :src="`${firstName}-${lastName}.jpg`"
                    :alt="`${firstName} ${lastName} avatar`"
                    width="100"
                    height="100"
                    class="rounded-full"
                    placeholder="/spiner.svg"
                    loading="lazy"
                />

                <article class="text-center">
                    <h4 class="text-color-rapture-blue text-[1rem] font-[700]">
                        {{ props.director }}
                    </h4>
                    <h5 class="italic text-[0.9rem] font-[500] text-gray-200">
                        {{ props.position }}
                    </h5>
                </article>
            </section>
            <section
                class="w-full py-28 px-3 absolute backface-hidden rotate-y-180 h-full bg-color-dark-green flex items-center justify-center flex-col gap-y-4"
            >
                <h4
                    class="text-color-rapture-blue text-[1rem] font-[700] text-center"
                >
                    {{ props.director }}
                </h4>
                <q
                    class="text-center block text-color-white font-[600] max-w-[70%] mx-auto"
                >
                    {{ props.quote }}
                </q>
                <ul class="flex justify-center items-center gap-x-5">
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="20"
                            >
                                <path
                                    fill="#FFF"
                                    d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                            >
                                <path
                                    fill="#FFF"
                                    d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </section>
        </section>
        <button
            @click="state = !state"
            :class="state ? 'rotate-45 bg-color-rapture-blue' : ''"
            class="absolute bottom-[-12%] left-2/4 -translate-x-2/4 z-10 bg-color-light-coral w-[60px] h-[60px] rounded-full flex justify-center items-center transition-cus"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                    fill="#012F34"
                    fillRule="evenodd"
                    d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
                />
            </svg>
        </button>
    </li>
</template>
