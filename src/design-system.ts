// Karu Works Design System - Black Fire Rabbit Theme

export const colors = {
  // Brand Colors - Black Fire Rabbit with Orange Fire
  primary: {
    50: '#fef2f2',
    100: '#fee2e2', 
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Main red
    600: '#dc2626',
    700: '#b91c1c', // Fire red
    800: '#991b1b', // Dark fire
    900: '#7f1d1d', // Deep fire
    950: '#450a0a'  // Darkest fire
  },

  // Orange Fire Colors
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c', // Bright orange
    500: '#f97316', // Main orange
    600: '#ea580c', // Deep orange
    700: '#c2410c', // Fire orange
    800: '#9a3412', // Dark orange
    900: '#7c2d12', // Deep orange fire
    950: '#431407'  // Darkest orange
  },
  
  // Neutral Colors - True blacks and grays
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#111111'  // True black
  },

  // Accent Colors
  accent: {
    fire: '#dc2626',
    orangeFire: '#f97316', // New orange fire
    ember: '#b91c1c',
    orangeEmber: '#ea580c', // New orange ember
    ash: '#525252',
    smoke: '#404040'
  }
}

export const gradients = {
  // Fire gradients with orange
  fire: 'linear-gradient(135deg, #f97316 0%, #dc2626 50%, #991b1b 100%)', // Orange to red
  fireReverse: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #f97316 100%)', // Red to orange
  pureOrange: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)', // Pure orange gradient
  
  // Background gradients
  darkFire: 'linear-gradient(135deg, #111111 0%, #171717 50%, #262626 100%)',
  blackToFire: 'linear-gradient(135deg, #111111 0%, #7c2d12 100%)', // Black to dark orange
  
  // Text gradients with orange
  fireText: 'linear-gradient(135deg, #fb923c 0%, #f97316 25%, #dc2626 75%, #b91c1c 100%)', // Orange to red
  subtleText: 'linear-gradient(135deg, #fdba74 0%, #f97316 50%, #dc2626 100%)', // Light orange to red
  orangeText: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)' // Pure orange text
}

export const typography = {
  fontFamily: {
    sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    mono: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'monospace']
  },
  
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem', 
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  }
}

export const spacing = {
  section: '5rem', // 80px
  sectionLg: '7rem', // 112px
  container: '1280px',
  containerPadding: '1rem'
}

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    explosion: '800ms' // For explosive effects
  },
  
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    explosive: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' // Explosive easing
  }
}

export const shadows = {
  fire: '0 10px 25px -3px rgba(220, 38, 38, 0.3), 0 4px 6px -2px rgba(220, 38, 38, 0.2)',
  orangeFire: '0 10px 25px -3px rgba(249, 115, 22, 0.4), 0 4px 6px -2px rgba(249, 115, 22, 0.3)', // Orange fire shadow
  fireGlow: '0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.2)',
  orangeGlow: '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)', // Orange glow
  explosiveGlow: '0 0 30px rgba(249, 115, 22, 0.6), 0 0 60px rgba(220, 38, 38, 0.4), 0 0 90px rgba(185, 28, 28, 0.2)', // Explosive glow
  dark: '0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)'
}

// CSS Custom Properties for dynamic theming
export const cssVariables = `
  :root {
    --color-primary: ${colors.primary[500]};
    --color-primary-dark: ${colors.primary[700]};
    --color-primary-darker: ${colors.primary[900]};
    --color-orange: ${colors.orange[500]};
    --color-orange-dark: ${colors.orange[700]};
    --color-black: ${colors.neutral[950]};
    --color-gray-dark: ${colors.neutral[800]};
    --color-gray: ${colors.neutral[600]};
    --color-gray-light: ${colors.neutral[400]};
    
    --gradient-fire: ${gradients.fire};
    --gradient-orange: ${gradients.pureOrange};
    --gradient-dark: ${gradients.darkFire};
    --gradient-text: ${gradients.fireText};
    --gradient-orange-text: ${gradients.orangeText};
    
    --shadow-fire: ${shadows.fire};
    --shadow-orange: ${shadows.orangeFire};
    --shadow-glow: ${shadows.fireGlow};
    --shadow-orange-glow: ${shadows.orangeGlow};
    --shadow-explosive: ${shadows.explosiveGlow};
  }
` 