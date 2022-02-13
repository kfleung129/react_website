import { Heading, Link, Box, Text, SlideFade, useDisclosure, useColorMode, IconButton, Icon, HStack } from '@chakra-ui/react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import Title from './Title'

const Social = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode } = useColorMode()
    var isDark = colorMode === 'dark'
    if(isOpen === false){
        setTimeout(onToggle, props.time)
    }
    return(
        <Box>
            <HStack mt={230} ml={{base:10, md: 50, lg: 300}} mb={-10}>
                <SlideFade in={isOpen}>
                    <Box mb={{base:'100px', md:100, lg:200}} w={'full'}  fontSize={{ base: '10px', md: '25px', lg: '20' }} size={{lg: '2xl'}}>
                        <Title id='socialMedia'>Social Media</Title>
                        <br></br><br></br>
                        <Link isExternal={true} href={'https://github.com/kfleung129'}><IconButton isRound={true} size={'lg'} mt={{base:5, md: 5, md: 0}} icon={<FaGithub/>} bgColor={isDark ? 'default' : 'gray.300'}></IconButton></Link> 
                        <Link isExternal={true} href={'https://www.instagram.com/__fai_leung__/'}><IconButton isRound={true} mt={{base:5, md: 5, md: 0}} ml={{base:4, md: 5, md: 6}} size={'lg'} icon={<FaInstagram/>} bgColor={isDark ? 'default' : 'gray.300'}></IconButton></Link>
                    </Box>
                </SlideFade>
            </HStack>
        </Box>
    );
}

export default Social