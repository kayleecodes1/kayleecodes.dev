import Logo from '@components/Logo';
import SocialNav from '@components/SocialNav';
import { ExternalLinkIcon } from '@components/icons';
import { Root, Copyright, Link } from './Footer.styles';

const sourceCodeLink = 'https://github.com/kayleecodes1/kayleecodes.dev';

const Footer: React.FC = () => {
    return (
        <Root>
            <Logo />
            <SocialNav />
            <Copyright>&copy; {new Date().getFullYear()} Kaylee Mavis. All rights reserved.</Copyright>
            <Link href={sourceCodeLink} target="_blank">
                <ExternalLinkIcon size={16} />
                <span>Source Code</span>
            </Link>
        </Root>
    );
};

export default Footer;
