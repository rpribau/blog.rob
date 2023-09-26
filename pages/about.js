import React, { useRef, } from 'react';
import { Box, Button, useDisclosure, Image, HStack } from '@chakra-ui/react';
import ImageBox from '../components/imagebox';
import ReusableModal from '../components/reusable-modal';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFire } from 'react-icons/ai'
import {GrCertificate} from 'react-icons/gr'
import {AiFillCheckCircle} from 'react-icons/ai'

function BlogPage() {
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();
  
  const finalRefModal1 = useRef();
  const finalRefModal2 = useRef();
  const finalRefModal3 = useRef();
  const finalRefModal4 = useRef();

  const handleImageClickModal1 = () => {
    onOpenModal1();
  };

  const handleImageClickModal2 = () => {
    onOpenModal2();
  };

  const handleImageClickModal3 = () => {
    onOpenModal3();
  };

  const handleImageClickModal4 = () => {
    onOpenModal4();
  };

  const githubLink = "https://github.com/dvddvd300/Banorte-2023";
  const githubLink2 = "https://github.com/rpribau/Roborave-Trix";
  const test = "https://banorte-2023.pages.dev/?lng=es"
  const roboflow = "https://universe.roboflow.com/roberto-priego-bautista-93gsj/roborave-image-model";

  const handleGitHubClick = () => {
    window.open(githubLink, '_blank');
  };

  const handleTestClick = () => {
    window.open(test, '_blank');
  };

  const handleGitHubClick2 = () => {
    window.open(githubLink2, '_blank');
  };
  const roboflowClick = () => {
    window.open(roboflow, '_blank');
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <Box mb={650} />
      <ImageBox imageUrl="https://i.imgur.com/yTLHHab.png" onClick={handleImageClickModal1} />
      <Box mb={4} />
      <ImageBox imageUrl="https://i.imgur.com/QQYlhb8.png" onClick={handleImageClickModal2} />
      <Box mb={4} />
      <ImageBox imageUrl="https://i.imgur.com/Tt2ckgb.png" onClick={handleImageClickModal3} />
      <Box mb={4} />
      <ImageBox imageUrl="https://i.imgur.com/jMFUgd7.png" onClick={handleImageClickModal4} />
      <Box mb={4} />
      <ImageBox imageUrl="https://i.imgur.com/r2I9KNP.png" onClick={handleImageClickModal3} />
      
      



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
      
      <ReusableModal isOpen={isOpenModal2} onClose={onCloseModal2} finalRef={finalRefModal2} title="RoboRAVE Monterrey Invitational">
      This is my last robotics project to date in which I participate in the FireFighting category. It consisted of building a 100% autonomous robot 
      that could put out candles that are at different heights and blocked by walls. Just like the sails were surrounded by black tape that 
      marked an area for the sails that could be used by sensors to align the robot. I participated with my team called Robotrix, made up mainly 
      of Mechatronic and Robotic Engineers. While they were mainly in charge of the function of motors and sensors, I personally was in charge of 
      implementing a pretrained model of object detection with YOLOv5 and using an NVIDIA Jetson to process video and that this would send signals 
      to the Arduino to move motors. The way in which I programmed it was using Python libraries such as Pytorch, OpenCV, Numpy, Ultralytics (in the beta phase) 
      and Pyserial (library in charge of communicating with the Arduino).

      <Box mt={8} alignContent='center'>

      <iframe width="360" height="515" src="https://www.youtube.com/embed/qeLvfSFmh5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </Box>

      <HStack spacing={4} mt={4}>
        <Button
            leftIcon={<AiFillGithub />}
            colorScheme="purple"
            onClick={handleGitHubClick2} 
        >
            GitHub Repo
          </Button>

          <Button
            leftIcon={<AiFillFire />}
            colorScheme="pink"
            onClick={roboflowClick}
        >
            Roboflow Model
          </Button>


        </HStack>

      </ReusableModal>

      <ReusableModal isOpen={isOpenModal3} onClose={onCloseModal3} finalRef={finalRefModal3} title="HackMTY 2023 - SoftTek Challenge">
        26/9/2023
        <Box mt={4}>
            Me and some friends we know at VOLTEC, we decided to enter the Hackathon Monterrey in its 10th edition. This year the company SoftTek 
            decided to offer a very interesting challenge, a challenge that definitely gave me multiple knowledge, especially when it comes to 
            doing front end in different tools and AI knowledge. The challenge was to design a Search Engine that could help companies. It was not 
            specified to us what the Search Engine had to be or the type of companies were targeting, so with that in mind we decided to create a Search Engine that 
            would allow the loading of multiple files of different formats (.pdf, .docx, .pptx, .xlsx and .csv) and could read them and search for information on the data sent. 
            This was our main goal because we remembered that most of companies deals with too many files and it is difficult to find information in them. 
            All this was possible thanks to SoftTek providing us with an API key from OpenAI, the company behind the famous ChatGPT. Using the API was 
            quite unusual because the key we were given was not necessarily from OpenAI, but rather, it was a key to the Azure OpenAI API, something 
            similar to what OpenAI sells to the public with its API. This was clearly limited by SoftTek with a limit on the amount of information 
            we could send and the chat could generate. However, this was not the only problem, we also had problems when making the front end using 
            Next.js and TailwindCSS. For some reason they did not finish loading the page styles once you left the main page. This cost us a lot of 
            time, but we found a solution, making the front end with Python and the Streamlit library. This helped a lot when integrating the back 
            and front end because the back end (an area that I personally developed) was done in Python.

            <Box mt={4}>
            Although I did not end up winning something like in Hack Banorte, the reality is that I took away a lot of knowledge regarding how an AI works, 
            more specifically, the parameters behind the generation of AI responses, it is definitely a topic that I am studying. taking as a task to understand 
            well and be able to purchase a license to the OpenAI API.
            </Box>
        </Box>
      </ReusableModal>

      <ReusableModal isOpen={isOpenModal4} onClose={onCloseModal4} finalRef={finalRefModal4} title="Test 4">
        This is a test 
      </ReusableModal>

    </Box>
  );
}

export default BlogPage;
