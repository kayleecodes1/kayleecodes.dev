import Logo from '@components/Logo';
import SocialNav from '@components/SocialNav';
import { Root, Container } from './Header.styles';

const Header: React.FC = () => {
    return (
        <Root>
            <Container>
                <Logo />
                <SocialNav />
            </Container>
            
        </Root>
    );
};

export default Header;
