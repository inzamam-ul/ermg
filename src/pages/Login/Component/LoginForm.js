import { Box, Button, Center, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../lib/auth';
// import manufacturerLogo from "../login-assets/manufacture.png";
// import chatLogo from "../login-assets/chat.png";
// import quoteLogo from "../login-assets/quote.png";
// import sampleLogo from "../login-assets/garment.png";
// import expressLogo from "../login-assets/letter-e.png";
import gLogo from '../../../assets/img/Google.svg';
import linkedLogo from '../../../assets/img/linkedin.png';

const LoginForm = () => {
  const {
    loginStatus,
    signInWithGoogle,
    signInWithGoogleRedirect,
    signUpWithEmailAndPass,
    signInWithEmailAndPass,
  } = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  console.log(history);
  const [newUser, setNewUser] = useState(false);

  const onSubmit = data => {
    console.log(data);
    const { companyName, email, password } = data;
    newUser
      ? signUpWithEmailAndPass(companyName, email, password)
      : signInWithEmailAndPass(email, password);
  };

  return (
    <>
      <Link as={RouterLink} to="/" fontWeight="bold">
        <button className="go_home_btn">
          <Text fontWeight="bold" fontSize="lg">
            Back to Home
          </Text>{' '}
        </button>
      </Link>
      <Flex
        style={{ backdropFilter: 'blur(15px)' }}
        color="white"
        textAlign="left"
        // width="80%"
        // maxW="70rem"
        // bg="white"
        px={4}
        pt={8}
        position="relative"
      >
        <Flex
          zIndex="1"
          direction={[
            'column-reverse',
            'column-reverse',
            'column-reverse',
            'row',
          ]}
          justify="space-between"
          width="100%"
          px={[0, 0, 0, '3rem', '8rem']}
          py={8}
          alignItems="start"
          //   maxW="80rem"
          //   margin="0 auto"
        >
          <Flex
            direction="column"
            justify="center"
            // maxW="700px"
            width={['100%', '100%', '100%', '110%', '58%']}
            align="end"
            mb={['1rem', 0]}
            // ml={[0, 0, 12]}
            pb={8}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* <Flex
              p={[0, 0, 0, 5, 0]}
              direction="column"
              justify="center"
              align="end"
              color="black"
            >
              <Text color="teal" fontWeight="bold" fontSize="2xl">
                Welcome!
              </Text>
              <Text mt={6} fontSize="3xl" fontWeight="bold">
                We connect fashion brands directly to verified apparel
                manufacturers
              </Text>
              <Flex direction="row" alignItems="center" mt={6}>
                <Image
                  w="45px"
                  h="inherit"
                  objectFit="cover"
                  src={manufacturerLogo}
                  mr={5}
                />
                <div>
                  <Text fontSize="lg" fontWeight="bold">
                    Verified Manufacturers
                  </Text>
                  <Text fontSize="lg">
                    Access to hundreds of complaint manufactures profiles
                  </Text>
                </div>
              </Flex>

              <Flex direction="row" alignItems="center" mt={6}>
                <Image
                  w="45px"
                  h="inherit"
                  objectFit="cover"
                  src={chatLogo}
                  mr={5}
                />
                <div>
                  <Text fontSize="lg" fontWeight="bold">
                    Instant Messaging
                  </Text>
                  <Text fontSize="lg">
                    Communicate directly through built-in communications
                  </Text>
                </div>
              </Flex>
              <Flex direction="row" alignItems="center" mt={6}>
                <Image
                  w="45px"
                  h="inherit"
                  objectFit="cover"
                  src={quoteLogo}
                  mr={5}
                />
                <div>
                  <Text fontSize="lg" fontWeight="bold">
                    Quotations
                  </Text>
                  <Text fontSize="lg">
                    Receive multiple quotations from top relevant manufacturers
                  </Text>
                </div>
              </Flex>
              <Flex direction="row" alignItems="center" mt={6}>
                <Image
                  w="45px"
                  h="inherit"
                  objectFit="cover"
                  src={sampleLogo}
                  mr={5}
                />
                <div>
                  <Text fontSize="lg" fontWeight="bold">
                    Sample Request
                  </Text>
                  <Text fontSize="lg">
                    Prepare for production by perfecting your product through
                    sampling
                  </Text>
                </div>
              </Flex>
              <Flex direction="row" alignItems="center" mt={6}>
                <Image
                  w="45px"
                  h="inherit"
                  objectFit="cover"
                  src={expressLogo}
                  mr={5}
                />
                <div>
                  <Text fontSize="lg" fontWeight="bold">
                    eRMG Express
                  </Text>
                  <Text fontSize="lg">
                    Browse curated catalogs of customizable clothing in small
                    MOQs
                  </Text>
                </div>
              </Flex>
            </Flex> */}
          </Flex>
          <Flex
            className="ft"
            data-aos="fade-up"
            data-aos-duration="400"
            direction="column"
            justify="center"
            align="end"
            mb={['1rem', 0]}
            // ml={[0, 0, 12]}
            // pb={8}
            width={['100%', '100%', '100%', '80%', '38%']}
          >
            <Box
              style={{
                height: 'auto',
                width: '100%',
                background: 'white',
                padding: '30px 40px',
                boxShadow: ' 0 20px 60px 0 rgb(56 40 0 / 15%)',
              }}
              w="100%"
              shadow
              className="sign_form"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Text mb={4} color="black" fontWeight="bold" fontSize="2xl">
                  {newUser ? 'Create an account' : 'Login'}
                </Text>

                <Flex direction="column" justify="center" align="center">
                  <Box className="sign_input col-3">
                    <input
                      required
                      className="effect-24"
                      {...register('email', {
                        required: true,
                        // maxLength: 20,
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
                    />
                    <label>Email Address</label>
                    {errors?.email?.type === 'required' && (
                      <p>This field is required</p>
                    )}
                    {errors?.email?.type === 'pattern' && (
                      <p>Email is not valid</p>
                    )}
                  </Box>
                  {newUser && (
                    <Box className="sign_input col-3">
                      <input
                        required
                        className="effect-24"
                        {...register('companyName', {
                          // pattern: /^[A-Za-z]+$/i,
                        })}
                      />
                      <label>Company Name</label>
                      {errors?.companyName?.type === 'pattern' && (
                        <p>Alphabetical characters only</p>
                      )}
                    </Box>
                  )}
                  <Box className="sign_input col-3">
                    <input
                      required
                      className="effect-24"
                      type="password"
                      {...register('password', {
                        required: 'Password is required!',
                      })}
                    />
                    <label>Password </label>
                    {errors.password && (
                      <p style={{ color: 'white' }}>
                        {errors.password.message}
                      </p>
                    )}
                  </Box>
                  {newUser && (
                    <Box className="sign_input col-3">
                      <input
                        required
                        type="password"
                        className="effect-24"
                        {...register('passwordConfirmation', {
                          required: 'Please confirm password!',
                          validate: {
                            matchesPreviousPassword: value => {
                              const { password } = getValues();
                              return (
                                password === value || "Passwords didn't match!"
                              );
                            },
                          },
                        })}
                      />
                      <label>Confirm Password </label>
                      {errors.passwordConfirmation && (
                        <p style={{ color: 'white' }}>
                          {errors.passwordConfirmation.message}
                        </p>
                      )}
                    </Box>
                  )}
                  <div className="sign_input col-3">
                    <input
                      type="submit"
                      value={newUser ? 'Create account' : 'Login'}
                    />
                  </div>
                </Flex>
                {loginStatus.error !== '' && (
                  <p style={{ color: 'red', textAlign: 'center' }}>
                    {loginStatus.error}
                  </p>
                )}
                <p style={{ textAlign: 'center' }}>
                  {!newUser ? (
                    <span style={{ color: 'black' }}>
                      Don't have account?{' '}
                      <span
                        className="underline"
                        onClick={() => {
                          setNewUser(true);
                        }}
                      >
                        Create an account
                      </span>
                    </span>
                  ) : (
                    <span style={{ color: 'black' }}>
                      Already have an account?{' '}
                      <span
                        className="underline"
                        onClick={() => {
                          setNewUser(false);
                        }}
                      >
                        Login
                      </span>
                    </span>
                  )}
                </p>
              </form>
              <Box py={3}>
                <p className="or">or sign in with</p>
              </Box>
              <Box
                // py={5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
              >
                <Button
                  shadow="md"
                  borderRadius="2px"
                  py={6}
                  bg="white"
                  color="black"
                  variant="outline"
                  onClick={
                    window.outerWidth > 1024
                      ? signInWithGoogle
                      : signInWithGoogleRedirect
                  }
                >
                  <Center spacing={4} direction="row">
                    <img
                      style={{ height: 17, marginRight: 4 }}
                      src={gLogo}
                      alt="G"
                    />{' '}
                    <span>Google</span>
                  </Center>
                </Button>
                <span
                  style={{ color: 'black', fontWeight: '600', padding: 10 }}
                >
                  or
                </span>
                <Button
                  shadow="md"
                  borderRadius="2px"
                  py={6}
                  bg="white"
                  color="black"
                  variant="outline"
                >
                  <Center spacing={4} direction="row">
                    <img
                      style={{ height: 17, marginRight: 4 }}
                      src={linkedLogo}
                      alt="L"
                    />{' '}
                    <span>Linkedin</span>
                  </Center>
                </Button>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginForm;
