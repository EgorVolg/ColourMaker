import React from "react";
import { ColList } from "./components/ColList";
import styled from "styled-components";


export const App = () => {
  return (
    <Wrap>
      <ColList />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  font-family: "Madimi One", sans-serif;
`;

 