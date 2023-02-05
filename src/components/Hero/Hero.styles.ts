import styled from 'styled-components';

export const Root = styled.div(({ theme }) => ({
    height: 660,
    background: '#EFEFEF',
    overflow: 'hidden',
    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
        height: 495,
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        height: 330,
    },
}));

export const Anchor = styled.div(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    height: '100%',
    transformOrigin: 'bottom center',
    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
        transform: 'scale(0.75)',
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        transform: 'scale(0.5)',
    },
}));

export const Background = styled.img(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: `translate(-50%, 0)`,
    zIndex: 10,
}));

export const Portrait = styled.img(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    transform: 'translateX(-50%)',
    zIndex: 20,
}));

export const Item = styled.img(({ theme }) => ({
    position: 'absolute',
    left: 0,
    top: '100%',
}));
