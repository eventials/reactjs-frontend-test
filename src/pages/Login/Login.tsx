
// import { Container } from './styles';

import {
  Box,
  Flex,
  Heading,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  Text,
  FormHelperText
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useWebinar from "../../hooks/useWebinarStore";

const Login: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const { login } = useWebinar();
  const navigate = useNavigate();

  const handleClick = async () => {
    setIsLoading(true);
    if (name.length > 0) {
      setHasError(false);
      await login(name)
      navigate('/');
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    const hasCurrUser = localStorage.getItem('currUser') !== null;
    if (hasCurrUser) {
      return navigate('/')
    }
  }, []);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>JP Webinar</Heading>
          <Text>Para acessar a reunião entre com seu nome abaixo</Text>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl isInvalid={hasError} isRequired id="name">
              <FormLabel>Nome</FormLabel>
              <Input type="text" onChange={e => {
                setName(e.target.value)
                if (hasError) setHasError(false);
              }} />
              {hasError && <FormHelperText color={'red.500'}>Por favor, preencha o nome</FormHelperText>}
            </FormControl>
            <Stack spacing={10}>
              <Button
                isLoading={isLoading}
                onClick={() => handleClick()}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Entrar na reunião!
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;