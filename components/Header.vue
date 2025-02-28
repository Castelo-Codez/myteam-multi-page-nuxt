<script lang="ts" setup></script>

<template>
    <header
        role="banner"
        aria-label="header"
        class="py-14 text-white bg-color-midnight-green"
    >
        <div
            class="text-color-white flex justify-between items-center flex-wrap container"
        >
            <div class="flex gap-x-14 items-center">
                <NuxtLink to="/">
                    <NuxtImg
                        src="/logo.svg"
                        alt="logo"
                        width="150"
                    
                        height="150"
                        placeholder="/spiner.svg"
                    />
                </NuxtLink>
                <NavLinks class="hidden md:block" />
            </div>
            <Button :is-light="true" class="hidden md:block" />
            <SidebarOpener />
            <Sidebar />
        </div>
    </header>
</template>
