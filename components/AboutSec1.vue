<template>
    <section
        class="pt-10 pb-40 overflow-hidden bg-color-midnight-green relative"
    >
        <div class="container grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <h1
                class="text-color-white font-[700] text-center text-[3rem] lg:text-left lg:text-[calc(4rem_+_1vw)]"
            >
                About
            </h1>
            <MainArticle
                subject="We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you."
                additionalStyleForPattern="bg-color-light-coral hidden lg:block"
                additionalStylesForPara="mt-14 text-center lg:text-left"
            />
            <div
                aria-hidden="true"
                class="absolute -bottom-20 -right-20 md-right-32 2xl:-right-20 2xl:-bottom-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                >
                    <g fill="none" fillRule="evenodd">
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
        </div>
    </section>
</template>
