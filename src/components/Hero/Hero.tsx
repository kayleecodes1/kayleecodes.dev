import { useEffect, useRef, useState } from 'react';
import controller from '@assets/images/controller.png';
import heroPortrait from '@assets/images/hero-portrait.png';
import heroSplash from '@assets/images/hero-splash.png';
import keyboard from '@assets/images/keyboard.png';
import tablet from '@assets/images/tablet.png';
import tabletPen from '@assets/images/tablet_pen.png';
import useAnimationFrame from '@hooks/useAnimationFrame';
import useMousePosition from '@hooks/useMousePosition';
import useParallax from '@hooks/useParallax';
import { lerp, inverseLerp, offsetT, oscillateQuad, oscillateSine } from '@utilities/easing';
import { Root, Anchor, Background, Portrait, Item } from './Hero.styles';

const ROUND_TRIP_TIME = 28000;
const HOVER_CYCLE_TIME = 6000;
const ROTATE_CYCLE_TIME = 12000;

const ORBIT_Y = 220;
const MAX_OFFSET = {
    x: 400,
    y: 60,
    z: 90,
};
const MIN_SCALE = 0.35;
const MAX_SCALE = 0.65;
const MAX_ROTATION = 15;
const MAX_BLUR = 4;

const images = [controller, keyboard, tablet];

const animateOrbit = (time: number, offset: number) => {
    const t = (time / ROUND_TRIP_TIME + offset) % 1;
    //const tHover = (time / HOVER_CYCLE_TIME + offset) % 1;
    //const tRotate = (time / ROTATE_CYCLE_TIME + offset) % 1;

    const tx = oscillateQuad(t);
    const x = lerp(-MAX_OFFSET.x, MAX_OFFSET.x, tx);

    //const ty = oscillateSine(tHover);
    //const y = lerp(-MAX_OFFSET.y, MAX_OFFSET.y, ty);
    // TODO should be more promiment close to ty === 1
    //const y = ORBIT_Y;

    // TODO we should ease the change in y toward the negatives, due to perspective
    const tz = oscillateQuad(offsetT(t, 0.25));
    const z = lerp(-MAX_OFFSET.z, MAX_OFFSET.z, tz);

    //const tr = oscillateSine(tRotate);
    const r = lerp(-MAX_ROTATION, MAX_ROTATION, tx);

    return { x, y: 0, z, r };
};

const renderOrbit = ({ x, y, z, r }: { x: number; y: number; z: number; r: number }) => {
    const tz = inverseLerp(-MAX_OFFSET.z, MAX_OFFSET.z, z);

    const zIndex = Math.floor(lerp(15, 25, tz));
    const blur = z < 0 ? lerp(0, MAX_BLUR, z / -MAX_OFFSET.z) : 0;
    const scale = lerp(MIN_SCALE, MAX_SCALE, tz);

    return {
        translate: `translate(${x}px, ${z + y * lerp(0.5, 1, tz)}px)`,
        scale: `scale(${scale * 100}%)`,
        rotate: `rotate(${r}deg)`,
        blur: `blur(${blur}px)`,
        zIndex,
    };
};

const Hero: React.FC = () => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const portraitRef = useRef<HTMLImageElement | null>(null);
    const [items, setItems] = useState<{ image: string; x: number; y: number; z: number; r: number }[]>([]);

    useAnimationFrame(() => {
        const currentTime = Date.now();
        const blah = [];
        for (let i = 0; i < images.length; i++) {
            // TODO
            const result = animateOrbit(currentTime, i / images.length);
            blah.push({
                ...result,
                image: images[i],
            });
        }
        setItems(blah);
    }, []);

    const mousePosition = useMousePosition(rootRef);
    const parallax = useParallax(rootRef, 'top');
    // TODO responsive
    // base everything on the width of the kaylee element
    //const relativeScale = portraitRef.current ? portraitRef.current.clientWidth / portraitRef.current.naturalWidth : 1;
    // TODO what to base this on?

    return (
        <Root ref={rootRef} style={{ position: 'relative' }}>
            <Anchor>
                <Background src={heroSplash} style={{ bottom: `${parallax * -100}%` }} />
                <Portrait ref={portraitRef} src={heroPortrait} />
                {items.map(({ image, x, y, z, r }) => {
                    const { translate, scale, rotate, blur, zIndex } = renderOrbit({ x, y, z, r });
                    const tz = inverseLerp(-MAX_OFFSET.z, MAX_OFFSET.z, z);
                    const MAX_PARALLAX_OFFSET = 200;
                    const foo = parallax * lerp(MAX_PARALLAX_OFFSET, -MAX_PARALLAX_OFFSET, tz);

                    return (
                        <Item
                            key={image}
                            style={{
                                filter: blur,
                                transform: `translateY(${-ORBIT_Y}px) translate(-50%, -50%) ${translate} translateY(${foo}px) ${scale} ${rotate}`,
                                zIndex: zIndex,
                            }}
                            src={image}
                        />
                    );
                })}
            </Anchor>
        </Root>
    );
};

export default Hero;
