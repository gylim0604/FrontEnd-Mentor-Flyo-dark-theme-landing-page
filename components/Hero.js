import { Img } from '@chakra-ui/image';
import { Flex, Heading, Link, Text } from '@chakra-ui/layout';
import React from 'react';

function Hero() {
    return (
        <Flex
            bg='url("/images/bg-curvy-mobile.svg"), hsl(217, 28%, 15%)'
            flexDir='column'
        >
            <Img src='/images/illustration-intro.png' />

            <Heading>
                All your files in one secure location, accessible anywhere.
            </Heading>
            <Text>
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
            </Text>
            <Link>Get Started</Link>
        </Flex>
    );
}

export default Hero;
