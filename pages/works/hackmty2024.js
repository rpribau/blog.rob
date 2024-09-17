import { Container, Badge, Link, List, ListItem, AspectRatio, Heading, Center } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="HackMTY 2024">
            <Container marginTop={10}>
                <Title>
                    HackMTY 2024 - Softtek Challenge <Badge>09/25/2023</Badge>
                </Title>
                <P>
                    In this edition of HackMTY, sponsored by Softtek, they gave us a challenge to create a free project using computer vision with AI.
                    We have developed an advanced farm management app that integrates a trained YOLO object detection model to monitor plant health. 
                    The model generates a JSON file, which is processed by a trained OpenAI LLM to provide actionable insights, recommendations, and 
                    instructions. Additionally, the app manages IoT devices, such as water pipes, to automate and optimize the irrigation process, 
                    ensuring efficient water usage and crop management.
                </P>

                <P>
                    Our app not only manages farm operations and plant health using AI, but it also evaluates the quality of fruits and vegetables when 
                    they are ready for packaging. The app can determine which client the product should be sold to based on quality, or provide suggestions 
                    for handling products that don’t meet the required standards.
                </P>

                <P>
                    I was mainly responsible for developing the app’s front-end using React Native, and creating the tools for the object detection using Python and the libraries 
                    OpenCV and OpenVINO. The models were trained using a custom dataset of images of plants and fruits in different conditions to provide accurate results. Also, I 
                    created two Flask API endpoints to manage the object detection results to the app. 
                </P>
                <List ml={4} my={4}>
                    
                    <ListItem>
                        <Meta>Front-end</Meta>
                            <Link href="https://github.com/rpribau/hackmty-2024" ml={2}>
                        https://github.com/rpribau/back-hack2023 <ExternalLinkIcon mx="2px" />
                            </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Back-end</Meta>
                            <Link href="https://github.com/jpgtzg/hackmty-2024" ml={2}>
                            https://github.com/jpgtzg/hackmty-2024 <ExternalLinkIcon mx="2px" />
                            </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Devpost</Meta>
                            <Link href="https://devpost.com/software/hackoholics-sofftek" ml={2}>
                            https://devpost.com/software/hackoholics-sofftek <ExternalLinkIcon mx="2px" />
                            </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>  Python, React Native, AWS, FRIDA provided by Softtek, OpenCV, OpenVINO, Flask, Google Colab </span>
                    </ListItem>
                </List>

                <AspectRatio maxW="560px" ratio={1} my={4}>
                    <iframe 
                        width="560" 
                        height="55" 
                        src="https://www.youtube.com/embed/ZHEWDav_zHw" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </AspectRatio>
                
                
            </Container>
        </Layout>
    )
}


export default Work;
