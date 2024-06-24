import { Container, Badge, Link, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="RocketHack - Arca Continental">
            <Container marginTop={10}>
                <Title>
                    RocketHack - Arca Continental <Badge>06/14/2024</Badge>
                </Title>
                <P>
                    In this first edition of RocketHack, sponsored by Arca Continental and Digital Hub Monterrey, we developed
                    a solution to the problem of predicting potential lost clients and to help the sales team to have a better
                    understanding of the clients. We developed two separate tools, a web app and a mobile app.
                </P>
                <P>
                    The <b>web app</b> is a dashboard that shows the prediction of potential lost clients by giving key 
                    information such as: location of the client, volume of sales, volume of purchases, client's history, and more. 
                    This is key to help the sales team to focus on the clients that are more likely to be lost. 
                </P>
                <P>
                    The <b>mobile app</b> is a tool for the clients to give their feedback about the amount of products they're selling,
                    the amount of products they're buying, and the amount of profit they're making. Even if the app is created for every
                    client, our main goal was to focused on clients that are much older and don't have the knowledge to use a smartphone.
                    This app was inspired by the following metrics from the <b>National Institute of Statistics and Geography (INEGI)</b>:
                </P>

                <UnorderedList my={4}>
                    <ListItem>88.8 million people is connected to the Internet.</ListItem>
                    <ListItem>Most of devices connected are smartphone in a 96.8%.</ListItem>
                    <ListItem>42.4% of people in the range of 55 years and older use Internet.</ListItem>
                    <ListItem><b>That's a little less than half of people use some device to use Internet.</b></ListItem>
                </UnorderedList>


                <List ml={4} my={4}>
                    
                    <ListItem>
                        <Meta>Web App</Meta>
                        <Link href="https://github.com/rpribau/Hack-ArcaContinental" ml={2}>
                        https://github.com/rpribau/Hack-ArcaContinental <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Mobile App</Meta>
                        <Link href="https://github.com/rpribau/Hack-ArcaContinental-Mobile" ml={2}>
                        https://github.com/rpribau/Hack-ArcaContinental-Mobile <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>  Windows 11 & Android/iOS </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>  Python, StreamLit, React Native, Expo Go </span>
                    </ListItem>
                </List>
                
                <WorkImage src="/images/work/hackarca1.png" alt="walknote" />
                <WorkImage src="/images/work/hackarca2.png" alt="walknote" />
                
            </Container>
        </Layout>
    )
}


export default Work;
