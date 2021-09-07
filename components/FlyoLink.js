import { Link } from '@chakra-ui/layout';
import React from 'react';

function FlyoLink({ text }) {
    return (
        <Link
            bgGradient='linear(to-r,cyan ,blue)'
            w='250px'
            textAlign='center'
            py='.75rem'
            fontSize='1rem'
            fontFamily='Open Sans'
            fontWeight='700'
            borderRadius='50px'
        >
            {text}
        </Link>
    );
}

export default FlyoLink;
