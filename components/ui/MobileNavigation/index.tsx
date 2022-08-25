import { createPortal } from "react-dom";
import { usePortal } from "@nextui-org/react";

import { NavList } from "@/components/ui";

interface MobileNavigationProps {
  opened: boolean;
  onClose?: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onClose,
  opened,
}) => {
  const portal = usePortal("mobile-navigation");

  const handleLinkClick = () => {
    onClose?.();
  };

  return portal
    ? createPortal(<NavList opened={opened} handleLinkClick={handleLinkClick} css={{"@md": {d: "none"}}} />, portal)
    : null;
};
