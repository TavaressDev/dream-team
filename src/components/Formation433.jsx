import styles from './Formation433.module.css';
import { useTranslation } from 'react-i18next';

export function Formation433({ onPlayerClick, players }) {
    const { t } = useTranslation();
    
    const getPlayerClass = (position) =>
        `${styles.player} ${!players[position] ? styles.emptyPlayer : ''}`;

    const translatePosition = (position) => {
        const positionMap = {
            'atacante 1': 'fw1',
            'atacante 2': 'fw2',
            'atacante 3': 'fw3',
            'meia 1': 'mid1',
            'meia 2': 'mid2',
            'meia 3': 'mid3',
            'lateral 1': 'def1',
            'zagueiro 1': 'def2',
            'zagueiro 2': 'def3',
            'lateral 2': 'def4',
            'goleiro': 'gk1'
        };
        return t(`positions.${positionMap[position]}`);
    };

    return (
        <div className={styles.formationOverlay}>
            <div className={styles.attackLine}>
                <div 
                    className={getPlayerClass('atacante 1')} 
                    onClick={() => onPlayerClick('atacante 1')}
                    title={translatePosition('atacante 1')}
                >
                    {players['atacante 1'] || '+'}
                </div>
                <div 
                    className={getPlayerClass('atacante 2')} 
                    onClick={() => onPlayerClick('atacante 2')}
                    title={translatePosition('atacante 2')}
                >
                    {players['atacante 2'] || '+'}
                </div>
                <div 
                    className={getPlayerClass('atacante 3')} 
                    onClick={() => onPlayerClick('atacante 3')}
                    title={translatePosition('atacante 3')}
                >
                    {players['atacante 3'] || '+'}
                </div>
            </div>

            <div className={styles.midfieldLine}>
                <div 
                    className={getPlayerClass('meia 1')} 
                    onClick={() => onPlayerClick('meia 1')}
                    title={translatePosition('meia 1')}
                >
                    {players['meia 1'] || '+'}
                </div>
                <div 
                    className={getPlayerClass('meia 2')} 
                    onClick={() => onPlayerClick('meia 2')}
                    title={translatePosition('meia 2')}
                >
                    {players['meia 2'] || '+'}
                </div>
                <div 
                    className={getPlayerClass('meia 3')} 
                    onClick={() => onPlayerClick('meia 3')}
                    title={translatePosition('meia 3')}
                >
                    {players['meia 3'] || '+'}
                </div>
            </div>

            <div className={styles.defenseLine}>
                <div 
                    className={getPlayerClass('lateral 1')} 
                    onClick={() => onPlayerClick('lateral 1')}
                    title={translatePosition('lateral 1')}
                >
                    {players['lateral 1'] || '+'}
                </div>
                <div 
                    className={getPlayerClass('zagueiro 1')} 
                    onClick={() => onPlayerClick('zagueiro 1')}
                    title={translatePosition('zagueiro 1')}
                >
                    {players['zagueiro 1'] || '+'}
                </div>
                <div 
                    className={getPlayerClass('zagueiro 2')} 
                    onClick={() => onPlayerClick('zagueiro 2')}
                    title={translatePosition('zagueiro 2')}
                >
                    {players['zagueiro 2'] || '+'}
                </div>
                <div 
                    className={getPlayerClass('lateral 2')} 
                    onClick={() => onPlayerClick('lateral 2')}
                    title={translatePosition('lateral 2')}
                >
                    {players['lateral 2'] || '+'}
                </div>
            </div>

            <div className={styles.goalkeeper}>
                <div 
                    className={getPlayerClass('goleiro')} 
                    onClick={() => onPlayerClick('goleiro')}
                    title={translatePosition('goleiro')}
                >
                    {players['goleiro'] || '+'}
                </div>
            </div>
        </div>
    );
}