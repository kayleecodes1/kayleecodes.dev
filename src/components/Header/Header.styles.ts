import styled from 'styled-components';
import BaseContainer from '@components/Container';

export const Root = styled.header({
    position: 'absolute',
    inset: '0 0 auto 0',
    height: 52,
    color: '#1B2F52',
    zIndex: 100,
});

export const Container = styled(BaseContainer)({
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
});
