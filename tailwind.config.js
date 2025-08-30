//tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Definindo os diretórios onde o Tailwind vai procurar por classes CSS
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Páginas
    './components/**/*.{js,ts,jsx,tsx}', // Componentes
    './app/**/*.{js,ts,jsx,tsx}', // Caso utilize a pasta 'app' do Next.js 13 (App Router)
  ],
  theme: {
    extend: {
      // Personalização das cores e outros estilos, se necessário
      colors: {
        primary: '#4F46E5', // Exemplo de cor personalizada
        secondary: '#6B7280', // Exemplo de cor personalizada
        accent: '#F59E0B', // Exemplo de cor personalizada
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Definir uma fonte personalizada
      },
    },
  },
  plugins: [],
}

