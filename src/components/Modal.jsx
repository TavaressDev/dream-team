import styles from './Modal.module.css';

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}