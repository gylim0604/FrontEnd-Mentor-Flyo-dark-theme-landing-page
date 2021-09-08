import { Box, Container, Heading, Text, Input, Flex } from '@chakra-ui/react';
import React from 'react';
import FlyoLink from './FlyoLink';

function CTA() {
    return (
        <Box
            bg='linear-gradient(180deg, hsl(218, 28%, 13%) 60%, hsl(216, 53%, 9%) 40%)'
            py='1rem'
        >
            <Container>
                <Flex
                    flexDir='column'
                    bg='darkBlueIntro'
                    p='2rem'
                    borderRadius='10px'
                    textAlign='center'
                    alignItems='center'
                >
                    <Heading as='h4' fontSize='1.4rem' my='1rem'>
                        Get early access today
                    </Heading>
                    <Text my='1rem' lineHeight='1.5rem' fontSize='0.8rem'>
                        It only takes a minute to sign up and our free starter
                        tier is extremely generous. If you have any questions,
                        our support team would be happy to help you.
                    </Text>
                    <Input
                        bg='white'
                        p='2rem'
                        borderRadius='50px'
                        placeholder='email@example.com'
                        my='2rem'
                        fontSize='0.8rem'
                    />
                    <FlyoLink text='Get Started For Free' w='100%' />
                </Flex>
            </Container>
        </Box>
    );
}

export default CTA;
