import styles from './Field.module.css';

export function Field({count, children}) {
    const counterClass = count === 11 ? styles.playerCounterTextComplete : styles.playerCounterTextIncomplete;
    
    return (
        <div className={styles.fieldContainer}>
            <div className={styles.atackContainer}></div>

            <div className={styles.playerCounter}>
                <h1 className={counterClass}>{count}/11</h1>
                {children}
            </div>
            
            <div className={styles.defContainer}>
                <div className={styles.circleContainer}></div>
                <div className={styles.areaContainer}>
                    <div className={styles.areaContainer2}></div>
                </div>
            </div>
        </div>
        
    )
}