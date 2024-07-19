import styled from "styled-components";
import { ColList } from "./components/ColList";
import React, { useState } from "react";
import * as items from "./components/items.json";
import { TCol } from "./components/types/types";

export const App: React.FC = () => {
  const [cols, setCols] = useState<TCol[]>(items);
  
  const generateColor = () => {
    const hexCodes = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    const newColor = "#" + color;
    return newColor;
  };
  // const onChangeCol = (col: TCol) => {
  //   if (col.isLocked === false) {
  //     generateColor();
  //     const changeColor = () => {
  //       return setCols((prevCols) =>
  //         prevCols.map((el) => (el.id === col.id ? { ...el, color } : el))
  //       );
  //     };
  //     return changeColor();
  //   }
  // };

  return (
    <Wrap>
      <body>
        <ColList cols={cols} />
      </body>
    </Wrap>
  );
};

const Wrap = styled.div``;
