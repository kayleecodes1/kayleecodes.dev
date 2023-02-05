import React, { useEffect, useState } from 'react';
import { inverseLerp } from '@utilities/easing';
import { clamp } from '@utilities/math';

const useParallax = (
    ref: React.MutableRefObject<HTMLElement | null>,
    behavior: 'window' | 'top' | 'bottom',
): number => {
    const [position, setPosition] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current === null) {
                return;
            }

            const { innerHeight: windowHeight } = window;
            const { top, bottom, height } = ref.current.getBoundingClientRect();


            switch (behavior) {
                case 'window': {
                    setPosition(clamp(inverseLerp(-height, windowHeight + height, top), 0, 1));
                    break;
                }
                case 'top': {
                    setPosition(clamp(inverseLerp(top, bottom, 0), 0, 1));
                    break;
                }
                case 'bottom': {
                    setPosition(clamp(inverseLerp(top, bottom, windowHeight), 0, 1));
                    break;
                }
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return position;
};

export default useParallax;
