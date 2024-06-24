import { Container, Badge, Link, List, ListItem, AspectRatio, Heading, Center, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Hackathon Banorte 2023">
            <Container marginTop={10}>
                <Title>
                    Hackathon Banorte 2023 <Badge>05/28/2023</Badge>
                </Title>
                <P>
                    In the first edition of the Hackathon Banorte, our challenge was to create a new
                    website for Banorte with AI tools to help the clients to have a better understanding
                    of their financial status. We developed a new and modern website with a new design
                    and a new way to interact with the clients. But our main goal was to create a tool 
                    that could help Banorte to analyze how the clients are using the website and to give
                    them a better experience by giving them a new updated website according to their needs.
                </P>

                <P>
                    This also was my very first time winning a hackathon, and I'm very proud of the work
                    we did in just 24 hours. We used Python to create the AI tools and RemixJS to create
                    the website. We also used TailWindCSS to style the website and Cloudflare to host the
                    website. I was in charge of creating the new website and getting adviced on how to use RemixJS,
                    since it was my first time using this framework. The website is not anymore available 
                    to the public, and the code isn't available to the public yet due to the NDA we signed 
                    with Banorte by entering the hackathon.
                </P>


                <List ml={4} my={4}>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>  Windows 11 </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>  Python, Pytorch, RemixJS, TailWindCSS, Cloudflare Hosting </span>
                    </ListItem>
                </List>

                <Heading as="h4" fontSize={18} my={5}>
                    <Center> Media: </Center>
                </Heading>
                
                <SimpleGrid columns={[1,1,1]} gap={3}>
                <AspectRatio maxW="960px" ratio={1} my={4}>
                    <iframe 
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7072265191186386944" 
                        height="468" 
                        width="504" 
                        frameborder="0" 
                        allowfullscreen="" 
                        title="Publicación integrada">
                    </iframe>
                </AspectRatio>
                </SimpleGrid>

                <SimpleGrid columns={[1,1,1]} gap={3}>
                <WorkImage src="/images/work/banorte1.jpg" alt="Hackathon Banorte 2023" />
                <WorkImage src="/images/work/banorte2.jpg" alt="Hackathon Banorte 2023" />
                <WorkImage src="/images/work/banorte3.jpg" alt="Hackathon Banorte 2023" />
                </SimpleGrid>
                
            </Container>
        </Layout>
    )
}


export default Work;
