import React from "react";
import styled from "styled-components";

export const App = () => {
  const [isLocked, setIsLocked] = React.useState(true);
  const [color, setColor] = React.useState("white");
  const [coloumns, setColoumns] = React.useState();

  const generateColor = () => {
    const hexCodes = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return setColor(color = "#" + color);
  };

  const onLockOpen = () => {
    setIsLocked(!isLocked);
  };

  const clickToSpace: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Space") {
      e.preventDefault();
      generateColor()
    }
  };

  return (
    <Wrap onKeyDown={clickToSpace}>
      <ColListWrap>
        <Col bgcolor={setColor}>
          <ColText>{setColor} </ColText>
          <LockOpenButton
            className={isLocked ? "fa-solid fa-lock-open" : "fa-solid fa-lock"}
            onClick={onLockOpen}
          />
        </Col>
        ;
      </ColListWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  font-family: "Madimi One", sans-serif;
`;

const ColListWrap = styled.div`
  display: flex;
  width: 100vw;
`;

const Col = styled.div<{ bgcolor: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(p) => p.bgcolor};
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
