import styles from './Flags.module.css';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export function Flags() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.flagsWrapper}>
      <h2 className={styles.textPickLanguage}>
        Escolhe o seu idioma/Pick your language
      </h2>

      <div className={styles.flagsContainer}>
        <Link 
          onClick={() => changeLanguage('pt')} 
          to="/game" 
          className={styles.brazilFlag}
        >
          <img draggable="false" src="/assets/brazil-flag.svg" alt="Bandeira do Brasil" />
          <h1>{t('portugues')}</h1>
        </Link>

        <Link 
          onClick={() => changeLanguage('en')} 
          to="/game" 
          className={styles.usaFlag}
        >
          <img draggable="false" src="/assets/usa-flag.svg" alt="Bandeira dos EUA" />
          <h1>{t('english')}</h1>
        </Link>
      </div>
    </div>
  );
}