import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '720px',
    lg: '1024px',
    xl: '1440px',
});

const customeTheme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                overflowX: 'hidden',
                boxSizing: 'border-box',
                fontSize: '14px',
                fontWeight: '300',
                color: 'hsl(0, 0%, 100%)',
            },
        },
    },
    colors: {
        neutralWhite: 'hsl(0, 0%, 100%)',
        darkBlueMainBg: 'hsl(218, 28%, 13%)',
        darkBlueIntro: 'hsl(217, 28%, 15%)',
        darkBlueFooter: 'hsl(216, 53%, 9%)',
        darkBlueTestimony: 'hsl(219, 30%, 18%)',
        cyan: 'hsl(176, 68%, 64%)',
        blue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
    },
    fonts: {
        heading: 'Raleway',
        body: 'Open Sans',
    },
    components: {
        Container: {
            baseStyle: {
                maxW: '50ch',
            },
            lg: {
                maxW: '960px',
            },
            xl: {
                maxW: '1200px',
            },
        },
    },
    breakpoints,
});

export default customeTheme;
