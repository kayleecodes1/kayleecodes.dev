import * as icons from '@components/icons';
import { IconProps } from '@components/icons/_internal/createIcon';
import { Root, List, Item, Link } from './SocialNav.styles';

interface SocialLink {
    Icon: React.FC<IconProps>;
    url: string;
}

const data: SocialLink[] = [{
    Icon: icons.TwitterIcon,
    url: 'https://twitter.com/kaylee_mavis',
}, {
    Icon: icons.InstagramIcon,
    url: 'https://www.instagram.com/kayleecodes0/',
}, {
    Icon: icons.LinkedInIcon,
    url: 'https://www.linkedin.com/in/kayleecodes/',
}, {
    Icon: icons.GitHubIcon,
    url: 'https://github.com/kayleecodes1',
}];

const SocialNav: React.FC = () => (
    <Root>
        <List>
            {data.map(({ Icon, url }) => (
                <Item key={url}>
                    <Link>
                        <Icon size={20} />
                    </Link>
                </Item>
            ))}
        </List>
    </Root>
);

export default SocialNav;
