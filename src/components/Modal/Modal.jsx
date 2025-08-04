import styles from "./Modal.module.css";
import { getRankDisplayHtml } from "../../pages/UserHomePage/DashboardSection/DashboardSection";
import { getOpGgLink } from "../../pages/UserHomePage/Finder/Finder";


const Modal = ({ buddy, onClose }) => {
  if (!buddy) return null;

  const opggLink = getOpGgLink(buddy.riotId, buddy.lolRegion);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalHeader}>
          <h3>
            {buddy.riotId}
            <a
              href={opggLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.opggLink}
            >
              <img src={require("../../images/opgg.png")} alt="OP.GG" />
            </a>
          </h3>
          {getRankDisplayHtml(buddy.rank)}
        </div>
        <div className={styles.modalBody}>
          <p>
            <strong>Черга:</strong> {buddy.queueType || "N/A"}
          </p>
          <p>
            <strong>Позиція:</strong> {buddy.lane || "N/A"}
          </p>
          <p>
            <strong>Опис:</strong> {buddy.description || "Без опису"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;