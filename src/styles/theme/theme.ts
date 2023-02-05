import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    interface DefaultTheme {
        breakpoints: {
            mobileSmall: string;
            mobile: string;
            tablet: string;
            desktopSmall: string;
            desktop: string;
        },
        colors: {
            background: string;
            primary: string;
            secondary: string;
            text: {
                body: string;
                heading: string;
            };
        };
        typefaces: {
            body: string;
            heading: string;
        };
    }
}

const defaultTheme: DefaultTheme = {
    breakpoints: {
        mobileSmall: '320px',
        mobile: '480px',
        tablet: '768px',
        desktopSmall: '1000px',
        desktop: '1200px',
    },
    colors: {
        background: '#EFEFEF',
        primary: '#007AD4',
        secondary: '#D332A0',
        text: {
            body: '#1B2F52',
            heading: '#1B2F52',
        }
    },
    typefaces: {
        heading: '"Gotham", sans-serif',
        body: '"Gotham", sans-serif',
    },
};

export default defaultTheme;
