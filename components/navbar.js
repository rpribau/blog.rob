import {forwardRef} from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {useState, useRef, useEffect} from 'react'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Icon,
    Th,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {ThemeToggleButton} from './theme-toggle-button.js'
import {IoLogoGithub} from 'react-icons/io'

const LinkItem =({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <Link
          as={NextLink}
          href={href}
          scroll={false}
          p={2}
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
          target={target}
          {...props}
        >
          {children}
        </Link>
      )
}


const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
  ))

const Navbar = props => {
    const {path} = props
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    const handleMenuToggle = () =>{
      setIsOpen(!isOpen)
    };

    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)){
        setIsOpen(false)
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
    
    return(
        <Box
        position = "fixed"
        as = "nav" 
        w = "100%"
        bg = {useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex = {1}
        {...props}
        ref={menuRef}
    >
        
        <Container 
            display="flex" 
            p={2} 
            maxW = "container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>


          <IconButton
            display={{base: 'flex', md: 'none'}}
            onClick={handleMenuToggle}
            icon={<HamburgerIcon />}
            variant="ghost"
            size="md"
            aria-label="Toggle Menu"
          />

          <Stack
            
            direction={{base: 'column', md: 'row'}}
            display={{base: isOpen ? 'flex' : 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            alignItems="center"
            flexGrow={1}
            mt={{base: 4, md: 0}}
            
          >
            <LinkItem href="/about" path={path}>
                About
            </LinkItem>
            <LinkItem href="/posts" path={path}>
                Posts
            </LinkItem>
            <LinkItem href="/works">Achievements</LinkItem>
            <LinkItem
                target="_blank"
                href="https://github.com/rpribau"
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{gap: 4}}
                pl={2}
            >
                <IoLogoGithub />
                GitHub
            </LinkItem>
            

            <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
               
            
          </Heading>
        </Flex>

      </Stack>
        
      </Container>
    </Box>
  )
}

export default Navbar