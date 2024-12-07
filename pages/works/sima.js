import { Container, Badge, Link, List, ListItem, AspectRatio, Heading, Center } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Air Quality Forecasting System in the Metropolitan Area of Monterrey">
            <Container marginTop={10}>
                <Title>
                    Air Quality Forecasting System in the Metropolitan Area of Monterrey <Badge>10/21/2024</Badge>
                </Title>
                <P>
                    A couple of partners and I, developed predictive models using binomial logistic regression and random forest to analyze 
                    pollutants like PM10, PM2.5, CO, O₃, NO₂, and SO₂ for air quality monitoring stations in the northern zone of Monterrey's 
                    metropolitan area, based on data from Nuevo León's atmospheric monitoring system.
                </P>

                <P>
                    The project posed a significant challenge, as I aimed to create more than just a simple forecast model, which many may not fully 
                    understand or be familiar with. Inspired by the potential impact, I developed a new website for the Sistema Integral de Monitoreo 
                    Ambiental (SIMA), offering a more user-friendly portal. This platform provides valuable information for Monterrey residents who are 
                    curious about air quality and wish to stay informed about the government's latest air pollution policies.
                </P>

                <P>
                    During the development of the new SIMA website, I also took on the task of creating a REST API from scratch to fetch the real-time 
                    data published by SIMA. This was a necessary step due to the specific way their Apache servers handle and capture information. By 
                    designing this API, I ensured seamless integration of the latest data into the website, allowing users to access up-to-date information 
                    on air quality and government actions. The API improved the efficiency and accuracy of data retrieval, aligning with the goal of making 
                    the portal a more reliable and user-friendly resource for the public.
                </P>
                <Heading as="h4" fontSize={18} my={8}>
                <Center>
                    Update: ExpoIngeniría 2024
                </Center>
                </Heading>
                <P>
                    The SIMA project was selected by our professors to be presented at ExpoIngeniería 2024, an semestrally event where students showcase
                    their projects to the public. The project was well received by the audience, and we were able to demonstrate the website and the
                    predictive models to the public. The project was also presented to the SIMA team, who were impressed by the work done and to multiple
                    organizations in the area, who were interested in the project not only to monitor Monterrey's air quality but also to implement it in
                    other cities in Mexico. In my opinion, the project was a success, and I am proud of the work done by my partners and me.
                </P>
                    
                

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://sima-nuevoleon-ai.vercel.app" ml={2}>
                        https://sima-nuevoleon-ai.vercel.app <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                    

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>  Windows 11 </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Front end</Meta>
                        <span> Next.js, Streamlit </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Back end</Meta>
                        <span> Scikit-learn, R, Python, Streamlit</span>
                    </ListItem>


                </List>
                
            </Container>
        </Layout>
    )
}

export default Work;
