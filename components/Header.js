import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
function Header() {
    return (
        <Flex bg='darkBlueIntro' color='neutralWhite'>
            <Img src='/images/logo.svg' alt='Flyo logo' />
            <Box>
                <Link>Features</Link>
                <Link>Team</Link>
                <Link>Sign In</Link>
            </Box>
        </Flex>
    );
}

export default Header;
