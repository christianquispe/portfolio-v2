export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  filled?: boolean;
}

export enum IconsId {
  LinkedIn = "linked-in",
  GitHub = "git-hub",
  QR = "qr",
}
