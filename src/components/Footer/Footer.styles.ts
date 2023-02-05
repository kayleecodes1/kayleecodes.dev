import styled from 'styled-components';

export const Root = styled.footer(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    gap: 16,
    color: '#FFF',
    background: '#394C60',
    padding: '50px 0',
    marginTop: 120,
    [`@media (max-width: ${theme.breakpoints.desktop})`]: {
        marginTop: 60,
    },
}));

export const Copyright = styled.div({
    fontSize: 14,
    letterSpacing: '0.02em',
});

export const Link = styled.a({
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: '0.375em',
    fontSize: '0.75em',
    textDecoration: 'none',
    color: 'currentcolor',
    opacity: 0.5,
    marginTop: '1em',
    cursor: 'pointer',
});
