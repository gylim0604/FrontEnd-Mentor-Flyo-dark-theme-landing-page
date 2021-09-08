import { HStack, Img, Text } from '@chakra-ui/react';
import React from 'react';

function FooterItem({ img, imgAlt, text }) {
    return (
        <HStack alignItems='start' spacing='1rem'>
            <Img src={img} alt={imgAlt} w='1rem' mt='.5rem' />
            <Text lineHeight='1.5rem'>{text}</Text>
        </HStack>
    );
}

export default FooterItem;
