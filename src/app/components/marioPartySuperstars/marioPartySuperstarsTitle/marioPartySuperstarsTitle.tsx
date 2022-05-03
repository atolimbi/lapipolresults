import { Typography } from '@mui/material';
import styles from './marioPartySuperstarsTitle.module.css';

function MarioPartySuperstarsTitle() {
  return (
    <div className={styles.mpsTitle}>
      <Typography
        sx={{ fontFamily: 'monospace', fontSize: '2rem', display: 'inline' }}
      >
        <span className={styles.mpsTitle__m}>M</span>
        <span className={styles.mpsTitle__a}>A</span>
        <span className={styles.mpsTitle__r}>R</span>
        <span className={styles.mpsTitle__i}>I</span>
        <span className={styles.mpsTitle__o}>O</span>
      </Typography>
      <span> - </span>
      <span> Superstars </span>
    </div>
  );
}

export default MarioPartySuperstarsTitle;
