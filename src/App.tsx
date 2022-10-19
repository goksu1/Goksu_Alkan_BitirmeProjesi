import React, { FC } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterPage from "./pages/Register";
import BoardPage from "./pages/Board";
import CardPage from "./components/Card";
import KanbanListPage from "./components/KanbanList";
import ChangePassword from "./pages/ChangePassword";
import { NavbarProps } from "./components/Navbar/Navbar.types";
import {
  LoginProvider,
  useLoginContext,
} from "./contexts/LoginContext/LoginContext";
import { KanbanProvider } from "./contexts/KanbanContext/KanbanContext";
import BoardMemberDetail from "./components/BoardMemberDetail";

const NavbarContainer: FC<NavbarProps> = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const App = () => {
  const { isLoggedIn } = useLoginContext();
  return (
    <LoginProvider>
      <KanbanProvider>
        <Router>
          <Routes>
            <Route element={<NavbarContainer />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/change-password" element={<ChangePassword />} />
              {isLoggedIn ? (
                <>
                <Route path="/board" element={<BoardPage />} />
                <Route path="/kanbanlist" element={<KanbanListPage />} />
                <Route path="/card" element={<CardPage />} />
                <Route path="/board-member" element={<BoardMemberDetail />} />
                </>
              ) : null}
            </Route>
          </Routes>
        </Router>
      </KanbanProvider>
    </LoginProvider>
  );
};

export default App;
