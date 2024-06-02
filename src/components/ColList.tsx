import React from "react";
import styled from "styled-components";
import { ColItem } from "./ColItem";

export const ColList = () => {
  const [randomColor, setRandomColor] = React.useState("#fff");
  const [isLocked, setIsLocked] = React.useState(true);

  const hexCodes = "0123456789ABCDEF";
  let color = "";

  const generateColor = () => {
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return "#" + color;
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setRandomColor(generateColor());
    }
  };
  

  const onLockOpen = () => {
    setIsLocked(!isLocked);
  };

  return (
    <ColListWrap onKeyDown={handleKeyDown}>
      <Col randomColor={randomColor}>
        <ColText> {randomColor} </ColText>
        <LockOpenButton
          onClick={onLockOpen}
          className={isLocked ? "fa-solid fa-lock-open" : "fa-solid fa-lock"}
      
        />
      </Col>
      <ColItem
        randomColor={randomColor}
        onLockOpen={onLockOpen}
        isLocked={isLocked}
      />
    </ColListWrap>
  );
};

const ColListWrap = styled.div`
  display: flex;
  width: 100vw;
`;

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
