import { Img } from '@chakra-ui/image';
import { Container, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import FlyoLink from './FlyoLink';

function Hero() {
    return (
        <Flex
            bg={{
                base: 'url("/images/bg-curvy-mobile.svg"), linear-gradient(180deg, hsl(217, 28%, 15%) 60%, hsl(218, 28%, 13%)  40%) ',
                lg: 'url("/images/bg-curvy-desktop.svg"),hsl(217, 28%, 15%)',
            }}
            bgRepeat={{ base: 'no-repeat', lg: 'no-repeat' }}
            bgPosition={{
                base: 'bottom 50% right 50%',
                lg: 'bottom 0% right 50%',
            }}
            bgSize={{ base: 'contain', lg: 'contain' }}
            h={{ lg: '1000px' }}
        >
            <Container
                d='flex'
                flexDir='column'
                alignItems='center'
                textAlign='center'
                py='1rem'
                maxW={{ base: 'container.baseStyle', lg: '600px' }}
            >
                <Img
                    src='/images/illustration-intro.png'
                    w='80vw'
                    maxW={{ base: '40ch', lg: '600px' }}
                />

                <Heading
                    as='h1'
                    fontSize={{ base: '1.5rem', lg: '2rem' }}
                    lineHeight={{ lg: '3rem' }}
                    my='1.5rem'
                    mb={{ lg: '1rem' }}
                >
                    All your files in one secure location, accessible anywhere.
                </Heading>
                <Text
                    my='1rem'
                    mb={{ lg: '2rem' }}
                    lineHeight='1.75rem'
                    maxW='55ch'
                >
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
