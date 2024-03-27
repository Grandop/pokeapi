import { IconType } from "react-icons";
import * as S from "./styles";

export type IconButtonProps = {
  icon: IconType;
  onClick: () => void;
  iconColor?: string;
};

export const IconButton = ({
  icon: Icon,
  onClick,
  iconColor
}: IconButtonProps) => {
  return (
    <S.Container>
      <S.Button onClick={onClick}>
        <Icon style={{ color: iconColor, fontSize: "50px" }} />
      </S.Button>
    </S.Container>
  );
};
