import styled from "styled-components";
import { TCol } from "./types/types";
import React from "react";

type TColoumnFC = TFunctionType & TCol;
type TFunctionType = {
  onChangeCol: (col: any) => void;
  onLockCol: (col: any) => void;
};

export const Col: React.FC<TColoumnFC> = ({
  color,
  id,
  onChangeCol,
  onLockCol,
}) => {
  const [lock, setLock] = React.useState(false);

  const onLockOpen = () => {
    setLock(!lock);
    // onLockCol();
  };

  return (
    <Coloumn bgColor={color} onClick={onChangeCol}>
      <h1>{color}</h1>
      <p>{id}</p>
      <LockOpenBtn onClick={onLockOpen}>
        <img src={lock ? "../../lock.svg" : "../../open.svg"} />
      </LockOpenBtn>
    </Coloumn>
  );
};
const Coloumn = styled.div<{ bgColor: string }>`
  display: coloumn;
  width: 25%;
  background-color: ${(p) => p.bgColor};
`;

const LockOpenBtn = styled.button`
  all: unset;
  img {
    min-width: 50px;
  }
`;
