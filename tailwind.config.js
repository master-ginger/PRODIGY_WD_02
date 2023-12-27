/** @type {import('tailwindcss').Config} */
module.exports = {
  content:{
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
  theme: {
    extend: {
      animation:{
        blob:"blob 5s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"scale(1)",
          },
          "33%":{
            transform:"scale(1.1)",
          },
          "66%":{
            transform:"scale(0.9)",
          },
          "100%":{
            transform:"scale(1)",
          },
        }
      },
      safelist: [
        'animate-[fade-in_1s_ease-in-out]',
         'animate-[fade-in-down_1s_ease-in-out]',
         '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
        ]
      },
      
  },
  plugins: [
    require('tailwindcss-animated'),
    require('taos/plugin')
  ],
}

