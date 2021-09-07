import { Img } from '@chakra-ui/image';
import { Container, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import FlyoLink from './FlyoLink';

function Hero() {
    return (
        <Flex
            bg='url("/images/bg-curvy-mobile.svg"), linear-gradient(180deg, hsl(217, 28%, 15%) 60%, hsl(218, 28%, 13%)  40%) '
            bgRepeat='no-repeat'
            bgPosition='bottom 50% right 50%'
            bgSize='contain'
        >
            <Container
                d='flex'
                flexDir='column'
                alignItems='center'
                textAlign='center'
                py='1rem'
            >
                <Img
                    src='/images/illustration-intro.png'
                    w='80vw'
                    maxW='40ch'
                />

                <Heading as='h1' fontSize='1.5rem' my='1.5rem'>
                    All your files in one secure location, accessible anywhere.
                </Heading>
                <Text my='1rem' lineHeight='1.75rem'>
                    Fylo stores all your most important files in one secure
                    location. Access them wherever you need, share and
                    collaborate with friends family, and co-workers.
                </Text>
                <FlyoLink text='Get Started' />
            </Container>
        </Flex>
    );
}

export default Hero;
