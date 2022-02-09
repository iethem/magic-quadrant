import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  children: ReactNode;
  width?: string;
  borderless?: boolean;
}

interface StyledThProps {
  width?: string;
}

interface StyledTdProps {
  borderless?: boolean;
}

export const StyledTh = styled.th<StyledThProps>`
  ${({ width, theme: { colors } }) => css`
    width: ${width || "6rem"};
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    font-family: sans-serif;
    font-size: 12px;
    text-align: center;
    padding: 2px 0;
    border-radius: 4px;
  `}
`;

export const StyledTd = styled.td<StyledTdProps>`
  ${({ borderless, theme: { colors } }) => css`
    border: ${borderless ? "none" : "2px solid" + colors.LIGHT_BLUE};
    border-radius: 4px;
    padding: ${!borderless && "5px 10px"};
  `}
`;

const Table = ({ children, ...rest }: Props) => {
  return (
    <table style={{ marginLeft: 16 }} {...rest}>
      {children}
    </table>
  );
};

Table.Column = ({ children, width, ...rest }: Props) => {
  return (
    <StyledTh width={width} {...rest}>
      {children}
    </StyledTh>
  );
};

Table.Row = ({ children, ...rest }: Props) => {
  return <tr {...rest}>{children}</tr>;
};

Table.Cell = ({ children, borderless, ...rest }: Props) => {
  return (
    <StyledTd borderless={borderless} {...rest}>
      {children}
    </StyledTd>
  );
};

export default Table;
