import { Link, ListItem, List, UnorderedList, Icon, Text, Flex, Code, Box, SlideFade, useColorMode, useDisclosure } from '@chakra-ui/react'
import { FaNodeJs, FaPython, FaReact, FaHtml5 } from 'react-icons/fa'
import Layout from './Layout'
import Title from './Title'

const Projects = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode } = useColorMode()
    var isDark = colorMode === 'dark'
    if(isOpen === false){
        setTimeout(onToggle, props.time)
    }
    return(
        <Layout>
            <SlideFade in={isOpen}>
                <Box mt={120} mb={'-140'} w={['50%', '50%', '100%']}size={'2xl'}>
                    <Title id='projects'>Projects</Title>
                    <br></br><br></br><br></br><br></br><br></br>
                    <UnorderedList styleType={'none'} textDecoration='none' mt={-10}>
                        <Link href='https://github.com/kfleung129/react_website'></Link> 
                        <ListItem mb={3} >
                            <Link as={'none'} isExternal={true}href='https://github.com/kfleung129/discordBot'><Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'25'}><Icon mr={2} as={FaNodeJs}/> Discord Bot with NodeJS </Code></Link>
                        </ListItem>
                        <ListItem mb={3}>
                            <Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'25'}><Icon mr={2} as={FaPython}/> Discord Bot with Python </Code>
                        </ListItem>
                        <ListItem mb={3}>
                            <Link isExternal={true} href='https://github.com/kfleung129/website'><Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'25'}><Icon mr={2} as={FaHtml5}/> Website (html, css, JS) </Code></Link>
                        </ListItem>
                        <ListItem mb={3}>
                            <Link as={'none'} isExternal={true}href='https://github.com/kfleung129/react_website'><Code transition='0.5s ease-out' _hover={{wordSpacing: 6, color: 'cyan.500'}} borderRadius={12} w={'fit-content'} pl={3} pr={3} pt={2} pb={2} display={'flex'} alignItems='center' fontSize={'25'}><Icon mr={2} as={FaReact}/> Website (ReactJS) </Code></Link>
                        </ListItem>
                    </UnorderedList>
                </Box>
            </SlideFade>
        </Layout>
    );
}

export default Projects