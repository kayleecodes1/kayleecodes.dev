import BaseIcon from './BaseIcon';

export interface IconProps {
    description?: string;
    size?: number;
    title?: string;
}

const createIcon =
    (defaultTitle: string, path: string): React.FC<IconProps> =>
    (props) =>
        <BaseIcon path={path} title={defaultTitle} {...props} />;

export default createIcon;
