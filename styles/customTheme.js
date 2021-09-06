import { extendTheme } from '@chakra-ui/react';

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
        darkBluMainBg: 'hsl(218, 28%, 13%)',
        darkBlueIntro: 'hsl(217, 28%, 15%)',
        darkBlueFooter: 'hsl(216, 53%, 9%)',
        darkBlueTestimony: 'hsl(219, 30%, 18%)',
        cyan: 'hsl(176, 68%, 64%)',
        blue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
    },
    fonts: {
        heading: 'Open Sans',
        body: 'Raleway',
    },
});

export default customeTheme;
