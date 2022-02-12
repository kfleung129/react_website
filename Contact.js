import { Link, ListItem, List, UnorderedList, Icon, Text, Flex, Code, Box, SlideFade, useColorMode, useDisclosure } from '@chakra-ui/react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import Title from './Title'
import Layout from './Layout'

const Contact = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode } = useColorMode()
    var isDark = colorMode === 'dark'
    if(isOpen === false){
        setTimeout(onToggle, props.time)
    }
    return(
        <Layout>
            <SlideFade in={isOpen}>
                <Box mt={'-150px'} w={['50%', '50%', '100%']}  fontSize={{ base: '15px', md: '25px', lg: '20' }} size={{lg: '2xl'}}>
                    <Title>Contact Me</Title>
                    <br></br><br></br>
                    <UnorderedList styleType={'none'}>
                        <ListItem>
                            <Icon ml={-4} mr={2} as={FaMailBulk}/>Email: kfleung68-c@my.cityu.edu.hk
                        </ListItem>
                        <ListItem>
                            <Icon ml={-4} mr={2} as={FaPhone}/>Phone: 67679759
                        </ListItem>
                    </UnorderedList>
                </Box>
            </SlideFade>
        </Layout>
    );
}

export default Contact