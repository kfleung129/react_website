import { B, Box, Flex, Stack, Heading, useDisclosure, Slide, SlideFade, Text, Img, HStack, useColorMode, list} from '@chakra-ui/react'
import { FaSchool, FaLaptop } from 'react-icons/fa'
import Title from './Title.js'
import Layout from './Layout'

const Header = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const text = <p style={{fontWeight:'bold'}}>Fast Learner</p>
    var isDark = colorMode === 'dark'
    if(isOpen === false){
        setTimeout(onToggle, props.time)
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
                            I am a City University of Hong Kong Computer Science Year 2 Student<br></br>
                            <Text color={isDark ? 'cyan.300' : 'cyan.600'} fontWeight='bold'>A Fast Learner + Problem solver</Text>
                            who love to discover & try new techonology <br></br>
                            looking forward to learn from both Frontend and Backend.
                        </Text>
                    </Box>
                    
                </Box>
            </SlideFade>
            <SlideFade in={isOpen}>
                <Box>
                    <Img src='https://gcdnb.pbrd.co/images/y8jei52Dz2gL.png?o=1' w={{base:60, md:350, lg:400}} borderRadius={"50%"} ml={{base: -10, md: -50, lg: 350}}/>
                </Box>
            </SlideFade>    
        </Layout>
    )
}

export default Header