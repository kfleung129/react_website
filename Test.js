import { Box, Button } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

function Test(props) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Button round='sm' bgColor={'grey'} color={'black'}>
          Testing
      </Button>
    </ChakraProvider>
  )
}

export default Test