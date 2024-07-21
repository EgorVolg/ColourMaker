import styled from "styled-components";
import { TCol } from "./types/types";

type TColoumnFC = TFunctionType & TCol;
type TFunctionType = {
  onChangeCol: (col: any) => void;
  // : (isLocked: boolean) => void;
};

export const Col: React.FC<TColoumnFC> = ({ color, id, onChangeCol }) => {
  return (
    <Coloumn bgColor={color} onClick={onChangeCol}>
      <h1>{color}</h1>
      <p>{id}</p>
      <button>open</button>
    </Coloumn>
  );
};
const Coloumn = styled.div<{ bgColor: string }>`
  display: coloumn;
  width: 25%;
  background-color: ${(p) => p.bgColor};
`;
