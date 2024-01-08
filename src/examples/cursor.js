import { useState, useEffect } from 'react';

const CursorComponent = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMove(e) {
            // console.log("Executing handle Move: ", e.clientX, e.clientY);
            setPosition({ x: e.clientX, y: e.clientY });
        }
        console.log("Adding Event Listener")
        window.addEventListener('pointermove', handleMove);

        return () => {
            console.log("Removing Event Listener");
            window.removeEventListener('pointermove', handleMove);
            setPosition({ x: 0, y: 0 });
        };
    }, []);

    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }} />
    );
}

export default CursorComponent;