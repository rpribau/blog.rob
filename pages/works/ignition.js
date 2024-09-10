import { Container, Badge, Link, List, ListItem, UnorderedList, Heading, Center, AspectRatio } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { ApiError } from "next/dist/server/api-utils";

const Work = () => {
    return (
        <Layout title="Ignition Hack - StudyMetrics">
            <Container marginTop={10}>
                <Title>
                    Ignition Hack - StudyMetrics <Badge>08/16/2024 - 08/18/2024</Badge>
                </Title>

                <P>
                    In recent years México has been lagging behind in education. The long lasting effects of the pandemic has left students with 
                    complications during their learning experience, as most feel that they can't pay attention for long stints, and sadly this is 
                    not only a reality for México, as it also affects other countries, as The Guardian's article mentions "The survey of 504 
                    primary and early years teachers in schools in England by the online subject resource Kapow Primary found that 84% agreed 
                    that children's attention span was “shorter than ever” post-Covid. Nearly two-thirds (69%) had noticed an increase in 
                    inattention and daydreaming".
                </P>

                <P>
                    This is why we decided to attack this problematic the innovative solution, study metrics, an AI SaaS that empowers teachers 
                    into creating new and innovative experiences for their students, all by the power for artificial intelligence as a data centric approach.

                </P>

                <P>
                    My main goal was to create face recognition tools using OpenCV with CUDA implemented using C++. Most of the code was already done, but the
                    main improvement I made was to implement it for low-end devices that don't have a dedicated GPU, as most of the teachers in México don't have
                    the resources to have a high-end device.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Devpost</Meta>
                        <Link href="https://devpost.com/software/studyvision" ml={2}>
                        https://devpost.com/software/studyvision <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span> Ubuntu 20.04 LTS </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> OpenCV, C++, CUDA, Python, AWS S3 </span>
                    </ListItem>
                </List>

                <Heading as="h4" fontSize={18} my={8}>
                    <Center> Media</Center>
                </Heading>

                <AspectRatio maxW="560px" ratio={1} my={4}>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/NDn7WzKKP9s?si=WpBruNc5jtBlhTgd" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </AspectRatio>

                <AspectRatio maxW="560px" ratio={1} my={4}>
                    <iframe 
                        width="315" 
                        height="560"
                        src="https://www.youtube.com/embed/MSCo9oT-brM?feature=share"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>    
                    </iframe>


                </AspectRatio>

                
                
            </Container>
        </Layout>
    )
}


export default Work;
