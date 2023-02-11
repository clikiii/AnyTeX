import { ReactElement } from "react";
import { SystemStyleObject, Text, Stack, Flex } from '@chakra-ui/react';
import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  text: string;
  icon: ReactElement;
  link: string;
};

const FeatureCard = ({ title, text, icon, link }: CardProps) => {
  const navigate = useNavigate();
  return (
    <Stack 
      sx={styles.stack}
      _hover={{...styles.stack, opacity: 1, boxShadow: '5px 5px 5px orange'}}
      // onClick = {() => navigate(link)}
    >
      <Flex sx={styles.flex}>
        {icon}
      </Flex>
      <Text sx={styles.title}>{title}</Text>
      <Text sx={styles.text}>{text}</Text>
    </Stack>
  );
};

const styles: { [s: string]: SystemStyleObject } = {
  stack: {
    borderStyle: 'solid',
    borderColor: 'orange.300',
    borderWidth: '3px',
    borderRadius: '8px',
    p: '5% 3% 5% 5%',
    backgroundColor: 'white',
    opacity: 0.90,
    width: '80%',
    maxWidth: '100%',
    position: 'relative',
    bottom: '2rem',
    left: '3rem',
  },
  flex: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'orange.300',
    rounded: 'full',
    color: 'white',
    mb: 1,
  },
  title: {
    fontWeight: 600,
  },
  text: {
    color: 'gray.600',
  }
};

export default FeatureCard;