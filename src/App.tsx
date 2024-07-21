import styled from "styled-components";
import { ColList } from "./components/ColList";
import { useState } from "react";
import { TCol } from "./components/types/types";
import items from "./components/items.json";

export const App = () => {
  const [cols, setCols] = useState<TCol[]>(items);

  return (
    <Wrap>
      <body>
        <ColList cols={cols} />
      </body>
    </Wrap>
  );
};

const Wrap = styled.div``;
