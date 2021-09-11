import { Link } from '@chakra-ui/layout';
import React from 'react';

function HeaderLink({ text }) {
    return (
        <Link
            fontFamily='Open Sans'
            fontWeight='400'
            ml='1.25rem'
            fontSize={{ base: '0.85rem', lg: '1rem' }}
            color={{ lg: 'whiteAlpha.700' }}
            _hover={{ color: 'white', textDecor: 'underline' }}
        >
            {text}
        </Link>
    );
}

export default HeaderLink;
