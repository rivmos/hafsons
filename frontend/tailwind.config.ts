import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#DD9F03',
        backgroudPrimary:'#000000',
        textGrey:'#737D8C',
        textDark:'#2A323C',
        borderColor:'#D4DCE5',
        greySection:'#F4F6F8'
      },
      backgroundImage: {
        'bannerImage':"url('/img/banner_bg.png')",
        'valuationImage': "url('/img/valuation_img.png')",
        'aboutImage': "url('/img/about_img.png')",
        'marketImage': "url('/img/market_bg_img.png')",
        'contactImage': "url('/img/contact_img.png')",
        'salesImage': "url('/img/sales/sales_img.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow:{
        '10xl':'10px 30px 70px rgba(255, 91, 25, 0.1)',
        '9xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
export default config
