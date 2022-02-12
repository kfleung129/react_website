import { Box, Flex, Stack, Heading, useDisclosure, Slide, SlideFade, Text, Img, HStack, useColorMode} from '@chakra-ui/react'
import { FaSchool } from 'react-icons/fa'
import Title from './Title.js'
import Layout from './Layout'

const Header = () => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    var isDark = colorMode === 'dark'
    if(isOpen === false){
        setTimeout(onToggle, 2000)
    }
    return(
        <Layout>
            <SlideFade in={isOpen}>
                <Box w={['50%', '50%', '100%']}  fontSize={{ base: '15px', md: '25px', lg: '20' }} size={{lg: '2xl'}}>
                    <Title id='introduction'>Introduction</Title>
                    <br></br><br></br><br></br>
                    <Box>
                        <Heading> Hi, I am LEUNG Kin Fai, Jason </Heading>
                        <br></br>
                        <Text>
                            I am a City University of Hong Kong Computer Science Year 2 Student 
                        </Text>
                    </Box>
                    
                </Box>
            </SlideFade>
            <SlideFade in={isOpen}>
                <Box>
                    <Img src='https://portland-my.sharepoint.com/personal/kfleung68-c_my_cityu_edu_hk/Documents/Pic/jason-pic.png' w={{base:60, md:400, lg:300}} borderRadius={"50%"} ml={{base: -10, md: -50, lg: 350}}/>
                </Box>
            </SlideFade>    
        </Layout>
    )
}

export default Header