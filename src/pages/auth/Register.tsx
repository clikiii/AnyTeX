import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react';
import BackgroundImage from '../../assets/images/background.jpg';
import { BACKENDLINK } from '../../const';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passSeen, setPassSeen] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passCheckSeen, setPassCheckSeen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if(password !== passwordCheck){
      alert("Password do not match!");
      return;
    };

    Axios.post(
      `${BACKENDLINK}/login/generate-seed?user_name=${username}&password=${password}`,
    )
      .then((r) => {
        console.log(r);
        console.log(typeof r);
        navigate('/login');
      })
      .catch((e) => {
        alert(e);
      })
  }

  return (
    <Box sx={styles.containerMain}>
      <Box sx={styles.container}>
        <Text sx={styles.title}>Register</Text>
        <Input
          placeholder='Username'
          focusBorderColor='green.500'
          sx={styles.input}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <InputGroup sx={styles.input}>
          <Input
            focusBorderColor='green.500'
            placeholder='Password'
            type={passSeen ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button
              h='1.75rem'
              size='sm'
              onClick={() => setPassSeen(!passSeen)}
            >
              {passSeen ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        <InputGroup sx={styles.input}>
          <Input
            focusBorderColor='green.500'
            placeholder='Confirm Password'
            type={passCheckSeen ? 'text' : 'password'}
            value={passwordCheck}
            onChange={(event) => setPasswordCheck(event.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button
              h='1.75rem'
              size='sm'
              onClick={() => setPassCheckSeen(!passCheckSeen)}
            >
              {passCheckSeen ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          colorScheme='green'
          sx={styles.button}
          // onClick={() => handleRegister()}
          onClick={() => navigate('/login')}
        >
          Register
        </Button>
        <Button
          variant='outline'
          colorScheme='green'
          sx={styles.button}
          onClick={() => navigate('/login')}
        >
          Already have an account?
        </Button>
      </Box>
    </Box>
  );
};

const styles: { [styleName: string]: SystemStyleObject } = {
  containerMain: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: BackgroundImage,
    backgroundSize: 'cover',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    minWidth: '18rem',
    backgroundColor: 'white',
    paddingBottom: '2rem',
    paddingTop: '1rem',
    borderRadius: '1rem',
  },
  title: {
    fontSize: '3xl',
    fontWeight: '700',
  },
  input: {
    width: '90%',
    minWidth: '15rem',
    marginBlock: '1rem',
  },
  button: {
    width: '90%',
    minWidth: '15rem',
    marginTop: '0.5rem',
  },
};

export default Register;
