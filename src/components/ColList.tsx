import styled from "styled-components";
import { Col } from "./Col";
import { TCol } from "./types/types";
import { useState } from "react";

type TColListProps = {
  items: TCol[];
};

export const ColList = ({ items }: TColListProps) => {
  const [cols, setCols] = useState<TCol[]>(items);

  const onChangeCol = (col: TCol) => {
    const hexCodes = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    const newColor = "#" + color;

    return setCols((cols) =>
      cols.map((el) => (el.id === col.id ? { ...el, color: newColor } : el))
    );
  };

  // const onChangeCol = (newColor: string, col: TCol) => {
  //   generateColor();

  //   return setCols((cols) =>
  //     cols.map((el) => (el.id === col.id ? { ...el, newColor } : el))
  //   );
  // };

  const onLockCol = (col: TCol) => {
    if ((col.isLocked = false)) {
      // return setCols((prev) =>
      //   prev.map((el) =>
      //    )
      // );
      return console.log(col);
    }
  };

  return (
    <ColContainer>
      {cols.map((col, index) => (
        <Col
          key={index}
          {...col}
          color={col.color}
          id={col.id}
          isLocked={col.isLocked}
          onChangeCol={() => onChangeCol(col)}
          onLockCol={() => onLockCol(col)}
        />
      ))}
    </ColContainer>
  );
};

const ColContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
