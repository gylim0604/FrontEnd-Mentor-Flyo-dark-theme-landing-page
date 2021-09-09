import { Container, Box } from '@chakra-ui/react';
import React from 'react';
import FeatureCard from './FeatureCard';

function Features() {
    return (
        <Box bg='darkBlueMainBg' py='1.5rem'>
            <Container
                d='grid'
                gridTemplateColumns={{ lg: 'repeat( 2, 1fr)' }}
                gridGap={{ lg: '2.5rem' }}
                maxW={{ base: 'container.baseStyle', lg: 'container.lg' }}
            >
                <FeatureCard
                    title='Access your files, anywhere'
                    text='The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere.'
                    img='/images/icon-access-anywhere.svg'
                    imgAlt='illustration of computer'
                />
                <FeatureCard
                    title='Security you can trust'
                    text='2-factor authentication and user-controlled encryption are just a couple of the security 
                    features we allow to help secure your files.'
                    img='/images/icon-security.svg'
                    imgAlt='illustration of shield'
                />
                <FeatureCard
                    title='Real-time collaboration'
                    text='Securely share files and folders with friends, family and colleagues for live collaboration. 
                    No email attachments required.'
                    img='/images/icon-collaboration.svg'
                    imgAlt='illustration of clock'
                />
                <FeatureCard
                    title='Store any type of file'
                    text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
                    img='/images/icon-any-file.svg'
                    imgAlt='illustration of folder'
                />
            </Container>
        </Box>
    );
}

export default Features;
