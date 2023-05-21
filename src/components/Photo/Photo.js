import React from 'react';
import photo from '../../assets/icon.jpg';
import styles from './Photo.module.scss';

function Photo() {
  return (
    <div className={styles.author}>
      <img src={photo} alt="photo" className={styles.photo} />
    </div>
  )
}

export default Photo