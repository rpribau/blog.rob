import { Container, Badge, Link, List, ListItem, AspectRatio, Heading, Center } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="HackMTY 2023">
            <Container marginTop={10}>
                <Title>
                    HackMTY 2023 - Softtek Challenge <Badge>09/25/2023</Badge>
                </Title>
                <P>
                    In this edition of HackMTY, sponsored by Softtek, they gave us a challenge to create a desktop tool that uses a custom OpenAI GPT model to 
                    interpretate information from multiple files of different formats. The main goal was to create a search engine that can look for
                    information in multiple files and interpretate them to give a better understanding of the data. This was my first time using
                    OpenAI API, but not the regular one, the API provided by Softtek was from Azure OpenAI API. This was a great challenge because
                    there wasn't an official documentation of the API, so we had to ask to the Softtek engineers to help us to understand the API and 
                    how to use it.  
                </P>

                <P>
                    The tool was created using Python and StreamLit to create the GUI. The tool was able to read multiple files of different formats
                    such as .txt, .csv, .json, .docx, .pdf, and more. The tool was able to read the files and interpretate the information and give
                    a better understanding of the data.
                </P>

                <List ml={4} my={4}>
                    
                    <ListItem>
                        <Meta>App</Meta>
                        <Link href="https://github.com/rpribau/back-hack2023" ml={2}>
                        https://github.com/rpribau/back-hack2023 <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>  Windows 11 </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>  Python, StreamLit </span>
                    </ListItem>
                </List>

                <AspectRatio maxW="560px" ratio={1} my={4}>
                    <iframe 
                        width="560" 
                        height="55" 
                        src="https://www.youtube.com/embed/yeomTfMoLDU?si=4-wWNcQymzmqYFeX" 
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
