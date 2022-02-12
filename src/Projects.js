import { ListItem, List, UnorderedList, Icon, Text, Flex, Code, Box, SlideFade, useColorMode, useDisclosure } from '@chakra-ui/react'
import { FaNodeJs, FaPython, FaReact, FaHtml5 } from 'react-icons/fa'
import Layout from './Layout'
import Title from './Title'

const Projects = () => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode } = useColorMode()
    var isDark = colorMode === 'dark'
    if(isOpen === false){
        setTimeout(onToggle, 2500)
    }
    return(
        <Layout>
            <SlideFade in={isOpen}>
                <Box w={['50%', '50%', '100%']}  fontSize={{ base: '15px', md: '25px', lg: '20' }} size={{lg: '2xl'}}>
                    <Title id='projects'>Projects</Title>
                    <br></br><br></br><br></br>
                    <UnorderedList styleType={'none'}>
                        <ListItem mb={3}>
                            <Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'30'}><Icon mr={2} as={FaNodeJs}/> Discord Bot with NodeJS </Code>
                        </ListItem>
                        <ListItem mb={3}>
                            <Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'30'}><Icon mr={2} as={FaPython}/> Discord Bot with Python </Code>
                        </ListItem>
                        <ListItem mb={3}>
                            <Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'30'}><Icon mr={2} as={FaHtml5}/> Website (html, css, JS) </Code>
                        </ListItem>
                        <ListItem mb={3}>
                            <Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'30'}><Icon mr={2} as={FaReact}/> Website (ReactJS) </Code>
                        </ListItem>
                        
                    </UnorderedList>
                </Box>
            </SlideFade>
        </Layout>
    );
}

export default Projects