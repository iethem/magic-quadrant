import { memo, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  block?: boolean;
}

interface StyledButtonProps {
  block?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ block, theme: { colors } }) => css`
    background-color: ${colors.LIGHT_GREY};
    padding: 5px 10px;
    border: 2px solid ${colors.LIGHT_BLUE};
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    width: ${block && "100%"};
    :hover {
      background-color: ${colors.DARK_GREY};
      color: ${colors.WHITE};
    }
  `}
`;

function Button({ children, onClick, block }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} block={block}>
      {children}
    </StyledButton>
  );
}

export default memo(Button);
