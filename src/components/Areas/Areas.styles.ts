import styled from 'styled-components';

export const Root = styled.ul(({ theme }) => ({
    // TODO change to grid?
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 64,
    width: 'fit-content',
    margin: '0 auto',
    [`@media (max-width: ${theme.breakpoints.desktop})`]: {
        gap: 32,
    },
    [`@media (max-width: ${theme.breakpoints.desktopSmall})`]: {
        gridTemplateColumns: '1fr',
    },
}));

export const Item = styled.li(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: 370,
}));

export const ImageWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: 180,
    marginBottom: 48,
    [`@media (max-width: ${theme.breakpoints.desktop})`]: {
        height: 140,
        marginBottom: 32,
    },
}));

export const Image = styled.img(({ theme }) => ({
    maxWidth: 270,
    maxHeight: '100%',
    [`@media (max-width: ${theme.breakpoints.desktop})`]: {
        maxWidth: 200,
    },
}));

export const Title = styled.h2(({ theme }) => ({
    fontWeight: 800,
    fontSize: '1.25em',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    marginBottom: 36,
    [`@media (max-width: ${theme.breakpoints.desktop})`]: {
        marginBottom: 24,
    },
}));

export const Description = styled.div(({ theme }) => ({
    'p': {
        fontSize: '1.1em',
        lineHeight: '1.5em',
        marginBottom: 24,
        '&:not(:last-child)': {
            marginBottom: 24,
            [`@media (max-width: ${theme.breakpoints.desktop})`]: {
                marginBottom: 16,
            },
        },
    },
}));
