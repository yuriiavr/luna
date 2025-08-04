// App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import News from "./pages/News/News";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import AboutPage from "./pages/AboutPage/About";
import LorePage from "./pages/LorePage/LorePage";
import LoreArticlePage from "./pages/LoreArticlePage/LoreArticlePage";
import CyberPage from "./pages/CyberPage/CyberPage";
import CyberArticlePage from "./pages/CyberArticlePage/CyberArticlePage";
import PatchPage from "./pages/PatchPage/PatchPage";
import { useState, useEffect } from "react";
import React from "react";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AdditionalPage from "./pages/AdditionalPage/AdditionalPage";
import AdditionalArticlePage from "./pages/AdditionalArticlePage/AdditionalArticlePage";
import ReactGA from "react-ga";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { FindTeammates } from "./pages/FindTeammates/FindTeammates";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/auth/operations";
import { useAuth } from "./hooks/useAuth";
import { AdminPanel } from "./pages/AdminPanel/AdminPanel";
export const ThemeContext = React.createContext(true);

function App() {
  const TRACKING_ID = "G-P2ZS1WJNLC";
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const [theme, setTheme] = useState(false);

  return isRefreshing ? (
    <b>Refreshing user....</b>
  ) : (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/post/:postId" element={<ArticlePage />} />
        <Route path="/faq" element={<AboutPage />} />
        <Route path="/lore" element={<LorePage />} />
        <Route path="/lore/:postId" element={<LoreArticlePage />} />
        <Route path="/cyber" element={<CyberPage />} />
        <Route path="/cyber/:postId" element={<CyberArticlePage />} />
        <Route path="/patch" element={<PatchPage />} />
        <Route path="/additionalinfo" element={<AdditionalPage />} />
        <Route
          path="/additionalinfo/:postId"
          element={<AdditionalArticlePage />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LogIn />
            </RestrictedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute>
              <SignUp />
            </RestrictedRoute>
          }
        />
        <Route
          path="/userhomepage"
          element={
            <ProtectedRoute>
              <UserHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/findteammates"
          element={
            <ProtectedRoute>
              <FindTeammates />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;