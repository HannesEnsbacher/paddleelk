import type {Config} from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        extend: {
            colors: {
                border: '#2B5D40', // Darker green for strong contrast
                input: '#2B5D40',
                ring: '#1E4D35',
                primary: {
                    "50": "#E6F2EA",
                    "100": "#CCE5D5",
                    "200": "#99CBAA",
                    "300": "#66B180",
                    "400": "#339755",
                    "500": "#0F7E31",
                    "600": "#032A0B",
                    "700": "#021F08",
                    "800": "#021705",
                    "900": "#011002",
                    "950": "#000A01",
                    DEFAULT: "#032A0B",
                    foreground: "#E6F2EB", // Light for contrast
                },
                secondary: {
                    50: "#E6F5EE",
                    100: "#CCEBDE",
                    200: "#99D7BD",
                    300: "#66C39C",
                    400: "#33AF7B",
                    500: "#1F8A5E",
                    600: "#17684A", // Default
                    700: "#12513A",
                    800: "#0D3A2A",
                    900: "#07241A",
                    950: "#04140E",
                    DEFAULT: "#17684A",
                    foreground: "#E6F5EE",
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
                    foreground: "#FCE9E8",
                },
                muted: {
                    DEFAULT: "#405A4A",
                    foreground: "#E6E6E6",
                },
                accent: {
                    50: "#E6F7F0",
                    100: "#CCEFDF",
                    200: "#99DFBF",
                    300: "#66CF9F",
                    400: "#3DBE85",
                    500: "#3D9D6F",
                    600: "#31805C", // Default
                    700: "#27654A",
                    800: "#1D4B37",
                    900: "#123225",
                    950: "#0A1D16",
                    DEFAULT: "#31805C",
                    foreground: "#E6F7F0",
                },
                popover: {
                    DEFAULT: "#1E3D2A",
                    foreground: "#E6F1EB",
                },
                card: {
                    DEFAULT: "#E6F2EB",
                    foreground: "#1B3D2A",
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

