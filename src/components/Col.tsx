import styled from "styled-components";
import { TCol } from "./types/types";
import { useState } from "react";

export const Col = ({ color, id, isLocked }: TCol) => {
  const [lock, setLock] = useState(isLocked)

  const onClickOpen = () => {
    setLock(!lock)
  }

  return (
    <Coloumn bgColor={color}>
      <h1>{color}</h1>
      <p>{id}</p>
      <button onClick={onClickOpen}>open</button>
    </Coloumn>
  );
};
const Coloumn = styled.div<{ bgColor: string }>`
  display: coloumn;
  width: 25%;
  background-color: ${(p) => p.bgColor};
`;
