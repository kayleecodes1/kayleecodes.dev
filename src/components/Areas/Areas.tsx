import controllerStatic from '@assets/images/controller-static.png';
import keyboardStatic from '@assets/images/keyboard-static.png';
import tabletStatic from '@assets/images/tablet-static.png';
import Container from '@components/Container';
import { Root, Item, ImageWrapper, Image, Title, Description } from './Areas.styles';

const Areas: React.FC = () => {
    return (
        <Container>
            <Root>
                <Item>
                    <ImageWrapper>
                        <Image alt="Web Developer" src={keyboardStatic} />
                    </ImageWrapper>
                    <Title>Web Developer</Title>
                    <Description>
                        <p>
                            I make my living as a software engineer in web. I specialize in front end development and
                            have a deep passion for React.
                        </p>
                        <p>
                            I love building complex UIs and collaborating with other engineers and designers to bring a
                            vision to life.
                        </p>
                    </Description>
                </Item>
                <Item>
                    <ImageWrapper>
                        <Image alt="Game Developer" src={controllerStatic} />
                    </ImageWrapper>
                    <Title>Game Developer</Title>
                    <Description>
                        <p>
                            In my spare time I love doing game development. I primarily work in Unity.
                        </p>
                        <p>
                            I find game development is a perfect medium for me to flex all of my technical and creative muscles. I love the feeling of bringing a visual and interactive experience to life.
                        </p>
                    </Description>
                </Item>
                <Item>
                    <ImageWrapper>
                        <Image alt="Digital Artist" src={tabletStatic} />
                    </ImageWrapper>
                    <Title>Digital Artist</Title>
                    <Description>
                        <p>
                            Art is another passion of mine. I model in Maya and paint in Photoshop. As an engineer I also enjoy technical art, such as rigging and shader programming.
                        </p>
                        <p>
                            Just as with code, I find it magical to create something from nothing. I am extremely energized by visual mediums.
                        </p>
                    </Description>
                </Item>
            </Root>
        </Container>
    );
};

export default Areas;
