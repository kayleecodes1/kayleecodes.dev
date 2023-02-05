export const lerp = (a: number, b: number, t: number): number => {
    return a + (b - a) * t;
};

export const inverseLerp = (a: number, b: number, n: number): number => {
    return (n - a) / (b - a);
};

export const offsetT = (t: number, offset: number): number => {
    return (t + offset) % 1;
};

export const easeInOutSine = (t: number): number => {
    return -(Math.cos(Math.PI * t) - 1) / 2;
};

export const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
};

export const oscillateQuad = (t: number) => {
    return t < 0.5 ? easeInOutQuad(t / 0.5) : easeInOutQuad(2 - 2 * t);
};

export const oscillateSine = (t: number): number => {
    return t < 0.5 ? easeInOutSine(t / 0.5) : easeInOutSine(2 - 2 * t);
};
