import gothamBlackItalicWoff from '@assets/fonts/gotham-black-italic.woff';
import gothamBlackItalicWoff2 from '@assets/fonts/gotham-black-italic.woff2';
import gothamBlackWoff from '@assets/fonts/gotham-black.woff';
import gothamBlackWoff2 from '@assets/fonts/gotham-black.woff2';
import gothamBoldItalicWoff from '@assets/fonts/gotham-bold-italic.woff';
import gothamBoldItalicWoff2 from '@assets/fonts/gotham-bold-italic.woff2';
import gothamBoldWoff from '@assets/fonts/gotham-bold.woff';
import gothamBoldWoff2 from '@assets/fonts/gotham-bold.woff2';
import gothamBookItalicWoff from '@assets/fonts/gotham-book-italic.woff';
import gothamBookItalicWoff2 from '@assets/fonts/gotham-book-italic.woff2';
import gothamBookWoff from '@assets/fonts/gotham-book.woff';
import gothamBookWoff2 from '@assets/fonts/gotham-book.woff2';
import gothamLightItalicWoff from '@assets/fonts/gotham-light-italic.woff';
import gothamLightItalicWoff2 from '@assets/fonts/gotham-light-italic.woff2';
import gothamLightWoff from '@assets/fonts/gotham-light.woff';
import gothamLightWoff2 from '@assets/fonts/gotham-light.woff2';
import gothamMediumItalicWoff from '@assets/fonts/gotham-medium-italic.woff';
import gothamMediumItalicWoff2 from '@assets/fonts/gotham-medium-italic.woff2';
import gothamMediumWoff from '@assets/fonts/gotham-medium.woff';
import gothamMediumWoff2 from '@assets/fonts/gotham-medium.woff2';
import gothamThinItalicWoff from '@assets/fonts/gotham-thin-italic.woff';
import gothamThinItalicWoff2 from '@assets/fonts/gotham-thin-italic.woff2';
import gothamThinWoff from '@assets/fonts/gotham-thin.woff';
import gothamThinWoff2 from '@assets/fonts/gotham-thin.woff2';
import gothamUltraItalicWoff from '@assets/fonts/gotham-ultra-italic.woff';
import gothamUltraItalicWoff2 from '@assets/fonts/gotham-ultra-italic.woff2';
import gothamUltraWoff from '@assets/fonts/gotham-ultra.woff';
import gothamUltraWoff2 from '@assets/fonts/gotham-ultra.woff2';
import gothamXlightItalicWoff from '@assets/fonts/gotham-xlight-italic.woff';
import gothamXlightItalicWoff2 from '@assets/fonts/gotham-xlight-italic.woff2';
import gothamXlightWoff from '@assets/fonts/gotham-xlight.woff';
import gothamXlightWoff2 from '@assets/fonts/gotham-xlight.woff2';
import { CSSObject } from 'styled-components';

const createGothamFontFace = (srcs: string[], fontWeight: number, italic: boolean = false): CSSObject => ({
    '@font-face': {
        fontFamily: 'Gotham',
        src: srcs.map((url: string) => `url('${url}') format('${/([^.]*)$/.exec(url)?.[0]}')`).join(', '),
        fontWeight,
        fontStyle: italic ? 'italic' : 'normal',
    },
});

const fontStyles = [
    createGothamFontFace([gothamThinWoff2, gothamThinWoff], 100),
    createGothamFontFace([gothamThinItalicWoff2, gothamThinItalicWoff], 100, true),
    createGothamFontFace([gothamXlightWoff2, gothamXlightWoff], 200),
    createGothamFontFace([gothamXlightItalicWoff2, gothamXlightItalicWoff], 200, true),
    createGothamFontFace([gothamLightWoff2, gothamLightWoff], 300),
    createGothamFontFace([gothamLightItalicWoff2, gothamLightItalicWoff], 300, true),
    createGothamFontFace([gothamBookWoff2, gothamBookWoff], 400),
    createGothamFontFace([gothamBookItalicWoff2, gothamBookItalicWoff], 400, true),
    createGothamFontFace([gothamMediumWoff2, gothamMediumWoff], 500),
    createGothamFontFace([gothamMediumItalicWoff2, gothamMediumItalicWoff], 500, true),
    createGothamFontFace([gothamBoldWoff2, gothamBoldWoff], 700),
    createGothamFontFace([gothamBoldItalicWoff2, gothamBoldItalicWoff], 700, true),
    createGothamFontFace([gothamBlackWoff2, gothamBlackWoff], 800),
    createGothamFontFace([gothamBlackItalicWoff2, gothamBlackItalicWoff], 800, true),
    createGothamFontFace([gothamUltraWoff2, gothamUltraWoff], 900),
    createGothamFontFace([gothamUltraItalicWoff2, gothamUltraItalicWoff], 900, true),
];

export default fontStyles;
