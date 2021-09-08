import { Img } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

function TestimonyCard({ text, name, title, img }) {
    return (
        <Flex
            flexDir='column'
            bg='darkBlueTestimony'
            borderRadius='10px'
            p='2rem'
            mt='2rem'
        >
            <Text fontSize='.8rem' lineHeight='1.5rem'>
                {text}
            </Text>
            <Flex mt='2rem' alignItems='center'>
                <Img src={img} h='2.5rem' borderRadius='full' />
                <Flex ml='1rem' flexDir='column'>
                    <Text
                        fontSize='0.8rem'
                        fontWeight='700'
                        letterSpacing='.75px'
                        my='0.2rem'
                    >
                        {name}
                    </Text>
                    <Text fontSize='0.6rem' letterSpacing='.75px'>
                        {title}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default TestimonyCard;
