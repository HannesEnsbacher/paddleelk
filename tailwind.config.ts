import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
				'50': '#F2F4F2',
				'100': '#D6E0D6',
				'200': '#B3D1B3',
				'300': '#8EB38E',
				'400': '#6A946A',
				'500': '#4D7C4D',
  				'600': 'hsl(var(--primary))',
				'700': '#2F5C2F',
				'800': '#254B25',
				'900': '#1A381A',
				'950': '#0E1F0E',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#F5F8F3',
  				'100': '#E5EDE1',
  				'200': '#CCDBC3',
  				'300': '#B2C9A5',
  				'400': '#99B787',
  				'500': 'hsl(var(--secondary))',
  				'600': '#557A3E',
  				'700': '#405C2F',
  				'800': '#2B3D1F',
  				'900': '#151F10',
  				'950': '#0A0F08',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				'50': '#FCF3F3',
  				'100': '#F8E1E1',
  				'200': '#F1C3C4',
  				'300': '#EAA5A6',
  				'400': '#E38788',
  				'500': 'hsl(var(--destructive))',
  				'600': '#963839',
  				'700': '#712A2B',
  				'800': '#4B1C1D',
  				'900': '#260E0E',
  				'950': '#130707',
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			forest: '#386641',
  			sage: '#6A994E',
  			lime: '#A7C957',
  			cream: '#F2E8CF',
  			terra: '#BC4749',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
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
  		}
  	}
  },
} satisfies Config

export default config

