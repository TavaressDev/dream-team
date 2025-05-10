import styles from './ModalResults.module.css';
import { useTranslation } from 'react-i18next';

export function ModalResults({ isOpen, players }) {
    const { t } = useTranslation();
    
    if (!isOpen) return null;

    const formatPlayerName = (name) => {
        return name.replace(/\s+/g, '+');
    };

    const handleRestart = () => {
        window.location.reload();
    };

    const positionOrder = [
        'goleiro',
        'lateral 1',
        'zagueiro 1',
        'zagueiro 2',
        'lateral 2',
        'meia 1',
        'meia 2',
        'meia 3',
        'atacante 1',
        'atacante 2',
        'atacante 3'
    ];

    const positionMap = {
        'goleiro': 'gk1',
        'lateral 1': 'def1',
        'zagueiro 1': 'def2',
        'zagueiro 2': 'def3',
        'lateral 2': 'def4',
        'meia 1': 'mid1',
        'meia 2': 'mid2',
        'meia 3': 'mid3',
        'atacante 1': 'fw1',
        'atacante 2': 'fw2',
        'atacante 3': 'fw3'
    };

    const translatePosition = (position) => {
        return t(`positions.${positionMap[position]}`);
    };

    const sortedPlayers = positionOrder
        .filter(position => players[position]) 
        .map(position => ({
            position,
            name: players[position]
        }));

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{t('modalTitle')}</h2>
                <p>{t('modalSubtitle')}</p>
                <ul className={styles.playersList}>
                    {sortedPlayers.map(({ position, name }) => (
                        <li key={position}>
                            <a 
                                href={`https://www.youtube.com/results?search_query=${formatPlayerName(name)}+skills`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {name} ({translatePosition(position)})
                            </a>
                        </li>
                    ))}
                </ul>
                <button onClick={handleRestart} className={styles.restartButton}>
                    {t('restartButton')}
                </button>
            </div>
        </div>
    );
}