/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FF5353",
                muted: "#CFC5C5",
            },
            borderRadius: {
                DEFAULT: ".75rem",
            },
        },
        fontFamily: {
            sans: ["Poppins", "system-ui"],
        },
    },
    plugins: [],
};
