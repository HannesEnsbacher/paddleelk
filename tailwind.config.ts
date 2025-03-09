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
				50: "#E6F1EB",
				100: "#CCE3D7",
				200: "#99C7AF",
				300: "#66AA87",
				400: "#338E5F",
				500: "#1F7448",
				600: "#174E32", // Default
				700: "#123C27",
				800: "#0D2B1C",
				900: "#071911",
				950: "#040D08",
				DEFAULT: "#174E32",
				foreground: "#E6F1EB", // Light greenish-white for text/icons
			},
			secondary: {
				50: "#E8F4ED",
				100: "#CFE9DC",
				200: "#9ED3B8",
				300: "#6DBE94",
				400: "#3CA870",
				500: "#20855B",
				600: "#106645", // Default
				700: "#0D5036",
				800: "#093927",
				900: "#051D14",
				950: "#020E09",
				DEFAULT: "#106645",
				foreground: "#E8F4ED", // Soft white-green
			},
			destructive: {
				50: "#FCE9E8",
				100: "#F9D3D1",
				200: "#F3A7A3",
				300: "#EC7C76",
				400: "#E65049",
				500: "#D93F38",
				600: "#C03630", // Default
				700: "#982925",
				800: "#701D1B",
				900: "#48100F",
				950: "#250806",
				DEFAULT: "#C03630",
				foreground: "#FCE9E8", // Light pinkish-white
			},
			muted: {
				DEFAULT: "#4A5F52",
				foreground: "#E6E6E6", // Light gray
			},
			accent: {
				DEFAULT: "#E79734",
				foreground: "#33210D", // Dark brown for contrast
			},
			popover: {
				DEFAULT: "#1E3D2A",
				foreground: "#E6F1EB", // Light greenish-white
			},
			card: {
				DEFAULT: "#F4EDE1",
				foreground: "#2C2C2C", // Dark charcoal
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

