export const iconSizes = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
} as const;

export const spacing = {
  section: "py-16 md:py-24",
  sectionSmall: "py-8 md:py-12",
  container: "container",
} as const;

export const typography = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl font-bold tracking-tight",
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-semibold",
  body: "text-base md:text-lg",
  small: "text-sm md:text-base",
} as const;

export const transitions = {
  default: "transition-all duration-300",
  fast: "transition-all duration-150",
  slow: "transition-all duration-500",
  colors: "transition-colors duration-300",
  transform: "transition-transform duration-300",
} as const;

export const shadows = {
  card: "hover:shadow-lg hover:shadow-primary/10",
  cardStrong: "hover:shadow-xl hover:shadow-primary/20",
} as const;

export const gradients = {
  primary: "bg-gradient-to-r from-primary/5 to-accent/5",
  accent: "bg-gradient-to-r from-accent/10 to-primary/10",
  text: "bg-gradient-to-r from-accent to-accent/70",
} as const;

export const zIndex = {
  base: "z-0",
  dropdown: "z-10",
  sticky: "z-20",
  fixed: "z-30",
  modalBackdrop: "z-40",
  modal: "z-50",
  popover: "z-60",
  tooltip: "z-70",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
} as const;

export const borderRadius = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const;

export const animations = {
  fadeIn: "animate-in fade-in",
  fadeOut: "animate-out fade-out",
  slideInFromTop: "animate-in slide-in-from-top",
  slideInFromBottom: "animate-in slide-in-from-bottom",
  slideInFromLeft: "animate-in slide-in-from-left",
  slideInFromRight: "animate-in slide-in-from-right",
  spin: "animate-spin",
  pulse: "animate-pulse",
} as const;

export const gap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;
