import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import { useState, useRef, useEffect } from 'react'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  IconButton,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ThemeToggleButton } from './theme-toggle-button.js'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
// import LanguageMenu from './translate-toggle-button.js' # Algun dia pondre la pagina en español... algun dia...

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = useColorModeValue('purple.500')
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

const MenuLink = forwardRef((props, ref) => <Link ref={ref} as={NextLink} {...props} />)

const Navbar = (props) => {
  const { path } = props
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure()

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
      ref={menuRef}
    >
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" justify="space-between" w="100%">
          <Flex align="center">
            <Heading as="h1" size="lg" letterSpacing="tighter">
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            spacing={{ base: 2, md: 4 }}
          >
            <LinkItem href="/" path={path}>
              About
            </LinkItem>

            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>

            <LinkItem 
              target="_blank"
              href="https://drive.google.com/file/d/1AiZ90eZdwhVPDhv1rCrKPaUBPbeG1v0Z/view?usp=sharing" 
              path={path}>
              CV
            </LinkItem>
          
            <LinkItem
              target="_blank"
              href="https://github.com/rpribau"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 2 }}
              pl={2}
            >
              <IoLogoGithub />
              GitHub
            </LinkItem>

            <LinkItem
              target="_blank"
              href="https://www.linkedin.com/in/roberto-priego-bautista-61128b269/"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 2 }}
              pl={2}
            >
              <IoLogoLinkedin />
              LinkedIn
            </LinkItem>
          </Stack>

          <Flex align="center">
            <ThemeToggleButton />
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              icon={<HamburgerIcon />}
              variant="ghost"
              size="md"
              aria-label="Toggle Menu"
            />
          </Flex>
        </Flex>
      </Container>

      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <LinkItem href="/" path={path} onClick={onClose}>
                About
              </LinkItem>
              <LinkItem href="/works" path={path} onClick={onClose}>
                Works
              </LinkItem>
              <LinkItem 
                target="_blank"
                href="https://drive.google.com/file/d/1AiZ90eZdwhVPDhv1rCrKPaUBPbeG1v0Z/view?usp=sharing" 
                path={path}
                onClick={onClose}
              >
                CV
              </LinkItem>
              <LinkItem
                target="_blank"
                href="https://github.com/rpribau"
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                onClick={onClose}
              >
                <IoLogoGithub />
                GitHub
              </LinkItem>
              <LinkItem
                target="_blank"
                href="https://www.linkedin.com/in/roberto-priego-bautista-61128b269/"
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                onClick={onClose}
              >
                <IoLogoLinkedin />
                LinkedIn
              </LinkItem>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar
