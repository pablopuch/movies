import React from 'react'
import { ImSpinner  } from 'react-icons/im';
import styles from './spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
        <ImSpinner className={styles.spinnerRun} size={60}/>
    </div>
  )
}

export default Spinner