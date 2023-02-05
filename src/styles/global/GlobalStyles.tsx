import { createGlobalStyle } from 'styled-components';
import fontStyles from './fontStyles';

const GlobalStyles = createGlobalStyle(
    ({ theme }) => ({
        '*': {
            boxSizing: 'border-box',
            fontFamily: theme.typefaces.body,
            padding: 0,
            margin: 0,
        },
        'html, body': {
            fontFamily: theme.typefaces.body,
            fontSize: 16,
            color: theme.colors.text.body,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            background: theme.colors.background,
            [`@media (max-width: ${theme.breakpoints.desktop})`]: {
                fontSize: 14,
            },
        },
        body: {
            minWidth: theme.breakpoints.mobileSmall,
            overflow: 'hidden auto',
            [`@media (max-width: ${theme.breakpoints.mobileSmall})`]: {
                overflowX: 'auto',
            },
        },
        'a:focus': {
            outline: `${theme.colors.primary} auto 5px`,
        },
    }),
    ...fontStyles,
);

export default GlobalStyles;
