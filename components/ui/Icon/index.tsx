import { IconsId } from "@interfaces";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  id: IconsId;
  size?: number;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  id,
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...rest
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      fill={filled ? fill : "none"}
      {...rest}
    >
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};
