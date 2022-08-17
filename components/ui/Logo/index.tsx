import { useTheme } from "@nextui-org/react";

import Image from "next/image";

export const Logo: React.FC = ({}) => {
  const { isDark } = useTheme();

  return (
    <Image
      src={isDark ? "/logo-transparente-blanco.png" : "/logo-transparente.png"}
      alt="Icone del pokemon"
      width={70}
      height={70}
    />
  );
};
