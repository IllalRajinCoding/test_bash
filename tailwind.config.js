module.exports = {
    plugins: [
        require('@tailwindcss/typography'),
    ],

    theme: {
        extend: {
            animation: {
                'blink': 'blink 1s step-end infinite',
                'background-grid': 'grid 15s linear infinite'
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' }
                }
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        fontFamily: {
                            sans: ['Inter', 'system-ui', 'sans-serif'],
                        },
                        fontSize: '1.125rem',
                        lineHeight: '1.75',
                    },
                },
            },
        }
    }

}