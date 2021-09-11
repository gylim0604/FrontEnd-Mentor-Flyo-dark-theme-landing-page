import { Link } from '@chakra-ui/layout';
import React from 'react';

function FlyoLink({ text, w = '250px' }) {
    return (
        <Link
            d='block'
            bgGradient='linear(to-r,cyan ,blue)'
            w={w}
            textAlign='center'
            py='.75rem'
            fontSize='1rem'
            fontFamily='Open Sans'
            fontWeight='700'
            borderRadius='50px'
            _hover={{ bg: 'cyan' }}
        >
            {text}
        </Link>
    );
}

export default FlyoLink;
