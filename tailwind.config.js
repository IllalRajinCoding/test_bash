module.exports = {
    plugins: [
        require('@tailwindcss/typography'),
    ],

    theme: {
        extend: {
            animation: {
                'blink': 'blink 1s step-end infinite',
                'background-grid': 'grid 15s linear infinite',
                fadeIn: 'fadeIn 0.3s ease-out',
                slideIn: 'slideIn 0.4s ease-out',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' }
                }, fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': {
                        transform: 'translateY(-20px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    },
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