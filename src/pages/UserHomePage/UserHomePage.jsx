import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import DashboardSection from "./DashboardSection/DashboardSection";
import Finder from "./Finder/Finder";
import styles from "./UserHomePage.module.css";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

const BACKEND_BASE_URL = "https://lol-prog-back.onrender.com";
let socket = null;

const UserHomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [activeSection, setActiveSection] = useState("login");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [riotId, setRiotId] = useState("");
  const [lolPlatformRegion, setLolPlatformRegion] = useState("euw1");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedRiotId = localStorage.getItem("riotId");
    const storedRegion = localStorage.getItem("lolPlatformRegion");

    if (storedRiotId && storedRegion) {
      setRiotId(storedRiotId);
      setLolPlatformRegion(storedRegion);

      handleLogin(storedRiotId, storedRegion);
    }

    socket = io(BACKEND_BASE_URL);

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected to WebSocket server");
      });

      socket.on("queue_updated", () => {
        console.log("Queue updated from socket");
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from WebSocket server");
      });

      socket.on("connect_error", (error) => {
        console.error("Socket connection error:", error);
      });
    }
  }, [isLoggedIn, activeSection]);

  const handleLogin = async (id = riotId, region = lolPlatformRegion) => {
    setLoginErrorMessage("");
    setIsLoading(true);
    if (!id) {
      setLoginErrorMessage("Будь ласка, введіть ваш Riot ID.");
      setIsLoggedIn(false);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          riotId: id,
          lolPlatformRegion: region,
          rememberMe: true, // Завжди передаємо 'true' на бекенд
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setCurrentUserData(data);
        setIsLoggedIn(true);
        setActiveSection("dashboard");
        // Завжди зберігаємо дані в localStorage
        localStorage.setItem("riotId", id);
        localStorage.setItem("lolPlatformRegion", region);
      } else {
        setLoginErrorMessage(data.error || "Невідома помилка логіну.");
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.error(err);
      setLoginErrorMessage(
        "Помилка мережі при логіні. Перевірте підключення або спробуйте пізніше."
      );
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("riotId");
    localStorage.removeItem("lolPlatformRegion");
    localStorage.removeItem("profileDescription");
    setCurrentUserData(null);
    setIsLoggedIn(false);
    setRiotId("");
    setLolPlatformRegion("euw1");
    setActiveSection("login");
  };

  const renderContent = () => {
    if (isLoading) {
       return <Loader />;
    }

    if (!isLoggedIn) {
      return (
        <div id="loginSection" className={styles.section}>
          <div className={styles.formGroup}>
            <label htmlFor="riotId">Ваш Riot ID:</label>
            <input
              type="text"
              id="riotId"
              value={riotId}
              onChange={(e) => setRiotId(e.target.value)}
              placeholder="наприклад, Summoner#EUW1"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.tabButtons}>
              <button
                className={`${styles.tabButton} ${
                  lolPlatformRegion === "euw1" ? styles.active : ""
                }`}
                onClick={() => setLolPlatformRegion("euw1")}
              >
                EU West
              </button>
              <button
                className={`${styles.tabButton} ${
                  lolPlatformRegion === "eun1" ? styles.active : ""
                }`}
                onClick={() => setLolPlatformRegion("eun1")}
              >
                EU Nordic & East
              </button>
            </div>
          </div>
          {/* Кнопку "Запам'ятати мене" видалено */}
          <button className={styles.button} onClick={() => handleLogin()}>
            Увійти
          </button>
          {loginErrorMessage && (
            <p className={styles.errorMessage}>{loginErrorMessage}</p>
          )}
        </div>
      );
    }

    if (activeSection === "dashboard") {
      return (
        <DashboardSection
          currentUserData={currentUserData}
          onLogout={handleLogout}
          onStartSearch={() => setActiveSection("search")}
          backendUrl={BACKEND_BASE_URL}
        />
      );
    }

    if (activeSection === "search") {
      return (
        <Finder
          currentUserData={currentUserData}
          backendUrl={BACKEND_BASE_URL}
          socket={socket}
        />
      );
    }

    return null;
  };

  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.container}>
        {isLoggedIn && (
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabButton} ${
                activeSection === "dashboard" ? styles.active : ""
              }`}
              onClick={() => setActiveSection("dashboard")}
            >
              Особистий кабінет
            </button>
            <button
              className={`${styles.tabButton} ${
                activeSection === "search" ? styles.active : ""
              }`}
              onClick={() => setActiveSection("search")}
            >
              Пошук
            </button>
          </div>
        )}
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default UserHomePage;
