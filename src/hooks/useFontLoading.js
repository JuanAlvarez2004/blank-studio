import { useState, useEffect } from 'react'

/**
 * Hook para verificar si las fuentes están cargadas
 * @param {string[]} fonts - Array de fuentes a verificar (ej: ['1em Oswald', '1em Lato'])
 * @param {number} timeout - Tiempo límite en ms para esperar las fuentes (default: 3000)
 * @returns {boolean} - true si las fuentes están cargadas
 */
export function useFontLoading(fonts = ['1em Oswald', '1em Lato'], timeout = 3000) {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    // Verificar si las fuentes ya están cargadas
    const allFontsReady = fonts.every(font => document.fonts.check(font))
    if (allFontsReady) {
      setFontsLoaded(true)
      return
    }

    // Cargar fuentes de forma asíncrona
    const loadFonts = async () => {
      try {
        // Cargar todas las fuentes especificadas
        await Promise.all(fonts.map(font => document.fonts.load(font)))
        
        // Esperar a que todas las fuentes estén listas
        await document.fonts.ready
        
        setFontsLoaded(true)
      } catch (error) {
        console.warn('Error loading fonts:', error)
        
        // Fallback: continuar después del timeout
        setTimeout(() => {
          setFontsLoaded(true)
        }, timeout)
      }
    }

    loadFonts()
  }, [fonts, timeout])

  return fontsLoaded
}
