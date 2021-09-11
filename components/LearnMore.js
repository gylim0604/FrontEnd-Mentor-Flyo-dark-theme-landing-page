import {
    Container,
    Img,
    Box,
    Heading,
    Text,
    LinkBox,
    Icon,
} from '@chakra-ui/react';
import React from 'react';
import { ArrowIcon, ArrowIconWhite } from './Icon';

export default function LearnMore() {
    return (
        <Box bg='darkBlueMainBg'>
            <Container
                maxW={{ base: 'container.baseStyle', lg: 'container.xl' }}
                h={{ lg: '600px' }}
                d={{ lg: 'flex' }}
                alignItems='center'
            >
                <Img
                    src='/images/illustration-stay-productive.png'
                    alt='illustration of people collaborating'
                    w={{ base: '80vw', lg: '1000px' }}
                    maxW={{ base: '50ch', lg: 'initial' }}
                    mx='auto'
                />
                <Box pl={{ lg: '3rem' }}>
                    <Heading
                        as='h3'
                        fontSize={{ base: '1.25rem', lg: '2rem' }}
                        fontWeight='700'
                        my='1.5rem'
                        w={{ lg: '15ch' }}
                    >
                        Stay productive, wherever you are
                    </Heading>
                    <Text lineHeight='1.5rem'>
                        Never let location be an issue when accessing your
                        files. Fylo has you covered for all of your file storage
                        needs.
                        <br />
                        <br />
                        Securely share files and folders with friends, family
                        and colleagues for live collaboration. No email
                        attachments required.
                    </Text>
                    <LinkBox
                        role='group'
                        borderBottom='1px solid cyan'
                        my='1rem'
                        color='cyan'
                        d='inline-flex'
                        alignItems='center'
                        pb='0.25rem'
                        cursor='pointer'
                        _hover={{
                            color: 'whiteAlpha.700',
                            borderBottom: '1px solid white',
                        }}
                    >
                        <Text mr='0.75rem'>See how Fylo works</Text>
                        <Box
                            as='span'
                            d='none'
                            _groupHover={{ display: 'block' }}
                        >
                            <Icon as={ArrowIconWhite} />
                        </Box>
                        <Box as='span' _groupHover={{ display: 'none' }}>
                            <Icon as={ArrowIcon} />
                        </Box>
                    </LinkBox>
                </Box>
            </Container>
        </Box>
    );
}
