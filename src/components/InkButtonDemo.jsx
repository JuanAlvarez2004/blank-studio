import { useRef } from 'react';
import InkButton from './InkButton';
import BallCursor from './BallCursor';

const InkButtonDemo = () => {
  const ballCursorRef = useRef(null);

  return (
    <div className="grid place-items-center h-screen bg-gray-50">
      <BallCursor ref={ballCursorRef} />
      
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Ink Button Demo
        </h1>
        
        <div className="flex flex-col gap-6 items-center">
          <InkButton 
            ballCursorRef={ballCursorRef}
            className="bg-white border border-gray-200 shadow-lg"
          >
            Click Me!
          </InkButton>
          
          <InkButton 
            ballCursorRef={ballCursorRef}
            className="bg-blue-100 border border-blue-200 shadow-lg"
          >
            Hover Me!
          </InkButton>
          
          <InkButton 
            ballCursorRef={ballCursorRef}
            className="bg-green-100 border border-green-200 shadow-lg"
          >
            Try Me!
          </InkButton>
        </div>

        <div className="max-w-md text-center text-gray-600 text-sm">
          <p>
            Mueve el cursor sobre los botones para ver el efecto de tinta con partículas 
            físicas usando GSAP Physics2D. El cursor negro sigue tu movimiento y se oculta 
            durante las animaciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InkButtonDemo;
