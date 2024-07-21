import styled from "styled-components";
import { ColList } from "./components/ColList";
import items from "./components/items.json";

export const App = () => {
  return (
    <Wrap>
      <body>
        <ColList items={items} />
      </body>
    </Wrap>
  );
};

const Wrap = styled.div``;
