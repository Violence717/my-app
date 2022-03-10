import React, { useState } from 'react'

import styles from '../styles/Checkbox.module.css'

const Checkbox = ({ checked, changeAction }) => {
    return (
        <label className={styles.label}>
            <input checked={checked} onChange={changeAction} className={styles.checkbox} type="checkbox" name="checkbox" />
        </label>
    )
}

export default Checkbox