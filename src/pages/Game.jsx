import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import { Field } from "../components/Field";
import { Formation433 } from "../components/Formation433";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { ModalInstructions } from '../components/ModalInstructions';
import { ModalResults } from '../components/ModalResults';
import styles from './Game.module.css';

export function Game() {
    const { t } = useTranslation(); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalInstructionsOpen, setModalInstructionsOpen] = useState(true);
    const [isResultsModalOpen, setResultsModalOpen] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [players, setPlayers] = useState({});
    const [playerName, setPlayerName] = useState('');

    const positionTranslationMap = {
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

    const playerCount = Object.keys(players).filter(key => players[key] !== '').length;

    useEffect(() => {
        if (playerCount === 11) {
            setResultsModalOpen(true);
        }
    }, [playerCount]);

    const handlePlayerClick = (playerPosition) => {
        setSelectedPlayer(playerPosition);
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayers(prev => ({
            ...prev,
            [selectedPlayer]: playerName
        }));
        setPlayerName('');
        setIsModalOpen(false);
    };

    const handleRestartGame = () => {
        setPlayers({}); 
        setResultsModalOpen(false); 
        setModalInstructionsOpen(true); 
    };

    return (
        <div className={styles.gameContainer}>
            <Header className={styles.headerCustom} />
            
            <div className={styles.fieldWrapper}>
                <Field count={playerCount}></Field>
                <Formation433 onPlayerClick={handlePlayerClick} players={players} />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p style={{ fontSize: '1rem' }}>
                    {t('modal.choosePlayer', { 
                        position: t(`positions.${positionTranslationMap[selectedPlayer]}`) 
                    })}
                </p>
                <form onSubmit={handleSubmit} className={styles.formModalContainer}>
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder={t('modal.playerPlaceholder')}
                    />
                    <button type="submit">{t('modal.submit')}</button>
                </form>
            </Modal>

            <ModalInstructions isOpen={isModalInstructionsOpen}>
                <button onClick={() => setModalInstructionsOpen(false)}>
                    {t('modal.start')}
                </button>
            </ModalInstructions>

            <ModalResults 
                isOpen={isResultsModalOpen} 
                players={players} 
                onClose={() => setResultsModalOpen(false)}
                onRestart={handleRestartGame}
            />
        </div>
    );
}