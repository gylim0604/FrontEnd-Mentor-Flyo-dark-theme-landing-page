import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';

function FooterList({ title, items }) {
    return (
        <Box my='3rem'>
            <Text>{title}</Text>
            <UnorderedList listStyleType='none' ml='0' spacing='1rem'>
                {items.map((item, idx) => (
                    <ListItem key='idx'>{item}</ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}

export default FooterList;
