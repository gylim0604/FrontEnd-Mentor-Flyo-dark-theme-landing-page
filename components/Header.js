import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import HeaderLink from './HeaderLink';
import { Container } from '@chakra-ui/react';
function Header() {
    return (
        <Flex bg='darkBlueIntro' py='1.5rem'>
            <Container d='flex' justifyContent='space-between'>
                <Img src='/images/logo.svg' alt='Flyo logo' h='1.5rem' />
                <Box>
                    <HeaderLink text='Features' />
                    <HeaderLink text='Team' />
                    <HeaderLink text='Sign In' />
                </Box>
            </Container>
        </Flex>
    );
}

export default Header;
