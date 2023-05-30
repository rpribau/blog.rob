import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";

const About = () => {
    return(
        <Container>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About Me
                    
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Heading as="h4" variant="section-title">
                        Hi, I'm Roberto Priego Bautista
                    </Heading>
                    <Heading as="h4" variant="section-title">
                        I'm a student at Tecnologico de Monterrey based in Mexico!
                    </Heading>
                </SimpleGrid>
            </Section>
            
        </Container>
    )
}

export default About;
