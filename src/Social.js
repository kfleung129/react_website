import { Heading, Link, Box, Text, SlideFade, useDisclosure, useColorMode, IconButton, Icon } from '@chakra-ui/react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import Title from './Title'
import Layout from './Layout'

const Social = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode } = useColorMode()
    var isDark = colorMode === 'dark'
    if(isOpen === false){
        setTimeout(onToggle, props.time)
    }
    return(
        <Layout mb={0}>
            <SlideFade in={isOpen}>
                <Box mb={200} w={{base:'50%', md:'50%', lg:'100%'}}  fontSize={{ base: '10px', md: '25px', lg: '20' }} size={{lg: '2xl'}}>
                    <Title id='socialMedia'>Social Media</Title>
                    <br></br><br></br>
                    <Link isExternal={true} href={'https://github.com/kfleung129'}><IconButton isRound={true} size={'lg'} icon={<FaGithub/>} bgColor={isDark ? 'default' : 'gray.300'}></IconButton></Link> 
                    <Link isExternal={true} href={'https://www.instagram.com/__fai_leung__/'}><IconButton isRound={true} ml={6} size={'lg'} icon={<FaInstagram/>} bgColor={isDark ? 'default' : 'gray.300'}></IconButton></Link>
                </Box>
            </SlideFade>
        </Layout>
    );
}

export default Social