import { IconProps } from './createIcon';
import { Root } from './BaseIcon.styles';

interface BaseIconProps extends IconProps {
    path: string;
}

const BaseIcon: React.FC<BaseIconProps> = ({ path, size = 24 }) => (
    <Root width={size} height={size} viewBox="0 0 24 24">
        <path d={path} />
    </Root>
);

export default BaseIcon;
