import {
    Box,
    Container,
    Heading,
    Text,
    Input,
    Flex,
    FormControl,
    FormErrorMessage,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import FlyoLink from './FlyoLink';

function CTA() {
    function validateEmail(value) {
        let error;
        var re = /\S+@\S+\.\S+/;
        if (!re.test(value)) {
            error = 'Please enter a valid email address';
        }
        return error;
    }

    return (
        <Box
            bg='linear-gradient(180deg, hsl(218, 28%, 13%) 60%, hsl(216, 53%, 9%) 40%)'
            py='1rem'
        >
            <Container
                maxW={{ base: 'container.baseStyle', lg: 'container.lg' }}
            >
                <Flex
                    flexDir='column'
                    bg='darkBlueIntro'
                    p='2rem'
                    py={{ lg: '2rem' }}
                    px={{ lg: '5rem' }}
                    mx={{ lg: '2.5rem' }}
                    borderRadius='10px'
                    textAlign='center'
                    alignItems='center'
                >
                    <Heading
                        as='h4'
                        fontSize={{ base: '1.4rem', lg: '1.8rem' }}
                        my='1rem'
                    >
                        Get early access today
                    </Heading>
                    <Text
                        my='1rem'
                        lineHeight='1.5rem'
                        fontSize={{ base: '0.8rem', lg: '1rem' }}
                        w={{ lg: '70ch' }}
                    >
                        It only takes a minute to sign up and our free starter
                        tier is extremely generous. If you have any questions,
                        our support team would be happy to help you.
                    </Text>

                    <Formik
                        initialValues={{ emailemail: '' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                    >
                        {(props) => (
                            <Form
                                style={{
                                    // display: 'flex',
                                    width: '100%',
                                    // alignItems: 'flex-start',
                                    // marginTop: '2rem',
                                }}
                            >
                                <Box
                                    d={{ lg: 'flex' }}
                                    mt={{ lg: '2rem' }}
                                    alignItems={{ lg: 'flex-start' }}
                                >
                                    <Field
                                        name='email'
                                        validate={validateEmail}
                                    >
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.email &&
                                                    form.touched.email
                                                }
                                                w={{
                                                    base: '100%',
                                                    lg: '200%',
                                                }}
                                                mr={{ lg: '2rem' }}
                                                my={{
                                                    base: '2rem',
                                                    lg: '0',
                                                }}
                                            >
                                                <Input
                                                    {...field}
                                                    color='black'
                                                    bg='white'
                                                    p='2rem'
                                                    py={{ lg: '1.5rem' }}
                                                    borderRadius='50px'
                                                    placeholder='email@example.com'
                                                    fontSize='0.8rem'
                                                    id='email'
                                                />
                                                <FormErrorMessage ml='2rem'>
                                                    {form.errors.email}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <FlyoLink
                                        text='Get Started For Free'
                                        w='100%'
                                    />
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Flex>
            </Container>
        </Box>
    );
}

export default CTA;
