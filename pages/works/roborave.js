import { Container, Badge, Link, List, ListItem, AspectRatio, Heading, Center, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="RoboRAVE Monterrey 2023">
            <Container marginTop={10}>
                <Title>
                    RoboRAVE Monterrey 2023 <Badge>08/10/2023</Badge>
                </Title>
                <P>
                    One of the biggest robotics competitions in the world, RoboRAVE International, is coming to Monterrey, Mexico and a couple friends invited
                    me to join them in this amazing experience. During the summer break, we started to build a robot that could compete in the FireFighting
                    category. The robot was able to detect a candle and extinguish it. The robot was able to detect the candle using a camera and a NVIDIA
                    Jetson Nano. I was in charge of the software communication between the camera, an Arduino that controlled the motors and a fan, and the 
                    Jetson Nano that processed the image using a YOLO model and sent the information to the Arduino. All this was made by using ROS (Robot Operating System) and
                    was my first time using it.
                </P>

                <P>
                    Unfortunately, the robot wasn't performing as expected during the competition due to the amount of computer resources needed
                    to run the YOLO model and the communication between the camera and the Jetson Nano. We were able to detect the candle, but the robot
                    wasn't able to extinguish it. I personally learned a lot from this experience and even ignited again my passion to robotics. I 
                    never thought that I would be back after 3 years on VOLTEC Robotics 6647.
                </P>

                <List ml={4} my={4}>
                
                    <ListItem>
                        <Meta>Source code:</Meta>
                        <Link href="https://github.com/rpribau/back-hack2023" ml={2}>
                        https://github.com/rpribau/back-hack2023 <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>  Arduino, ROS </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>  Python, C++, YOLOv5 (Ultralytics) </span>
                    </ListItem>
                </List>

                <Heading as="h4" fontSize={18} my={5}>
                    <Center> Early Tests</Center>
                </Heading>
                
                <SimpleGrid columns={[1,1,1]} gap={3}>
                <AspectRatio maxW="560px" ratio={1} my={4}>
                    <iframe width="315" height="360"
                        src="https://www.youtube.com/embed/qeLvfSFmh5M"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </AspectRatio>

                <AspectRatio maxW="560px" ratio={1} my={4}>
                    <iframe width="315" height="360"
                        src="https://www.youtube.com/embed/BJcm0xza-sA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </AspectRatio>

                <AspectRatio maxW="560px" ratio={1} my={4}>
                    <iframe width="315" height="360"
                        src="https://www.youtube.com/embed/cPJCHbM_0xU"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </AspectRatio>
                </SimpleGrid>

                <Heading as="h4" fontSize={18} my={8}>
                    <Center> Thanks Albert, Christian and Tony for the experience!</Center>
                </Heading>
                <WorkImage src="/images/work/roborave1.png" alt="walknote" />
                
            </Container>
        </Layout>
    )
}


export default Work;
