<script lang="ts" setup></script>

<template>
    <header
        role="banner"
        aria-label="header"
        class="py-14 text-white bg-color-midnight-green"
    >
        <div class="container">
            <div
                class="text-color-white flex items-center justify-between flex-wrap"
            >
                <div class="flex gap-x-14 items-center">
                    <NuxtLink to="/">
                        <NuxtImg
                            src="/logo.svg"
                            alt="logo"
                            width="140"
                            height="140"
                            placeholder="/spiner.svg"
                        />
                    </NuxtLink>
                    <NavLinks class="hidden md:block" />
                </div>
                <Button :is-light="true" class="hidden md:block" />
                <SidebarOpener />
                <Sidebar />
            </div>
        </div>
    </header>
</template>
