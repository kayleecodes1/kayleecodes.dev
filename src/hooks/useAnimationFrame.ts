import { useEffect } from 'react';

const useAnimationFrame = (callback: () => void, deps?: React.DependencyList): void => {
    useEffect(() => {
        let id = -1;

        const tick = () => {
            callback();
            id = requestAnimationFrame(tick);
        };

        id = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(id);
        };
    }, [deps]);
};

export default useAnimationFrame;
