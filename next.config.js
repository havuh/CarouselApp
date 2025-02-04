const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Resalta problemas potenciales de la aplicación, así como ciclos de vida inseguros. (Por defecto en "true" desde Next.js 13.4)
  reactStrictMode: true,
  // Elimina el header "powered-by-next" del proyecto
  poweredByHeader: false,
  compiler: {
    // Remueve todos los console.* si el código se encuentra en producción
    removeConsole: isProd ? { exclude: ['error'] } : false,
  },
  sassOptions: {
    /*
    Esto indica que los estilos compartidos se encuentran dentro del directorio src/styles.
    Por lo tanto, Sass buscará archivos importados allí,
    lo que permite utilizar estilos compartidos fácilmente en diferentes componentes sin tener que escribir la ruta completa cada vez que se importan. */
    includePaths: [path.join(__dirname, 'src', 'styles')],
    /*
    Esta propiedad permite agregar datos adicionales que se incluirán automaticamente en todos los archivos Sass/SCSS compilados.
    El propósito de este import es permitir la importación automática de un archivo centralizado (includes.scss) que podría contener variables, mixins o estilos compartidos en toda la aplicación.
    De esta manera, todos los componentes que utilicen Sass/SCSS pueden acceder a estos estilos compartidos sin necesidad de repetir el import en cada archivo. */
    prependData: '@import "@styles/includes.scss";',
  },
  // Variables globales
  env: {
    customKey: 'random-value',
  },
  // Extensiones de las páginas que se utiliza en el proyecto. En este caso, p.tsx y tsx.
  pageExtensions: ['p.tsx', 'tsx'],
  // Permite las redirecciones al acceder a una ruta específica
  async redirects() {
    return [
      {
        source: '/test-page',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
