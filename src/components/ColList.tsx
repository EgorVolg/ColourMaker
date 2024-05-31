import React, { useState } from "react";
import styled from "styled-components";
// import { ColItems } from "./ColItems";

export const ColList = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [randomColor, setRandomColor] = useState(false);

  const onLockOpen = () => {
    setIsLocked(!isLocked);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter") {
      generateColour();
    }
  };

  const generateColour = () => {
    const hexCodes = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return ( color = "#" + color);
  };

  return (
    <div>
      <Col
        onKeyDown={handleKeyDown}
        // style={{ backgroundColor: `${color}` }}
      >
        <ColText>{  } </ColText>
        <LockOpenButton
          onClick={onLockOpen}
          className={isLocked ? "fa-solid fa-lock-open" : "fa-solid fa-lock"}
        ></LockOpenButton>
      </Col>
    </div>
  );
};

const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ;
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
