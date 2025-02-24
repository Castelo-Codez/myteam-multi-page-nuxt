import type {Config} from "tailwindcss";

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                // primary
                "color-midnight-green": "#014e56",
                "color-light-coral": "#F67E7E",
                "color-white": "#FFF",
                "color-rapture-blue": " #79C8C7",
                "color-police-blue": "#2C6269",
                "color-deep-jungle-green": "#2C6269",
                "color-sacramento-state-green": "#004047",
                "color-dark-green": "#002529",
                "color-very-dark-green": "#012F34",
                "color-overlay": "rgba(0, 0, 0, 0.76)",
                "color-gray": "rgba(247, 247, 247, 0.5)",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            container: {
                center: true,
                padding: "20px",
                screens: {
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                    "2xl": "1320px",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
