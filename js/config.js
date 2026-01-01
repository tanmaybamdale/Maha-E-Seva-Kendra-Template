// Tailwind custom config used in the original single-file site.
// The original used an inline tailwind.config; we keep it here.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#FF9933',
        secondary: '#138808',
        chakra: '#000080',
        light: '#FFF5E6',
        dark: '#1f2937'
      },
      fontFamily: {
        sans: ['"Noto Sans"', '"Noto Sans Devanagari"', 'sans-serif'],
      }
    }
  }
};
