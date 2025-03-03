<template>
    <section
        class=" pt-44 pb-52 relative overflow-hidden bg-color-sacramento-state-green"
    >
        <div class="container ">
            <div
                aria-hidden="true"
                class="absolute -top-[1%] -left-[20%] md:-left-[5%] md:top-[-3%]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                >
                    <g fill="none" fillRule="evenodd">
                        <path fill="#2C6269" d="M100 100h100V0H100z" />
                        <path
                            fill="#012F34"
                            d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"
                        />
                        <path
                            fill="#79C8C7"
                            d="M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z"
                        />
                        <path
                            fill="#F67E7E"
                            d="M196 140v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z"
                        />
                    </g>
                </svg>
            </div>
            <h2
                class=" text-center text-color-white font-[900] text-[1.8rem] md:text-[calc(1vw_+_2rem)]"
            >
                Meet the directors
            </h2>
            <ul
                class="grid grid-cols-1 gap-y-20 gap-x-20 md:grid-cols-[repeat(auto-fill_,_minmax(300px_,_1fr))] mt-14"
            >
                <DirectorCard
                    director="Nikita Marks"
                    quote="It always amazes me how much talent there is in every corner of the globe."
                    position="Founder & CEO"
                />
                <DirectorCard
                    director="Cristian Duncan"
                    quote="Distributed teams required unique processes. You need to approach work in a new way."
                    position="Co-founder & COO"
                />
                <DirectorCard
                    director="Cruz Hamer"
                    quote="Technology is at the forefront of enabling distributed teams. That's where we come in."
                    position="Co-founder & CTO"
                />
                <DirectorCard
                    director="Drake Heaton"
                    quote="Hiring similar people from similar backgrounds is a surefire way to stunt innovation."
                    position="Business Development Lead"
                />
                <DirectorCard
                    director="Griffin Wise"
                    quote="Unique perspectives shape unique products, which is what you need to survive these days."
                    position="Lead Marketing"
                />
                <DirectorCard
                    director="Aden Allan"
                    quote="Empowered teams create truly amazing products. Set the north star and let them follow it."
                    position="Head of Talent"
                />
            </ul>
            <div aria-hidden="true" class=" absolute bottom-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="147"
                    height="100"
                >
                    <g fill="none" fillRule="evenodd">
                        <path fill="#002529" d="M0 100h100V0H0z" />
                        <path
                            fill="#79C8C7"
                            d="M47 96v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47z"
                        />
                    </g>
                </svg>
            </div>
        </div>
    </section>
</template>
