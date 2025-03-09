import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	extend: {
  		colors: {
  			border: '#6A994E',
  			input: '#6A994E',
  			ring: '#4E6744',
  			primary: {
				'50': '#F2F4F2',
				'100': '#D6E0D6',
				'200': '#B3D1B3',
				'300': '#8EB38E',
				'400': '#6A946A',
				'500': '#4D7C4D',
  				'600': '#344E2E',
				'700': '#2F5C2F',
				'800': '#254B25',
				'900': '#1A381A',
				'950': '#0E1F0E',
  				DEFAULT: '#344E2E', /*Always adjust this and the 600 version*/
  				foreground: '#EEE7D7'
  			},
  			secondary: {
  				'50': '#F5F8F3',
  				'100': '#E5EDE1',
  				'200': '#CCDBC3',
  				'300': '#B2C9A5',
  				'400': '#99B787',
  				'500': '#6A994E',
  				'600': '#557A3E',
  				'700': '#405C2F',
  				'800': '#2B3D1F',
  				'900': '#151F10',
  				'950': '#0A0F08',
  				DEFAULT: '#6A994E', /*Always adjust this and the 600 version*/
  				foreground: '#EEE7D7'
  			},
  			destructive: {
  				'50': '#FCF3F3',
  				'100': '#F8E1E1',
  				'200': '#F1C3C4',
  				'300': '#EAA5A6',
  				'400': '#E38788',
  				'500': '#BC4749',
  				'600': '#963839',
  				'700': '#712A2B',
  				'800': '#4B1C1D',
  				'900': '#260E0E',
  				'950': '#130707',
  				DEFAULT: '#BC4749', /*Always adjust this and the 600 version*/
  				foreground: '#EEE7D7'
  			},
  			muted: {
  				DEFAULT: '#B8D39A',
  				foreground: '#353E2C'
  			},
  			accent: {
  				DEFAULT: '#7DC86D',
  				foreground: '#2A3B23'
  			},
  			popover: {
  				DEFAULT: '#EEE7D7',
  				foreground: '#4E6744'
  			},
  			card: {
  				DEFAULT: '#F7F3E9',
  				foreground: '#4B6442'
  			},
  			forest: '#386641',
  			sage: '#6A994E',
  			lime: '#A7C957',
  			cream: '#F2E8CF',
  			terra: '#BC4749',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
		container: {
			center: true, // Optionally keep the container centered
			padding: '2rem', // Add padding inside the container if desired
			screens: {
				'sm': '100%',    // Default behavior for small screens
				'md': '100%',    // Same for medium screens
				'lg': '1200px',  // Modify for large screens
				'xl': '1400px',  // Increase for extra large screens (larger than 1280px)
				'2xl': '1600px', // You can go even larger for ultra-wide screens
			},
		},
  	}
  },
} satisfies Config

export default config

