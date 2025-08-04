import React, { useState, useEffect, useRef } from "react";
import css from "../UserHomePage.module.css";
import { getRankDisplayHtml } from "../DashboardSection/DashboardSection";
import Modal from "../../../components/Modal/Modal";
import { ReactComponent as FilterIcon } from "../../../images/filterBtn.svg";

export const getOpGgLink = (riotId, lolRegion) => {
  if (!riotId || !lolRegion) return "#";
  const parts = riotId.split("#");
  const nickname = parts[0];
  const tagline = parts[1] || "";

  let opggRegion;
  switch (lolRegion) {
    case "euw1":
      opggRegion = "euw";
      break;
    case "eun1":
      opggRegion = "eune";
      break;
    default:
      opggRegion = lolRegion;
  }

  const encodedNickname = encodeURIComponent(nickname);
  const encodedTagline = encodeURIComponent(tagline);
  return `https://op.gg/lol/summoners/${opggRegion}/${encodedNickname}-${encodedTagline}`;
};

const UserCard = ({ buddy, isCurrentUser = false, onCardClick }) => {
  if (!buddy) {
    return null;
  }

  const opggLink = getOpGgLink(buddy.riotId, buddy.lolRegion);
  const userCardClassName = isCurrentUser
    ? `${css.userCard} ${css.currentUserCard}`
    : css.userCard;

  return (
    <div className={userCardClassName} onClick={() => onCardClick(buddy)}>
      <h3>
        {buddy.riotId}
        <a
          href={opggLink}
          target="_blank"
          rel="noopener noreferrer"
          className={css.opggLink}
          title="Переглянути на OP.GG"
          onClick={(e) => e.stopPropagation()}
        ></a>
      </h3>
      <span className={`${css.userDetails} ${css.rankInfoContainer}`}>
        {getRankDisplayHtml(buddy.rank)}
      </span>
      <p className={css.userDetails}>Черга: {buddy.queueType || "N/A"}</p>
      <p className={css.userDetails}>Позиція: {buddy.lane || "N/A"}</p>
      <p className={css.userDescriptionPreview}>
        {buddy.description
          ? buddy.description.length > 50
            ? buddy.description.substring(0, 50) + "..."
            : buddy.description
          : "Без опису"}
      </p>
    </div>
  );
};

const Finder = ({ currentUserData, backendUrl, socket }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBuddy, setModalBuddy] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const sliderRef = useRef(null);

  const handleCardClick = (buddy) => {
    setModalBuddy(buddy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalBuddy(null);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const [currentActiveRegion, setCurrentActiveRegion] = useState(
    currentUserData.lolRegion
  );
  const [queue, setQueue] = useState([]);
  const [filterRank, setFilterRank] = useState("Будь-який ранг");
  const [filterQueueType, setFilterQueueType] = useState("Будь-яка черга");
  const [filterLane, setFilterLane] = useState("Будь-яка лінія");

  const updateSearchQueueUI = async () => {
    try {
      const response = await fetch(
        `${backendUrl}/api/queue/${currentActiveRegion}`
      );
      const buddiesInQueue = await response.json();
      setQueue(buddiesInQueue);
    } catch (error) {
      console.error("Failed to fetch queue:", error);
      setQueue([]);
    }
  };

  useEffect(() => {
    updateSearchQueueUI();
    if (socket) {
      socket.on("queue_updated", () => {
        updateSearchQueueUI();
      });
    }
  }, [currentActiveRegion, socket]);

  const handleStopSearch = async () => {
    if (!currentUserData || !currentUserData.puuid) return;
    try {
      const response = await fetch(`${backendUrl}/api/stop-search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ puuid: currentUserData.puuid }),
      });
      if (response.ok) {
        alert("Пошук зупинено.");
      } else {
        const data = await response.json();
        alert(
          "Помилка при зупинці пошуку: " + (data.error || "Невідома помилка")
        );
      }
    } catch (err) {
      console.error(err);
      alert("Помилка мережі при зупинці пошуку.");
    }
  };

  const currentUserInQueue = queue.find(
    (buddy) => buddy.puuid === currentUserData.puuid
  );

  const filteredBuddies = queue.filter((buddy) => {
    if (buddy.puuid === currentUserData.puuid) return false;
    if (
      filterRank !== "Будь-який ранг" &&
      buddy.rank &&
      !buddy.rank.startsWith(filterRank)
    )
      return false;
    if (
      filterQueueType !== "Будь-яка черга" &&
      buddy.queueType !== filterQueueType
    )
      return false;
    if (filterLane !== "Будь-яка лінія" && buddy.lane !== filterLane)
      return false;
    return true;
  });

  return (
    <div id="searchSection" className={css.section}>
      <div className={css.tabs}>
        <button
          className={`${css.tabButton} ${
            currentActiveRegion === "euw1" ? css.active : ""
          }`}
          onClick={() => setCurrentActiveRegion("euw1")}
        >
          EU West
        </button>
        <button
          className={`${css.tabButton} ${
            currentActiveRegion === "eun1" ? css.active : ""
          }`}
          onClick={() => setCurrentActiveRegion("eun1")}
        >
          EU Nordic & East
        </button>
      </div>

      <div className={css.filtersToggleArea}>
        <button
          className={`${css.toggleFiltersButton} ${
            showFilters ? css.active : ""
          }`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <FilterIcon className={css.filterIcon} />
        </button>
      </div>

      {showFilters && (
        <div
          className={`${css.filtersContainer} ${
            showFilters ? css.filtersContainerVisible : ""
          }`}
        >
          <div className={css.filterGroup}>
            <button
              className={`${css.filterButton} ${
                filterRank === "Будь-який ранг" ? css.active : ""
              }`}
              onClick={() => setFilterRank("Будь-який ранг")}
            >
              Будь-який
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "IRON" ? css.active : ""
              }`}
              onClick={() => setFilterRank("IRON")}
            >
              IRON
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "BRONZE" ? css.active : ""
              }`}
              onClick={() => setFilterRank("BRONZE")}
            >
              BRONZE
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "SILVER" ? css.active : ""
              }`}
              onClick={() => setFilterRank("SILVER")}
            >
              SILVER
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "GOLD" ? css.active : ""
              }`}
              onClick={() => setFilterRank("GOLD")}
            >
              GOLD
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "PLATINUM" ? css.active : ""
              }`}
              onClick={() => setFilterRank("PLATINUM")}
            >
              PLATINUM
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "DIAMOND" ? css.active : ""
              }`}
              onClick={() => setFilterRank("DIAMOND")}
            >
              DIAMOND
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "MASTER" ? css.active : ""
              }`}
              onClick={() => setFilterRank("MASTER")}
            >
              MASTER
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "GRANDMASTER" ? css.active : ""
              }`}
              onClick={() => setFilterRank("GRANDMASTER")}
            >
              GRANDMASTER
            </button>
            <button
              className={`${css.filterButton} ${
                filterRank === "CHALLENGER" ? css.active : ""
              }`}
              onClick={() => setFilterRank("CHALLENGER")}
            >
              CHALLENGER
            </button>
          </div>

          <div className={css.filterGroup}>
            <button
              className={`${css.filterButton} ${
                filterQueueType === "Будь-яка черга" ? css.active : ""
              }`}
              onClick={() => setFilterQueueType("Будь-яка черга")}
            >
              Будь-яка
            </button>
            <button
              className={`${css.filterButton} ${
                filterQueueType === "Solo/Duo" ? css.active : ""
              }`}
              onClick={() => setFilterQueueType("Solo/Duo")}
            >
              Solo/Duo
            </button>
            <button
              className={`${css.filterButton} ${
                filterQueueType === "Flex" ? css.active : ""
              }`}
              onClick={() => setFilterQueueType("Flex")}
            >
              Flex
            </button>
            <button
              className={`${css.filterButton} ${
                filterQueueType === "Normal" ? css.active : ""
              }`}
              onClick={() => setFilterQueueType("Normal")}
            >
              Normal
            </button>
            <button
              className={`${css.filterButton} ${
                filterQueueType === "Arena" ? css.active : ""
              }`}
              onClick={() => setFilterQueueType("Arena")}
            >
              Арена
            </button>
          </div>

          <div className={css.filterGroup}>
            <button
              className={`${css.filterButton} ${
                filterLane === "Будь-яка лінія" ? css.active : ""
              }`}
              onClick={() => setFilterLane("Будь-яка лінія")}
            >
              Будь-яка
            </button>
            <button
              className={`${css.filterButton} ${
                filterLane === "Top" ? css.active : ""
              }`}
              onClick={() => setFilterLane("Top")}
            >
              Top
            </button>
            <button
              className={`${css.filterButton} ${
                filterLane === "Jungle" ? css.active : ""
              }`}
              onClick={() => setFilterLane("Jungle")}
            >
              Jungle
            </button>
            <button
              className={`${css.filterButton} ${
                filterLane === "Mid" ? css.active : ""
              }`}
              onClick={() => setFilterLane("Mid")}
            >
              Mid
            </button>
            <button
              className={`${css.filterButton} ${
                filterLane === "Bot" ? css.active : ""
              }`}
              onClick={() => setFilterLane("Bot")}
            >
              Bot
            </button>
            <button
              className={`${css.filterButton} ${
                filterLane === "Support" ? css.active : ""
              }`}
              onClick={() => setFilterLane("Support")}
            >
              Support
            </button>
          </div>
        </div>
      )}

      <div className={css.searchListContainer}>
        {currentUserInQueue && (
          <div id="currentUserInQueue" className={css.yourSpotCard}>
            <UserCard
              buddy={currentUserInQueue}
              isCurrentUser={true}
              onCardClick={handleCardClick}
            />
          </div>
        )}
        <div
          id="searchQueueList"
          className={css.sliderContainer}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {filteredBuddies.length > 0 ? (
            filteredBuddies.map((buddy) => (
              <UserCard
                key={buddy.puuid}
                buddy={buddy}
                onCardClick={handleCardClick}
              />
            ))
          ) : (
            <div className={css.emptyState}>
              <img
                src={require("../../../images/poroEmpty.jpg")}
                alt="Нікого не знайдено"
                className={css.emptyStateIcon}
              />
              <p className={css.emptyStateText}>Поки що ніхто не шукає...</p>
              <p className={css.emptyStateSubText}>
                Спробуйте змінити фільтри або зачекайте, поки з'являться інші
                гравці.
              </p>
            </div>
          )}
        </div>
      </div>
      {currentUserInQueue && (
        <button onClick={handleStopSearch} className={css.stopSearch}>
          Зупинити пошук
        </button>
      )}

      {isModalOpen && <Modal buddy={modalBuddy} onClose={handleCloseModal} />}
    </div>
  );
};

export default Finder;
