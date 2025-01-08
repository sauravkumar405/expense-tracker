import React, { useState, useMemo } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
// import { createStore } from 'redux'
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Income from "./components/Income";
import Expense from "./components/Expense";
import store from './redux/store'
// import { useGlobalContext } from "./context/globalContext";
// import rootReducer  from "./reducers/reducers";

function App() {
  const [active, setActive] = useState(1);
  // const { addIncome } = useGlobalContext();
  // const store = createStore(rootReducer);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  
  const initialState = {
    incomes: [],
    expenses: [],
    error: '',
    totalIncomes: 0,
    totalExpenses: 0,
    totalBalance: 0
  }

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          <Provider store = {store}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Navigate to="/" replace />} />
              <Route path="/expenses" element={<Expense />} />
              <Route path="/incomes" element={<Income />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Provider>
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
