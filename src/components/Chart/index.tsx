import React, { memo } from "react";
import styled, { css } from "styled-components";
import Item from "../../common/Item";
import { useAppStore } from "../../Context";
import Point from "../Point";

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    box-sizing: content-box;
    width: 400px;
    height: 400px;
    border: 2px solid ${colors.DARK_GREY};
    position: relative;
  `}
`;

interface InnerAxisProps {
  orientation: "vertical" | "horizontal";
}

export const InnerAxis = styled.div<InnerAxisProps>`
  ${({ orientation, theme: { colors } }) => css`
    height: ${orientation === "vertical" ? "100%" : "2px"};
    width: ${orientation === "vertical" ? "2px" : "100%"};
    background-color: ${colors.LIGHT_GREY};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

interface AxisLabelProps {
  axis: "x" | "y";
}

export const AxisLabel = styled.div<AxisLabelProps>`
  ${({ axis }) => css`
    font-family: sans-serif;
    font-size: 13px;
    position: absolute;
    left: 0;
    bottom: 0;
    writing-mode: ${axis === "x" ? "unset" : "vertical-lr"};
    transform: translate(${axis === "x" ? "0, 125%" : "-125%, 0"})
      rotate(${axis === "x" ? "0" : "180deg"});
  `}
`;

interface AreaLabelProps {
  area: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const AreaLabel = styled.div<AreaLabelProps>`
  ${({ area, theme: { colors } }) => css`
    font-size: 14px;
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    padding: 4px 10px;
    border-radius: 4px;
    margin: 6px 0;
    position: absolute;
    bottom: ${area.includes("bottom") && "0"};
    left: ${area.includes("left") && "25%"};
    right: ${area.includes("right") && "25%"};
    transform: translateX(${area.includes("left") ? "-50%" : "50%"});
  `}
`;

const Chart = () => {
  const { state } = useAppStore();
  const { data } = state;

  return (
    <Container>
      <AxisLabel axis="x">Completeness of vision &#8594;</AxisLabel>
      <AxisLabel axis="y">Ability to execute &#8594;</AxisLabel>
      <InnerAxis orientation="horizontal" />
      <InnerAxis orientation="vertical" />
      <AreaLabel area="top-left">Challengers</AreaLabel>
      <AreaLabel area="top-right">Leaders</AreaLabel>
      <AreaLabel area="bottom-left">Niche Players</AreaLabel>
      <AreaLabel area="bottom-right">Visionaries</AreaLabel>
      {data?.map((item: Item) => (
        <Point
          key={item.id}
          id={item.id}
          label={item.label}
          vision={item.vision}
          ability={item.ability}
        />
      ))}
    </Container>
  );
};

export default memo(Chart);
