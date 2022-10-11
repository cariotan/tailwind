module.exports = {
    content: ["**/*.{razor,html,cshtml,cs}"],
    theme: {
        extend: {
            screens: {
                '1.5xl': '1500px',
                '3xl': '1650px',
            },
            animation: {
                'rotate': 'rotate 80s linear reverse infinite;',
                'scale': 'scale 5s linear infinite'
            },
            keyframes: {
                scale: {
                    '0%': {transform: 'scale(1)'},

                    '25%': {transform: 'scale(1.1)'},

                    '50%': {transform: 'scale(1.2)'},

                    '75%': {transform: 'scale(1.1)'},

                    '100%': {transform: 'scale(1)'},
                },
                rotate: {
                    '0%': {transform: 'rotate(360deg)'},

                    '100%': {transform: 'rotate(0deg)'}
                }
            }
        },
        fontFamily: {
            "sans": ["Poppins", "sans-serif"],
        }
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class', // only generate classes
        }),
    ],
    prefix: 'tw-',
    important: true,
    safelist: [
        "font-sans",
    ]
}
