import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import { 
  Button, 
  Flex, 
  Heading, 
  Input,
  Image,
  Switch, 
  Text,
  useColorMode, 
  useColorModeValue
} from '@chakra-ui/react'

const Home: NextPage = () => {
  const router = useRouter();

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100","gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" gap={12}>
      <Image src="/hero.jpg" alt='hero-image' maxWidth="500px"/>
      <Flex direction="column" p="12" rounded="6" width="25%" max-width="600px">
        <Heading mb={6}>Lets get started!</Heading>
        <Input placeholder='reachsujith@gmail.com' variant="outline" mb={3} type="email" />
        <Input placeholder='********' variant="outline" mb="12" type="password"/>
        <Button bg="blue.700" color="white" mb={8} onClick={() => router.push('/dataRequired')}>Log in</Button>
        <Text fontSize='md' textAlign="center" mb={8}>or</Text>
        <Button mb="3">Continue with google</Button>
        <Switch onChange={toggleColorMode}/>
      </Flex>
    </Flex>
  )
}

export default Home
