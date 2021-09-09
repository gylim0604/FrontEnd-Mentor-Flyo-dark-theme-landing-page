import { Box, Container, Img } from '@chakra-ui/react';
import React from 'react';
import TestimonyCard from './TestimonyCard';

function Testimony() {
    return (
        <Box bg='darkBlueMainBg' py='7.5rem'>
            <Container
                d='flex'
                flexDir={{ base: 'column', lg: 'row' }}
                isolation='isolate'
                position='relative'
                maxW={{ base: 'container.baseStyle', lg: 'container.xl' }}
                justifyContent={{ lg: 'space-between' }}
            >
                <Img
                    src='/images/bg-quotes.png'
                    h='2rem'
                    w='auto'
                    position='absolute'
                    left={{ base: '7', lg: '2' }}
                    top={{ base: '1', lg: '2' }}
                    zIndex='-1'
                />
                <TestimonyCard
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
                    name='Satish Patel'
                    title='Founder & CEO, Huddle'
                    img='./images/profile-1.jpg'
                />
                <TestimonyCard
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.'
                    name='Bruce McKenzie'
                    title='Founder & CEO, Huddle'
                    img='./images/profile-2.jpg'
                />
                <TestimonyCard
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.'
                    name='Iva Boyd'
                    title='Founder & CEO, Huddle'
                    img='./images/profile-3.jpg'
                />
            </Container>
        </Box>
    );
}

export default Testimony;
