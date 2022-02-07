import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Item } from "../../common/Item";
import { useAppStore } from "../../Context";

const StyledPoint = styled.div`
  ${({ theme: { colors } }) => css`
    width: 15px;
    height: 15px;
    background-color: ${colors.DARK_BLUE};
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, 50%);
    cursor: pointer;
  `}
`;

const Label = styled.div`
  ${({ theme: { colors } }) => css`
    font-family: sans-serif;
    font-size: 13px;
    color: ${colors.DARK_BLUE};
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(100%, 100%);
  `}
`;

const Circle = styled.div<any>`
  ${({ isDragging }) => css`
    border: 1px solid black;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    position: absolute;
    left: -17px;
    top: -17px;
    visibility: ${isDragging ? "visible" : "hidden"};
  `};
`;

const Point: React.FC<any> = ({ id, label, vision, ability }: Item) => {
  const [isDragging, setIsDragging] = useState(false);
  const { updateItem, dispatch } = useAppStore();

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    const parent = (
      e.target as HTMLDivElement
    ).parentElement!.getBoundingClientRect();

    const item = {
      id,
      label,
      vision: +((e.clientX - parent.x) / 4).toFixed(2),
      ability: -((e.clientY - parent.y - 400) / 4).toFixed(2),
    };

    dispatch(updateItem(item));
  }, [id, label, vision, ability]);

  return (
    <>
      <StyledPoint
        style={{ left: `${vision}%`, bottom: `${ability}%` }}
        draggable
        onDrag={handleDrag}
        onDragOver={(e) => e.preventDefault()}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <Label>{label}</Label>
        <Circle isDragging={isDragging} />
      </StyledPoint>
    </>
  );
};

export default Point;
