import styled from "styled-components";
import { Col } from "./Col";
import { TCol } from "./types/types";

type TColListProps = {
  cols: TCol[];
};

export const ColList = ({ cols }: TColListProps) => {
  // const generateColor = () => {
  //   const hexCodes = "0123456789ABCDEF";
  //   let color = "";
  //   for (let i = 0; i < 6; i++) {
  //     color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  //   }
  //   const newColor = "#" + color;
  // };

  const onChangeCol = (col: any) => {
    return console.log(col);
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
