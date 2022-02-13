import { useState } from 'react'
import { Box, Link, Flex, ChakraProvider, Text, HStack, Image, Spacer, Button, Show, useDisclosure, Slide } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FaHome, FaProjectDiagram, FaMoon, FaSun } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/button'
//My Components
import Clock from './Clock'

const NavigationBar = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onToggle } = useDisclosure()
    if(isOpen === false){
        setTimeout(onToggle, props.time)
    }
    return(
        <Box>
            <HStack>
                <Slide in={isOpen} direction={'top'}>
                    <Flex align={'center'} p={3} w="100%" bgColor={colorMode == 'dark' ? '#23242D' : '#D6D6D6'}>
                        <Image 
                            src='https://pbs.twimg.com/profile_images/1379425573802369028/tmGAbwb9_400x400.jpg'
                            borderRadius='full'
                            boxSize='50px'
                            borderRadius='50%'
                            cursor='pointer'
                        />
                        <Text ml={5} letterSpacing={1} fontSize={25} fontWeight={'bold'} bgClip='text' bgGradient={colorMode == 'dark' ? 'linear(to-r, green.300, cyan.500)' : 'linear(to-r, green.500, blue.700)'} transition='0.5s ease-out' _hover={{wordSpacing: 10, letterSpacing: 5}}>Jason Leung</Text>
                        <Spacer/>
                        <IconButton ml={10} icon={<FaHome/>} isRound={'true'}/>
                        <IconButton ml={3} icon={<FaProjectDiagram/>} isRound={'true'}/>
                        <IconButton ml={3} icon={colorMode === 'dark' ? <FaSun/> : <FaMoon/>} isRound={'true'} onClick={toggleColorMode}/>
                    </Flex>
                </Slide>
            </HStack>
        </Box>
    );
}

export default NavigationBar 