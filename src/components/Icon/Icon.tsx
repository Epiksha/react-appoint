import classNames from "classnames";

export interface IIconProps {
    component: React.ReactNode;
    className?: string;
};

export const Icon: React.FC<IIconProps> = ({
    component: IconComponent,
    className,
}) => (
    <div className={classNames("icon", className)}>
        {IconComponent}
    </div>
);

export default Icon;