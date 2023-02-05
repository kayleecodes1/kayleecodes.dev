import Container from '@components/Container';
import { Root, Intro, Title,Name, Description } from './About.styles';

const About: React.FC = () => {
    return (
        <Root>
            <Container>
                <Intro>
                    <Title>
                        <span>Hi, my name is</span>
                        <Name>Kaylee Mavis</Name>
                    </Title>
                    <Description>
                        <p>
                            I'm a <em>web developer</em> passionate about React, a <em>game developer</em> working in Unity, and
                            a <em>digital artist</em> modeling in Maya and painting in Photoshop.
                        </p>
                        <p>
                            I thrive in both the deeply technical and the deeply creative. I'm passionate about bringing
                            experiences to life.
                        </p>
                    </Description>
                </Intro>
            </Container>
        </Root>
    );
};

export default About;
