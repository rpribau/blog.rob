import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Vanttec - SDV Vision">
            <Container marginTop={10}>
                <Title>
                    Vanttec - SDV Vision <Badge>2024 - Present</Badge>
                </Title>
                <P>
                    I'm currently working on the SDV (Self-Driving Vehicle) project, creating Computer Vision 
                    tools to help the vehicle to understand the environment around it. My main goal is to rewrite
                    current code made in Python to C++ to improve the performance of the tools. Also, that
                    includes create new nodes that activates parts of the SDV using ROS2. Some parts of the
                    code I'm working is not <b>available to the public yet</b>, but some tests I've made are 
                    available on my GitHub.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>About Vanttec</Meta>
                        <Link href="https://direct.me/vanttec" ml={2}>
                        https://direct.me/vanttec <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                    
                    <ListItem>
                        <Meta>GitHub Repo</Meta>
                        <Link href="https://github.com/rpribau/ros2_opencv_cpp" ml={2}>
                        https://github.com/rpribau/ros2_opencv_cpp <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>  Ubuntu 22.04 LTS & Windows 11 </span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>  ROS2 Humble, OpenCV, C++, CMake, Python </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}


export default Work;
