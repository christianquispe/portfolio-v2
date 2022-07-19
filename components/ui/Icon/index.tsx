import { IconsId } from "@/interfaces";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  id: IconsId;
  size?: number;
  filled?: boolean;
  alt: string;
}

export const Icon: React.FC<IconProps> = ({
  id,
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  alt,
  ...rest
}) => {
  return (
    <svg
      role="img"
      width={size || width || 24}
      height={size || height || 24}
      fill={filled ? fill : "none"}
      {...rest}
    >
      <title>{alt}</title>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};
