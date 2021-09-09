import { Flex, Img, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function FeatureCard({ title, text, img, imgAlt }) {
    return (
        <Flex
            flexDir='column'
            textAlign='center'
            alignItems='center'
            my='3rem'
            px={{ lg: '3rem' }}
        >
            <Img
                src={img}
                alt={imgAlt}
                w={{ base: '75px', lg: 'auto' }}
                h={{ lg: '75px' }}
                mb='2rem'
            />
            <Heading as='h3' fontSize='1.25rem' fontWeight='700' my='0.75rem'>
                {title}
            </Heading>
            <Text lineHeight='1.5rem'>{text}</Text>
        </Flex>
    );
}

export default FeatureCard;
