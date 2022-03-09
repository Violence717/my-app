import React, { useState } from 'react'

import styles from '../styles/Input.module.css'

const Input = () => {
    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" name="checkbox" />
        </label>
    )
}

export default Input