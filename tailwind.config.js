const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
        },
        extend: {
            colors: {
                primary: {
                    100: '#0F5A8C',
                    200: '#0D4A73',
                    300: '#0A3959',
                    400: '#072940',
                    500: '#051C2C',
                },
                secondary: {
                    100: '#A1D9F8',
                    200: '#88D0F8',
                    300: '#63C2F8',
                    400: '#25ACF8',
                    500: '#1E8DCC',
                    600: '#176A99',
                    700: '#0F4766',
                },
                neutrals: {
                    50: '#F2F2F2',
                    100: '#F0F0F0',
                    200: '#CACCCE',
                    300: '#BCC7CE',
                    400: '#B1C2CE',
                    500: '#8797A2',
                    600: '#555F66',
                    700: '#444D53',
                },
                success: {
                    100: '#40813F',
                    200: '#4A934A',
                    300: '#53A654',
                    400: '#5BB85D',
                    // 500: '',
                },
                error: {
                    // 100: '',
                    // 200: '',
                    // 300: '',
                    400: '#E64B3B',
                    // 500: '',
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};