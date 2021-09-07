import { Container, Img, Box, Heading, Text, Link } from '@chakra-ui/react';
import React from 'react';

export default function LearnMore() {
    return (
        <Box bg='darkBlueMainBg'>
            <Container>
                <Img
                    src='/images/illustration-stay-productive.png'
                    alt='illustration of people collaborating'
                    w='80vw'
                    maxW='60ch'
                    mx='auto'
                />
                <Heading
                    as='h3'
                    fontSize='1.25rem'
                    fontWeight='700'
                    my='1.5rem'
                >
                    Stay productive, wherever you are
                </Heading>
                <Text lineHeight='1.5rem'>
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                    <br />
                    <br />
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required.
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
            </Container>
        </Box>
    );
}
