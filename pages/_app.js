import { ChakraProvider } from '@chakra-ui/react';
import customeTheme from '../styles/customTheme';
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customeTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
