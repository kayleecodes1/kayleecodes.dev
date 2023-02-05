import styled from 'styled-components';

export const Root = styled.section(({ theme }) => ({
    background: `linear-gradient(to bottom, #E8E8E8, ${theme.colors.background})`,
    padding: '5em 0',
}));

export const Intro = styled.div(({ theme }) => ({
    maxWidth: 650,
    textAlign: 'center',
    margin: '0 auto',
    [`@media (max-width: ${theme.breakpoints.desktop})`]: {
        maxWidth: 550,
    },
}));

export const Title = styled.h1({
    fontSize: '1.25em',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    marginBottom: '1em',
});

export const Name = styled.span(({ theme }) => ({
    display: 'block',
    fontSize: '2.5em',
    lineHeight: '1em',
    color: theme.colors.primary,
    marginTop: '0.125em',
}));

export const Description = styled.div(({ theme }) => ({
    fontSize: '1.1em',
    lineHeight: '1.5em',
    'p': {
        marginBottom: '1em',
    },
    'em': {
        fontStyle: 'normal',
        color: theme.colors.secondary,
    },
}));
