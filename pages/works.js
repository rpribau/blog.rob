import { Container, Box, Heading, SimpleGrid, Divider  } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import thumbHackBanorte from "../public/images/1.png";
import sdvVision from "../public/images/sdv.png";
import thumbhackmty2023 from "../public/images/5.png";
import thumbRoborave from "../public/images/2.png";
import thumbdoncholchon from "../public/images/6.png";
import thumbrockethack from "../public/images/rockethack.png";
import thumbvoltec from "../public/images/3.png";
import thumbcommunity from "../public/images/4.png";

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} marginTop={5} mb={4}>
              Currently working on:
        </Heading>
        <SimpleGrid columns={[1,1,1]} gap={6}>
            <Section>
            <WorkGridItem id="vanttec" title="Vanttec - SDV Vision" thumbnail={sdvVision}>
            Creating Computer Vision tools for the SDV project.
            </WorkGridItem>

            </Section>
        </SimpleGrid>

            <Heading as="h3" fontSize={20} marginTop={5} mb={4}>
            <Divider my={6} />
                Latest work:
            </Heading>
            <SimpleGrid columns={[1,1,1]} gap={6}>
            <Section>
            <WorkGridItem id="rockethack" title="RocketHack - Arca Continental" thumbnail={thumbrockethack}>
            Two separate tools to help the company to improve the prediction of potential lost clients and to help the sales team to have a better understanding of the clients.
            </WorkGridItem>

            </Section>
        </SimpleGrid>


            <Heading as="h3" fontSize={20} marginTop={5} mb={4}>
            <Divider my={6} />
              Old work:
        </Heading>
        <SimpleGrid columns={[1,1,2]} gap={6}>

            <Section>
            <WorkGridItem id="doncolchon" title="SPiD - Don Colchon" thumbnail={thumbdoncholchon}>
            A friendly ToolKit to manage inventory using Machine Learning algorithms to predict the amount of mattresses that will be sold during time.
            </WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id="hackmty2023" title="HackMTY 2023" thumbnail={thumbhackmty2023}>
            Search Engine focused in looking for information from multiple files of different formats and interpretate them with help of OpenAI GPT-4.
            </WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id="roborave" title="RoboRAVE Monterrey 2023" thumbnail={thumbRoborave}>
            I compited in the FireFighting category with a robot that could put out candles that are at different heights and blocked by walls.
            </WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id="hack-banorte" title="Hackathon Banorte 2023" thumbnail={thumbHackBanorte}>
            The main goal was to create a new version of the Banorte portal using artificial intelligence.
            </WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id="voltec6647" title="VOLTEC Robotics 6647" thumbnail={thumbvoltec}>
            FIRST Robotics Competition team that I was part of during high school.
            </WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id="communityproject" title="IB MYP - My Community Project" thumbnail={thumbcommunity}>
            A communication app for autistic children to help them communicate with their parents and teachers.
            </WorkGridItem>
            </Section>

        </SimpleGrid>
        
        
        
        </Container>
        </Layout>
    )
        
}

export default Works;
