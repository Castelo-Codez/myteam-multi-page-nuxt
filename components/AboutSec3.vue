<template>
    <section class="pt-56 pb-28 md:py-32 bg-color-very-dark-green relative">
        <div aria-hidden="true" class="absolute top-0 left-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                <g fill="none" fill-rule="evenodd">
                    <path fill="#2C6269" d="M100 100H0V0h100z" />
                    <path
                        fill="#014E56"
                        d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
                    />
                    <path
                        fill="#79C8C7"
                        d="M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
                    />
                </g>
            </svg>
        </div>
        <h2
            class="text-center text-color-white font-[900] text-[1.8rem] md:text-[calc(1vw_+_2rem)]"
        >
            Some of our clients
        </h2>
        <div class="container">
            <ul
                class="mt-14 grid grid-cols-1 gap-11 md:grid-cols-[repeat(auto-fill_,_minmax(200px_,_1fr))]"
            >
                <li class="flex justify-center items-center">
                    <NuxtImg
                        loading="lazy"
                        placeholder="/spiner.svg"
                        src="/logo-the-verge.png"
                        alt="logo-verge"
                        width="180"
                  
                    />
                </li>
                <li class="flex justify-center items-center">
                    <NuxtImg
                        loading="lazy"
                        placeholder="/spiner.svg"
                        src="/logo-jakarta-post.png"
                        alt="logo-jakarta"
                        width="180"
                  
                    />
                </li>
                <li class="flex justify-center items-center">
                    <NuxtImg
                        loading="lazy"
                        placeholder="/spiner.svg"
                        src="/logo-the-guardian.png"
                        alt="logo-guardian"
                        width="180"
                  
                    />
                </li>
                <li class="flex justify-center items-center">
                    <NuxtImg
                        loading="lazy"
                        placeholder="/spiner.svg"
                        src="/logo-tech-radar.png"
                        alt="logo-techradar"
                        width="180"
                  
                    />
                </li>
                <li class="flex justify-center items-center">
                    <NuxtImg
                        loading="lazy"
                        placeholder="/spiner.svg"
                        src="/logo-gadgets-now.png"
                        alt="logo-gadgets"
                        width="180"
                  
                    />
                </li>
            </ul>
        </div>
    </section>
</template>
