import styles from './ModalInstructions.module.css';
import { useTranslation } from 'react-i18next';

export function ModalInstructions({ isOpen, children }) {
  const { t } = useTranslation();
  
  if (!isOpen) return null;

  return (
    <div className={styles.modalInstructionsOverlay}>
      <div className={styles.modalInstructionsContent}>
        <h1>{t('instructions.welcome')}</h1>
        <p>{t('instructions.description')}</p>
        {children}
      </div>
    </div>
  );
}