import styled from 'styled-components';

export const Root = styled.section<{ fullWidth?: boolean }>(({ fullWidth = false }) => ({
    maxWidth: fullWidth ? undefined : '1250px',
    padding: '0 36px',
    margin: '0 auto',
}));
