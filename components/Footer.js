import { Img } from '@chakra-ui/image';
import { Box, Container, Flex, ListItem } from '@chakra-ui/layout';
import { Grid, UnorderedList, Text } from '@chakra-ui/react';
import React from 'react';
import FooterItem from './FooterItem';
import FooterList from './FooterList';

function Footer() {
    return (
        <Box bg='darkBlueFooter' py='1rem'>
            <Container>
                <Img src='images/logo.svg' alt='fylo logo' h='3rem' my='3rem' />
                <Grid gap='1rem'>
                    <FooterItem
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
                        img='images/icon-location.svg'
                        imgAlt='location marker symbol'
                    />
                    <FooterItem
                        text='+1-543-123-4567'
                        img='images/icon-phone.svg'
                        imgAlt='phone icon'
                    />
                    <FooterItem
                        text='example@fylo.com'
                        img='images/icon-email.svg'
                        imgAlt='email icon'
                    />
                </Grid>
                <FooterList
                    // title='About Us'
                    items={['About Us', 'Jobs', 'Press', 'Blog']}
                />
                <FooterList
                    // title='Contact Us'
                    items={['Contact Us', 'Terms', 'Privacy']}
                />
                <Flex justifyContent='center'>
                    <Img src='images/icon-arrow.svg' />
                    <Img src='images/icon-arrow.svg' />
                    <Img src='images/icon-arrow.svg' />
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;
