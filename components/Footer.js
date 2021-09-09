import { Img } from '@chakra-ui/image';
import { Box, Container, Flex, GridItem, ListItem } from '@chakra-ui/layout';
import { Grid, UnorderedList, Text } from '@chakra-ui/react';
import React from 'react';
import FooterItem from './FooterItem';
import FooterList from './FooterList';

function Footer() {
    return (
        <Box bg='darkBlueFooter' py='1rem'>
            <Container
                maxW={{ base: 'container.baseStyle', lg: 'container.xl' }}
            >
                <Img src='images/logo.svg' alt='fylo logo' h='3rem' my='3rem' />
                <Box
                    d={{ lg: 'flex' }}
                    alignItems='flex-start'
                    justifyContent='space-between'
                >
                    <Grid
                        gap='1rem'
                        columnGap={{ lg: '6rem' }}
                        gridTemplateColumns={{ lg: '40ch 40ch' }}
                        gridTemplateRows={{ lg: '1.5rem 1.5rem' }}
                    >
                        <GridItem rowSpan={{ lg: 2 }}>
                            <FooterItem
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
                                img='images/icon-location.svg'
                                imgAlt='location marker symbol'
                            />
                        </GridItem>
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
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
