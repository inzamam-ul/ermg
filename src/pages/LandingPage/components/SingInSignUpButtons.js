import React, { useState } from 'react';
import { Center, Box, Text } from '@chakra-ui/react';
import Typed from 'react-typed';
import { useForm } from 'react-hook-form';

const SingInSignUpButtons = ({ status, message, onValidated }) => {
  const [emailError, setEmailError] = useState(false);
  const [zIndex, setzIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState('');
  const onSubmit = (value, e) => {
    const data = { email, ...value };
    // console.log(JSON.stringify(data));
    if (email) {
      onValidated({
        MERGE0: data.email,
        MERGE1: data.name,
        MERGE4: data.phone,
        MERGE3: data.company_name,
      });
    }
  }; // your form submit function which will invoke after successful validation

  return (
    <Center p={['20px', 0]} height="150px">
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div style={{ position: 'relative' }}>
          {emailError && (
            <div style={{ color: 'white', textAlign: 'left', padding: 2 }}>
              Please enter a valid email!!
            </div>
          )}
          <Typed
            strings={['Want to sign up with email?', 'Enter your email']}
            typeSpeed={40}
            backSpeed={30}
            attr="placeholder"
            loop
          >
            <input
              data-aos="fade-up"
              data-aos-duration="300"
              type="email"
              className="form__field sign_up"
              // {...register('email', {
              //   required: true,
              //   // maxLength: 20,
              //   pattern: /^\S+@\S+\.\S+$/,
              // })}
              required
              onBlur={e => setEmail(e.target.value)}
            />
          </Typed>

          <button
            data-aos="fade-right"
            data-aos-duration="800"
            type="button"
            className="btn btn--primary btn--inside uppercase"
            onClick={() => {
              const re =
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              if (re.test(email)) {
                setzIndex(100);
              } else {
                setEmailError(true);
                setInterval(() => {
                  setEmailError(false);
                }, 2000);
              }
            }}
          >
            SIGN UP
          </button>
        </div>

        <div
          className="sign_form email_reg"
          style={{
            height: `${zIndex}%`,
            transition: 'all 0.3 sec liner',
            overflow: 'hidden',
          }}
        >
          <Box
            width={['80%', '80%', '40%', '30%']}
            style={{
              borderRadius: 5,
              background: '#fff',
              padding: '30px 15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              onClick={e => setzIndex(0)}
              style={{
                padding: '6px 15px',
                boxShadow: ' 0 20px 60px 0 rgb(56 40 0 / 15%)',
                position: 'absolute',
                right: 6,
                top: 6,
                color: 'white',
                background: 'teal',
                borderRadius: 3,
                cursor: 'pointer',
              }}
            >
              X
            </div>
            <Text
              color="black"
              textAlign="center"
              fontWeight="bold"
              fontSize="16px"
              mt={5}
            >
              Join the evolution of fashion sourcing
            </Text>
            <div>
              {status === 'sending' && (
                <div
                  style={{ color: 'blue', textAlign: 'center', padding: 10 }}
                >
                  Signing in...
                </div>
              )}
              {status === 'error' && (
                <div
                  style={{ color: 'red', textAlign: 'center', padding: 10 }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === 'success' && (
                <div
                  style={{ color: 'green', textAlign: 'center', padding: 10 }}
                >
                  Successful !
                </div>
              )}
            </div>

            <Box
              mt={10}
              style={{ textAlign: 'left' }}
              className="sign_input col-3"
            >
              <input
                className="effect-24"
                {...register('name', {
                  required: true,
                  // maxLength: 20,
                  // pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              <label>
                Name <span style={{ color: 'red' }}>*</span>{' '}
              </label>
              {errors?.firstName?.type === 'required' && (
                <p>This field is required</p>
              )}
            </Box>
            <Box style={{ textAlign: 'left' }} className="sign_input col-3">
              <input
                className="effect-24"
                {...register('phone', {
                  // required: true,
                  // maxLength: 20,
                  // pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              <label>Phone Number (optional)</label>
              {errors?.phone?.type === 'required' && (
                <p>This field is required</p>
              )}
            </Box>
            <Box style={{ textAlign: 'left' }} className="sign_input col-3">
              <input
                className="effect-24"
                {...register('company_name', {
                  // required: true,
                  // maxLength: 20,
                  // pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              <label>Company Name (optional)</label>
              {errors?.company_name?.type === 'required' && (
                <p>This field is required</p>
              )}
            </Box>
            <Box
              style={{ cursor: 'pointer !important' }}
              className="sign_input col-3"
            >
              <input type="submit" value="Sign up" />
            </Box>
          </Box>
        </div>
      </form>
    </Center>
  );
};

export default SingInSignUpButtons;
