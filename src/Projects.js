import { Link, ListItem, List, UnorderedList, Icon, Text, Flex, Code, Box, HStack, SlideFade, useColorMode, useDisclosure } from '@chakra-ui/react'
import { FaNodeJs, FaPython, FaReact, FaHtml5 } from 'react-icons/fa'
import Title from './Title'

const Projects = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode } = useColorMode()
    var isDark = colorMode === 'dark'
    if(isOpen === false){
        setTimeout(onToggle, props.time)
    }
    return(
        <Box>
            <HStack mt={[40, 150, 250]} ml={{base:10, md: 50, lg: 300}}>
                <SlideFade in={isOpen}>
                    <Box mt={120} mb={'-150'} w={['50%', '50%', '100%']}size={'2xl'}>
                        <Title id='projects'>Projects</Title>
                        <br></br><br></br><br></br><br></br><br></br>
                        <UnorderedList styleType={'none'} mt={-10}>
                            <ListItem mb={3} w={500}>
                                <a href='https://github.com/kfleung129/discordBot' target="_blank"><Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'25'} bgColor={isDark ? 'default' : 'gray.300'}><Icon mr={2} as={FaNodeJs}/> Discord Bot with NodeJS </Code></a>
                            </ListItem>
                            <ListItem mb={3}>
                                <Code cursor={'pointer'} transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'25'} bgColor={isDark ? 'default' : 'gray.300'}><Icon mr={2} as={FaPython}/> Discord Bot with Python </Code>
                            </ListItem>
                            <ListItem mb={3}>
                                <a href='https://github.com/kfleung129/website' target="_blank"><Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'25'} bgColor={isDark ? 'default' : 'gray.300'}><Icon mr={2} as={FaHtml5}/> Website (html, css, JS) </Code></a>
                            </ListItem>
                            <ListItem mb={3}>
                                <a href='https://github.com/kfleung129/react_website' target="_blank"><Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'25'} bgColor={isDark ? 'default' : 'gray.300'}><Icon mr={2} as={FaReact}/> Website (ReactJS) </Code></a>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </SlideFade>
            </HStack>
        </Box>
    );
}

export default Projects