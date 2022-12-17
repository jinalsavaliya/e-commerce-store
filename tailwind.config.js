/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

   fontFamily:{
    Baloo:['Baloo 2', 'cursive']
   },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1590px'
    },
    colors:{
white:'#ffffff',
orange:{
  100:'#feedd3',
  200:'#fe7865',
  300:'#e6604d',
  400:'#f55c46'
},

blue:{
  100:'#f5f8fc',
  200:'#efedfe',
  300:'#5bd5e6',
},

green:{
  100:'#fffbf8',
  200:'#e8fbf7',
  300:'#5be6b0',
},

gray:{
  100:'#ececee',
  200:'#dfdafe',
  300:'#83838b',
},

pink:{
  100:'#fedae8'
},

black:{
  100:'#2c2e3f',
  200:'#141517',
  300:'#2c2e3f',
  400:'#1d2539'
},

yellow:{
  100:'#fec365'
}

    },
    extend: {
      fontSize:{
        '8xl': '6rem'
      },

      spacing:{
        '144':'36rem',
        '130':'28rem'
      }
    },
  },
  plugins: [],
}
