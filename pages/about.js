import React, { useRef, } from 'react';
import { Box, Button, useDisclosure, Image, HStack } from '@chakra-ui/react';
import ImageBox from '../components/imagebox';
import ReusableModal from '../components/reusable-modal';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFire } from 'react-icons/ai'
import {GrCertificate} from 'react-icons/gr'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { ButtonGroup, Heading, Text, Stack, Divider } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'

function BlogPage() {
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();
  const { isOpen: isOpenModal5, onOpen: onOpenModal5, onClose: onCloseModal5 } = useDisclosure();
  const { isOpen: isOpenModal6, onOpen: onOpenModal6, onClose: onCloseModal6 } = useDisclosure();
  
  const finalRefModal1 = useRef();
  const finalRefModal2 = useRef();
  const finalRefModal3 = useRef();
  const finalRefModal4 = useRef();
  const finalRefModal5 = useRef();
  const finalRefModal6 = useRef();

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

  const handleImageClickModal5 = () => {
    onOpenModal5();
  }

  const handleImageClickModal6 = () => {
    onOpenModal6();
  }

  const githubLink = "https://github.com/dvddvd300/Banorte-2023";
  const githubLink2 = "https://github.com/rpribau/Roborave-Trix";
  const githubLink3 = "https://github.com/rpribau/back-hack2023";
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

  const handleGitHubClick3 = () => {
    window.open(githubLink3, '_blank');
  };
  const roboflowClick = () => {
    window.open(roboflow, '_blank');
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={10}>
      <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap={6}>

      {/* Hackathon Banorte */}
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://i.imgur.com/yTLHHab.png'
            alt='Banorte'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Hackathon Banorte 2023</Heading>
            <Text>
              Interface created using Remix, TailwindCSS and DaisyUI. The main goal was to create a new version of the Banorte portal using artificial intelligence.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleImageClickModal1}>
              About
            </Button>
            <Button variant='solid' colorScheme='purple' leftIcon={<AiFillGithub />}>
              GitHub
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

    {/* RoboRAVE */}
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://i.imgur.com/QQYlhb8.png'
            alt='RoboRAVE Monterrey 2023'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>RoboRAVE Monterrey 2023</Heading>
            <Text>
              I compited in the FireFighting category with a robot that could put out candles that are at different heights and blocked by walls.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleImageClickModal2}>
              About
            </Button>
            <Button variant='solid' colorScheme='purple' leftIcon={<AiFillGithub />}>
              GitHub
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* HackMTY */}

      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://i.imgur.com/Tt2ckgb.png'
            alt='RoboRAVE Monterrey 2023'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>HackMTY 2023</Heading>
            <Text>
              Search Engine focused in looking for information from multiple files of different formats (.pdf, .docx, .pptx, .xlsx and .csv) and interpretate them with help of OpenAI GPT-4.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleImageClickModal3}>
              About
            </Button>
            <Button variant='solid' colorScheme='purple' leftIcon={<AiFillGithub />}>
              GitHub
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* VOLTEC Robotics */}

      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://i.imgur.com/jMFUgd7.png'
            alt='VOLTEC Robotics 6647'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>VOLTEC Robotics</Heading>
            <Text>
              FIRST Robotics Competition team that I was part of during high school. We are a team that is focused on the development of robots for the FIRST Robotics Competition and inspire young people to be science and technology leaders.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleImageClickModal4}>
              About
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* My Community Project */}

      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://i.imgur.com/r2I9KNP.png'
            alt='VOLTEC Robotics 6647'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>IB MYP - My Community Project</Heading>
            <Text>
              Develop a communication app for autistic children to help them communicate with their parents and teachers.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleImageClickModal5}>
              About
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* Reto - Don Colchon */}

      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://imagizer.imageshack.com/img923/3756/3DYuI1.png'
            alt='Don Colchon - SPiD'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>SPiD - Don Colchon</Heading>
            <Text>
              A friendly web page to manage inventory using Machine Learning algorithms to predict the amount of mattresses that will be sold during time.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleImageClickModal6}>
              About
            </Button>
            <Button variant='solid' colorScheme='purple' leftIcon={<AiFillGithub />}>
              GitHub
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      </Grid>

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

          Probably one of  the most demanding project I've ever had, the Banorte Hackathon was one of the best experiences I had with several of my best friends, 
          friends who were and are part of the VOLTEC ROBOTICS 6647 team. In this challenge there was a focus on improving the user experience of the Banorte 
          portal using artificial intelligence. Tools such as Pytorch were used to generate a script that would allow knowing where the user's mouse position is to 
          determine the time it took to reach a portal service. Later, also with artificial intelligence, generate a new version of the Banorte portal exclusive for that user.
          If the AI made an action faster than the human when reaching a service, the user will receive an update to his portal so that he can make that 
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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="8" // Espaciado interno
        >
          <iframe width="660" height="415" src="https://www.youtube.com/embed/yeomTfMoLDU?si=xnZSrk9aMNaK1lSP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Box>


        <Box mt={4}>
            I reunited with some of my friends I know at VOLTEC and decided to enter the Hackathon Monterrey in its 10th edition. This year, the company SoftTek 
            decided to offer a very interesting challenge, a challenge that definitely gave multiple knowledge, especially when it comes to 
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
            more specifically, the parameters behind the generation of AI responses, it is definitely a topic that I'm going to study and taking as a task to understand 
            well and be able to purchase a license to the OpenAI API.
            </Box>
        </Box>

        <HStack spacing={4} mt={4}>
        <Button
            leftIcon={<AiFillGithub />}
            colorScheme="purple"
            onClick={handleGitHubClick3}
        >
            GitHub Repo
          </Button>

        
          </HStack>
      </ReusableModal>

      <ReusableModal isOpen={isOpenModal4} onClose={onCloseModal4} finalRef={finalRefModal4} title="VOLTEC Robotics">
        During my high school yeart I was part of VOLTEC Robotics 6647, a FIRST Robotics Competition team that helped me to develop my skills beyond engineering. This team 
        develop in me a sense of leadership and teamwork that I didn't have before. I was part of the team for 3 years, in which I was able to learn a lot about how to teamwork 
        in a efficient way and how to develop a robot from scratch. I was part of the programming team, in which I was able to learn how to program in Java, more specifically using the 
        WPILib library, a library that is used to program robots in the FIRST Robotics Competition. During my first year I was able to program some parts of the robot and learn how to
        write efficient code that could be used in the robot. Unfortunately, I was not able to participate in the 2020 season due to the COVID-19 pandemic, but I was able to participate
        in the 2022 season in which I took leadership in the scouting team, a team that is in charge of gathering information about the other teams in the competition. This a introduction
        to data science to me, because I had to gather information and helped to develop an Excel Sheet that could help us to forecast the performance of the other teams in the competition and
        see if we had a good match or not. During my last off-season, I was able to leave part of my legacy in the team by developing a scouting app that could help us to gather information in
        a more efficient way and without filling a lot of papers. This app was developed in Flutter, a framework that I learned in my free time and that I was able to use in the team.
         
      </ReusableModal>

      <ReusableModal isOpen={isOpenModal5} onClose={onCloseModal5} finalRef={finalRefModal5} title="IB MYP - My Community Project">

      </ReusableModal>

      <ReusableModal isOpen={isOpenModal6} onClose={onCloseModal6} finalRef={finalRefModal6} title="SPiD - Don Colchon">

      </ReusableModal>



    </Box>
  );
}

export default BlogPage;
