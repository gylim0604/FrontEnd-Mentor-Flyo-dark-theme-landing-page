import { Container, Img, Box, Heading, Text, Link } from '@chakra-ui/react';
import React from 'react';

export default function LearnMore() {
    return (
        <Box bg='darkBlueMainBg'>
            <Container
                maxW={{ base: 'container.baseStyle', lg: 'container.xl' }}
                h={{ lg: '600px' }}
                d={{ lg: 'flex' }}
                alignItems='center'
            >
                <Img
                    src='/images/illustration-stay-productive.png'
                    alt='illustration of people collaborating'
                    w={{ base: '80vw', lg: '1000px' }}
                    maxW={{ base: '50ch', lg: 'initial' }}
                    mx='auto'
                />
                <Box pl={{ lg: '3rem' }}>
                    <Heading
                        as='h3'
                        fontSize={{ base: '1.25rem', lg: '2rem' }}
                        fontWeight='700'
                        my='1.5rem'
                        w={{ lg: '15ch' }}
                    >
                        Stay productive, wherever you are
                    </Heading>
                    <Text lineHeight='1.5rem'>
                        Never let location be an issue when accessing your
                        files. Fylo has you covered for all of your file storage
                        needs.
                        <br />
                        <br />
                        Securely share files and folders with friends, family
                        and colleagues for live collaboration. No email
                        attachments required.
                    </Text>
                    <Link
                        borderBottom='1px solid cyan'
                        my='1rem'
                        color='cyan'
                        d='inline-flex'
                        alignItems='center'
                        pb='0.25rem'
                    >
                        See how Fylo works
                        <Img ml='0.75rem' src='/images/icon-arrow.svg' />
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}
