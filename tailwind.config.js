/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ["class", "class"],
    theme: {
    	extend: {
    		fontFamily: {
    			inter: [
    				'Inter',
    				'sans-serif'
    			],
    			'inter-tight': [
    				'Inter Tight',
    				'sans-serif'
    			],
    			sans: [
    				'var(--font-poppins)',
    				'ui-sans-serif',
    				'system-ui',
    				'sans-serif'
    			],
    			artifika: [
    				'var(--font-artifika)',
    				'ui-sans-serif',
    				'system-ui',
    				'sans-serif'
    			]
    		},
    		fontSize: {
    			xs: [
    				'0.75rem',
    				{
    					lineHeight: '1.5'
    				}
    			],
    			sm: [
    				'0.875rem',
    				{
    					lineHeight: '1.5715'
    				}
    			],
    			base: [
    				'1rem',
    				{
    					lineHeight: '1.5',
    					letterSpacing: '-0.017em'
    				}
    			],
    			lg: [
    				'1.125rem',
    				{
    					lineHeight: '1.5',
    					letterSpacing: '-0.017em'
    				}
    			],
    			xl: [
    				'1.25rem',
    				{
    					lineHeight: '1.5',
    					letterSpacing: '-0.017em'
    				}
    			],
    			'2xl': [
    				'1.5rem',
    				{
    					lineHeight: '1.415',
    					letterSpacing: '-0.017em'
    				}
    			],
    			'3xl': [
    				'1.875rem',
    				{
    					lineHeight: '1.3333',
    					letterSpacing: '-0.017em'
    				}
    			],
    			'4xl': [
    				'2.25rem',
    				{
    					lineHeight: '1.2777',
    					letterSpacing: '-0.017em'
    				}
    			],
    			'5xl': [
    				'3rem',
    				{
    					lineHeight: '1',
    					letterSpacing: '-0.017em'
    				}
    			],
    			'6xl': [
    				'4rem',
    				{
    					lineHeight: '1',
    					letterSpacing: '-0.017em'
    				}
    			],
    			'7xl': [
    				'4.5rem',
    				{
    					lineHeight: '1',
    					letterSpacing: '-0.017em'
    				}
    			]
    		},
    		keyframes: {
    			swing: {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-100px)'
    				}
    			},
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
    			},
    			aurora: {
    				'0%': {
    					backgroundPosition: '0% 50%',
    					transform: 'rotate(-5deg) scale(0.9)'
    				},
    				'25%': {
    					backgroundPosition: '50% 100%',
    					transform: 'rotate(5deg) scale(1.1)'
    				},
    				'50%': {
    					backgroundPosition: '100% 50%',
    					transform: 'rotate(-3deg) scale(0.95)'
    				},
    				'75%': {
    					backgroundPosition: '50% 0%',
    					transform: 'rotate(3deg) scale(1.05)'
    				},
    				'100%': {
    					backgroundPosition: '0% 50%',
    					transform: 'rotate(-5deg) scale(0.9)'
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			aurora: 'aurora 8s ease-in-out infinite alternate'
    		}
    	}
    },
    plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
}
