import { HStack } from "@chakra-ui/react"

const Layout = (props) => {
    return(
        <HStack 
            mt={[40, 150, 250]} 
            ml={{base:10, md: 50, lg: 300}}
            mb={[props.mb, props.mb, props.mb]}
        >
            {props.children}
        </HStack>
    )
}

export default Layout