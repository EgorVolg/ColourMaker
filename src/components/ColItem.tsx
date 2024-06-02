import React from "react";
import styled from "styled-components";
import { TColList } from "./types";

export const ColItem: React.FC<TColList> = ({
  randomColor,
  onLockOpen,
  isLocked,
}) => {
  return (
    <Col randomColor={randomColor} onClick={onLockOpen}>
      <ColText> {randomColor} </ColText>
      <LockOpenButton
        className={isLocked ? "fa-solid fa-lock-open" : "fa-solid fa-lock"}
      />
    </Col>
  );
};

const Col = styled.div<{ randomColor: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(p) => p.randomColor};
`;

const ColText = styled.h1`
  padding: 20px;
  color: #000000;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    cursor: pointer;
  }
`;

const LockOpenButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  background: transparent;
  font-size: 1.5em;
  padding: 10px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
    border-radius: 25px;
  }
`;
