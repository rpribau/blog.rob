import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
        <h>
        ‎
        </h>
      <Box borderRadius="lg" bg={"azure"} p={3} mb={5} align="center" color="black">
        Hello, I&apos;m a student at Tecnologico de Monterrey and I&apos;m currently studying B.S in Data Science and Mathematics.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Roberto Priego Bautista
          </Heading>

          <p>@rpribau (Developer / Coding / FIRST Alumni)</p>
        </Box>
        <Box 
        flexShrink = {0} 
        mt = {{base: 4, md: 0}}
        ml={{md: 6}} 
        align="center"
        >
          <Image 
          borderColor = "whiteAlpha.800" 
          borderWidth={2} 
          borderStyle="solid" 
          maxWidth="100px" 
          display="inline-block" 
          borderRadius="full" 
          src="/images/roberto.jpg" 
          alt="Profile Image"/>

        </Box>
      </Box>
    </Container>
  )
}

export default Page
