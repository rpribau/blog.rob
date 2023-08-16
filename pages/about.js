import React, { useRef, } from 'react';
import { Box, Button, useDisclosure, Image, HStack } from '@chakra-ui/react';
import ImageBox from '../components/imagebox';
import ReusableModal from '../components/reusable-modal';
import { AiFillGithub } from 'react-icons/ai'
import {GrCertificate} from 'react-icons/gr'
import {AiFillCheckCircle} from 'react-icons/ai'

function BlogPage() {
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
  
  const finalRefModal1 = useRef();
  const finalRefModal2 = useRef();

  const handleImageClickModal1 = () => {
    onOpenModal1();
  };

  const handleImageClickModal2 = () => {
    onOpenModal2();
  };

  const githubLink = "https://github.com/dvddvd300/Banorte-2023";
  const test = "https://banorte-2023.pages.dev/?lng=es"

  const handleGitHubClick = () => {
    window.open(githubLink, '_blank');
  };

  const handleTestClick = () => {
    window.open(test, '_blank');
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <ImageBox imageUrl="https://i.imgur.com/yTLHHab.png" onClick={handleImageClickModal1} />
      <Box mb={4} />
      <ImageBox imageUrl="https://i.imgur.com/QQYlhb8.png" onClick={handleImageClickModal2} />

      <ReusableModal isOpen={isOpenModal1} onClose={onCloseModal1} finalRef={finalRefModal1} title="Hackathon Banorte - 1st place in category and event">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="596px"
          width="100%"
          p="4" // Espaciado interno
        >
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7072265191186386944"
            height="596"
            width="454"
            allowFullScreen
            title="Publicación integrada"
          ></iframe>
          <Image src="https://i.imgur.com/JNub3us.png" alt="Additional Image" maxH="596px" ml="4" />
        
        </Box>
        
        <Box mt={8} alignContent='center'>

          Probably the most demanding project I've ever had, the Banorte Hackathon was one of the best experiences I had sharing with several of my best friends, 
          friends who were and are part of the VOLTEC ROBOTICS 6647 team. In this challenge there was a focus on improving the experience of the user using the Banorte 
          portal using artificial intelligence. Tools such as Pytorch were used to generate a script that would allow knowing where the user's mouse position is to 
          determine the time it took to reach a portal service. As well as based on artificial intelligence, which will generate a new version of the Banorte portal 
          and determine how long it takes. If the AI made the process faster than the human, this user will receive an update from his portal so that he can make that 
          process faster. For the generation of web pages, a prototype of a new Banorte portal was created using Remix, a JavaScript framework and with additional tools 
          such as TailWind CSS and DaisyUI to generate friendlier and easier-to-use pages.
        </Box>

        <HStack spacing={4} mt={4}>
        <Button
            leftIcon={<AiFillGithub />}
            colorScheme="purple"
            onClick={handleGitHubClick} 
        >
            GitHub Repo
          </Button>

          <Button
            leftIcon={<GrCertificate />}
            colorScheme="yellow"
        >
            Diploma
          </Button>

          <Button
            leftIcon={<AiFillCheckCircle />}
            onClick={handleTestClick}
            colorScheme="green"
        >
            Test web page
          </Button>

        </HStack>


      </ReusableModal>
      
      <ReusableModal isOpen={isOpenModal2} onClose={onCloseModal2} finalRef={finalRefModal2} title="Modal 2 Title">
        This is some content for Modal 2.
      </ReusableModal>
    </Box>
  );
}

export default BlogPage;
