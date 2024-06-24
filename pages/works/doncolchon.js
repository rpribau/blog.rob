import { Container, Badge, Link, List, ListItem, AspectRatio, Heading, Center } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="SPiD - Don Colchon">
            <Container marginTop={10}>
                <Title>
                    SPiD - Don Colchon <Badge>03/08/2024</Badge>
                </Title>
                <P>
                    During my class of Data Science Analysis, I had the opportunity to work with a local mattress store called Don Colchon. The challenge
                    was to create predictive models to help the store to manage the inventory. The main goal was to predict the amount of mattresses that will
                    be sold during time. 
                </P>

                <P>
                    Even if the main solution was to create multiple Machine Learning models, I decided to create a friendly ToolKit to help the store to manage
                    the inventory. The ToolKit is called SPiD (Smart Predictive Inventory Dashboard) and it's a web app that shows the amount of mattresses that
                    will be sold during time. I had this aproach by putting my self as a store manager and thinking that not every store manager has the knowledge
                    to use Machine Learning models, so I created a friendly UI to help them to understand the data.
                </P>

                <P>
                    The ToolKit was created using Next.js for the front-end and Python for the back-end. The back-end was powered by Django REST-API by asking to a 
                    Docker container of MySQL with the information from the Machine Learning models. The Machine Learning models were created and trained using Scikit-Learn and Keras
                    libraies. 
                </P>

                <List ml={4} my={4}>
                    
                    <ListItem>
                        <Meta>Front-end</Meta>
                        <Link href="https://github.com/rpribau/TC2004-Reto-Front" ml={2}>
                        https://github.com/rpribau/TC2004-Reto-Front <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Back-end</Meta>
                        <span> <b>Due to Don Colchon policy, I'm unable to share the full Jupyter Notebook of the models used but some of it can be seen in the video below.</b> </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>  Windows 11 </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>  Jupyter, Python, Scikit-learn, Keras, Django, Next.js, ChakraUI, Docker, MySQL </span>
                    </ListItem>
                </List>

                <AspectRatio maxW="560px" ratio={1} my={4}>
                    <iframe 
                        width="560" 
                        height="55" 
                        src="https://www.youtube.com/embed/dhrhVydYd7I?si=Ve1GiVUXyn8HKIfj" 
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
