import React, { useEffect, useState } from 'react';
import { inverseLerp } from '@utilities/easing';
import { clamp } from '@utilities/math';

const useMousePosition = (ref: React.MutableRefObject<HTMLElement | null>): { x: number; y: number } => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (ref.current === null) {
                return;
            }

            const { clientX: mouseX, clientY: mouseY } = event;
            const rect = ref.current.getBoundingClientRect();
            const x = clamp(inverseLerp(rect.x, rect.x + rect.width, mouseX), 0, 1);
            const y = clamp(inverseLerp(rect.y, rect.y + rect.height, mouseY), 0, 1);

            setPosition({ x, y });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return position;
};

export default useMousePosition;
