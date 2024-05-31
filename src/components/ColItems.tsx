import React from "react";
import styled from "styled-components";

export const ColItems = () => {
  return (
    <Col>
      <ColText data-type="copy">text</ColText>
      <LockOpenButton data-type="lock">
        <i className="fa-solid fa-lock-open" data-type="lock"></i>
      </LockOpenButton>
    </Col>
  );
};

const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
