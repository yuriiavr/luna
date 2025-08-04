import React, { useState, useEffect } from 'react';
import styles from '../UserHomePage.module.css';
import css from './DashboardSection.module.css';

export const getRankDisplayHtml = (rankString) => {
    let tier = 'UNRANKED';
    let division = '';
    let lp = '';

    if (rankString.toUpperCase().includes('UNRANKED')) {
        tier = 'UNRANKED';
    } else {
        const lpMatch = rankString.match(/\((\d+)\s*LP\)/i);
        if (lpMatch && lpMatch[1]) {
            lp = `${lpMatch[1]} LP`;
            rankString = rankString.replace(/\((\d+)\s*LP\)/i, '').trim();
        }

        const rankParts = rankString.split(' ').filter(part => part);
        if (rankParts.length > 0) {
            tier = rankParts[0].toUpperCase();
            if (rankParts.length > 1 && ['I', 'II', 'III', 'IV'].includes(rankParts[1].toUpperCase())) {
                division = rankParts[1].toUpperCase();
            }
            if (['MASTER', 'GRANDMASTER', 'CHALLENGER'].includes(tier)) {
                division = '';
            }
        }
    }

    let imageTier = tier.charAt(0).toUpperCase() + tier.slice(1).toLowerCase();
    if (imageTier.includes('/')) {
        imageTier = imageTier.split('/')[0];
    }
    const imageUrl = require(`../../../images/ranks/${imageTier}.webp`);

    let rankText = tier;
    if (division) {
        rankText += ` ${division}`;
    }

    return (
        <div className={styles.rankDisplay}>
            <img src={imageUrl} alt={`${tier} Rank`} className={styles.rankImage} />
            <div className={styles.rankDetails}>
                <span className={styles.rankTier}>{rankText}</span>
                {lp && <span className={styles.rankLp}>{lp}</span>}
            </div>
        </div>
    );
};

const DashboardSection = ({ currentUserData, onLogout, onStartSearch, backendUrl }) => {
    const [profileDescription, setProfileDescription] = useState(currentUserData?.description || '');
    const [queueType, setQueueType] = useState('Solo/Duo'); // Змінено значення за замовчуванням
    const [lane, setLane] = useState('Top'); // Змінено значення за замовчуванням
    const [saveMessage, setSaveMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const queueOptions = ['Solo/Duo', 'Flex', 'Normal', 'Arena']; // Винесено варіанти черг в масив
    const laneOptions = ['Top', 'Jungle', 'Mid', 'Bot', 'Support']; // Винесено варіанти ліній в масив

    const handleSaveDescription = async () => {
        if (!currentUserData || !currentUserData.puuid) {
            setErrorMessage('Будь ласка, увійдіть, щоб зберегти опис.');
            return;
        }

        setSaveMessage('');
        setErrorMessage('');

        try {
            const response = await fetch(`${backendUrl}/api/profile/description`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    puuid: currentUserData.puuid,
                    description: profileDescription,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                setSaveMessage('Опис успішно збережено!');
                setTimeout(() => setSaveMessage(''), 3000);
            } else {
                setErrorMessage(data.error || 'Помилка при збереженні опису.');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Помилка мережі при збереженні опису.');
        }
    };

    const handleStartSearch = async () => {
        if (!currentUserData || !currentUserData.puuid) {
            return;
        }

        try {
            const response = await fetch(`${backendUrl}/api/start-search`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    puuid: currentUserData.puuid,
                    riotId: currentUserData.fullRiotId,
                    lolRegion: currentUserData.lolRegion,
                    rank: currentUserData.rank,
                    queueType: queueType,
                    lane: lane,
                    description: profileDescription,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                onStartSearch();
            } else {
                alert('Помилка при початку пошуку: ' + (data.error || 'Невідома помилка'));
            }
        } catch (err) {
            console.error(err);
            alert('Помилка мережі при початку пошуку.');
        }
    };

    if (!currentUserData) {
        return <p>Завантаження даних користувача...</p>;
    }

    let displayRegion = currentUserData.lolRegion.toUpperCase();
    if (currentUserData.lolRegion === 'euw1') {
        displayRegion = 'EUW';
    } else if (currentUserData.lolRegion === 'eun1') {
        displayRegion = 'EUNE';
    }

    return (
        <div id="dashboardSection" className={styles.section}>
            <h2 className={css.userName}><strong>{currentUserData.fullRiotId}</strong></h2>
            <div id="profileInfoCard" className={styles.resultCard}>
                <div className={styles.profileStats}>
                    <div className={css.profileStats}>
                        <p>Рівень: <strong>{currentUserData.summonerLevel}</strong></p>
                        <p>Регіон: <strong>{displayRegion}</strong></p>
                    </div>
                </div>
                <p>{getRankDisplayHtml(currentUserData.rank)}</p>

                <div className={css.filterGroup}>
                    {queueOptions.map(option => (
                        <button
                            key={option}
                            className={`${css.filterButton} ${queueType === option ? css.active : ''}`}
                            onClick={() => setQueueType(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className={css.filterGroup}>
                    {laneOptions.map(option => (
                        <button
                            key={option}
                            className={`${css.filterButton} ${lane === option ? css.active : ''}`}
                            onClick={() => setLane(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="profileDescription">Ваш опис:</label>
                    <textarea
                        id="profileDescription"
                        placeholder="Розкажіть про себе (max 250 символів)"
                        maxLength="250"
                        value={profileDescription}
                        onChange={(e) => setProfileDescription(e.target.value)}
                    ></textarea>
                    <button className={css.saveDescBtn} onClick={handleSaveDescription}>Зберегти опис</button>
                    {saveMessage && <p className={styles.successMessage}>{saveMessage}</p>}
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                </div>
            </div>
            <div className={css.dashboardButtons}>
                <button onClick={onLogout} className={css.logOutBtn}>Вийти</button>
                <button onClick={handleStartSearch} className={css.startFinderBtn}>Розпочати пошук</button>
            </div>
        </div>
    );
};

export default DashboardSection;