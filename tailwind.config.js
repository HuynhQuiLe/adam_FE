/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#222222',
        black_rgba: 'rgba(14,14,14,0.9)',
        black_hover: "#383838",
        gray: '#e9e9e9',
        light_gray: "#f8f8f8",
        light_gray_2: "#f3f3f3",
        dark_gray: '#dfdfdf',
        back_gray: '#969696',
        bg_sub_header: 'rgba(34,34,34,0.8)',
        dropdown_user_list: 'rgba(255,255,255,0.1)',
        sub_menu_index: '#a7a7a7',
        sub_menu_yellow: '#FFF083',
        sub_menu_green: '#AAEEC4',
        error: "#FA5D29",
        line: '#d3d3d3',
        overlay_avatar_hover: 'rgba(0,0,0,.5)'
       
      }
    },
  },
  plugins: [],
}