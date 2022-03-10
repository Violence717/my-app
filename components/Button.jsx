import React from 'react'

import styles from '../styles/Button.module.css'

const Button = ({ content, clickAction }) => {
    return (
        <div onClick={clickAction} className={styles.button}><span className={styles.item}>{content}</span></div>
    )
}

export default Button