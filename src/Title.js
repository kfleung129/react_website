import { Heading, useColorMode } from '@chakra-ui/react'

const Title = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  var isDark = colorMode === 'dark' ? true : false
  return (
    <Heading 
        id={props.id}
        mb={-10} 
        id='introduction' 
        bgColor={isDark ? 'cyan.900' : 'gray.700'}
        color={isDark ? 'cyan.300' : 'gray.200'} 
        border={0} 
        borderRadius={35}
        pt={1} pb={2} pl={5} pr={5}
        size={'xl'} 
        width={'fit-content'}
        fontSize={{base:'20px', md:'25px', lg:'auto'}}
        transition='0.3s ease-out' 
        _hover={isDark ? {color:'cyan.100', bgColor:'cyan.700'} : {color: 'gray.100', bgColor:'gray.500'}}
        boxShadow='lg'
        >
        {props.children}
    </Heading>
  )
}

export default Title
