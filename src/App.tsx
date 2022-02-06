import React from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyles";
import Chart from "./components/Chart";
import Table from "./components/Table";

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Container>
          <Chart />
          <Table />
        </Container>
      </AppWrapper>
    </>
  );
}

export default App;
