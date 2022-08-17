import { useTheme as useNextTheme } from "next-themes";
import { Button, CSS, useTheme } from "@nextui-org/react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const ThemeToggle: React.FC<{ css?: CSS }> = ({ css }) => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button onClick={handleToggleTheme} size="xs" css={css} light auto>
      {isDark ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
    </Button>
  );
};
