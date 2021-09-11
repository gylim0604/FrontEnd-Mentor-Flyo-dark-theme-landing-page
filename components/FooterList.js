import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';

function FooterList({ items }) {
    return (
        <Box my={{ base: '3rem', lg: '0' }}>
            <UnorderedList
                listStyleType='none'
                ml='0'
                spacing='1rem'
                color={{ lg: 'whiteAlpha.700' }}
            >
                {items.map((item, idx) => (
                    <ListItem
                        key={idx}
                        _hover={{ color: 'white' }}
                        cursor='pointer'
                    >
                        {item}
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}

export default FooterList;
