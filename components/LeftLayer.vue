<template>
    <ul class="grid grid-cols-1 gap-y-5 sm:grid-cols-2">
        <li>
            <ul class="grid grid-cols-1 gap-y-5 sm:gap-y-8 items-center">
                <li>
                    <NuxtImg
                        width="130"
                        height="130"
                        class="mx-auto sm:mx-0 sm:w-[150px]"
                        alt="logo"
                        src="logo.svg"
                        placeholder="/spiner.svg"
                        loading="lazy"
                    />
                </li>
                <li class="flex justify-center sm:justify-start">
                    <NavLinks />
                </li>
            </ul>
        </li>
        <li>
            <article
                class="text-color-gray font-[700] leading-[-2px] text-center sm:text-right xl:text-left"
            >
                <address class="not-italic">
                    987 Hillcrest Lane <br />
                    Irvine, CA <br />
                    California 92714
                </address>
                <span> Call Us : 949-833-7432 </span>
            </article>
        </li>
    </ul>
</template>
