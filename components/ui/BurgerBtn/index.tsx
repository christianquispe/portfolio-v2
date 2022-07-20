import { BurgerBtnStyled } from "./styles";

interface BurgerBtnProps {
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const BurgerBtn: React.FC<BurgerBtnProps> = ({
  active,
  onClose,
  onOpen,
}) => {
  return (
    <BurgerBtnStyled
      role="button"
      aria-label="burgerBtn"
      tabIndex={1}
      className={`${active ? "closable" : ""}`}
      onClick={() => (active ? onClose() : onOpen())}
    >
      <div className="line top"></div>
      <div className="line bottom"></div>
    </BurgerBtnStyled>
  );
};
