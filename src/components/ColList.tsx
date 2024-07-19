import styled from "styled-components";
import { Col } from "./Col";
import { TCol } from "./types/types";

type TColList = {
  cols: TCol[];
};

export const ColList: React.FC<TColList> = ({ cols }) => {
  return (
    <ColContainer>
      {cols.map((col, index) => (
        <Col
          key={index}
          color={col.color}
          id={col.id}
          isLocked={col.isLocked}
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
