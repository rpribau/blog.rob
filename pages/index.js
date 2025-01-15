import React from 'react';
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  CloseButton,
  useColorMode,
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/layouts/article';
import UnderConstructionAlert from '../components/underconstructionalert';

const Page = () => {
  const [showNotification, setNotification] = useState(true);
  const { colorMode } = useColorMode();

  const handleNotificationClose = () => {
    setNotification(false);
  };


  return (
    <Layout>
    <Container>
      <h>‎</h>                                     {/*Just a temporal solution...*/}
      {showNotification && (
        <Box p={4} bg="yellow.200" rounded="md" mb={4} position="relative">
          <Box>
            <UnderConstructionAlert />
          </Box>
          
          <CloseButton
            color={'black'}
            position="absolute"
            right={2}
            top={2}
            onClick={handleNotificationClose}
          />
        </Box>
      )}
      

      <Box
        borderRadius="lg"
        bg={'azure'}
        p={3}
        mb={5}
        align="center"
        color="black"
      >
        Hello, I&apos;m a student at Tecnologico de Monterrey based in Mexico!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Roberto Priego Bautista
          </Heading>

          <p>@rpribau (Developer / STEM passionate / FIRST Alumni)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="https://media.licdn.com/dms/image/v2/D4E03AQF2EShc2AKtQQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678472937659?e=1742428800&v=beta&t=-yEwYcdP0x2oKLo80mv50q9gS8rc3QvEttNFUMmHtKc"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <h>‎</h>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I'm an independent developer who tries to learn according to my needs
          or projects that I have in mind so that I can become a full-stack
          developer in the near future. I'm currently based in Monterrey
          studying Data Science and Mathematics focused mainly
          on artificial intelligence. At the moment I work at Tecnologico de Monterrey
          as a Data Analysis Intern, however I'm open to new offers.
        </Paragraph>
        <h>‎</h>

        <Box align="center" my={4}>
          <Button
            as={Link}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            More About Me
          </Button>
        </Box>
      </Section>
    </Container>
    </Layout>
  );
};

export default Page;
