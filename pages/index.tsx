import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import { 
  Button, 
  Flex, 
  Heading, 
  Input, 
  Switch, 
  useColorMode, 
  useColorModeValue 
} from '@chakra-ui/react'


const Home: NextPage = () => {
  const router = useRouter();

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100","gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p="12" rounded="6">
        <Heading mb={6}>Welcome!</Heading>
        <Input placeholder='reachsujith@gmail.com' variant="filled" mb={3} type="email" />
        <Input placeholder='********' variant="filled" mb="6" type="password"/>
        <Button colorScheme="teal" mb={3} onClick={() => router.push('/dataRequired')}>Log in</Button>
        <Switch onChange={toggleColorMode}/>
      </Flex>
    </Flex>
  )
}

export default Home
