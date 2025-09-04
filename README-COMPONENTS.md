# Componentes de Botón con Efecto de Tinta

Este proyecto incluye componentes React que recrean el efecto de botón con animaciones de tinta usando GSAP y Physics2D.

## Componentes

### InkButton

Un botón interactivo que crea efectos de partículas de tinta cuando se hace hover.

**Props:**
- `children` (string, opcional): Texto del botón. Por defecto: "Click Me!"
- `className` (string, opcional): Clases CSS adicionales
- `ballCursorRef` (ref, opcional): Referencia al cursor para ocultarlo durante las animaciones

**Ejemplo de uso:**
```jsx
import InkButton from './components/InkButton';

function App() {
  return (
    <InkButton className="bg-white border shadow-lg">
      Mi Botón
    </InkButton>
  );
}
```

### BallCursor

Un cursor personalizado que sigue el movimiento del mouse.

**Props:**
- `className` (string, opcional): Clases CSS adicionales

**Ejemplo de uso:**
```jsx
import { useRef } from 'react';
import BallCursor from './components/BallCursor';
import InkButton from './components/InkButton';

function App() {
  const cursorRef = useRef(null);
  
  return (
    <div>
      <BallCursor ref={cursorRef} />
      <InkButton ballCursorRef={cursorRef}>
        Botón con cursor
      </InkButton>
    </div>
  );
}
```

### InkButtonDemo

Un componente de demostración que muestra múltiples botones con el cursor.

## Características

- **Animaciones fluidas**: Usa GSAP para animaciones suaves y profesionales
- **Efectos físicos**: Las partículas de tinta usan Physics2D para comportamiento realista
- **Cursor interactivo**: Se oculta automáticamente durante las animaciones del botón
- **Responsive**: Funciona en diferentes tamaños de pantalla
- **Personalizable**: Props para personalizar apariencia y comportamiento

## Dependencias

- React
- GSAP
- GSAP Physics2D Plugin
- Tailwind CSS (para estilos base)

## Instalación

Las dependencias ya están incluidas en el proyecto. Solo necesitas importar y usar los componentes.

## Efectos

1. **Hover Enter**: 
   - Crea partículas de tinta en el punto de entrada
   - Expande un círculo negro desde ese punto
   - Cambia el color del texto a blanco
   - Oculta el cursor

2. **Hover Leave**:
   - Contrae el efecto hacia el punto de salida
   - Crea partículas de absorción
   - Restaura el color del texto
   - Muestra el cursor nuevamente

## Personalización

Puedes personalizar los estilos usando Tailwind CSS o CSS personalizado. Los componentes mantienen su funcionalidad mientras permites estilizado adicional.
