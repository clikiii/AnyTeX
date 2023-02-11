import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { setAddr, setSeed } from '../../store/userReducer';
import { BACKENDLINK } from '../../const';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passSeen, setPassSeen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log('here');
    console.log(`${BACKENDLINK}/login/verify_password?user_name=${username}&password=${password}`);
    Axios.post(
      `${BACKENDLINK}/login/verify_password?user_name=${username}&password=${password}`,
    )
      .then((r) => {
        console.log(r);
        if(r.data[0]) {
          console.log('inside');
          dispatch(setSeed(r.data[1]));
          dispatch(setAddr(r.data[2]));
          navigate('/');
        }
      })
  }

  return (
    <Box sx={styles.containerMain}>
      <Box sx={styles.container}>
        <Text sx={styles.title}>Log in</Text>
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

        <Button
          colorScheme='green'
          sx={styles.button}
          // onClick={() => handleLogin()}
          onClick={() => navigate('/ocr')}
        >
          Log in
        </Button>
        <Button
          variant='outline'
          colorScheme='green'
          sx={styles.button}
          onClick={() => navigate('/register')}
        >
          Don't have an account?
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

export default Login;
