import Link from 'next/link'
import LaptopOutline from './icons/laptop-outline'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 40px;
line-height: 20px;
padding: 10px;

> svg {
    transition: 200ms ease;
}

&:hover svg {
    transform: rotate(20deg);
}
`
const Logo = () => {
    return (
        (<Link href="/" scroll={false}>
    
          <LogoBox>
            <LaptopOutline />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
            >
              Roberto Priego Bautista
            </Text>
          </LogoBox>
    
        </Link>)
      );
                   
}

export default Logo
